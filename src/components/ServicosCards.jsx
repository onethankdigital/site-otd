import React from 'react';

const SERVICOS = [
  {
    number: '01',
    title: 'GOOGLE MEU NEGÓCIO',
    dor: 'Seu concorrente aparece no Maps. Você não.',
    microTeste: 'busque no Google o que você vende + sua cidade. Sua empresa aparece no mapa?',
    descricao: 'Otimizamos sua presença local para você aparecer nas buscas do Google Maps quando o cliente decide.',
    link: '/servicos/google-meu-negocio',
    image: '/servico-google-maps.png',
    imageAlt: 'Presença local no Google Maps',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C10.48 2 6 6.48 6 12C6 19.5 16 30 16 30C16 30 26 19.5 26 12C26 6.48 21.52 2 16 2Z" stroke="#E0040B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="12" r="4" fill="#E0040B" opacity="0.9"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'WEBSITE PROFISSIONAL',
    dor: 'Seu site tem visitas mas não gera clientes.',
    microTeste: 'abra seu site pelo celular, no 4G, e conte os segundos até o conteúdo aparecer.',
    descricao: 'Sites de alta conversão que comunicam sua oferta e vendem 24 horas — com estrutura de busca desde o primeiro dia.',
    link: '/servicos/criacao-de-sites',
    image: '/servico-website.png',
    imageAlt: 'Website profissional de alta conversão',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="26" height="18" rx="2" stroke="#E0040B" strokeWidth="2"/>
        <path d="M3 10H29" stroke="#E0040B" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="6" cy="7.5" r="1" fill="#E0040B" opacity="0.5"/>
        <circle cx="9" cy="7.5" r="1" fill="#E0040B" opacity="0.5"/>
        <path d="M11 23L9 28M21 23L23 28" stroke="#E0040B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 28H25" stroke="#E0040B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'SEO + TRÁFEGO ORGÂNICO',
    dor: 'Você some do Google quando para de pagar anúncio.',
    microTeste: 'busque o que você vende e ignore os anúncios. Você aparece na primeira página?',
    descricao: 'Rankeamento orgânico no Google e nos mecanismos de IA, sem depender de investimento pago.',
    link: '/servicos/seo-trafego-organico',
    image: '/servico-seo.png',
    imageAlt: 'SEO e tráfego orgânico no Google',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="#E0040B" strokeWidth="2"/>
        <path d="M22 22L29 29" stroke="#E0040B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M10 14H18" stroke="#E0040B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M14 10V18" stroke="#E0040B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'AUTOMAÇÃO DIGITAL',
    dor: 'Você perde leads que mandam mensagem fora do horário.',
    microTeste: 'mande uma mensagem no WhatsApp da sua empresa hoje às 21h. Cronometre a resposta.',
    descricao: 'WhatsApp, CRM e funil automatizados para responder, qualificar e não perder contato nenhum.',
    link: '/servicos/automacao-digital',
    image: '/servico-automacao.png',
    imageAlt: 'Automação digital de WhatsApp e CRM',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="#E0040B" strokeWidth="2"/>
        <path d="M16 6V16L22 22" stroke="#E0040B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 2V4M16 28V30M2 16H4M28 16H30M5.86 5.86L7.28 7.28M24.72 24.72L26.14 26.14M5.86 26.14L7.28 24.72M24.72 7.28L26.14 5.86" stroke="#E0040B" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
  },
];

