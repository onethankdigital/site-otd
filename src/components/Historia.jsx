import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Historia({ onClose, onOpenQuiz }) {
  useEffect(() => {
    document.title = "Nossa História e Filosofia | One Thank Digital";
  }, []);

  const STEPS = [
    {
      number: "01",
      title: "A Ideia",
      text: "Tudo começou com uma ideia.\nNão sabíamos de tecnologia.\nSabíamos do propósito.\nE foi o propósito que nos guiou.",
    },
    {
      number: "02",
      title: "A Comunicação",
      text: "A ideia existia.\nMas ninguém entendia o que fazíamos.\nAprendemos que sem comunicação clara\na melhor ideia morre no silêncio.",
    },
    {
      number: "03",
      title: "A Conexão",
      text: "Quando a comunicação ficou clara\nas conexões certas começaram a aparecer.\nTecnologia virou ponte.\nNão barreira.",
    },
    {
      number: "04",
      title: "O Movimento",
      text: "As conexões geraram ação.\nConstruímos processos.\nAutomatizamos o que travava.\nO negócio começou a se mover sozinho.",
    },
    {
      number: "05",
      title: "A Identidade",
      text: "No meio do movimento\nentendemos quem somos.\nSomos presença.\nSomos comunicação com estrutura.",
    },
    {
      number: "06",
      title: "O Valor",
      text: "Hoje entregamos o que aprendemos.\nCada pilar que estruturamos para você\né um pilar que estruturamos em nós primeiro.",
    },
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital@1&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .historia-wrap {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: #ffffff;
      overflow-y: auto;
      font-family: 'DM Sans', sans-serif;
      padding: 160px clamp(24px, 5vw, 96px) 80px;
    }

    .historia-wrap::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: #D42B2B;
    }

    .historia-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0;
    }

    /* HEADER — stacked vertically on desktop */
    .historia-header {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: clamp(56px, 8vw, 96px);
    }

    .historia-header-left { max-width: 860px; }

    .historia-intro {
      font-size: clamp(18px, 1.8vw, 28px);
      color: #444;
      line-height: 1.6;
      max-width: 460px;
      border-left: 3px solid #D42B2B;
      padding-left: 20px;
    }

    /* HEADER TYPOGRAPHY */
    .historia-eyebrow {
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .historia-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(48px, 7vw, 96px);
      line-height: 0.95;
      letter-spacing: 1px;
      color: #0a0a0a;
      margin-bottom: 24px;
    }

    .historia-title em {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #D42B2B;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0;
      max-width: 1400px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: clamp(28px, 3vw, 40px);
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom, #D42B2B, #f0f0f0);
    }

    .timeline-step {
      display: grid;
      grid-template-columns: clamp(56px, 6vw, 80px) 1fr;
      gap: clamp(24px, 4vw, 56px);
      padding-bottom: clamp(40px, 6vw, 72px);
      position: relative;
    }

    .step-right {
      display: grid;
      grid-template-columns: clamp(200px, 25%, 320px) 1fr;
      gap: clamp(24px, 4vw, 56px);
      padding-top: clamp(10px, 1vw, 14px);
    }

    @media (max-width: 760px) {
      .step-right {
        grid-template-columns: 1fr;
        gap: 12px;
      }
    }

    .timeline-step:last-child { padding-bottom: 0; }

    /* Left — number + dot */
    .step-left {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: clamp(56px, 6vw, 80px);
    }

    .step-dot {
      width: clamp(48px, 5vw, 64px);
      height: clamp(48px, 5vw, 64px);
      border-radius: 50%;
      background: #ffffff;
      border: 2px solid #e8e8e8;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      transition: all 0.3s;
      flex-shrink: 0;
    }

    .timeline-step:hover .step-dot {
      border-color: #D42B2B;
      background: #D42B2B;
    }

    .step-number {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(16px, 1.8vw, 22px);
      color: #ccc;
      letter-spacing: 1px;
      transition: color 0.3s;
    }

    .timeline-step:hover .step-number { color: #ffffff; }

    .step-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 48px);
      letter-spacing: 1px;
      color: #0a0a0a;
      line-height: 1;
      margin-bottom: 16px;
      transition: color 0.3s;
    }

    .timeline-step:hover .step-title { color: #D42B2B; }

    .step-text {
      font-size: clamp(18px, 1.4vw, 20px);
      color: #444;
      line-height: 1.7;
      white-space: pre-line;
    }

    .step-line {
      width: 32px;
      height: 2px;
      background: #D42B2B;
      margin-bottom: 16px;
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: all 0.3s;
    }

    .timeline-step:hover .step-line {
      opacity: 1;
      transform: scaleX(1);
    }

    /* CTA */
    .historia-cta {
      max-width: 1400px;
      margin-top: clamp(56px, 8vw, 96px);
      background: #0a0a0a;
      border-radius: 16px;
      padding: clamp(36px, 5vw, 64px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    .cta-label {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .cta-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 52px);
      color: #ffffff;
      line-height: 1.1;
      letter-spacing: 1px;
    }

    .cta-title em {
      color: #D42B2B;
      font-style: normal;
    }

    .btn-cta {
      background: #D42B2B;
      color: white;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: clamp(16px, 1.5vw, 20px) clamp(28px, 3vw, 48px);
      border-radius: 6px;
      white-space: nowrap;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .btn-cta:hover {
      background: #b82020;
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(212,43,43,0.3);
    }

    @media (max-width: 900px) {
      .historia-intro { max-width: 100%; }
    }

    @media (max-width: 640px) {
      .historia-wrap { padding: 140px 20px 48px; }
      .timeline::before { left: 24px; }
      .historia-cta { flex-direction: column; align-items: flex-start; }
      .btn-cta { width: 100%; text-align: center; padding: 18px; }
    }
  `;

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://onethank.com.br/historia" />
      </Helmet>
      <style>{styles}</style>
      <div className="historia-wrap">

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

        <div className="historia-inner">

          {/* HEADER — stacked vertically on desktop */}
          <div className="historia-header">
            <div className="historia-header-left">
              <div className="historia-eyebrow">// Nossa História</div>
              <div className="historia-title">
                ANTES DE ESTRUTURAR<br />
                O SEU NEGÓCIO<br />
                <em>estruturamos o nosso.</em>
              </div>
            </div>
            <p className="historia-intro">
              Passamos por cada um desses momentos. Por isso sabemos exatamente onde sua empresa está — e o que precisa para avançar.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="timeline">
            {STEPS.map((step, i) => (
              <div className="timeline-step" key={i}>
                <div className="step-left">
                  <div className="step-dot">
                    <span className="step-number">{step.number}</span>
                  </div>
                </div>
                <div className="step-right">
                  <div className="step-title-wrap">
                    <div className="step-line" />
                    <div className="step-title">{step.title}</div>
                  </div>
                  <p className="step-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="historia-cta">
            <div>
              <div className="cta-label">Diagnóstico Gratuito</div>
              <div className="cta-title">
                SUA EMPRESA<br />
                ESTÁ PRONTA PARA<br />
                <em>O PRÓXIMO PASSO?</em>
              </div>
            </div>
            <button 
              className="btn-cta" 
              onClick={() => {
                if (onClose) onClose();
                if (onOpenQuiz) onOpenQuiz();
              }}
            >
              AVALIAR MINHA ESTRUTURA →
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
