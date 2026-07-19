// GET /api/cms - Retorna todos os dados do CMS
export async function onRequestGet({ env }) {
  try {
    const { CAFCM_DATA } = env;

    if (!CAFCM_DATA) {
      return new Response(JSON.stringify(getDefaultData()), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    const data = await CAFCM_DATA.get('cms_data');

    if (!data) {
      return new Response(JSON.stringify(getDefaultData()), {
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

// POST /api/cms - Salva todos os dados do CMS
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
    await CAFCM_DATA.put('cms_data', JSON.stringify(data));

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

function getDefaultData() {
  return {
    // Hero
    hero_titulo1: 'TRANSFORMANDO VIDAS,',
    hero_titulo2: 'CONSTRUINDO',
    hero_titulo3: 'O FUTURO.',
    hero_descricao: 'Há mais de 40 anos, a CAFCM promove educação, qualificação profissional e inclusão social para jovens e adolescentes, preparando para o mundo do trabalho e para a vida.',
    hero_imagem: 'images/hero-team.jpg',

    // Quem Somos
    quem_label: 'QUEM SOMOS',
    quem_titulo: 'Transformando histórias há mais de 40 anos',
    quem_subtitulo: 'Atuamos na Baixada Santista gerando oportunidades e mudando vidas através da educação e formação profissional.',
    missao_titulo: 'Nossa Missão',
    missao_texto: 'Promover a educação, formação profissional e inclusão social de jovens e adolescentes, desenvolvendo competências técnicas e comportamentais que os preparem para o mercado de trabalho e para a vida em sociedade.',
    valores_titulo: 'Nossos Valores',
    valores_texto: 'Compromisso Social: Acreditamos que a educação transforma vidas e comunidades.\nExcelência: Buscamos constantemente a qualidade em tudo que fazemos.\nÉtica e Transparência: Agimos com integridade e responsabilidade.\nRespeito e Inclusão: Valorizamos a diversidade e promovemos a igualdade de oportunidades.',

    // Números
    stat1_numero: '+40',
    stat1_texto: 'anos transformando vidas',
    stat2_numero: '+15 mil',
    stat2_texto: 'jovens formados',
    stat3_numero: '+300',
    stat3_texto: 'empresas parceiras',
    stat4_numero: '4',
    stat4_texto: 'unidades na Baixada',

    // Cursos
    cursos_label: 'EDUCAÇÃO',
    cursos_titulo: 'Cursos e Formação Profissional',
    cursos_descricao: 'Oferecemos cursos de aprendizagem e qualificação profissional alinhados às demandas do mercado de trabalho.',

    curso1_icone: 'fa-briefcase',
    curso1_titulo: 'Administrativo',
    curso1_descricao: 'Formação completa em rotinas administrativas, atendimento ao cliente, documentação empresarial e ferramentas de escritório.',

    curso2_icone: 'fa-chart-line',
    curso2_titulo: 'Vendas e Atendimento',
    curso2_descricao: 'Técnicas de vendas, relacionamento com clientes, comunicação eficaz e uso de sistemas comerciais.',

    curso3_icone: 'fa-tools',
    curso3_titulo: 'Logística',
    curso3_descricao: 'Gestão de estoques, armazenamento, expedição, transporte e controle de materiais.',

    // Jovem Aprendiz
    ja_label: 'OPORTUNIDADES',
    ja_titulo: 'Programa Jovem Aprendiz',
    ja_descricao: 'Aprenda, cresça e transforme seu futuro com a CAFCM. Uma experiência completa que une teoria, prática e desenvolvimento profissional.',

    // Empresas
    emp_label: 'PARCERIAS',
    emp_titulo: 'Empresas: Contrate Aprendizes',
    emp_descricao: 'Fortaleça sua empresa com propósito social. Cumpra a Lei da Aprendizagem e conte com jovens talentos preparados pela CAFCM.'
  };
}
