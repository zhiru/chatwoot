#!/bin/bash

# Criar o arquivo .env se não existir
if [ ! -f .env ]; then
  echo "Criando arquivo .env a partir de .env.example"
  cp .env.example .env
else
  echo "Arquivo .env já existe. Pulando a criação."
fi

# Atualizar variáveis no .env
echo "Atualizando variáveis de ambiente no .env"
sed -i -e "/FRONTEND_URL/ s/=.*/=https:\/\/$CODESPACE_NAME-3000.githubpreview.dev/" .env
sed -i -e "/WEBPACKER_DEV_SERVER_PUBLIC/ s/=.*/=https:\/\/$CODESPACE_NAME-3035.githubpreview.dev/" .env
sed -i -e '/REDIS_URL/ s/=.*/=redis:\/\/redis:6379/' .env
sed -i -e '/POSTGRES_HOST/ s/=.*/=db/' .env

# Determinar repositório e branch
GITHUB_REPOSITORY=$(git remote get-url origin | sed 's/.*github.com\/\(.*\)\.git/\1/')
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD | tr '/' '-')

# Log dos valores originais
echo "Valores originais:"
echo "GITHUB_REPOSITORY: $GITHUB_REPOSITORY"
echo "CURRENT_BRANCH: $CURRENT_BRANCH"

# Definir valores padrão
GITHUB_REPOSITORY_OWNER=${GITHUB_REPOSITORY_OWNER:-$(echo $GITHUB_REPOSITORY | cut -d'/' -f1)}
TAG=${TAG:-$CURRENT_BRANCH}

# Log dos valores usados
echo "Valores usados:"
echo "GITHUB_REPOSITORY_OWNER: $GITHUB_REPOSITORY_OWNER"
echo "TAG: $TAG"

# Adicionar ao .env
echo "Adicionando GITHUB_REPOSITORY_OWNER e TAG ao .env"
echo "GITHUB_REPOSITORY_OWNER=$GITHUB_REPOSITORY_OWNER" >> .env
echo "TAG=$TAG" >> .env

# Validar a imagem base
echo "Verificando a imagem base..."
if ! docker inspect --type=image ghcr.io/${GITHUB_REPOSITORY_OWNER}/chatwoot_codespace:${TAG} &>/dev/null; then
  echo "Erro: Imagem base ghcr.io/${GITHUB_REPOSITORY_OWNER}/chatwoot_codespace:${TAG} não encontrada!"
#   echo "Cancelando a configuração do Codespace."
#   exit 1
fi

# Carregar variáveis do .env
set -a
source .env
set +a

# Validar Docker Compose
echo "Validando configuração do Docker Compose..."
docker compose -f .devcontainer/docker-compose.yml config || {
  echo "Erro na configuração do Docker Compose!"
#   exit 1
}

echo "Setup concluído com sucesso!"