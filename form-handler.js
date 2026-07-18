// ===== Formulários para Cloudflare Pages (Versão Mailto) =====

// ===== Formulário de Contato =====
const formContato = document.getElementById('formContato');

if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(formContato);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const assunto = formData.get('assunto');
        const mensagem = formData.get('mensagem');

        // Cria corpo do email
        const emailBody = `
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Assunto: ${assunto}

Mensagem:
${mensagem}
        `.trim();

        // Abre cliente de email
        const mailtoLink = `mailto:contato@cafcm.org.br?subject=[Site CAFCM] ${assunto}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;

        // Limpa formulário
        setTimeout(() => {
            formContato.reset();
            alert('✅ Seu cliente de email foi aberto. Clique em "Enviar" no email para completar o envio.');
        }, 500);
    });
}

// ===== Formulário Empresas =====
const formEmpresa = document.getElementById('formEmpresa');

if (formEmpresa) {
    formEmpresa.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(formEmpresa);
        const empresa = formData.get('empresa');
        const cnpj = formData.get('cnpj');
        const responsavel = formData.get('responsavel');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const quantidade = formData.get('quantidade');

        // Cria corpo do email
        const emailBody = `
Empresa: ${empresa}
CNPJ: ${cnpj}
Responsável: ${responsavel}
Email: ${email}
Telefone: ${telefone}
Quantidade de Aprendizes: ${quantidade || 'Não especificado'}

Solicitação de proposta enviada através do site.
        `.trim();

        // Abre cliente de email
        const mailtoLink = `mailto:contato@cafcm.org.br?subject=[Site CAFCM] Solicitação de Empresa - ${empresa}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;

        // Limpa formulário
        setTimeout(() => {
            formEmpresa.reset();
            alert('✅ Seu cliente de email foi aberto. Clique em "Enviar" no email para completar o envio.');
        }, 500);
    });
}

// ===== Atualiza nome do arquivo selecionado =====
const fileInput = document.getElementById('curriculo');
const fileLabel = document.querySelector('.form-file label');

if (fileInput && fileLabel) {
    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const fileName = this.files[0].name;
            fileLabel.innerHTML = `<i class="fas fa-paperclip"></i> ${fileName}`;
        } else {
            fileLabel.innerHTML = '<i class="fas fa-paperclip"></i> Anexar Currículo (opcional)';
        }
    });
}

