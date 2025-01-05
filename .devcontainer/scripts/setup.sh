#!/bin/bash

# Caminho do arquivo docker-compose.yml
DOCKER_COMPOSE_FILE=".devcontainer/docker-compose.yml"

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

# # Validar se o REPOSITORY_OWNER está definido no .env
# if [ -z "$REPOSITORY_OWNER" ]; then
#     echo "Erro: REPOSITORY_OWNER não está definido no arquivo .env!"
#     echo "Adicione REPOSITORY_OWNER=<seu_owner> ao arquivo .env e tente novamente."
#     exit 1
# fi

# Determinar a REPOSITORY_TAG a partir da branch atual
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD | tr '/' '-')
REPOSITORY_TAG=${REPOSITORY_TAG:-$CURRENT_BRANCH}

# Fallback para 'latest' se a REPOSITORY_TAG estiver vazia
if [ -z "$REPOSITORY_TAG" ]; then
    REPOSITORY_TAG="latest"
fi

# Definir REPOSITORY_OWNER padrão
REPOSITORY_OWNER=$(echo "$GITHUB_REPOSITORY" | cut -d'/' -f1)

# Exibir o valor do REPOSITORY_OWNER codificado em Base64
REPOSITORY_OWNER_BASE64=$(echo -n "$REPOSITORY_OWNER" | base64)

# Log dos valores usados
echo "Valores utilizados:"
echo "REPOSITORY_OWNER: $REPOSITORY_OWNER"
echo "REPOSITORY_TAG: $REPOSITORY_TAG"

# Adicionar ao .env
sed -i -e "/^REPOSITORY_OWNER=/d" .env
sed -i -e "/^REPOSITORY_TAG=/d" .env
echo "REPOSITORY_OWNER=$REPOSITORY_OWNER" >> .env
echo "REPOSITORY_TAG=$REPOSITORY_TAG" >> .env

# Exportar as variáveis para o ambiente
export $(grep -v '^#' .env | xargs)

# Carregar variáveis do .env
echo "Carregando variáveis do .env"
set -a
source .env
set +a

# Log das variáveis exportadas
echo "Exportando variáveis do .env:"
env | grep -E "REPOSITORY_OWNER|REPOSITORY_TAG"

# Limpar cache do Docker Compose
docker compose -f "$DOCKER_COMPOSE_FILE" down

# Log do arquivo atualizado
echo "Arquivo $DOCKER_COMPOSE_FILE atualizado!"
# cat "$DOCKER_COMPOSE_FILE"

# Validar a configuração do Docker Compose
echo "Validando configuração do Docker Compose"
if docker compose -f "$DOCKER_COMPOSE_FILE" config --quiet; then
    echo "Configuração do Docker Compose válida."
else
    echo "Erro na configuração do Docker Compose!"
fi

echo "Setup concluído com sucesso!"
