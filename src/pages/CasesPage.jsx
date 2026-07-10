import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SECTORS = ["Todos", "Jurídico", "Financeiro", "Saúde", "E-commerce", "Educação", "Esporte", "Website"];

const CASES = [
  {
    id: 1,
    name: "Costa Lima & Paiva",
    responsible: "Daniel Lima",
    segment: "Escritório de Advocacia",
    sector: "Jurídico",
    url: "http://costalimaepaiva.com.br",
    domain: "costalimaepaiva.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#1a1a2e",
  },
  {
    id: 2,
    name: "Dr. Levy Silva",
    responsible: "Dr. Levy Silva",
    segment: "Escritório de Advocacia",
    sector: "Jurídico",
    url: "https://drlevysilva.com.br",
    domain: "drlevysilva.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#1a1a2e",
  },
  {
    id: 3,
    name: "Lexior Instituto",
    responsible: "Marcos Duarte",
    segment: "Pós-Graduação Jurídica",
    sector: "Jurídico",
    url: "http://lexiorinstituto.com.br",
    domain: "lexiorinstituto.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#1a1a2e",
  },
  {
    id: 4,
    name: "Mace Assessoria",
    responsible: "Jardel",
    segment: "Escritório Jurídico",
    sector: "Jurídico",
    url: "http://maceassessoria.com.br",
    domain: "maceassessoria.com.br",
    pilar: "Website",
    status: "desenvolvimento",
    color: "#1a1a2e",
  },
  {
    id: 5,
    name: "Contabil Resta",
    responsible: "Helton Costa",
    segment: "Escritório de Contabilidade",
    sector: "Financeiro",
    url: "http://contabilresta.com.br",
    domain: "contabilresta.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#0d2137",
  },
  {
    id: 6,
    name: "LQL Soluções",
    responsible: "Claudia Quaresma",
    segment: "Consultoria Financeira",
    sector: "Financeiro",
    url: "https://lqlsolucoes.com.br",
    domain: "lqlsolucoes.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#0d2137",
  },
  {
    id: 7,
    name: "LQL Consignados",
    responsible: "Maria Isabel",
    segment: "Consultoria Financeira",
    sector: "Financeiro",
    url: "https://lqlconsignados.com.br",
    domain: "lqlconsignados.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#0d2137",
  },
  {
    id: 8,
    name: "Silvia Salles",
    responsible: "Silvia Salles",
    segment: "Psicanalista e Terapeuta",
    sector: "Saúde",
    url: "https://silviasalles.com.br",
    domain: "silviasalles.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#1a0d2e",
  },
  {
    id: 9,
    name: "Ciclos da Prosperidade",
    responsible: "Robson Sant'Ana",
    segment: "Desenvolvimento Humano",
    sector: "Saúde",
    url: "http://ciclosdaprosperidade.com.br",
    domain: "ciclosdaprosperidade.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#1a0d2e",
  },
  {
    id: 10,
    name: "Theadyla",
    responsible: "Adriano de Souza",
    segment: "Loja Virtual de Roupas Fitness",
    sector: "E-commerce",
    url: "http://theadyla.com",
    domain: "theadyla.com",
    pilar: "Website",
    status: "ativo",
    color: "#0d1f0d",
  },
  {
    id: 11,
    name: "Italy Pet",
    responsible: "Fabio Marton",
    segment: "Produtos para Pet",
    sector: "E-commerce",
    url: "http://italypet.com.br",
    domain: "italypet.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#0d1f0d",
  },
  {
    id: 12,
    name: "EFE Displays",
    responsible: "Eugenio Rodrigues",
    segment: "Displays e Expositores para Agências",
    sector: "Website",
    url: "http://efedisplays.com.br",
    domain: "efedisplays.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#0f1a2e",
  },
  {
    id: 13,
    name: "Studio Moveleiro",
    responsible: "Adriano Leite",
    segment: "Móveis Planejados",
    sector: "E-commerce",
    url: "http://studiomoveleiro.com.br",
    domain: "studiomoveleiro.com.br",
    pilar: "Website",
    status: "desenvolvimento",
    color: "#0d1f0d",
  },
  {
    id: 14,
    name: "Lexior Instituto",
    responsible: "Marcos Duarte",
    segment: "Pós-Graduação Jurídica",
    sector: "Educação",
    url: "http://lexiorinstituto.com.br",
    domain: "lexiorinstituto.com.br",
    pilar: "Website",
    status: "ativo",
    color: "#1f0d0d",
  },
  {
    id: 15,
    name: "AES Sports Agency",
    responsible: "Edno de Souza",
    segment: "Agência e Consultoria de Atleta",
    sector: "Esporte",
    url: "http://aessportsagency.com",
    domain: "aessportsagency.com",
    pilar: "Website",
    status: "ativo",
    color: "#1f1200",
  },
];

