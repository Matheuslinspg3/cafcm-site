// ===== Formulários para Cloudflare Pages (Versão Mailto Melhorada) =====

console.log('✅ form-handler.js carregado');

// ===== Formulário de Contato =====
const formContato = document.getElementById('formContato');

if (formContato) {
    console.log('✅ Formulário de contato encontrado');

    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('📧 Enviando formulário de contato...');

        try {
            const formData = new FormData(formContato);
            const nome = formData.get('nome');
            const email = formData.get('email');
            const telefone = formData.get('telefone');
            const assunto = formData.get('assunto');
            const mensagem = formData.get('mensagem');

            console.log('Dados:', { nome, email, telefone, assunto });

            // Cria corpo do email
            const emailBody = `Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Assunto: ${assunto}

Mensagem:
${mensagem}

---
Enviado via site CAFCM`;

            // Abre cliente de email
            const subject = encodeURIComponent(`[Site CAFCM] ${assunto}`);
            const body = encodeURIComponent(emailBody);
            const mailtoLink = `mailto:contato@cafcm.org.br?subject=${subject}&body=${body}`;

            console.log('📬 Abrindo cliente de email...');
            window.location.href = mailtoLink;

            // Limpa formulário após pequeno delay
            setTimeout(() => {
                formContato.reset();
                alert('✅ Seu cliente de email foi aberto. Clique em "Enviar" no email para completar o envio.');
            }, 500);

        } catch (error) {
            console.error('❌ Erro ao processar formulário:', error);
            alert('❌ Erro ao processar formulário. Por favor, tente novamente ou entre em contato diretamente: contato@cafcm.org.br');
        }
    });
} else {
    console.warn('⚠️ Formulário de contato não encontrado');
}

// ===== Formulário Empresas =====
const formEmpresa = document.getElementById('formEmpresa');

if (formEmpresa) {
    console.log('✅ Formulário de empresas encontrado');

    formEmpresa.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('🏢 Enviando formulário de empresa...');

        try {
            const formData = new FormData(formEmpresa);
            const empresa = formData.get('empresa');
            const cnpj = formData.get('cnpj');
            const responsavel = formData.get('responsavel');
            const email = formData.get('email');
            const telefone = formData.get('telefone');
            const quantidade = formData.get('quantidade');

            console.log('Dados empresa:', { empresa, cnpj, responsavel, email });

            // Cria corpo do email
            const emailBody = `Empresa: ${empresa}
CNPJ: ${cnpj}
Responsável: ${responsavel}
Email: ${email}
Telefone: ${telefone}
Quantidade de Aprendizes: ${quantidade || 'Não especificado'}

---
Solicitação de proposta enviada através do site CAFCM`;

            // Abre cliente de email
            const subject = encodeURIComponent(`[Site CAFCM] Solicitação de Empresa - ${empresa}`);
            const body = encodeURIComponent(emailBody);
            const mailtoLink = `mailto:contato@cafcm.org.br?subject=${subject}&body=${body}`;

            console.log('📬 Abrindo cliente de email...');
            window.location.href = mailtoLink;

            // Limpa formulário após pequeno delay
            setTimeout(() => {
                formEmpresa.reset();
                alert('✅ Seu cliente de email foi aberto. Clique em "Enviar" no email para completar o envio.');
            }, 500);

        } catch (error) {
            console.error('❌ Erro ao processar formulário:', error);
            alert('❌ Erro ao processar formulário. Por favor, tente novamente ou entre em contato diretamente: contato@cafcm.org.br');
        }
    });
} else {
    console.warn('⚠️ Formulário de empresas não encontrado');
}

// ===== Atualiza nome do arquivo selecionado =====
const fileInput = document.getElementById('curriculo');
const fileLabel = document.querySelector('.form-file label');

if (fileInput && fileLabel) {
    console.log('✅ Campo de arquivo encontrado');

    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const fileName = this.files[0].name;
            fileLabel.innerHTML = `<i class="fas fa-paperclip"></i> ${fileName}`;
            console.log('📎 Arquivo selecionado:', fileName);
        } else {
            fileLabel.innerHTML = '<i class="fas fa-paperclip"></i> Anexar Currículo (opcional)';
        }
    });
}

console.log('✅ form-handler.js inicializado com sucesso');
