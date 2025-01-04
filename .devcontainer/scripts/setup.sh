#!/bin/bash

# Verifica se o arquivo .env já existe
if [ ! -f .env ]; then
    echo "Criando arquivo .env a partir de .env.example"
    cp .env.example .env
else
    echo "Arquivo .env já existe. Pulando a criação."
fi

# Atualiza as variáveis de ambiente no arquivo .env
echo "Atualizando variáveis de ambiente no .env"
sed -i -e '/REDIS_URL/ s/=.*/=redis:\/\/localhost:6379/' .env
sed -i -e '/POSTGRES_HOST/ s/=.*/=localhost/' .env
sed -i -e '/SMTP_ADDRESS/ s/=.*/=localhost/' .env
sed -i -e "/FRONTEND_URL/ s/=.*/=https:\/\/$CODESPACE_NAME-3000.githubpreview.dev/" .env
sed -i -e "/WEBPACKER_DEV_SERVER_PUBLIC/ s/=.*/=https:\/\/$CODESPACE_NAME-3035.githubpreview.dev/" .env
sed -i -e '/WEBPACKER_DEV_SERVER_PUBLIC/s/^# //' .env

# Corrige problemas com o Webpacker
echo "Configurando NODE_OPTIONS para corrigir problemas com o Webpacker"
echo 'export NODE_OPTIONS=--openssl-legacy-provider' >> ~/.zshrc

# Torna as portas públicas no Codespaces
echo "Configurando visibilidade das portas no Codespaces"
if command -v gh &> /dev/null; then
    gh codespace ports visibility 3000:public 3035:public 5432:public 6379:public 8025:public -c $CODESPACE_NAME
else
    echo "GitHub CLI não encontrado. Instale o CLI para configurar visibilidade das portas."
fi

echo "Setup concluído!"
