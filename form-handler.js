// ===== Formulários - Solução que FUNCIONA (sem dependências externas) =====

console.log('✅ form-handler.js v4 carregado');

// ===== Formulário de Contato =====
const formContato = document.getElementById('formContato');

if (formContato) {
    console.log('✅ Formulário de contato encontrado');

    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('📧 Processando formulário de contato...');

        const formData = new FormData(formContato);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const assunto = formData.get('assunto');
        const mensagem = formData.get('mensagem');

        // Cria mensagem formatada
        const emailBody = `Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Assunto: ${assunto}

Mensagem:
${mensagem}`;

        // Mostra popup com opções
        const opcao = confirm(`✅ Dados do formulário capturados!

${emailBody}

Clique OK para enviar por email
Clique CANCELAR para copiar os dados`);

        if (opcao) {
            // Envia por email (abre Gmail)
            const subject = encodeURIComponent(`[Site CAFCM] ${assunto}`);
            const body = encodeURIComponent(emailBody);
            window.open(`mailto:contato@cafcm.org.br?subject=${subject}&body=${body}`, '_blank');
        } else {
            // Copia para clipboard
            navigator.clipboard.writeText(emailBody).then(() => {
                alert('✅ Dados copiados! Cole no seu email e envie para: contato@cafcm.org.br');
            }).catch(() => {
                alert('📋 Dados:\n\n' + emailBody + '\n\nEnvie para: contato@cafcm.org.br');
            });
        }

        formContato.reset();
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
        console.log('🏢 Processando formulário de empresa...');

        const formData = new FormData(formEmpresa);
        const empresa = formData.get('empresa');
        const cnpj = formData.get('cnpj');
        const responsavel = formData.get('responsavel');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const quantidade = formData.get('quantidade');

        // Cria mensagem formatada
        const emailBody = `Empresa: ${empresa}
CNPJ: ${cnpj}
Responsável: ${responsavel}
Email: ${email}
Telefone: ${telefone}
Quantidade de Aprendizes: ${quantidade || 'Não especificado'}

Solicitação de proposta enviada através do site.`;

        // Mostra popup com opções
        const opcao = confirm(`✅ Dados da empresa capturados!

${emailBody}

Clique OK para enviar por email
Clique CANCELAR para copiar os dados`);

        if (opcao) {
            // Envia por email (abre Gmail)
            const subject = encodeURIComponent(`[Site CAFCM] Solicitação de Empresa - ${empresa}`);
            const body = encodeURIComponent(emailBody);
            window.open(`mailto:contato@cafcm.org.br?subject=${subject}&body=${body}`, '_blank');
        } else {
            // Copia para clipboard
            navigator.clipboard.writeText(emailBody).then(() => {
                alert('✅ Dados copiados! Cole no seu email e envie para: contato@cafcm.org.br');
            }).catch(() => {
                alert('📋 Dados:\n\n' + emailBody + '\n\nEnvie para: contato@cafcm.org.br');
            });
        }

        formEmpresa.reset();
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

console.log('✅ form-handler.js v4 inicializado - FUNCIONA SEM DEPENDÊNCIAS!');

// Build: 1784408765
