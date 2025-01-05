#!/bin/bash

# Criar o arquivo .env se não existir
if [ ! -f .env ]; then
    echo "Criando arquivo .env a partir de .env.example"
    cp .env.example .env
else
    echo "Arquivo .env já existe. Pulando a criação."
fi

# Atualizar variáveis de ambiente no .env
echo "Atualizando variáveis de ambiente no .env"
sed -i -e "/FRONTEND_URL/ s/=.*/=https:\/\/$CODESPACE_NAME-3000.githubpreview.dev/" .env
sed -i -e "/WEBPACKER_DEV_SERVER_PUBLIC/ s/=.*/=https:\/\/$CODESPACE_NAME-3035.githubpreview.dev/" .env
sed -i -e '/REDIS_URL/ s/=.*/=redis:\/\/localhost:6379/' .env
sed -i -e '/POSTGRES_HOST/ s/=.*/=localhost/' .env
sed -i -e '/SMTP_ADDRESS/ s/=.*/=localhost/' .env

# Carregar variáveis do .env
echo "Carregando variáveis do .env"
set -a
source .env
set +a

# Validar se o GITHUB_REPOSITORY_OWNER está definido no .env
if [ -z "$GITHUB_REPOSITORY_OWNER" ]; then
    echo "Erro: GITHUB_REPOSITORY_OWNER não está definido no arquivo .env!"
    echo "Adicione GITHUB_REPOSITORY_OWNER=<seu_owner> ao arquivo .env e tente novamente."
    exit 1
fi

# Determinar a TAG a partir da branch atual
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD | tr '/' '-')
TAG=${TAG:-$CURRENT_BRANCH}

# Fallback para 'latest' se a TAG estiver vazia
if [ -z "$TAG" ]; then
    TAG="latest"
fi

# Log dos valores usados
echo "Valores utilizados:"
echo "GITHUB_REPOSITORY_OWNER: $GITHUB_REPOSITORY_OWNER"
echo "TAG: $TAG"

# Adicionar TAG ao .env
sed -i -e "/^TAG=/d" .env
echo "TAG=$TAG" >> .env

# Garantir que o arquivo foi criado corretamente
if [ -f .env ]; then
    echo ".env criado/atualizado com sucesso:"
    cat .env
else
    echo "Erro: .env não foi criado ou atualizado!"
    exit 1
fi

# Verificar se a imagem base está disponível
echo "Verificando se a imagem base está disponível..."
if ! docker inspect --type=image ghcr.io/${GITHUB_REPOSITORY_OWNER}/chatwoot_codespace:${TAG} > /dev/null 2>&1; then
    echo "Erro: A imagem base ghcr.io/${GITHUB_REPOSITORY_OWNER}/chatwoot_codespace:${TAG} não foi encontrada!"
    exit 1
fi

# Validar configuração do Docker Compose
echo "Validando configuração do Docker Compose"
docker compose -f .devcontainer/docker-compose.yml config || {
    echo "Erro na configuração do Docker Compose!"
    exit 1
}

echo "Setup concluído com sucesso!"
