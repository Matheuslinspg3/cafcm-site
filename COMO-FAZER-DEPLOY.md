# 🎯 GUIA RÁPIDO: Preparar Site CAFCM para Cloudflare Pages

## ✅ O que já está pronto:

Todos os arquivos necessários estão na pasta:
```
C:\Users\mathe\cafcm-site\cloudflare-deploy\
```

## 📝 Modificações Necessárias (5 minutos):

### **Passo 1: Obter Access Key do Web3Forms**

1. Acesse: https://web3forms.com/
2. Digite seu email: `contato@cafcm.org.br`
3. Clique em "Create Access Key"
4. Copie a chave que aparece (formato: `a1b2c3d4-e5f6-...`)

---

### **Passo 2: Atualizar Formulário de Contato**

Abra o arquivo: `cloudflare-deploy/index.html`

Procure por esta linha (aproximadamente linha 400-450):
```html
<form id="formContato">
```

**Adicione logo DEPOIS da tag `<form>`:**

```html
<form id="formContato" action="https://api.web3forms.com/submit" method="POST">
    
    <!-- ADICIONE ESTAS 4 LINHAS AQUI -->
    <input type="hidden" name="access_key" value="COLE-SUA-ACCESS-KEY-AQUI">
    <input type="hidden" name="subject" value="[Site CAFCM] Nova Mensagem de Contato">
    <input type="hidden" name="from_name" value="Site CAFCM">
    <input type="hidden" name="redirect" value="https://cafcm.pages.dev/?success=true">
    
    <!-- Resto do formulário continua igual -->
    <div class="form-group">
        <label>Nome Completo *</label>
        <input type="text" name="nome" required>
    </div>
```

---

### **Passo 3: Atualizar Formulário de Empresas**

No mesmo arquivo, procure por (aproximadamente linha 550-600):
```html
<form id="formEmpresa">
```

**Adicione logo DEPOIS:**

```html
<form id="formEmpresa" action="https://api.web3forms.com/submit" method="POST">
    
    <!-- ADICIONE ESTAS 4 LINHAS AQUI -->
    <input type="hidden" name="access_key" value="COLE-A-MESMA-ACCESS-KEY-AQUI">
    <input type="hidden" name="subject" value="[Site CAFCM] Solicitação de Empresa">
    <input type="hidden" name="from_name" value="Site CAFCM - Empresas">
    <input type="hidden" name="redirect" value="https://cafcm.pages.dev/?success=true">
    
    <!-- Resto do formulário continua igual -->
    <div class="form-group">
        <label>Nome da Empresa *</label>
        <input type="text" name="empresa" required>
    </div>
```

---

### **Passo 4: Adicionar Script de Formulários**

No final do arquivo `index.html`, antes de `</body>`, adicione:

```html
    <script src="script.js"></script>
    <script src="form-handler.js"></script>
</body>
</html>
```

---

## 🚀 Deploy no Cloudflare Pages

### **Opção A: Upload Manual (Mais Fácil)**

1. Acesse: https://pages.cloudflare.com/
2. Crie uma conta (gratuita)
3. Clique em "Create a project" → "Upload assets"
4. Arraste a pasta `cloudflare-deploy` inteira
5. Nome do projeto: `cafcm`
6. Clique em "Deploy site"
7. Pronto! Seu site estará em: `https://cafcm.pages.dev`

---

### **Opção B: Via GitHub (Recomendado)**

1. Crie um repositório no GitHub
2. Faça upload dos arquivos da pasta `cloudflare-deploy`
3. No Cloudflare Pages, conecte ao GitHub
4. Selecione o repositório
5. Configurações de build:
   - **Framework preset:** None
   - **Build command:** (vazio)
   - **Build output directory:** `/`
6. Deploy!

**Comandos Git:**
```bash
cd /c/Users/mathe/cafcm-site/cloudflare-deploy

git init
git add .
git commit -m "Site CAFCM para Cloudflare Pages"

# Conecte ao seu repositório GitHub
git remote add origin https://github.com/SEU-USUARIO/cafcm-site.git
git branch -M main
git push -u origin main
```

---

## 📧 Como os Emails Chegam

Quando alguém preencher o formulário:

1. Web3Forms recebe os dados
2. Envia um email para `contato@cafcm.org.br` com:
   ```
   Assunto: [Site CAFCM] Nova Mensagem de Contato
   
   Nome: João Silva
   Email: joao@email.com
   Telefone: (13) 99999-9999
   Assunto: Informações sobre cursos
   Mensagem: Gostaria de saber mais sobre...
   ```

---

## 🎨 Domínio Customizado

Após deploy, para usar `www.cafcm.org.br`:

1. No painel do Cloudflare Pages
2. Vá em "Custom domains"
3. Clique em "Set up a custom domain"
4. Digite: `www.cafcm.org.br`
5. Siga as instruções de DNS

---

## 🔧 Testar Localmente Antes do Deploy

Abra o arquivo `cloudflare-deploy/index.html` no navegador:

1. Preencha o formulário de contato
2. Clique em "Enviar Mensagem"
3. Você deve receber um email

**Se não funcionar:**
- Verifique se a Access Key está correta
- Confira se os campos `name=""` estão nos inputs
- Olhe o console do navegador (F12) para erros

---

## 📁 Estrutura Final para Deploy

```
cloudflare-deploy/
├── index.html          (modificado com Web3Forms)
├── styles.css          (sem mudanças)
├── script.js           (sem mudanças)
├── form-handler.js     (gerencia envio dos formulários)
└── images/
    ├── logo.png
    ├── hero-bg.jpg
    └── (outras imagens)
```

---

## ✅ Checklist Final

Antes de fazer o deploy:

- [ ] Obtive minha Access Key do Web3Forms
- [ ] Adicionei a Access Key nos 2 formulários
- [ ] Testei o formulário localmente
- [ ] Recebi o email de teste
- [ ] Todos os arquivos estão na pasta `cloudflare-deploy`
- [ ] Imagens estão na pasta `images/`

---

## 🆘 Problemas Comuns

**"Formulário não envia"**
- Verifique se adicionou o `action="https://api.web3forms.com/submit"` na tag `<form>`
- Confira se a Access Key está correta

**"Não recebi o email"**
- Olhe na pasta de SPAM
- Verifique se o email do Web3Forms está correto
- Aguarde até 5 minutos (pode demorar um pouco)

**"Site não carrega no Cloudflare"**
- Certifique-se que o arquivo se chama `index.html` (minúsculo)
- Verifique se está na raiz da pasta de deploy

---

## 🎉 Próximos Passos

Depois que o site estiver no ar:

1. **Compartilhe o link:** `https://cafcm.pages.dev`
2. **Configure domínio próprio** (se tiver)
3. **Adicione ao Google Search Console**
4. **Teste em diferentes dispositivos**

---

**Precisa de ajuda? Me chame que faço as modificações direto no código!** 🚀
