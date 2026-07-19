// GET /api/noticias - Retorna lista de notícias
export async function onRequestGet({ env }) {
  try {
    const { CAFCM_DATA } = env;

    if (!CAFCM_DATA) {
      return new Response(JSON.stringify({ noticias: [] }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const data = await CAFCM_DATA.get('noticias');

    if (!data) {
      return new Response(JSON.stringify({ noticias: [] }), {
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
    return new Response(JSON.stringify({ error: error.message, noticias: [] }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// POST /api/noticias - Salva lista de notícias
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
    await CAFCM_DATA.put('noticias', JSON.stringify(data));

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
