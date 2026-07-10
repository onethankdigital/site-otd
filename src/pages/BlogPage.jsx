import { useState, useEffect } from "react";
import { blogPosts } from "../data/blogPosts";
import { Helmet } from "react-helmet-async";

const CATEGORIES = ["Todos", "GMN", "Website", "SEO", "Automação", "OTD"];

// Mapeia dados do blogPosts para o formato interno do componente
const POSTS = [
  {
    id: 104,
    featured: true,
    category: "Automação",
    date: "Jul 2026",
    title: "Automação Comercial: O Que É, O Que Não É e Como Implementar",
    excerpt: "Entenda o que é automação comercial (e por que não é automação de PDV), como ela captura e organiza cada oportunidade de venda e por onde começar a implementar na sua empresa.",
    imagem: "/hero-automacao-comercial.webp",
    readTime: "10 min de leitura",
    slug: "automacao-comercial-o-que-e",
    path: "/insights/automacao-comercial-o-que-e",
    comingSoon: false,
  },
  {
    id: 103,
    featured: false,
    category: "Automação",
    date: "Jul 2026",
    title: "Automação de Processos para Empresas: Como Implementar em Qualquer Setor",
    excerpt: "Entenda o que é automação de processos, a diferença para a automação comercial e o passo a passo para implementar nos bastidores da sua operação.",
    imagem: "/hero-automacao-processos.webp",
    readTime: "10 min de leitura",
    slug: "automacao-de-processos-para-empresas",
    path: "/insights/automacao-de-processos-para-empresas",
    comingSoon: false,
  },
  {
    id: 101,
    featured: false,
    category: "Automação",
    date: "Jul 2026",
    title: "Como Organizar os Leads do WhatsApp no CRM de Forma Automática",
    excerpt: "Organizar leads do WhatsApp no CRM de forma automática exige três componentes: conexão oficial via API, regras de captura e criação automática de oportunidades.",
    imagem: "/Blog/artigo-07-leads-whatsapp-crm.webp",
    readTime: "6 min de leitura",
    slug: "como-organizar-leads-whatsapp-no-crm",
    path: "/insights/como-organizar-leads-whatsapp-no-crm",
    comingSoon: false,
  },
  ...blogPosts.map((p) => ({
    id: p.id,
    featured: false,
    category: p.categoria,
    date: "Jul 2026",
    title: p.titulo,
    excerpt: p.lead.slice(0, 145) + "...",
    imagem: p.imagem,
    readTime: p.meta.split(" · ")[0] || "8 min de leitura",
    slug: p.slug,
    path: `/insights/${p.slug}`,
    comingSoon: false,
  }))
];

const CAT_COLORS = {
  GMN: "#D42B2B",
  Website: "#1a56db",
  SEO: "#0e9f6e",
  Automação: "#7e3af2",
  OTD: "#D42B2B",
};

function PostImage({ src, alt, style }) {
  return (
    <img
      src={src}
      alt={alt || ""}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        ...style,
      }}
    />
  );
}

