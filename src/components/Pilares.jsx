import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PILLARS = [
  {
    number: "01",
    name: "PRESENÇA LOCAL",
    value: "Você aparece quando o cliente decide.",
    description: "Empresas estruturadas localmente aparecem no momento exato da decisão. Sem disputar atenção. Sem depender de indicação.",
    result: "Cliente te encontra antes de procurar o concorrente.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="20" r="10" stroke="#D42B2B" strokeWidth="2.5"/>
        <circle cx="24" cy="20" r="4" fill="#D42B2B"/>
        <path d="M24 30 C14 38 8 44 8 44 L40 44 C40 44 34 38 24 30Z" fill="#D42B2B" opacity="0.12"/>
        <path d="M24 30 L24 44" stroke="#D42B2B" strokeWidth="2" strokeDasharray="3 3"/>
      </svg>
    ),
  },
  {
    number: "02",
    name: "PRESENÇA DIGITAL",
    value: "Seu site trabalha por você 24 horas.",
    description: "Um site estruturado comunica, convence e converte. É sua vitrine aberta todos os dias, para qualquer pessoa, em qualquer lugar.",
    result: "Visitante vira contato. Contato vira cliente.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="28" rx="3" stroke="#D42B2B" strokeWidth="2.5"/>
        <path d="M16 36 L12 44 M32 36 L36 44" stroke="#D42B2B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M10 44 L38 44" stroke="#D42B2B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M4 20 L44 20" stroke="#D42B2B" strokeWidth="1.5" opacity="0.3"/>
        <circle cx="24" cy="14" r="2" fill="#D42B2B"/>
      </svg>
    ),
  },
  {
    number: "03",
    name: "VISIBILIDADE",
    value: "Você é encontrado antes do concorrente.",
    description: "Aparecer nas primeiras posições não é sorte. É posicionamento estratégico. Orgânico ou acelerado — o resultado é o mesmo: o cliente te vê primeiro.",
    result: "Mais visibilidade. Menos esforço de prospecção.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="22" cy="22" r="14" stroke="#D42B2B" strokeWidth="2.5"/>
        <path d="M32 32 L42 42" stroke="#D42B2B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 22 L20 26 L28 18" stroke="#D42B2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    name: "AUTOMAÇÃO",
    value: "Seu negócio responde, agenda e vende mesmo quando você não está.",
    description: "Processos automáticos eliminam a perda de lead por demora, organizam o atendimento e liberam você para o que realmente importa.",
    result: "Nenhum lead perdido. Nenhuma oportunidade esquecida.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4 L24 12 M24 36 L24 44 M4 24 L12 24 M36 24 L44 24" stroke="#D42B2B" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="10" stroke="#D42B2B" strokeWidth="2.5"/>
        <circle cx="24" cy="24" r="4" fill="#D42B2B"/>
        <path d="M14 14 L18 18 M30 30 L34 34 M14 34 L18 30 M30 18 L34 14" stroke="#D42B2B" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function Pilares({ onOpenQuiz, onClose }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.title = "Os 4 Pilares da Estrutura Digital | One Thank Digital";
  }, []);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .pilares-wrap {
      background: #ffffff;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      padding: 160px clamp(24px, 5vw, 96px) 80px;
      position: fixed;
      inset: 0;
      z-index: 9999;
      overflow-y: auto;
    }

    .pilares-wrap::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: #D42B2B;
    }

    .pilares-header {
      max-width: 1400px;
      margin: 0 auto 72px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 40px;
    }

    .pilares-eyebrow {
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .pilares-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(52px, 6vw, 96px);
      line-height: 0.95;
      letter-spacing: 1px;
      color: #0a0a0a;
    }

    .pilares-title em {
      color: #D42B2B;
      font-style: normal;
    }

    .pilares-subtitle {
      font-size: clamp(18px, 1.8vw, 28px);
      color: #444;
      line-height: 1.6;
      max-width: 460px;
      flex-shrink: 0;
      padding-bottom: 8px;
    }

    .pilares-grid {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      background: #e8e8e8;
      border: 2px solid #e8e8e8;
      border-radius: 16px;
      overflow: hidden;
    }

    .pilar-card {
      background: #ffffff;
      padding: clamp(32px, 4vw, 64px);
      cursor: pointer;
      position: relative;
      transition: background 0.3s ease;
      display: flex;
      flex-direction: column;
      gap: 0;
      min-height: clamp(280px, 30vh, 400px);
    }

    .pilar-card:hover { background: #fafafa; }
    .pilar-card.active { background: #0a0a0a; }

    .pilar-number {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(80px, 10vw, 140px);
      line-height: 0.8;
      color: #f0f0f0;
      position: absolute;
      top: 24px; right: 32px;
      transition: color 0.3s;
      user-select: none;
    }

    .pilar-card.active .pilar-number { color: #1a1a1a; }

    .pilar-icon-wrap {
      margin-bottom: clamp(20px, 2.5vw, 36px);
      position: relative; z-index: 1;
    }

    .pilar-icon-wrap svg {
      width: clamp(40px, 4vw, 56px);
      height: clamp(40px, 4vw, 56px);
    }

    .pilar-tag {
      font-size: clamp(13px, 1.2vw, 16px);
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      margin-bottom: 10px;
      position: relative; z-index: 1;
      transition: color 0.3s;
    }

    .pilar-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 4.5vw, 64px);
      letter-spacing: 1px;
      color: #0a0a0a;
      margin-bottom: 18px;
      position: relative; z-index: 1;
      line-height: 1;
      transition: color 0.3s;
    }

    .pilar-card.active .pilar-name { color: #ffffff; }

    .pilar-value {
      font-size: clamp(18px, 1.5vw, 22px);
      font-weight: 600;
      color: #0a0a0a;
      line-height: 1.5;
      margin-bottom: 16px;
      padding-left: 14px;
      border-left: 3px solid #D42B2B;
      position: relative; z-index: 1;
      transition: color 0.3s;
    }

    .pilar-card.active .pilar-value { color: #f0f0f0; }

    .pilar-desc {
      font-size: clamp(16px, 1.2vw, 18px);
      color: #888;
      line-height: 1.7;
      position: relative; z-index: 1;
      transition: all 0.35s ease;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
    }

    .pilar-card.active .pilar-desc {
      max-height: 200px;
      opacity: 1;
      color: #aaa;
      margin-top: 4px;
    }

    .pilar-result {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: clamp(16px, 1.2vw, 18px);
      font-weight: 600;
      color: #D42B2B;
      letter-spacing: 0.5px;
      margin-top: 20px;
      position: relative; z-index: 1;
      transition: all 0.35s ease;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
    }

    .pilar-card.active .pilar-result {
      max-height: 60px;
      opacity: 1;
    }

    .pilar-result::before {
      content: '→';
    }

    .pilares-cta {
      max-width: 1400px;
      margin: clamp(40px, 5vw, 72px) auto 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: clamp(32px, 4vw, 56px) clamp(32px, 5vw, 72px);
      background: #0a0a0a;
      border-radius: 16px;
      gap: 32px;
    }

    .cta-label {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .cta-text {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 52px);
      color: #ffffff;
      line-height: 1.1;
      letter-spacing: 1px;
    }

    .cta-text em {
      color: #D42B2B;
      font-style: normal;
    }

    .btn-quiz {
      background: #D42B2B;
      color: white;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: clamp(11px, 0.9vw, 13px);
      letter-spacing: 2.5px;
      text-transform: uppercase;
      padding: clamp(16px, 1.5vw, 20px) clamp(28px, 3vw, 48px);
      border-radius: 6px;
      white-space: nowrap;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .btn-quiz:hover {
      background: #b82020;
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(212,43,43,0.3);
    }

    @media (max-width: 900px) {
      .pilares-header { flex-direction: column; align-items: flex-start; gap: 20px; }
      .pilares-subtitle { max-width: 100%; }
    }

    @media (max-width: 640px) {
      .pilares-wrap { padding: 140px 20px 48px; }
      .pilares-grid { grid-template-columns: 1fr; }
      .pilar-card { min-height: auto; padding: 36px 24px; }
      .pilar-number { font-size: 72px; }
      .pilares-cta { flex-direction: column; align-items: flex-start; }
      .btn-quiz { width: 100%; text-align: center; padding: 18px; }
    }
  `;

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://onethank.com.br/pilares" />
      </Helmet>
      <style>{styles}</style>
      <div className="pilares-wrap">
        {/* NAVBAR OVERLAY (Logo & Menu) */}
        <div className="absolute top-0 left-0 z-[10001] px-6 py-6 md:px-12 md:py-8 pointer-events-none">
          <div className="pointer-events-auto cursor-pointer flex items-center w-max" onClick={onClose}>
            <img src="/logowhite.svg" alt="One Thank Digital" className="h-12 md:h-16 object-contain" />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full z-[10000] px-6 py-6 md:px-12 md:py-8 flex justify-end items-center mix-blend-difference text-white pointer-events-none">
          <button
            onClick={onClose}
            className="pointer-events-auto font-heading text-xl font-bold uppercase tracking-[0.1em] hover:text-accent transition-colors"
          >
            MENU
          </button>
        </div>

        {/* HEADER */}
        <div className="pilares-header">
          <div>
            <div className="pilares-eyebrow">A Estrutura Certa</div>
            <div className="pilares-title">
              4 PILARES.<br />
              UM RESULTADO<br />
              <em>INEVITÁVEL.</em>
            </div>
          </div>
          <p className="pilares-subtitle">
            Toda empresa invisível falha em pelo menos um desses pilares. Clique em cada um para entender o impacto no seu negócio.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="pilares-grid">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className={`pilar-card${active === i ? " active" : ""}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="pilar-number">{p.number}</div>
              <div className="pilar-icon-wrap">{p.icon}</div>
              <div className="pilar-tag">Pilar {p.number}</div>
              <div className="pilar-name">{p.name}</div>
              <div className="pilar-value">{p.value}</div>
              <div className="pilar-desc">{p.description}</div>
              <div className="pilar-result" style={{ fontSize: 'clamp(16px, 1.2vw, 18px)' }}>{p.result}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pilares-cta">
          <div className="cta-left">
            <div className="cta-label">Diagnóstico Gratuito</div>
            <div className="cta-text">
              DESCUBRA QUAL PILAR<br />
              ESTÁ FALHANDO NA<br />
              <em>SUA EMPRESA.</em>
            </div>
          </div>
          <button className="btn-quiz" onClick={onOpenQuiz}>
            AVALIAR MINHA ESTRUTURA →
          </button>
        </div>

      </div>
    </>
  );
}