const ServicosCards = () => {
  return (
    <>
      <style>{`
        .servicos-section {
          background: #000;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }

        .servicos-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(224,4,11,0.3), transparent);
        }

        .servicos-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* --- HEADER --- */
        .servicos-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #E0040B;
          margin-bottom: 16px;
        }

        .servicos-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: 1px;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .servicos-intro {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 1.1vw, 17px);
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          letter-spacing: 1px;
          text-align: justify;
          width: 100%;
          margin-bottom: 56px;
        }

        /* --- GRID --- */
        .servicos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        /* --- CARD --- */
        .servico-card {
          background: rgba(255,255,255,0.04);
          border-left: 2px solid #E0040B;
          padding: clamp(28px, 3vw, 48px);
          min-height: 380px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .servico-card:hover {
          background: rgba(255,255,255,0.07);
          transform: translateY(-2px);
        }

        .servico-ghost {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(80px, 9vw, 120px);
          line-height: 0.8;
          color: rgba(255,255,255,0.10);
          position: absolute;
          top: 12px;
          right: 20px;
          user-select: none;
          pointer-events: none;
          transition: color 0.3s ease;
        }

        .servico-card:hover .servico-ghost {
          color: rgba(255,255,255,0.14);
        }

        .servico-teste {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          line-height: 1.6;
          color: rgba(255,255,255,0.75);
          border-left: 2px solid rgba(255,255,255,0.2);
          padding-left: 12px;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
          text-align: left;
        }

        .servico-teste strong {
          font-weight: 700;
          letter-spacing: 1px;
        }

        .servico-icon {
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .servico-img-wrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .servico-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.08;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .servico-card:hover .servico-img-wrap img {
          opacity: 0.14;
          transform: scale(1.05);
        }

        .servico-name {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(24px, 2.5vw, 36px);
          letter-spacing: 1px;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .servico-dor {
          font-family: var(--font-drama, 'Playfair Display', serif);
          font-style: italic;
          font-size: clamp(15px, 1.3vw, 19px);
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .servico-desc {
          font-family: 'DM Sans', monospace;
          font-size: clamp(14px, 1.1vw, 16px);
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .servico-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #E0040B;
          text-decoration: none;
          position: relative;
          z-index: 1;
          transition: letter-spacing 0.3s ease, opacity 0.3s ease;
          display: inline-block;
        }

        .servico-link:hover {
          letter-spacing: 3px;
          opacity: 0.8;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
          .servicos-section {
            padding: 64px 16px;
          }

          .servicos-eyebrow,
          .servicos-title {
            text-align: center;
          }

          .servicos-intro {
            margin-left: auto;
            margin-right: auto;
            text-align: justify;
          }

          .servicos-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .servico-card {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: auto;
          }

          .servico-ghost {
            font-size: 72px;
          }

          .servico-icon {
            display: flex;
            justify-content: center;
          }

          .servico-link {
            display: inline-block;
          }

          .servico-teste {
            align-self: stretch;
            text-align: left;
          }

        }

        /* --- CLOSING BLOCK --- */
        .servicos-closing {
          margin-top: 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
        }

        .closing-cost {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .closing-cascade {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(24px, 2.6vw, 40px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .closing-desc {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(22px, 2.4vw, 36px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 8px;
        }

        .closing-social {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.5px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 4px;
          transition: opacity 0.2s ease;
        }

        .closing-social:hover {
          opacity: 0.9;
        }

        .closing-star {
          color: #f0b429;
          font-size: 12px;
          line-height: 1;
        }


        .closing-microcopy {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.6);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 2px;
        }
      `}</style>

      <section className="servicos-section">
        <div className="servicos-inner">
          {/* Header */}
          <div className="servicos-eyebrow">ESTRUTURA DIGITAL</div>
          <div className="servicos-title">Não é comunicar mais. É estrutura que converte.</div>
          <p className="servicos-intro">Cada pilar abaixo é um ponto de contato entre você e seu próximo cliente.</p>

          {/* Grid */}
          <div className="servicos-grid">
            {SERVICOS.map((s, i) => (
              <div className="servico-card" key={i}>
                <div className="servico-ghost">{s.number}</div>
                <div className="servico-img-wrap">
                  <img src={s.image} alt={s.imageAlt} loading="lazy" />
                </div>
                <div className="servico-icon">{s.icon}</div>
                <div className="servico-name">{s.title}</div>
                <div className="servico-dor">"{s.dor}"</div>
                <div className="servico-teste">
                  <strong>TESTE AGORA:</strong> {s.microTeste}
                </div>
                <div className="servico-desc">{s.descricao}</div>
                <a href={s.link} className="servico-link">COMO FUNCIONA →</a>
              </div>
            ))}
          </div>

          {/* Bloco de Fechamento */}
          <div className="servicos-closing">
            <p className="closing-desc">
              O diagnóstico aponta em qual desses pilares a sua estrutura digital precisa ser atualizada.
            </p>
            <a
              href="/diagnostico"
              className="px-6 py-3 md:px-10 md:py-4 bg-accent text-white font-heading font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(224,4,11,0.4)] active:scale-[0.98] inline-block"
            >
              DESCOBRIR AGORA
            </a>
            <div className="closing-microcopy">
              20 perguntas · 3 minutos · gratuito
            </div>
            <a
              href="https://g.page/r/onethankdigital"
              target="_blank"
              rel="noopener noreferrer"
              className="closing-social"
            >
              <span className="closing-star">★</span> 5,0 · 16 avaliações de empresas atendidas no Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicosCards;
