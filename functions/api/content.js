// GET /api/content - Retorna conteúdo editável da página
export async function onRequestGet({ env }) {
  try {
    const { CAFCM_DATA } = env;

    if (!CAFCM_DATA) {
      return new Response(JSON.stringify({
        error: 'KV not configured',
        // Conteúdo padrão
        hero_titulo1: 'TRANSFORMANDO VIDAS,',
        hero_titulo2: 'CONSTRUINDO',
        hero_titulo3: 'O FUTURO.',
        hero_descricao: 'Há mais de 40 anos, a CAFCM promove educação, qualificação profissional e inclusão social para jovens e adolescentes, preparando para o mundo do trabalho e para a vida.',
        inst_titulo: 'QUEM SOMOS',
        inst_subtitulo: 'Mais de 40 anos transformando vidas',
        inst_descricao: ''
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const data = await CAFCM_DATA.get('page_content');

    if (!data) {
      // Retorna conteúdo padrão
      const defaultContent = {
        hero_titulo1: 'TRANSFORMANDO VIDAS,',
        hero_titulo2: 'CONSTRUINDO',
        hero_titulo3: 'O FUTURO.',
        hero_descricao: 'Há mais de 40 anos, a CAFCM promove educação, qualificação profissional e inclusão social para jovens e adolescentes, preparando para o mundo do trabalho e para a vida.',
        inst_titulo: 'QUEM SOMOS',
        inst_subtitulo: 'Mais de 40 anos transformando vidas',
        inst_descricao: ''
      };

      return new Response(JSON.stringify(defaultContent), {
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

// POST /api/content - Salva conteúdo da página
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
    await CAFCM_DATA.put('page_content', JSON.stringify(data));

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
