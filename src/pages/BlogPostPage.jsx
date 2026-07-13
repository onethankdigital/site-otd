import { useEffect, useState } from "react";
import { getPostBySlug } from "../data/blogPosts";
import { Helmet } from "react-helmet-async";

const CAT_COLORS = {
  GMN: "#D42B2B",
  Website: "#1a56db",
  SEO: "#0e9f6e",
  Automação: "#7e3af2",
  "Automação & CRM": "#7e3af2",
  OTD: "#D42B2B",
};

function getSlugFromPath() {
  const cleanPath = window.location.pathname.replace(/\/$/, "");
  const parts = cleanPath.split("/");
  return parts[parts.length - 1] || "";
}

export default function BlogPostPage() {
  const slug = getSlugFromPath();
  const post = getPostBySlug(slug);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (post) {
      document.title = `${post.titulo} | Insights One Thank Digital`;
    }
  }, [slug, post]);

  const catColor = post ? (CAT_COLORS[post.categoria] || "#D42B2B") : "#D42B2B";

  // Gerar Schemas JSON-LD automáticos para o Satélite
  const schemas = post
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.titulo,
          description: post.lead,
          datePublished: "2026-07-08T08:00:00+00:00",
          dateModified: "2026-07-08T08:00:00+00:00",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://onethank.com.br/insights/${post.slug}`,
          },
          author: {
            "@type": "Organization",
            name: "One Thank Digital",
            url: "https://onethank.com.br",
          },
          publisher: {
            "@type": "Organization",
            name: "One Thank Digital",
            logo: {
              "@type": "ImageObject",
              url: "https://onethank.com.br/logo.svg",
            },
          },
          image: `https://onethank.com.br${post.imagem}`,
        },
        ...(post.faq && post.faq.length > 0
          ? [
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: post.faq.map((item) => ({
                  "@type": "Question",
                  name: item.pergunta,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.resposta,
                  },
                })),
              },
            ]
          : []),
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://onethank.com.br",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Insights",
              item: "https://onethank.com.br/insights",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.categoria,
              item: "https://onethank.com.br/insights",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: post.titulo,
              item: `https://onethank.com.br/insights/${post.slug}`,
            },
          ],
        },
      ]
    : [];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .article-wrap {
      background: #ffffff;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
    }

    /* NAVBAR */
    .article-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(8,8,8,0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #1a1a1a;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 clamp(20px,4vw,64px);
      height: 72px;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .nav-logo-img {
      height: 44px;
      width: auto;
      object-fit: contain;
      display: block;
    }

    .btn-back-blog {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #888;
      text-decoration: none;
      border: 1px solid #2a2a2a;
      padding: 8px 18px;
      border-radius: 6px;
      transition: all 0.2s;
      cursor: pointer;
      background: none;
      font-family: 'DM Sans', sans-serif;
    }
    .btn-back-blog:hover {
      color: #D42B2B;
      border-color: #D42B2B;
      background: rgba(212,43,43,0.06);
    }

    /* HERO */
    .article-hero {
      background: #080808;
      padding: 120px clamp(24px,6vw,120px) 72px;
      position: relative;
      overflow: hidden;
    }
    .article-hero::before {
      content: '';
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(212,43,43,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(212,43,43,0.04) 1px,transparent 1px);
      background-size: 48px 48px;
    }

    .article-hero-inner {
      max-width: 860px;
      margin: 0 auto;
      position: relative; z-index: 1;
    }

    /* BREADCRUMB */
    .satellite-breadcrumb {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 12px;
      color: #888;
      margin-bottom: 24px;
    }
    .satellite-breadcrumb a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.2s;
    }
    .satellite-breadcrumb a:hover {
      color: #fff;
    }
    .satellite-breadcrumb-sep {
      color: #555;
    }
    .satellite-breadcrumb-current {
      color: #D42B2B;
      font-weight: 600;
    }

    .article-cat {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .article-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(36px,5vw,64px);
      line-height: 1.05;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .article-meta {
      font-size: 13px;
      color: #888;
      letter-spacing: 0.5px;
    }

    /* BODY */
    .article-body {
      max-width: 780px;
      margin: 0 auto;
      padding: 64px clamp(24px,4vw,32px) 96px;
    }

    /* CALLOUT DE RESPOSTA DIRETA (AEO) */
    .satellite-callout {
      background: #fdf2f2;
      border-left: 4px solid #D42B2B;
      padding: 24px 28px;
      border-radius: 0 12px 12px 0;
      font-size: 16px;
      line-height: 1.7;
      color: #1a1a1a;
      font-weight: 500;
      margin-bottom: 36px;
    }

    .article-lead {
      font-size: clamp(18px,1.8vw,22px);
      line-height: 1.7;
      color: #1a1a1a;
      font-weight: 400;
      margin-bottom: 48px;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 40px;
    }

    .article-section {
      margin-bottom: 48px;
    }

    .article-section h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(24px,3vw,38px);
      letter-spacing: 0.5px;
      color: #0a0a0a;
      margin-bottom: 16px;
      line-height: 1.1;
    }

    .article-section p {
      font-size: clamp(15px,1.2vw,17px);
      line-height: 1.9;
      color: #444;
      white-space: pre-line;
    }

    /* HUB & SPOKE CONNECTION BOX */
    .satellite-hub-link {
      background: #fafafa;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      padding: 24px 28px;
      margin: 40px 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .satellite-hub-title {
      font-size: 13px;
      font-weight: 700;
      color: #D42B2B;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    .satellite-hub-text {
      font-size: 15px;
      color: #333;
      line-height: 1.6;
    }
    .satellite-hub-text a {
      color: #D42B2B;
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* FAQ ACORDEÃO */
    .satellite-faq-section {
      margin-top: 64px;
      padding-top: 48px;
      border-top: 2px solid #111;
    }
    .satellite-faq-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px,3.5vw,42px);
      color: #111;
      margin-bottom: 32px;
    }
    .satellite-faq-item {
      border-bottom: 1px solid #eaeaea;
    }
    .satellite-faq-q {
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
      font-size: 17px;
      color: #1a1a1a;
      gap: 16px;
    }
    .satellite-faq-q:hover {
      color: #D42B2B;
    }
    .satellite-faq-icon {
      font-size: 22px;
      color: #D42B2B;
      transition: transform 0.25s ease;
    }
    .satellite-faq-a {
      padding-bottom: 20px;
      font-size: 15px;
      line-height: 1.8;
      color: #555;
    }

    /* CTA */
    .article-cta {
      margin: 64px 0 0;
      padding: 48px clamp(24px,4vw,56px);
      background: linear-gradient(135deg, rgba(212,43,43,0.08) 0%, rgba(212,43,43,0.02) 100%);
      border: 2px solid rgba(212,43,43,0.3);
      border-radius: 16px;
      text-align: center;
    }

    .cta-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(24px,3vw,38px);
      color: #0a0a0a;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .cta-sub {
      font-size: 16px;
      color: #444;
      margin-bottom: 28px;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #D42B2B;
      color: white;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 16px 36px;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
      border: none;
    }
    .cta-btn:hover {
      background: #b82020;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(212,43,43,0.3);
    }

    /* FOOTER */
    .article-footer {
      background: #080808;
      padding: 40px clamp(24px,5vw,96px);
      text-align: center;
      margin-top: 80px;
    }
    .footer-brand {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 18px;
      letter-spacing: 2px;
      color: #555;
    }
    .footer-brand span { color: #D42B2B; }

    /* 404 */
    .not-found {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px;
    }
  `;

  function goBack() {
    window.history.pushState({}, "", "/insights");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  function goQuiz() {
    window.history.pushState({}, "", "/diagnostico");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  if (!post) {
    return (
      <>
        <style>{styles}</style>
        <div className="article-wrap">
          <nav className="article-nav">
            <a href="/" className="nav-logo">ONE THANK <span>DIGITAL</span></a>
            <button className="btn-back-blog" onClick={goBack}>← Voltar aos Insights</button>
          </nav>
          <div className="not-found" style={{ paddingTop: 120 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 80, color: "#D42B2B" }}>404</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: "#0a0a0a", marginBottom: 16 }}>ARTIGO NÃO ENCONTRADO</div>
            <button className="btn-back-blog" onClick={goBack} style={{ marginTop: 8 }}>← Voltar aos Insights</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${post.titulo} | Insights One Thank Digital`}</title>
        <link rel="canonical" href={`https://onethank.com.br/insights/${post.slug}/`} />
        <meta property="og:title" content={`${post.titulo} | Insights One Thank Digital`} />
        <meta property="og:description" content={post.lead.substring(0, 160)} />
        <meta property="og:url" content={`https://onethank.com.br/insights/${post.slug}/`} />
        {post.imagem && <meta property="og:image" content={`https://onethank.com.br${post.imagem}`} />}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${post.titulo} | Insights One Thank Digital`} />
        {post.imagem && <meta property="twitter:image" content={`https://onethank.com.br${post.imagem}`} />}
      </Helmet>
      {schemas && schemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      )}
      <style>{styles}</style>
      <div className="article-wrap">

        {/* NAVBAR */}
        <nav className="article-nav">
          <a href="/" className="nav-logo">
            <img src="/logo.svg" alt="One Thank Digital" className="nav-logo-img" />
          </a>
          <button className="btn-back-blog" onClick={goBack}>← Voltar aos Insights</button>
        </nav>

        {/* HERO */}
        <div className="article-hero">
          <div className="article-hero-inner">
            {/* 4-Level Breadcrumb */}
            <nav className="satellite-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="satellite-breadcrumb-sep">&gt;</span>
              <a href="/insights/">Insights</a>
              <span className="satellite-breadcrumb-sep">&gt;</span>
              <span>{post.categoria}</span>
              <span className="satellite-breadcrumb-sep">&gt;</span>
              <span className="satellite-breadcrumb-current">{post.titulo}</span>
            </nav>

            <div
              className="article-cat"
              style={{
                background: `${catColor}20`,
                color: catColor,
                border: `1px solid ${catColor}40`,
              }}
            >
              {post.categoria}
            </div>
            <h1 className="article-title">{post.titulo}</h1>
            <div className="article-meta">{post.meta}</div>
          </div>
        </div>

        {/* CAPA */}
        {post.imagem && (
          <div style={{ width: "100%", height: 400, overflow: "hidden" }}>
            <img
              src={post.imagem}
              alt={post.imagemAlt || post.titulo}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        )}

        {/* BODY */}
        <div className="article-body">

          {/* SATELLITE DIRECT CALLOUT (AEO) */}
          {post.callout && (
            <div className="satellite-callout">
              {post.callout}
            </div>
          )}

          <p className="article-lead">{post.lead}</p>

          {/* HUB & SPOKE PILLAR CONNECTION BOX (UPPER) */}
          {post.pillarUrl && post.pillarText && (
            <div className="satellite-hub-link">
              <div className="satellite-hub-title">// Hub de Especialidade OTD</div>
              <div className="satellite-hub-text">
                Para aprofundar sua estratégia com nossa metodologia completa, conheça o guia ou serviço de{" "}
                <a href={post.pillarUrl}>{post.pillarText}</a>.
              </div>
            </div>
          )}

          {post.secoes.map((sec, i) => (
            <div className="article-section" key={i}>
              <h2>{sec.titulo}</h2>
              <p dangerouslySetInnerHTML={{ __html: sec.corpo }} />
            </div>
          ))}

          {/* FAQ ACORDEÃO E TEXTO INTEGRAL PARA SEO */}
          {post.faq && post.faq.length > 0 && (
            <section className="satellite-faq-section">
              <h2 className="satellite-faq-title">Perguntas frequentes</h2>
              <div>
                {post.faq.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div className="satellite-faq-item" key={index}>
                      <div
                        className="satellite-faq-q"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{item.pergunta}</span>
                        <span className="satellite-faq-icon">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                      <div
                        className="satellite-faq-a"
                        style={{ display: isOpen ? "block" : "block" }}
                      >
                        {item.resposta}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* CTA DO CLUSTER */}
          <div className="article-cta">
            <div className="cta-title">
              {post.cta || "QUER SABER COMO ESTÁ A ESTRUTURA DIGITAL DA SUA EMPRESA HOJE?"}
            </div>
            <p className="cta-sub">
              {post.ctaSub || "Faça nosso diagnóstico digital gratuito e descubra seus principais gargalos e como resolvê-los."}
            </p>
            <button className="cta-btn" onClick={goQuiz}>
              FAZER O DIAGNÓSTICO GRATUITO →
            </button>
          </div>

        </div>

        {/* FOOTER */}
        <div className="article-footer">
          <div className="footer-brand">ONE THANK <span>DIGITAL</span></div>
          <div style={{ fontSize: 13, color: "#444", marginTop: 8 }}>Presença digital estruturada.</div>
        </div>

      </div>
    </>
  );
}
