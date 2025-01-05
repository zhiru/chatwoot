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

# Determinar a TAG da branch atual
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD | tr '/' '-')

# Obter o nome completo do repositório remoto (owner/repo)
REPO_FULL_NAME=$(git remote get-url origin | sed -nE 's#https://[^/]+/([^/]+/[^/]+)#\1#p')

# Log dos valores originais
echo "Valores originais (antes de definir padrões):"
echo "REPO_FULL_NAME (nome completo do repositório): ${REPO_FULL_NAME}"
echo "TAG (branch atual): ${CURRENT_BRANCH}"

# Definir valores padrão para GITHUB_REPOSITORY_OWNER e TAG
GITHUB_REPOSITORY_OWNER=${GITHUB_REPOSITORY_OWNER:-$(echo $REPO_FULL_NAME | cut -d'/' -f1)}
TAG=${TAG:-$CURRENT_BRANCH}

# Fallback para latest se a TAG estiver vazia
if [ -z "$TAG" ]; then
    TAG="latest"
fi

# Log dos valores usados
echo "Valores utilizados:"
echo "GITHUB_REPOSITORY_OWNER: $GITHUB_REPOSITORY_OWNER"
echo "TAG: $TAG"

# Adicionar GITHUB_REPOSITORY_OWNER e TAG ao .env
echo "Adicionando GITHUB_REPOSITORY_OWNER e TAG ao .env"
echo "GITHUB_REPOSITORY_OWNER=$GITHUB_REPOSITORY_OWNER" >> .env
echo "TAG=$TAG" >> .env

# Garantir que o arquivo foi criado corretamente
if [ -f .env ]; then
    echo ".env criado com sucesso:"
    cat .env
else
    echo "Erro: .env não criado!"
    exit 1
fi

# Validar se a imagem base está disponível
echo "Verificando se a imagem base está disponível..."
if ! docker inspect --type=image ghcr.io/${GITHUB_REPOSITORY_OWNER}/chatwoot_codespace:${TAG} > /dev/null 2>&1; then
    echo "Erro: A imagem base ghcr.io/${GITHUB_REPOSITORY_OWNER}/chatwoot_codespace:${TAG} não foi encontrada!"
    #echo "Cancelando a criação do Codespace."
    #exit 1
fi

# Exportar variáveis de ambiente do .env
echo "Carregando variáveis de ambiente do .env"
set -a
source .env
set +a

# Validar a configuração do Docker Compose
echo "Validando configuração do Docker Compose"
docker compose -f .devcontainer/docker-compose.yml config || {
    echo "Erro na configuração do Docker Compose!"
    exit 1
}

echo "Setup concluído com sucesso!"
