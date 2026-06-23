import React from 'react';

export default function Footer({ onOpenQuiz, onOpenPilares, onOpenHistoria }) {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .fw { background: #080808; font-family: 'DM Sans', sans-serif; padding: clamp(80px,10vw,140px) clamp(24px,5vw,96px) 0; position: relative; overflow: hidden; }
    .fw::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(212,43,43,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(212,43,43,0.03) 1px,transparent 1px); background-size: 48px 48px; pointer-events: none; }
    .fi { max-width: 1400px; margin: 0 auto; position: relative; z-index: 1; }

    .fb { margin-bottom: clamp(48px,7vw,96px); display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
    .fb-logo img { height: clamp(56px,7vw,90px); width: auto; display: block; margin-bottom: 16px; }
    .fb-tag { font-size: clamp(15px,1.2vw,18px); color: #999; letter-spacing: 2px; text-transform: uppercase; }
    .fb-stmt { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px,3.5vw,56px); line-height: 1; letter-spacing: 1px; color: #1c1c1c; text-align: right; }
    .fb-stmt em { color: #D42B2B; font-style: normal; }

    .fdiv { height: 2px; background: linear-gradient(to right,#D42B2B 20%,#111); margin-bottom: clamp(48px,6vw,80px); }

    .fg { display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(24px,4vw,60px); margin-bottom: clamp(64px,8vw,100px); }
    .fg > div:last-child { justify-self: end; width: 100%; max-width: 280px; }
    .fc-title { font-size: clamp(14px, 1.2vw, 18px); letter-spacing: 3px; text-transform: uppercase; color: #D42B2B; font-weight: 700; margin-bottom: 28px; }
    .flinks { list-style: none; display: flex; flex-direction: column; gap: 18px; }
    .flinks a { font-size: clamp(18px, 1.5vw, 24px); color: #999; text-decoration: none; transition: all 0.2s; display: flex; align-items: center; gap: 10px; font-weight: 500; }
    .flinks a:hover { color: #fff; padding-left: 8px; }
    .farr { font-size: 14px; color: #D42B2B; opacity: 0; transition: opacity 0.2s; }
    .flinks a:hover .farr { opacity: 1; }

    .soc-item { display: flex; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid #111; text-decoration: none; transition: all 0.2s; }
    .soc-item:first-child { padding-top: 0; }
    .soc-item:last-child { border: none; }
    .soc-icon { width: 48px; height: 48px; border-radius: 10px; background: #111; border: 1px solid #1e1e1e; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; color: #999; }
    .soc-item:hover .soc-icon { background: #D42B2B; border-color: #D42B2B; color: #fff; }
    .soc-icon svg { width: 22px; height: 22px; }
    .soc-name { font-size: clamp(18px, 1.5vw, 24px); color: #999; transition: color 0.2s; font-weight: 500; }
    .soc-item:hover .soc-name { color: #fff; }

    .fbot { border-top: 1px solid #111; padding: 28px 0 36px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
    .fstat { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #888; letter-spacing: 2px; text-transform: uppercase; }
    .fdot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; animation: blink 2s infinite; flex-shrink: 0; }
    @keyframes blink { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(34,197,94,.5)} 50%{opacity:.7;box-shadow:0 0 0 6px rgba(34,197,94,0)} }
    .fcopy { font-size: 13px; color: #888; }
    .floc { font-size: 13px; color: #888; letter-spacing: .5px; }
    .fleg { display: flex; gap: 24px; }
    .fleg a { font-size: 13px; color: #888; text-decoration: none; letter-spacing: 1.5px; text-transform: uppercase; transition: color .2s; }
    .fleg a:hover { color: #D42B2B; }

    @media (max-width: 900px) {
      .fb { flex-direction: column; align-items: flex-start; }
      .fb-stmt { text-align: left; }
      .fg { grid-template-columns: 1fr 1fr; }
      .fg > div { justify-self: stretch; max-width: none; }
    }
    @media (max-width: 540px) {
      .fg { grid-template-columns: 1fr; }
      .fbot { flex-direction: column; align-items: flex-start; gap: 12px; }
      .fg > div:nth-child(1) { justify-self: stretch; }
      .fg > div:nth-child(2) { justify-self: stretch; }
      .fg > div:nth-child(3) { justify-self: stretch; max-width: none; }
    }
  `;

  const navLinks = [
    { label: "Os 4 Pilares", href: "/pilares", onClick: (e) => { e.preventDefault(); onOpenPilares?.(); } },
    { label: "Nossa História", href: "/historia", onClick: (e) => { e.preventDefault(); onOpenHistoria?.(); } },
    { label: "FAQ", href: "#protocol" },
    { label: "Avaliar Estrutura", href: "/diagnostico", onClick: (e) => { e.preventDefault(); onOpenQuiz?.(); } },
  ];

  const servicosLinks = [
    { label: "Google Meu Negócio", href: "/google-meu-negocio" },
    { label: "Otimização SEO", href: "/seo-local" },
    { label: "Criação de Sites", href: "/desenvolvimento-web-premium" },
    { label: "Automações", href: "/automacoes-inteligentes" },
  ];

  const contentLinks = [
    { label: "Cases", href: "/cases" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "mailto:contato@onethank.com.br" },
  ];

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/onethankdigital/",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/one-thank-digital/",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=5511978679090",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{styles}</style>
      <footer className="fw">
        <div className="fi">

          <div className="fb">
            <div className="fb-logo">
              <a href="/"><img src="/logo.svg" alt="One Thank Digital" /></a>
              <div className="fb-tag">Presença digital estruturada.</div>
            </div>
            <div className="fb-stmt" aria-hidden="true">
              SOMOS PRESENÇA.<br />
              <em>SOMOS COMUNICAÇÃO.</em>
            </div>
          </div>

          <div className="fdiv" />

          <div className="fg">
            <div>
              <div className="fc-title">Navegação</div>
              <ul className="flinks">
                {navLinks.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} onClick={l.onClick}>
                      <span className="farr">→</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="fc-title">Serviços</div>
              <ul className="flinks">
                {servicosLinks.map((l, i) => (
                  <li key={`srv-${i}`}>
                    <a href={l.href}>
                      <span className="farr">→</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="fc-title">Conteúdo</div>
              <ul className="flinks">
                {contentLinks.map((l, i) => (
                  <li key={i}>
                    <a href={l.href} onClick={l.onClick}>
                      <span className="farr">→</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="fc-title">Social</div>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="soc-item" aria-label={s.name}>
                  <div className="soc-icon">{s.svg}</div>
                  <span className="soc-name">{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="fbot">
            <div className="fstat" style={{ fontSize: '15px', color: '#D42B2B', fontWeight: '600', letterSpacing: '1px' }}>
              📞 (11) 97867-9090
            </div>
            <div className="floc">Rua Monte Casseros, 281 - Centro, Santo André - SP</div>
            <div className="fcopy">© 2026 One Thank Digital.</div>
            <div className="fleg">
              <a href="/termos">Termos</a>
              <a href="/privacidade">Privacidade</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
