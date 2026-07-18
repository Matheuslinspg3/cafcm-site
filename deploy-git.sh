#!/bin/bash

# Script para fazer deploy do site CAFCM via GitHub

echo "🚀 Iniciando deploy do site CAFCM..."

cd /c/Users/mathe/cafcm-site/cloudflare-deploy

# Inicializa Git
git init

# Adiciona todos os arquivos
git add .

# Commit inicial
git commit -m "Site CAFCM - Deploy inicial para Cloudflare Pages"

echo ""
echo "✅ Git configurado!"
echo ""
echo "📝 PRÓXIMOS PASSOS:"
echo ""
echo "1. Crie um repositório no GitHub:"
echo "   https://github.com/new"
echo ""
echo "2. Nome: cafcm-site"
echo "   Público ou Privado (sua escolha)"
echo ""
echo "3. Execute estes comandos (substitua SEU-USUARIO):"
echo ""
echo "   git remote add origin https://github.com/SEU-USUARIO/cafcm-site.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Acesse Cloudflare Pages:"
echo "   https://pages.cloudflare.com/"
echo ""
echo "5. Conecte ao GitHub e selecione o repositório cafcm-site"
echo ""
echo "6. Deploy automático!"
echo ""
