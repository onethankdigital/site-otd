import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

const CATEGORY_MAP = {
  "automacao-crm": {
    name: "Automação & CRM",
    categoryFilter: "Automação",
    description: "Estratégias avançadas de automação digital, integrações com o WhatsApp Cloud API oficial e estruturação de dados no CRM para acelerar pipelines comerciais B2B."
  },
  "gmn": {
    name: "Google Meu Negócio",
    categoryFilter: "GMN",
    description: "Guias técnicos e insights de posicionamento local no Google Maps para atrair clientes em Santo André e região do ABC Paulista."
  },
  "website": {
    name: "Criação de Sites",
    categoryFilter: "Website",
    description: "Artigos e práticas recomendadas para o desenvolvimento de sites institucionais rápidos, responsivos e otimizados para alta conversão."
  },
  "seo": {
    name: "SEO e Tráfego",
    categoryFilter: "SEO",
    description: "Técnicas de otimização on-page e off-page, presença orgânica no AI Overview (AEO) e gestão estratégica de tráfego pago."
  },
  "otd": {
    name: "Presença Digital Estruturada",
    categoryFilter: "OTD",
    description: "Insights sobre a nossa filosofia de trabalho, integrações de ecossistemas digitais e como estruturar a presença de marca no ambiente B2B."
  }
};

const STANDALONE_ARTICLES = [
  {
    id: 102,
    categoria: "Automação",
    categorySlug: "automacao-crm",
    slug: "guia-automacao-digital",
    imagem: "/hero-automacao-digital.webp",
    titulo: "Automação Digital para Empresas B2B: O Guia Completo",
    meta: "Guia Técnico • Automação • One Thank Digital",
    lead: "Como estruturar a automação digital da sua empresa para gerar leads qualificados: WhatsApp integrado ao CRM, qualificação com IA e dados organizados sem trabalho manual.",
    path: "/guia/automacao-digital/"
  },
  {
    id: 101,
    categoria: "Automação",
    categorySlug: "automacao-crm",
    slug: "como-organizar-leads-whatsapp-no-crm",
    imagem: "/Blog/artigo-07-leads-whatsapp-crm.webp",
    titulo: "Como Organizar os Leads do WhatsApp no CRM de Forma Automática",
    meta: "Leitura de 4 min • Automação • One Thank Digital",
    lead: "Organizar leads do WhatsApp no CRM de forma automática exige três componentes: uma conexão oficial via API entre o número comercial e o CRM, regras de captura que registram a origem e os dados do contato no primeiro toque, e a criação automática da oportunidade no funil de vendas.",
    path: "/insights/como-organizar-leads-whatsapp-no-crm"
  }
];

function getCategorySlugFromPath() {
  const pathname = window.location.pathname.replace(/\/$/, "");
  const parts = pathname.split("/");
  return parts[parts.length - 1] || "";
}

