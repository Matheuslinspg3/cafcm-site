// ===== CONFIGURAÇÕES DO SITE CAFCM =====
// Edite aqui e as mudanças aplicam em todo o site

const CAFCM_CONFIG = {
    // Contatos
    email: 'contato@cafcm.org.br',
    whatsapp: '5513999999999', // Formato: 55 + DDD + número (sem espaços)
    telefone: '(13) 3326-4656',

    // Endereço
    endereco: 'Rua Exemplo, 123 - Centro, Santos/SP',
    cep: '11000-000',

    // Redes Sociais
    facebook: 'https://facebook.com/cafcm',
    instagram: 'https://instagram.com/cafcm',
    linkedin: 'https://linkedin.com/company/cafcm',

    // Web3Forms (para envio automático de emails)
    web3formsKey: '7f882fd6-5913-4ad2-a1e3-7a12b781bd1d' // Configurado!
};

// ===== NÃO EDITE ABAIXO DESTA LINHA =====

// Formata WhatsApp para exibição
CAFCM_CONFIG.whatsappFormatado = CAFCM_CONFIG.whatsapp
    .replace(/^55(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

// URL do WhatsApp
CAFCM_CONFIG.whatsappUrl = `https://wa.me/${CAFCM_CONFIG.whatsapp}`;

// Exporta configuração
window.CAFCM_CONFIG = CAFCM_CONFIG;

console.log('✅ Configurações CAFCM carregadas:', {
    email: CAFCM_CONFIG.email,
    whatsapp: CAFCM_CONFIG.whatsappFormatado,
    telefone: CAFCM_CONFIG.telefone
});
