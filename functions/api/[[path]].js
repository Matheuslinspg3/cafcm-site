# Cloudflare Pages Functions - API Endpoints
# Coloque este arquivo em: functions/api/[[path]].js

export async function onRequestPost({ request, env }) {
  try {
    const { CAFCM_DATA } = env;

    if (!CAFCM_DATA) {
      return new Response(JSON.stringify({ error: 'KV not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Save config
    if (path === '/api/config') {
      const data = await request.json();
      await CAFCM_DATA.put('config', JSON.stringify(data));

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Save content
    if (path === '/api/content') {
      const data = await request.json();
      const { key, value } = data;
      await CAFCM_DATA.put(`content_${key}`, JSON.stringify(value));

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestGet({ request, env }) {
  try {
    const { CAFCM_DATA } = env;

    if (!CAFCM_DATA) {
      return new Response(JSON.stringify({ error: 'KV not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Get config
    if (path === '/api/config') {
      const data = await CAFCM_DATA.get('config');

      if (!data) {
        // Retorna config padrão
        const defaultConfig = {
          email: 'contato@cafcm.org.br',
          whatsapp: '5513999999999',
          telefone: '(13) 3326-4656',
          endereco: 'Santos, SP',
          web3formsKey: '7f882fd6-5913-4ad2-a1e3-7a12b781bd1d'
        };

        return new Response(JSON.stringify(defaultConfig), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(data, {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get content
    if (path.startsWith('/api/content/')) {
      const key = path.replace('/api/content/', '');
      const data = await CAFCM_DATA.get(`content_${key}`);

      return new Response(data || '{}', {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
