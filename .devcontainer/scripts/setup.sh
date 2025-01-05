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

# Adicionar GITHUB_REPOSITORY_OWNER e TAG ao .env
echo "Exportando GITHUB_REPOSITORY_OWNER e TAG para o .env"
echo "GITHUB_REPOSITORY_OWNER=${GITHUB_REPOSITORY_OWNER:-zhiru}" >> .env
echo "TAG=${TAG:-latest}" >> .env

# Garantir que o arquivo foi criado corretamente
if [ -f .env ]; then
    echo ".env criado com sucesso:"
    cat .env
else
    echo "Erro: .env não criado!"
    exit 1
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
