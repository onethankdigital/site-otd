import React from 'react';

const INSIGHTS = [
  {
    slug: 'como-organizar-leads-whatsapp-no-crm',
    categoria: 'Automação',
    titulo: 'Como Organizar os Leads do WhatsApp no CRM de Forma Automática',
    resumo: 'Arquitetura de dados e sincronização em tempo real entre WhatsApp Business API e CRM — sem depender de digitação manual.',
    tempo: '6 min',
  },
  {
    slug: 'automacao-comercial-o-que-e',
    categoria: 'Automação',
    titulo: 'Automação Comercial: o Que É e Por Que Sua Empresa Precisa Agora',
    resumo: 'Entenda o que separa uma operação comercial manual de uma estrutura que vende enquanto você dorme.',
    tempo: '5 min',
  },
  {
    slug: 'automacao-de-processos-para-empresas',
    categoria: 'Processos',
    titulo: 'Automação de Processos para Empresas: Guia Prático para o ABC Paulista',
    resumo: 'Como pequenas e médias empresas do Grande ABC estão reduzindo retrabalho e aumentando conversão com automação de processos.',
    tempo: '7 min',
  },
];

export default function InsightsPreview({ navigateTo }) {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .ip-section {
      background: #080808;
      padding: clamp(80px, 10vw, 140px) clamp(24px, 5vw, 96px);
      position: relative;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
    }

    .ip-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(212,43,43,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,43,43,0.025) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
    }

    .ip-inner {
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .ip-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: clamp(48px, 6vw, 80px);
      flex-wrap: wrap;
    }

    .ip-eyebrow {
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .ip-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(36px, 5vw, 72px);
      line-height: 0.95;
      letter-spacing: 1px;
      color: #f5f5f5;
    }

    .ip-title em {
      color: #D42B2B;
      font-style: normal;
    }

    .ip-cta-link {
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #999;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.2s;
      cursor: pointer;
      white-space: nowrap;
      flex-shrink: 0;
      padding-bottom: 4px;
      border-bottom: 1px solid #333;
    }

    .ip-cta-link:hover { color: #D42B2B; border-color: #D42B2B; }

    .ip-divider {
      height: 2px;
      background: linear-gradient(to right, #D42B2B 20%, #111);
      margin-bottom: clamp(48px, 6vw, 80px);
    }

    .ip-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(20px, 3vw, 40px);
    }

    .ip-card {
      display: flex;
      flex-direction: column;
      padding: clamp(24px, 3vw, 40px);
      background: #0d0d0d;
      border: 1px solid #1a1a1a;
      border-top: 3px solid #D42B2B;
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.25s;
      gap: 16px;
    }

    .ip-card:hover {
      background: #111;
      border-color: #D42B2B;
      transform: translateY(-4px);
      box-shadow: 0 20px 48px rgba(212,43,43,0.15);
    }

    .ip-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ip-tag {
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      background: rgba(212,43,43,0.08);
      padding: 4px 10px;
      border-radius: 4px;
    }

    .ip-time {
      font-size: 11px;
      color: #555;
      letter-spacing: 1px;
    }

    .ip-card-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(22px, 2vw, 30px);
      letter-spacing: 0.5px;
      color: #f0f0f0;
      line-height: 1.1;
      transition: color 0.2s;
    }

    .ip-card:hover .ip-card-title { color: #fff; }

    .ip-card-resumo {
      font-size: clamp(14px, 1.1vw, 16px);
      color: #666;
      line-height: 1.65;
      flex: 1;
    }

    .ip-card-footer {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      margin-top: 8px;
      opacity: 0;
      transform: translateX(-6px);
      transition: all 0.2s;
    }

    .ip-card:hover .ip-card-footer {
      opacity: 1;
      transform: translateX(0);
    }

    @media (max-width: 900px) {
      .ip-grid { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 580px) {
      .ip-grid { grid-template-columns: 1fr; }
      .ip-header { align-items: flex-start; flex-direction: column; }
    }
  `;

  const handleNav = (slug) => {
    const path = `/insights/${slug}`;
    if (navigateTo) {
      navigateTo(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleAllInsights = () => {
    if (navigateTo) {
      navigateTo('/insights');
    } else {
      window.history.pushState({}, '', '/insights');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <>
      <style>{styles}</style>
      <section className="ip-section" aria-label="Insights recentes">
        <div className="ip-inner">

          <div className="ip-header">
            <div>
              <div className="ip-eyebrow">// Conteúdo técnico</div>
              <div className="ip-title">
                INSIGHTS<br />
                <em>&amp; GUIAS</em>
              </div>
            </div>
            <span
              className="ip-cta-link"
              onClick={handleAllInsights}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleAllInsights()}
            >
              Ver todos os insights →
            </span>
          </div>

          <div className="ip-divider" />

          <div className="ip-grid">
            {INSIGHTS.map((item) => (
              <div
                key={item.slug}
                className="ip-card"
                onClick={() => handleNav(item.slug)}
                role="link"
                tabIndex={0}
                aria-label={item.titulo}
                onKeyDown={(e) => e.key === 'Enter' && handleNav(item.slug)}
              >
                <div className="ip-card-top">
                  <span className="ip-tag">{item.categoria}</span>
                  <span className="ip-time">{item.tempo} de leitura</span>
                </div>
                <div className="ip-card-title">{item.titulo}</div>
                <p className="ip-card-resumo">{item.resumo}</p>
                <div className="ip-card-footer">
                  Ler artigo <span>→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
