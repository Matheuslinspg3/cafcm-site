# 🚀 Site CAFCM - Pronto para Cloudflare Pages

## ✅ Arquivos Prontos

Esta pasta contém tudo que você precisa para fazer deploy no Cloudflare Pages.

## 📝 ANTES DE FAZER DEPLOY:

### **1. Obtenha sua Access Key do Web3Forms**

1. Acesse: https://web3forms.com/
2. Digite seu email: `contato@cafcm.org.br`
3. Clique em "Create Access Key"
4. Copie a chave (formato: `abc123-def456-...`)

### **2. Substitua a chave nos formulários**

Abra o arquivo `index.html` e procure por (tem 2 lugares):

```html
<input type="hidden" name="access_key" value="YOUR-ACCESS-KEY-HERE">
```

**Substitua** `YOUR-ACCESS-KEY-HERE` pela sua chave.

Faça isso em **AMBOS** os formulários:
- Formulário de Contato (linha ~533)
- Formulário de Empresas (linha ~373)

## 🌐 Como Fazer Deploy

### **Opção 1: Upload Direto (Mais Fácil)**

1. Acesse: https://pages.cloudflare.com/
2. Faça login ou crie conta
3. Clique em "Create a project" → "Upload assets"
4. Arraste TODOS os arquivos desta pasta
5. Nome do projeto: `cafcm`
6. Deploy!

### **Opção 2: Via GitHub**

1. Crie repositório no GitHub
2. Faça upload destes arquivos
3. No Cloudflare Pages, conecte ao GitHub
4. Selecione o repositório
5. Build settings:
   - Framework: None
   - Build command: (vazio)
   - Build output: `/`
6. Deploy!

## 📁 Estrutura dos Arquivos

```
cloudflare-deploy/
├── index.html           ← Modifique a Access Key aqui
├── styles.css           ← CSS completo
├── script.js            ← Navegação, máscaras, animações
├── form-handler.js      ← Gerencia envio dos formulários
├── images/              ← Logo e fotos
└── COMO-FAZER-DEPLOY.md ← Guia detalhado
```

## 🎯 Depois do Deploy

Seu site estará em: `https://cafcm.pages.dev`

**Teste os formulários:**
1. Preencha o formulário de contato
2. Envie
3. Verifique se recebeu o email

## 🔧 Para Atualizar o Site

**Cloudflare Pages com GitHub:**
- Faça commit e push no GitHub
- Deploy automático em 1 minuto!

**Cloudflare Pages com upload manual:**
- Faça upload dos arquivos novamente
- Sobrescreve a versão anterior

## 📞 Precisa de Ajuda?

Leia o guia completo em: `COMO-FAZER-DEPLOY.md`

---

**Desenvolvido para CAFCM - Centro de Aprendizagem, Formação e Convivência Metropolitana**
