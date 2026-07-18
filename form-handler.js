// ===== Formulários com Web3Forms + WhatsApp (Solução Profissional) =====

console.log('✅ form-handler.js v6 - Web3Forms + WhatsApp');

// ===== Formulário de Contato =====
const formContato = document.getElementById('formContato');

if (formContato) {
    console.log('✅ Formulário de contato encontrado');

    formContato.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('📧 Processando formulário de contato...');

        const formData = new FormData(formContato);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const assunto = formData.get('assunto');
        const mensagem = formData.get('mensagem');

        // Mensagem formatada para WhatsApp
        const textoWhatsApp = `*Contato via Site CAFCM*

📝 *Nome:* ${nome}
📧 *Email:* ${email}
📞 *Telefone:* ${telefone}
💬 *Assunto:* ${assunto}

*Mensagem:*
${mensagem}`;

        // Mostra popup de escolha
        mostrarPopupEscolha(textoWhatsApp, formData, formContato, 'contato');
    });
} else {
    console.warn('⚠️ Formulário de contato não encontrado');
}

// ===== Formulário Empresas =====
const formEmpresa = document.getElementById('formEmpresa');

if (formEmpresa) {
    console.log('✅ Formulário de empresas encontrado');

    formEmpresa.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('🏢 Processando formulário de empresa...');

        const formData = new FormData(formEmpresa);
        const empresa = formData.get('empresa');
        const cnpj = formData.get('cnpj');
        const responsavel = formData.get('responsavel');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const quantidade = formData.get('quantidade');

        // Mensagem formatada para WhatsApp
        const textoWhatsApp = `*Solicitação de Empresa - Site CAFCM*

🏢 *Empresa:* ${empresa}
📋 *CNPJ:* ${cnpj}
👤 *Responsável:* ${responsavel}
📧 *Email:* ${email}
📞 *Telefone:* ${telefone}
👥 *Aprendizes:* ${quantidade || 'Não especificado'}`;

        // Mostra popup de escolha
        mostrarPopupEscolha(textoWhatsApp, formData, formEmpresa, 'empresa');
    });
} else {
    console.warn('⚠️ Formulário de empresas não encontrado');
}

// ===== Popup de Escolha (Email ou WhatsApp) =====
function mostrarPopupEscolha(textoWhatsApp, formData, formulario, tipo) {
    // Cria overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        animation: fadeIn 0.3s;
    `;

    // Cria popup
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 50px rgba(0,0,0,0.3);
        animation: slideUp 0.3s;
    `;

    popup.innerHTML = `
        <h3 style="margin: 0 0 20px 0; color: #1a5490; font-size: 24px; text-align: center;">
            ✅ Dados Capturados!
        </h3>
        <p style="margin: 0 0 25px 0; color: #666; text-align: center;">
            Como deseja enviar sua mensagem?
        </p>
        <div style="display: flex; gap: 15px; flex-direction: column;">
            <button id="btnEmail" style="
                background: #1a5490;
                color: white;
                border: none;
                padding: 15px 25px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                transition: all 0.3s;
            ">
                <span style="font-size: 24px;">📧</span>
                <span id="emailText">Enviar por Email (Automático)</span>
            </button>
            <button id="btnWhatsApp" style="
                background: #25D366;
                color: white;
                border: none;
                padding: 15px 25px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                transition: all 0.3s;
            ">
                <span style="font-size: 24px;">💬</span>
                Enviar via WhatsApp
            </button>
            <button id="btnCancelar" style="
                background: #f5f5f5;
                color: #666;
                border: 2px solid #ddd;
                padding: 12px 25px;
                border-radius: 8px;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.3s;
            ">
                Cancelar
            </button>
        </div>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Adiciona estilos
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        #btnEmail:hover {
            background: #144070 !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(26, 84, 144, 0.4);
        }
        #btnWhatsApp:hover {
            background: #20ba5a !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
        }
        #btnCancelar:hover {
            background: #e5e5e5 !important;
            border-color: #ccc;
        }
        #btnEmail:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);

    // Botão Email
    document.getElementById('btnEmail').onclick = async () => {
        const btn = document.getElementById('btnEmail');
        const btnText = document.getElementById('emailText');
        const originalText = btnText.textContent;

        btn.disabled = true;
        btnText.textContent = 'Enviando...';

        const sucesso = await enviarEmail(formData, tipo);

        if (sucesso) {
            formulario.reset();
            document.body.removeChild(overlay);
        } else {
            btn.disabled = false;
            btnText.textContent = originalText;
        }
    };

    // Botão WhatsApp
    document.getElementById('btnWhatsApp').onclick = () => {
        enviarWhatsApp(textoWhatsApp);
        formulario.reset();
        document.body.removeChild(overlay);
    };

    // Botão Cancelar
    document.getElementById('btnCancelar').onclick = () => {
        document.body.removeChild(overlay);
    };

    // Fechar ao clicar fora
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    };
}

// ===== Enviar via Email (Web3Forms - Automático) =====
async function enviarEmail(formData, tipo) {
    try {
        // Pega configuração
        const config = window.CAFCM_CONFIG || {};
        const accessKey = config.web3formsKey;

        // Verifica se a chave está configurada
        if (!accessKey || accessKey === 'YOUR-ACCESS-KEY-HERE') {
            alert('⚠️ Web3Forms não configurado!\n\nPor enquanto, use WhatsApp ou configure a chave em config.js');
            return false;
        }

        // Adiciona campos obrigatórios do Web3Forms
        formData.append('access_key', accessKey);
        formData.append('subject', tipo === 'empresa'
            ? '[Site CAFCM] Solicitação de Empresa'
            : '[Site CAFCM] Nova Mensagem de Contato');
        formData.append('from_name', 'Site CAFCM');

        console.log('📤 Enviando email via Web3Forms...');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert('✅ Email enviado com sucesso!\n\nEntraremos em contato em breve.');
            console.log('✅ Email enviado com sucesso');
            return true;
        } else {
            throw new Error(data.message || 'Erro ao enviar');
        }

    } catch (error) {
        console.error('❌ Erro ao enviar email:', error);
        alert('❌ Erro ao enviar email.\n\nTente via WhatsApp ou contate diretamente:\n' +
              (window.CAFCM_CONFIG?.email || 'contato@cafcm.org.br'));
        return false;
    }
}

// ===== Enviar via WhatsApp =====
function enviarWhatsApp(mensagem) {
    const config = window.CAFCM_CONFIG || {};
    const whatsapp = config.whatsapp || '5513999999999';

    const texto = encodeURIComponent(mensagem);
    const url = `https://wa.me/${whatsapp}?text=${texto}`;

    window.open(url, '_blank');
    console.log('✅ WhatsApp aberto');
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

console.log('✅ form-handler.js v6 inicializado');
console.log('📧 Email:', window.CAFCM_CONFIG?.email || 'não configurado');
console.log('📱 WhatsApp:', window.CAFCM_CONFIG?.whatsappFormatado || 'não configurado');