// Remove duplicates (Lexior appears twice)
const UNIQUE_CASES = CASES.filter((c, i, arr) =>
  arr.findIndex(x => x.id === c.id) === i
).filter(c => c.id !== 14); // Remove duplicate Lexior

const SECTOR_COLORS = {
  Jurídico: "#1a1a2e",
  Financeiro: "#0d2137",
  Saúde: "#1a0d2e",
  "E-commerce": "#0d1f0d",
  Educação: "#1f0d0d",
  Esporte: "#1f1200",
  Website: "#0f1a2e",
};

const SECTOR_ACCENTS = {
  Jurídico: "#4a6fa5",
  Financeiro: "#3a9bd5",
  Saúde: "#9b59b6",
  "E-commerce": "#27ae60",
  Educação: "#e74c3c",
  Esporte: "#e67e22",
  Website: "#D42B2B",
};

function CaseCard({ c }) {
  const accent = SECTOR_ACCENTS[c.sector] || "#D42B2B";
  const bg = SECTOR_COLORS[c.sector] || "#0a0a0a";

  return (
    <div className={`case-card${c.status === "desenvolvimento" ? " dev" : ""}`}>
      {/* Visual placeholder */}
      <div className="case-visual" style={{ background: bg }}>
        <div className="case-domain" style={{ color: `${accent}44` }}>
          {c.domain}
        </div>
        <div className="case-sector-bg" style={{ color: `${accent}22` }}>
          {c.sector}
        </div>
        {c.status === "desenvolvimento" && (
          <div className="dev-badge">Em desenvolvimento</div>
        )}
        <a
          href={c.url}
          target="_blank"
          rel="noreferrer"
          className="case-visit"
          style={{ borderColor: accent, color: accent }}
          onClick={e => e.stopPropagation()}
        >
          VER SITE →
        </a>
      </div>

      {/* Content */}
      <div className="case-content">
        <div className="case-meta">
          <span
            className="case-sector-tag"
            style={{ background: `${accent}15`, color: accent }}
          >
            {c.sector}
          </span>
          <span className="case-pilar">{c.pilar}</span>
        </div>
        <h3 className="case-name">{c.name}</h3>
        <div className="case-segment">{c.segment}</div>
        <div className="case-resp">
          <span className="resp-label">Responsável</span>
          {c.responsible}
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  const [active, setActive] = useState("Todos");

  useEffect(() => {
    document.title = "Nossos Cases de Sucesso | One Thank Digital";
  }, []);

  const filtered = active === "Todos"
    ? UNIQUE_CASES
    : UNIQUE_CASES.filter(c => c.sector === active);

  const ativos = filtered.filter(c => c.status === "ativo");
  const emDev = filtered.filter(c => c.status === "desenvolvimento");

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .cases-wrap { background: #ffffff; min-height: 100vh; font-family: 'DM Sans', sans-serif; position: relative; }

    /* HEADER */
    .cases-header {
      background: #080808;
      padding: clamp(96px,12vw,160px) clamp(24px,5vw,96px) clamp(48px,6vw,80px);
      position: relative; overflow: hidden;
    }
    .cases-header::before {
      content: ''; position: absolute; inset: 0;
      background-image: linear-gradient(rgba(212,43,43,0.05) 1px,transparent 1px),
        linear-gradient(90deg,rgba(212,43,43,0.05) 1px,transparent 1px);
      background-size: 48px 48px;
    }
    .cases-header-inner {
      max-width: 1400px; margin: 0 auto; position: relative; z-index: 1;
      display: flex; align-items: flex-end; justify-content: space-between;
      gap: 32px; flex-wrap: wrap;
    }
    .cases-eyebrow {
      font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
      color: #D42B2B; font-weight: 700; margin-bottom: 16px;
    }
    .cases-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(56px,8vw,120px);
      line-height: 0.9; letter-spacing: 2px; color: #ffffff;
    }
    .cases-title em {
      font-family: 'Playfair Display', serif;
      font-style: italic; color: #D42B2B;
    }
    .cases-tagline {
      font-size: clamp(14px,1.2vw,17px); color: #777; line-height: 1.7;
      max-width: 360px; border-left: 2px solid #D42B2B; padding-left: 16px;
    }

    /* BACK BUTTON */
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

    /* STATS BAR */
    .stats-bar {
      background: #0a0a0a;
      padding: 24px clamp(24px,5vw,96px);
    }
    .stats-inner {
      max-width: 1400px; margin: 0 auto;
      display: flex; gap: clamp(32px,5vw,80px); flex-wrap: wrap;
    }
    .stat-item { display: flex; flex-direction: column; gap: 4px; }
    .stat-number {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px,4vw,48px); color: #D42B2B; line-height: 1;
    }
    .stat-label { font-size: 11px; color: #444; letter-spacing: 1.5px; text-transform: uppercase; }

    /* BODY */
    .cases-body {
      max-width: 1400px; margin: 0 auto;
      padding: clamp(48px,6vw,80px) clamp(24px,5vw,96px);
    }

    /* FILTER */
    .filter-bar {
      display: flex; gap: 8px; flex-wrap: wrap;
      margin-bottom: clamp(36px,4vw,56px);
      padding-bottom: clamp(24px,3vw,36px);
      border-bottom: 1px solid #f0f0f0;
    }
    .filter-btn {
      background: none; border: 1px solid #e0e0e0; color: #555;
      cursor: pointer; font-family: 'DM Sans', sans-serif;
      font-weight: 600; font-size: clamp(13px, 1vw, 15px); letter-spacing: 1.5px;
      text-transform: uppercase; padding: 12px 24px; border-radius: 100px;
      transition: all 0.25s;
    }
    .filter-btn:hover { border-color: #D42B2B; color: #D42B2B; }
    .filter-btn.active { background: #D42B2B; border-color: #D42B2B; color: white; }

    /* SECTION LABEL */
    .section-label {
      font-size: clamp(14px, 1.2vw, 16px); letter-spacing: 3px; text-transform: uppercase;
      color: #D42B2B; font-weight: 700; margin-bottom: 24px;
    }

    /* GRID */
    .cases-grid {
      display: grid; grid-template-columns: repeat(3,1fr);
      gap: clamp(16px,2vw,24px); margin-bottom: 56px;
    }

    /* CARD */
    .case-card {
      border: 1px solid #f0f0f0; border-radius: 12px;
      overflow: hidden; transition: all 0.25s; background: #fff;
    }
    .case-card:hover {
      border-color: #e0e0e0; transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.07);
    }
    .case-card.dev { opacity: 0.7; }

    .case-visual {
      height: clamp(160px,16vw,200px);
      position: relative; overflow: hidden;
      display: flex; align-items: center; justify-content: center;
    }
    .case-domain {
      position: absolute; top: 20px; left: 20px;
      font-size: clamp(13px, 1vw, 15px); letter-spacing: 1px;
      font-family: 'DM Sans', sans-serif; font-weight: 600;
      opacity: 0.85;
    }
    .case-sector-bg {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px,4vw,52px);
      letter-spacing: 2px; user-select: none;
      text-align: center; padding: 0 16px;
    }
    .dev-badge {
      position: absolute; top: 12px; right: 12px;
      background: rgba(0,0,0,0.5); color: #aaa;
      font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
      padding: 6px 14px; border-radius: 100px;
      font-family: 'DM Sans', sans-serif; font-weight: 600;
    }
    .case-visit {
      position: absolute; bottom: 18px; right: 18px;
      font-size: clamp(12px, 0.9vw, 14px); font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; text-decoration: none;
      border: 2px solid; padding: 8px 18px; border-radius: 100px;
      transition: all 0.2s; opacity: 0;
      font-family: 'DM Sans', sans-serif;
    }
    .case-card:hover .case-visit { opacity: 1; }

    .case-content { padding: clamp(20px,2.5vw,28px); }
    .case-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .case-sector-tag {
      font-size: clamp(11px, 0.9vw, 13px); font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; padding: 6px 14px; border-radius: 100px;
    }
    .case-pilar { font-size: clamp(12px, 0.9vw, 14px); color: #888; letter-spacing: 1px; text-transform: uppercase; font-weight: 500; }

    .case-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 2.5vw, 36px);
      letter-spacing: 0.5px; color: #0a0a0a;
      margin-bottom: 6px; line-height: 1;
    }
    .case-segment { font-size: clamp(15px, 1.1vw, 17px); color: #444; margin-bottom: 18px; font-weight: 400; }
    .case-resp {
      display: flex; align-items: center; gap: 8px;
      padding-top: 14px; border-top: 1px solid #f5f5f5;
      font-size: clamp(15px, 1.1vw, 17px); color: #222; font-weight: 600;
    }
    .resp-label {
      font-size: clamp(11px, 0.9vw, 13px); color: #888; letter-spacing: 1px;
      text-transform: uppercase; margin-right: 4px; font-weight: 500;
    }

    @media (max-width: 1024px) { .cases-grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 768px) {
      .cases-header-inner { flex-direction: column; align-items: flex-start; }
      .stats-inner { gap: 24px; }
    }
    @media (max-width: 540px) { .cases-grid { grid-template-columns: 1fr; } }
  `;

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://onethank.com.br/cases/" />
      </Helmet>
      <style>{styles}</style>
      <div className="cases-wrap">

        {/* BACK TO HOME BUTTON */}
        <div className="absolute top-6 left-6 md:top-8 md:left-12 z-10">
          <a
            href="/"
            className="btn-back font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white border border-white/10 px-4 py-2 hover:bg-white/5 transition-all"
          >
            ← Voltar ao Início
          </a>
        </div>

        {/* HEADER */}
        <div className="cases-header">
          <div className="cases-header-inner">
            <div>
              <div className="cases-eyebrow">// Portfólio OTD</div>
              <h1 className="cases-title">
                CASES<br /><em>Reais.</em>
              </h1>
            </div>
          </div>
        </div>

        <div className="cases-body">

          {/* FILTER */}
          <div className="filter-bar">
            {SECTORS.map(s => (
              <button
                key={s}
                className={`filter-btn${active === s ? " active" : ""}`}
                onClick={() => setActive(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* ATIVOS */}
          {ativos.length > 0 && (
            <>
              <h2 className="section-label">Sites Ativos — {ativos.length}</h2>
              <div className="cases-grid">
                {ativos.map(c => <CaseCard key={c.id} c={c} />)}
              </div>
            </>
          )}

          {/* EM DESENVOLVIMENTO */}
          {emDev.length > 0 && (
            <>
              <h2 className="section-label">Em Desenvolvimento — {emDev.length}</h2>
              <div className="cases-grid">
                {emDev.map(c => <CaseCard key={c.id} c={c} />)}
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}
