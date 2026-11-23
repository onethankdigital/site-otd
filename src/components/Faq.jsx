import React from 'react';

/**
 * Perguntas frequentes no padrão do site (modelo aprovado na página de Criação de Sites, 23/11/2026).
 * bloco: versão compacta em cartão, para dentro da coluna de texto (artigos, insights, guias).
 * itens: [{ q, a }] — "a" pode ser texto ou JSX. O schema FAQPage continua em cada página.
 */
export default function Faq({ itens, titulo = 'O que você', destaque = 'ainda pergunta', id, bloco = false, children }) {
  return (
    <section className={bloco ? 'otd-faq bloco' : 'otd-faq'} id={id}>
      <div className="otd-faq-wrap">
        <p className="otd-rotulo">Perguntas frequentes</p>
        <h2 className="otd-faq-h">{titulo} <span>{destaque}</span></h2>
        <div className="otd-faq-list">
          {itens.map((f) => (
            <details key={f.q}>
              <summary><h3 className="otd-faq-q">{f.q}</h3></summary>
              <div className="otd-faq-a">{typeof f.a === 'string' ? <p>{f.a}</p> : f.a}</div>
            </details>
          ))}
        </div>
        {children && <div className="otd-faq-extra">{children}</div>}
      </div>
    </section>
  );
}