export default function CategoriaInsights() {
  const slug = getCategorySlugFromPath();
  const categoryInfo = CATEGORY_MAP[slug] || { name: "Insights", categoryFilter: slug, description: "Todos os artigos e conteúdos técnicos da One Thank Digital." };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // Filtrar artigos da categoria a partir do blogPosts.js
  const matchingBlogPosts = blogPosts
    .filter(p => p.categoria === categoryInfo.categoryFilter)
    .map(p => ({
      id: p.id,
      categoria: p.categoria,
      slug: p.slug,
      imagem: p.imagem,
      titulo: p.titulo,
      meta: p.meta,
      lead: p.lead,
      path: `/blog/${p.slug}`
    }));

  // Adicionar artigos estáticos se a categoria coincidir
  const matchingStandalone = STANDALONE_ARTICLES.filter(p => p.categorySlug === slug);

  // Unir e ordenar por ID (artigos novos/maiores IDs primeiro)
  const allPosts = [...matchingStandalone, ...matchingBlogPosts].sort((a, b) => b.id - a.id);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
    
    .cat-wrap *, .cat-wrap *::before, .cat-wrap *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .cat-wrap {
      background: #050505;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      color: #ffffff;
      padding-top: 120px;
    }

    .cat-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(24px, 5vw, 64px);
    }

    /* HEADER */
    .cat-header {
      padding: 60px 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      margin-bottom: 60px;
    }

    .cat-eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #e0040b;
      margin-bottom: 20px;
      display: inline-block;
    }

    .cat-h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(48px, 6vw, 84px);
      line-height: 1.0;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 24px;
    }

    .cat-desc {
      font-size: 16px;
      line-height: 1.7;
      color: #d5d5d5;
      max-width: 680px;
    }

    /* GRID */
    .cat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 32px;
      margin-bottom: 100px;
    }

    /* CARD */
    .cat-card {
      background: #111111;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      height: 100%;
    }

    .cat-card:hover {
      transform: translateY(-4px);
      border-color: rgba(224,4,11,0.4);
      box-shadow: 0 12px 30px rgba(0,0,0,0.4);
    }

    .cat-card-img-box {
      width: 100%;
      height: 200px;
      overflow: hidden;
      background: #000;
      position: relative;
    }

    .cat-card-img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .cat-card:hover .cat-card-img-box img {
      transform: scale(1.05);
    }

    .cat-card-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .cat-card-meta {
      font-size: 12px;
      color: #e0040b;
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    .cat-card-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px;
      line-height: 1.1;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin-bottom: 14px;
      text-decoration: none;
    }

    .cat-card-title a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.2s;
    }

    .cat-card-title a:hover {
      color: #e0040b;
    }

    .cat-card-excerpt {
      font-size: 14px;
      line-height: 1.6;
      color: #d5d5d5;
      margin-bottom: 24px;
      flex-grow: 1;
    }

    .cat-card-btn {
      align-self: flex-start;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }

    .cat-card-btn:hover {
      color: #e0040b;
    }

    .cat-card-btn-arrow {
      transition: transform 0.2s;
    }

    .cat-card-btn:hover .cat-card-btn-arrow {
      transform: translateX(4px);
    }

    /* EMPTY STATE */
    .cat-empty {
      padding: 80px 0;
      text-align: center;
      color: #888;
    }

    .cat-empty-btn {
      display: inline-block;
      margin-top: 20px;
      color: #e0040b;
      text-decoration: underline;
      cursor: pointer;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <Helmet>
        <title>{`Artigos de ${categoryInfo.name} | Insights One Thank Digital`}</title>
        <meta name="description" content={categoryInfo.description} />
        <link rel="canonical" href={`https://onethank.com.br/insights/categoria/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://onethank.com.br/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Insights",
                "item": "https://onethank.com.br/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": categoryInfo.name,
                "item": `https://onethank.com.br/insights/categoria/${slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      <Navbar
        onOpenQuiz={() => navigateTo('/diagnostico')}
        onOpenPilares={() => navigateTo('/pilares')}
        onOpenHistoria={() => navigateTo('/historia')}
      />

      <div className="cat-wrap">
        <main className="cat-container">
          {/* HEADER */}
          <header className="cat-header">
            <span className="cat-eyebrow">Categoria Insights</span>
            <h1 className="cat-h1">{categoryInfo.name}</h1>
            <p className="cat-desc">{categoryInfo.description}</p>
          </header>

          {/* GRID */}
          {allPosts.length > 0 ? (
            <div className="cat-grid">
              {allPosts.map((post) => (
                <article key={post.slug} className="cat-card">
                  <div className="cat-card-img-box">
                    <img src={post.imagem} alt={post.titulo} />
                  </div>
                  <div className="cat-card-body">
                    <div className="cat-card-meta">{post.meta.split(" • ")[1] || post.categoria}</div>
                    <h2 className="cat-card-title">
                      <a 
                        href={post.path}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(post.path);
                        }}
                      >
                        {post.titulo}
                      </a>
                    </h2>
                    <p className="cat-card-excerpt">
                      {post.lead.length > 180 ? post.lead.slice(0, 180) + '...' : post.lead}
                    </p>
                    <a 
                      href={post.path}
                      className="cat-card-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(post.path);
                      }}
                    >
                      Ler artigo <span className="cat-card-btn-arrow">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="cat-empty">
              <p>Nenhum artigo encontrado nesta categoria.</p>
              <a 
                href="/blog" 
                className="cat-empty-btn"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/blog');
                }}
              >
                Voltar para o blog
              </a>
            </div>
          )}
        </main>
      </div>

      <Footer
        onOpenQuiz={() => navigateTo('/diagnostico')}
        onOpenPilares={() => navigateTo('/pilares')}
        onOpenHistoria={() => navigateTo('/historia')}
      />
    </>
  );
}
