// GET /api/config - Retorna configurações
export async function onRequestGet({ env }) {
  try {
    const { CAFCM_DATA } = env;

    if (!CAFCM_DATA) {
      return new Response(JSON.stringify({
        error: 'KV not configured',
        // Config padrão
        email: 'contato@cafcm.org.br',
        whatsapp: '5513999999999',
        telefone: '(13) 3326-4656',
        endereco: 'Santos, SP',
        web3formsKey: '7f882fd6-5913-4ad2-a1e3-7a12b781bd1d'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const data = await CAFCM_DATA.get('config');

    if (!data) {
      // Retorna config padrão
      const defaultConfig = {
        email: 'contato@cafcm.org.br',
        whatsapp: '5513999999999',
        telefone: '(13) 3326-4656',
        endereco: 'Santos, SP',
        cep: '11000-000',
        facebook: '',
        instagram: '',
        linkedin: '',
        web3formsKey: '7f882fd6-5913-4ad2-a1e3-7a12b781bd1d'
      };

      return new Response(JSON.stringify(defaultConfig), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return new Response(data, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// POST /api/config - Salva configurações
export async function onRequestPost({ request, env }) {
  try {
    const { CAFCM_DATA } = env;

    if (!CAFCM_DATA) {
      return new Response(JSON.stringify({ error: 'KV not configured' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const data = await request.json();
    await CAFCM_DATA.put('config', JSON.stringify(data));

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