export default function Blog() {
  const [activecat, setActivecat] = useState("Todos");

  useEffect(() => {
    document.title = "Insights | One Thank Digital - Somos Comunicação";
  }, []);

  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  const filtered = activecat === "Todos"
    ? rest
    : rest.filter(p => p.category === activecat);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .blog-wrap {
      background: #ffffff;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      position: relative;
    }

    .blog-header {
      background: #080808 url('/blog-header-bg.webp') center center / cover no-repeat;
      padding: clamp(96px,12vw,160px) clamp(24px,5vw,96px) clamp(48px,6vw,80px);
      position: relative;
      overflow: hidden;
    }

    .blog-header::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(to right, rgba(8,8,8,0.85) 40%, rgba(8,8,8,0.4) 100%);
    }

    .blog-header::after {
      content: '';
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(212,43,43,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(212,43,43,0.04) 1px,transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
    }

    .blog-header-inner {
      max-width: 1400px;
      margin: 0 auto;
      position: relative; z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 32px;
      flex-wrap: wrap;
    }

    .blog-eyebrow {
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .blog-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(56px,8vw,120px);
      line-height: 0.9;
      letter-spacing: 2px;
      color: #ffffff;
    }

    .blog-title em {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #D42B2B;
    }

    .blog-tagline {
      font-size: clamp(14px,1.2vw,17px);
      color: #777;
      line-height: 1.7;
      max-width: 360px;
      padding-bottom: 8px;
      border-left: 2px solid #D42B2B;
      padding-left: 16px;
    }

    .btn-back {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
      border-radius: 4px;
      font-weight: 500;
    }
    .btn-back:hover {
      border-color: #D42B2B !important;
      color: #D42B2B !important;
      background: rgba(212,43,43,0.08) !important;
    }

    .blog-body {
      max-width: 1400px;
      margin: 0 auto;
      padding: clamp(48px,6vw,80px) clamp(24px,5vw,96px);
    }

    .featured-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: 1px solid #e8e8e8;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: clamp(48px,6vw,80px);
      min-height: clamp(320px,40vh,480px);
      transition: box-shadow 0.3s;
      cursor: pointer;
      text-decoration: none;
    }

    .featured-card:hover {
      box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    }

    .featured-image {
      position: relative;
      background: #f5f5f5;
      min-height: 300px;
    }

    .featured-content {
      padding: clamp(32px,4vw,56px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #ffffff;
    }

    .featured-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }

    .cat-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 5px 12px;
      border-radius: 100px;
    }

    .post-date {
      font-size: 12px;
      color: #aaa;
      letter-spacing: 0.5px;
    }

    .read-time {
      font-size: 12px;
      color: #aaa;
      margin-left: auto;
    }

    .featured-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px,3.5vw,52px);
      line-height: 1.05;
      letter-spacing: 0.5px;
      color: #0a0a0a;
      margin-bottom: 16px;
    }

    .featured-excerpt {
      font-size: clamp(14px,1.1vw,16px);
      color: #444;
      line-height: 1.8;
      margin-bottom: 28px;
    }

    .btn-read {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #0a0a0a;
      color: white;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 14px 28px;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.2s;
      align-self: flex-start;
    }

    .btn-read:hover {
      background: #D42B2B;
      transform: translateX(4px);
    }

    .filter-bar {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: clamp(36px,4vw,56px);
      padding-bottom: clamp(24px,3vw,36px);
      border-bottom: 1px solid #f0f0f0;
    }

    .filter-btn {
      background: none;
      border: 1px solid #e0e0e0;
      color: #888;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 9px 20px;
      border-radius: 100px;
      transition: all 0.2s;
    }

    .filter-btn:hover { border-color: #D42B2B; color: #D42B2B; }
    .filter-btn.active { background: #D42B2B; border-color: #D42B2B; color: white; }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(20px,2.5vw,32px);
    }

    .post-card {
      border: 1px solid #f0f0f0;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.25s;
      cursor: pointer;
      background: #ffffff;
      position: relative;
      text-decoration: none;
      display: block;
    }

    .post-card:hover {
      border-color: #e0e0e0;
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.06);
    }

    .post-image {
      height: clamp(160px,18vw,220px);
      position: relative;
      overflow: hidden;
    }

    .post-content { padding: clamp(20px,2vw,28px); }

    .post-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }

    .post-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(20px,2vw,28px);
      line-height: 1.1;
      letter-spacing: 0.5px;
      color: #0a0a0a;
      margin-bottom: 10px;
    }

    .post-excerpt {
      font-size: clamp(13px,1vw,14px);
      color: #888;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    .post-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f5f5f5;
      padding-top: 14px;
    }

    .post-readtime { font-size: 11px; color: #bbb; letter-spacing: 0.5px; }
    .post-arrow { font-size: 16px; color: #D42B2B; transition: transform 0.2s; }
    .post-card:hover .post-arrow { transform: translateX(4px); }

    @media (max-width: 1024px) { .posts-grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 768px) {
      .featured-card { grid-template-columns: 1fr; }
      .featured-image { min-height: 240px; }
      .blog-header-inner { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 540px) { .posts-grid { grid-template-columns: 1fr; } }
  `;

  function navigate(slug) {
    const post = POSTS.find(p => p.slug === slug);
    const targetPath = (post && post.path) ? post.path : `/blog/${slug}`;
    window.history.pushState({}, "", targetPath);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://onethank.com.br/insights/" />
      </Helmet>
      <style>{styles}</style>
      <div className="blog-wrap">

        {/* BACK TO HOME BUTTON */}
        <div className="absolute top-6 left-6 md:top-8 md:left-12 z-10">
          <a
            href="/"
            className="btn-back font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white border border-white/10 px-4 py-2 hover:bg-white/5 transition-all"
          >
            ← Voltar ao Início
          </a>
        </div>

        {/* DARK HEADER */}
        <div className="blog-header">
          <div className="blog-header-inner">
            <div>
              <div className="blog-eyebrow">// Conteúdo OTD</div>
              <h1 className="blog-title">
                INSIGHTS<br /><em>Estrutura.</em>
              </h1>
            </div>
            <p className="blog-tagline">
              Conteúdo direto ao ponto sobre os 4 pilares que fazem empresas serem encontradas, escolhidas e lembradas.
            </p>
          </div>
        </div>

        <div className="blog-body">

          {/* FEATURED */}
          {featured && (
            <div
              className="featured-card"
              onClick={() => navigate(featured.slug)}
              style={{ cursor: "pointer" }}
            >
              <div className="featured-image">
                <PostImage src={featured.imagem} alt={featured.title} />
              </div>
              <div className="featured-content">
                <div className="featured-meta">
                  <span
                    className="cat-tag"
                    style={{
                      background: `${CAT_COLORS[featured.category]}15`,
                      color: CAT_COLORS[featured.category],
                    }}
                  >
                    {featured.category}
                  </span>
                  <span className="post-date">{featured.date}</span>
                  <span className="read-time">{featured.readTime} de leitura</span>
                </div>
                <h2 className="featured-title">{featured.title}</h2>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <span className="btn-read">LER ARTIGO →</span>
              </div>
            </div>
          )}

          {/* FILTER */}
          <div className="filter-bar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn${activecat === cat ? " active" : ""}`}
                onClick={() => setActivecat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="posts-grid">
            {filtered.map(post => (
              <div
                key={post.id}
                className="post-card"
                onClick={() => navigate(post.slug)}
              >
                <div className="post-image">
                  <PostImage src={post.imagem} alt={post.title} />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span
                      className="cat-tag"
                      style={{
                        background: `${CAT_COLORS[post.category]}12`,
                        color: CAT_COLORS[post.category],
                        fontSize: 9,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-readtime">{post.readTime} de leitura</span>
                    <span className="post-arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
