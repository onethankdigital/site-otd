import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ESTILOS from './estilos';

// Blocos compartilhados das páginas de serviço da OTD (SEO, Google Meu Negócio, Sites, Automação).

const REVIEWS = [
  { t: "Refez todo o site da minha empresa em poucos dias. Ágil, comunicativo e com ótimos insights.", who: "Ana Paula Afonso" },
  { t: "Profissional, entrega o trabalho além do que foi solicitado.", who: "Contábil Resta" },
  { t: "Empresa com enorme comprometimento ao cliente. Precisei dos serviços e fui atendido com rapidez.", who: "Jeferson Saroa" }
];

export const Lupa = ({ c = '#5f6368', s = 15 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);

const FLOW = [
  { k: 'seo', t: "Cliente pesquisa", d: "No Google, no Maps ou perguntando ao ChatGPT e ao Gemini qual empresa resolve o problema dele.", otd: "SEO e busca por IA", href: "/servicos/seo-trafego-organico/", p: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></> },
  { k: 'gmn', t: "Sua empresa aparece", d: "Entre os primeiros resultados, no mapa ou citada na resposta da IA, no lugar do concorrente.", otd: "Google Meu Negócio", href: "/servicos/google-meu-negocio/", p: <><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
  { k: 'site', t: "Visita o site", d: "Cai na página do serviço que procurava, rápida no celular e com a resposta que queria.", otd: "Criação de sites", href: "/servicos/criacao-de-sites/", p: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></> },
  { k: 'auto', t: "Chama no WhatsApp", d: "O contato chega pronto para conversar, é respondido na hora e fica registrado no CRM.", otd: "Automação com IA", href: "/servicos/automacao-digital/", p: <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" /> }
];

const AIS = [
  { id: 'chatgpt', name: 'ChatGPT', color: '#10a37f', q: 'Qual contabilidade em Santo André atende MEI e abre aos sábados?', a: 'Encontrei algumas opções em Santo André. A Sua Contabilidade, no centro, atende MEI e Simples Nacional e abre aos sábados pela manhã. As avaliações destacam a rapidez na abertura de empresas.', src: ['suacontabilidade.com.br', 'Perfil no Google', 'Avaliações'] },
  { id: 'gemini', name: 'Gemini', color: '#5b8cff', q: 'Preciso de um contador em Santo André que abra no sábado', a: 'Pelo Google Maps e pelos sites da região, a Sua Contabilidade aparece como opção: fica no centro de Santo André, abre aos sábados das 9h às 12h e tem nota 4,9 nas avaliações.', src: ['Google Maps', 'suacontabilidade.com.br'] },
  { id: 'claude', name: 'Claude', color: '#d97757', q: 'Me indica uma contabilidade para MEI no ABC?', a: 'Pesquisei na web e uma opção bem documentada é a Sua Contabilidade, em Santo André. O site explica prazos e como funciona a abertura, e os dados batem com o perfil no Google.', src: ['suacontabilidade.com.br', 'Perfil no Google', 'Diretórios'] },
  { id: 'perplexity', name: 'Perplexity', color: '#20b8cd', q: 'contabilidade para MEI santo andré sábado', a: 'A Sua Contabilidade (Santo André, centro) atende MEI e Simples Nacional e funciona aos sábados pela manhã [1][2]. Avaliações recentes citam atendimento rápido [3].', src: ['[1] suacontabilidade.com.br', '[2] Google Maps', '[3] Avaliações'] }
];
const AI_CHECKS = [
  { t: 'Site da empresa', w: 'Site que responde perguntas reais', d: 'preços, prazos e como funciona, não só “somos referência”' },
  { t: 'Perfil no Google', w: 'Perfil do Google completo', d: 'serviços, horários e endereço preenchidos' },
  { t: 'Avaliações recentes', w: 'Avaliações que citam o serviço', d: 'clientes contando o que a empresa resolveu' },
  { t: 'Diretórios e redes', w: 'Mesmos dados em todo lugar', d: 'nome, endereço e telefone iguais em toda a internet' }
];
const FINAL = 100000;

function marcaEmpresa(texto) {
  const partes = texto.split('Sua Contabilidade');
  return partes.map((p, i) => (
    <React.Fragment key={i}>{p}{i < partes.length - 1 && <b>Sua Contabilidade</b>}</React.Fragment>
  ));
}

export function SimuladorIA() {
  const [ai, setAi] = useState(0);
  const [step, setStep] = useState(FINAL);
  const [running, setRunning] = useState(false);
  const [touched, setTouched] = useState(false);
  const ref = React.useRef(null);
  const A = AIS[ai];

  const s1 = Math.ceil(A.q.length / 2) + 6;
  const s2 = s1 + 38;
  const s3 = s2 + Math.ceil(A.a.length / 3);
  const qShown = A.q.slice(0, Math.min(A.q.length, step * 2));
  const checks = Math.max(0, Math.min(4, Math.floor((step - s1) / 8)));
  const aShown = A.a.slice(0, Math.max(0, Math.min(A.a.length, (step - s2) * 3)));
  const typing = step >= s2 && step < s3;
  const done = step >= s3;

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !ref.current || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setStep(0); setRunning(true); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => setStep((s) => (s >= s3 + 70 ? s : s + 1)), 40);
    return () => clearInterval(id);
  }, [running, s3]);

  useEffect(() => {
    if (running && !touched && step >= s3 + 70) {
      setAi((x) => (x + 1) % AIS.length);
      setStep(0);
    }
  }, [running, touched, step, s3]);

  const escolher = (i) => { setTouched(true); setAi(i); setStep(0); setRunning(true); };

  return (
    <div className="aisim" ref={ref}>
      <div className="wrap aigrid">
        <div>
          <p className="eyebrow">Busca por IA</p>
          <h2>Cada vez mais gente pergunta à IA <em>antes de pesquisar</em></h2>
          <p className="lead" style={{ marginTop: 18 }}>A resposta vem pronta, com uma ou duas empresas. Antes de citar alguém, a IA confere a empresa em várias fontes. Veja o que ela consulta:</p>
          <ol className="aichecks">
            {AI_CHECKS.map((c, i) => (
              <li key={c.t} className={i < checks ? 'on' : ''}>
                <span className="ck" aria-hidden="true">{i < checks ? '✓' : i + 1}</span>
                <span><b>{c.w}</b><small>{c.d}</small></span>
              </li>
            ))}
          </ol>
          <p className="aiwhy">Quanto mais fontes confirmam a mesma informação, maior a chance de a IA indicar sua empresa. É esse trabalho que fazemos.</p>
        </div>

        <div className="aiwin" style={{ '--ai': A.color }}>
          <div className="aitabs" role="tablist" aria-label="Assistente de IA">
            {AIS.map((x, i) => (
              <button type="button" role="tab" key={x.id} aria-selected={i === ai} onClick={() => escolher(i)} style={{ '--c': x.color }}>
                <i aria-hidden="true" />{x.name}
              </button>
            ))}
          </div>
          <div className="aibody" aria-live="polite">
            <div className="aiq">{qShown}{step < s1 - 6 && <span className="caret" />}</div>
            <div className="aime">
              <span className="aiav" aria-hidden="true">{A.name[0]}</span>
              <span className="ainame">{A.name}</span>
              <span className="aistatus">{checks < 4 && step >= s1 ? 'consultando fontes…' : step >= s1 ? `confirmado em ${checks} fontes` : 'lendo a pergunta…'}</span>
            </div>
            <div className="aisrcs">
              {AI_CHECKS.map((c, i) => (
                <span key={c.t} className={i < checks ? 'on' : ''}>{i < checks ? '✓ ' : ''}{c.t}</span>
              ))}
            </div>
            <div className="aians">
              {step >= s2 ? marcaEmpresa(aShown) : <span className="aiph">A resposta aparece depois da checagem.</span>}
              {typing && <span className="caret" />}
            </div>
            <div className={'aicite' + (done ? ' on' : '')}>
              {A.src.map((s) => <span key={s} className={s.includes('suacontabilidade') ? 'me2' : ''}>{s}</span>)}
            </div>
          </div>
          <p className="aidisc">Exemplo ilustrativo. ChatGPT, Gemini, Claude e Perplexity são marcas de seus donos; a One Thank Digital não tem vínculo com elas.</p>
        </div>
      </div>
    </div>
  );
}

const PILARES = {
  gmn: { role: 'Presença Local', t: 'Google Meu Negócio', d: 'o cliente te encontra no mapa, perto dele', leak: 'Quem procura no mapa encontra o concorrente.', href: '/servicos/google-meu-negocio/' },
  seo: { role: 'Visibilidade', t: 'SEO e busca por IA', d: 'o cliente te encontra no Google e é indicado pela IA', leak: 'Ninguém chega até o seu site pela pesquisa.', href: '/servicos/seo-trafego-organico/' },
  site: { role: 'Presença Digital', t: 'Site', d: 'o cliente confia e decide entrar em contato', leak: 'A visita chega, não entende o que você faz e vai embora.', href: '/servicos/criacao-de-sites/' },
  auto: { role: 'Automação', t: 'Automação com IA', d: 'o cliente é atendido na hora e vira venda', leak: 'O contato chama às 21h, ninguém responde e ele fecha com outro.', href: '/servicos/automacao-digital/' }
};

function Wire({ state }) {
  return (
    <div className={'wire ' + state} aria-hidden="true">
      <span className="p" /><span className="p" /><span className="p" />
    </div>
  );
}

function PilarNode({ k, cur, ligado, onFlip }) {
  const p = PILARES[k];
  return (
    <button type="button" className={'lk-node' + (cur ? ' cur' : '')} aria-pressed={ligado} onClick={() => onFlip(k)}
      aria-label={`${p.t}: ${ligado ? 'ligado' : 'desligado'}. Toque para ${ligado ? 'desligar' : 'ligar'}.`}>
      {!ligado && <span className="lk-alert" aria-hidden="true">!</span>}
      <span className="lk-top"><span className="lk-role">{p.role}</span><span className="sw" aria-hidden="true"><i /></span></span>
      <strong>{p.t}</strong>
      <small>{p.d}</small>
    </button>
  );
}

export function SimuladorEstrutura({ atual = 'seo', titulo }) {
  const [on, setOn] = useState({ gmn: true, seo: true, site: true, auto: true });
  const flip = (k) => setOn((o) => ({ ...o, [k]: !o[k] }));

  const entrada = (on.gmn ? 15 : 0) + (on.seo ? 25 : 0);
  const contatos = Math.round(entrada * (on.site ? 0.45 : 0.08));
  const clientes = Math.round(contatos * (on.auto ? 0.34 : 0.12));
  const completo = on.gmn && on.seo && on.site && on.auto;
  const leaks = Object.keys(PILARES).filter((k) => !on[k]);

  const w2 = entrada === 0 ? 'dead' : (on.gmn && on.seo ? 'flow' : 'flow thin');
  const w3 = entrada === 0 ? 'dead' : (on.site ? (w2.includes('thin') ? 'flow thin' : 'flow') : 'broken');
  const w4 = entrada === 0 || !on.site ? 'dead' : (on.auto ? (w3.includes('thin') ? 'flow thin' : 'flow') : 'broken');


  return (
    <div className="wrap">
      <div className="lk-head">
        <p className="eyebrow">A estrutura digital</p>
        <h2>{titulo || <>SEO sozinho traz visita. <em>A estrutura traz cliente.</em></>}</h2>
        <p className="lead">Os quatro pilares trabalham juntos: ser encontrado, gerar confiança e converter em cliente. Desligue um deles e veja onde o cliente escapa.</p>
      </div>

      <div className="lk-board">
        <div className="lk-track">
          <div className="lk-end">
            <span className="dot"><Lupa c="#fff" s={22} /></span>
            Pesquisa
          </div>
          <Wire state="flow" />
          <div className="lk-entry">
            <span className="lk-doors">2 portas de entrada</span>
            <PilarNode k="gmn" cur={atual === 'gmn'} ligado={on.gmn} onFlip={flip} />
            <PilarNode k="seo" cur={atual === 'seo'} ligado={on.seo} onFlip={flip} />
          </div>
          <Wire state={w2} />
          <PilarNode k="site" cur={atual === 'site'} ligado={on.site} onFlip={flip} />
          <Wire state={w3} />
          <PilarNode k="auto" cur={atual === 'auto'} ligado={on.auto} onFlip={flip} />
          <Wire state={w4} />
          <div className={'lk-end' + (clientes > 0 ? ' win' : '') + (!completo ? ' low' : '')}>
            <span className="dot"><b>{clientes}</b></span>
            {clientes === 1 ? 'Cliente' : 'Clientes'}
          </div>
        </div>

        <div className="lk-links">
          {Object.entries(PILARES).map(([k, p]) => (
            k !== atual
              ? <a key={k} href={p.href}><b>{p.t} →</b>ver como funciona</a>
              : <a key={k} href="#topo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><b>{p.t}</b>você está nesta página</a>
          ))}
        </div>

        <div className="lk-out">
          <div>
            <div className="lk-funnel" aria-live="polite">
              <div className="lk-f"><b>100</b><span>pesquisas</span></div>
              <div className="lk-f"><b>{entrada}</b><span>encontram você</span></div>
              <div className="lk-f"><b>{contatos}</b><span>entram em contato</span></div>
              <div className={'lk-f last' + (!completo ? ' low' : '')}><b>{clientes}</b><span>viram clientes</span></div>
            </div>
            <p className="lk-note">Exemplo ilustrativo para mostrar a lógica. Os números reais dependem do segmento e da região.</p>
          </div>
          <div className={'lk-leaks' + (leaks.length ? ' bad' : '')} aria-live="polite">
            {leaks.length ? (
              <>
                <h3>Onde o cliente está escapando</h3>
                <ul>{leaks.map((k) => <li key={k}><b>Sem {PILARES[k].t}:</b> {PILARES[k].leak}</li>)}</ul>
              </>
            ) : (
              <>
                <h3>Estrutura completa</h3>
                <p>Os quatro pilares ligados: quem pesquisa encontra, entende e é atendido na hora. Toque em um pilar para desligar e ver o vazamento.</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="lk-cta">
        <p>O diagnóstico gratuito mostra o resultado de cada pilar na sua empresa.</p>
        <a className="btn" href="/diagnostico/">Descobrir qual pilar está vazando →</a>
      </div>
    </div>
  );
}

export function Jornada({ fases, titulo }) {
  const [f, setF] = useState(0);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || touched) return undefined;
    const id = setInterval(() => setF((x) => (x + 1) % fases.length), 6000);
    return () => clearInterval(id);
  }, [touched]);
  const F = fases[f];
  const pick = (i) => { setTouched(true); setF(i); };

  return (
    <>
      <p className="eyebrow">O que esperar</p>
      <h2>{titulo}</h2>

      <div className="jr">
        <svg className="jr-curve" viewBox="0 0 1000 144" role="img" aria-label="Curva ilustrativa de crescimento das visitas vindas do Google ao longo de 6 meses">
          <defs>
            <linearGradient id="seo2cg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#e0040b" stopOpacity=".35" /><stop offset="1" stopColor="#e0040b" stopOpacity="0" /></linearGradient>
            <clipPath id="seo2clip"><rect x={F.x0} y="0" width={F.x1 - F.x0} height="144" /></clipPath>
          </defs>
          <rect className="jr-zone" x={F.x0} y="0" width={F.x1 - F.x0} height="140" />
          <line x1="0" y1="140" x2="1000" y2="140" stroke="#26262a" />
          <line x1="333" y1="0" x2="333" y2="140" stroke="#26262a" strokeDasharray="3 5" />
          <line x1="666" y1="0" x2="666" y2="140" stroke="#26262a" strokeDasharray="3 5" />
          <path d="M0 136 C 200 134, 300 128, 400 112 S 650 60, 800 38 S 950 22, 1000 18 L1000 140 L0 140Z" fill="url(#seo2cg)" opacity=".45" />
          <path d="M0 136 C 200 134, 300 128, 400 112 S 650 60, 800 38 S 950 22, 1000 18" fill="none" stroke="#5a1a1c" strokeWidth="3" />
          <g clipPath="url(#seo2clip)">
            <path d="M0 136 C 200 134, 300 128, 400 112 S 650 60, 800 38 S 950 22, 1000 18 L1000 140 L0 140Z" fill="url(#seo2cg)" />
            <path d="M0 136 C 200 134, 300 128, 400 112 S 650 60, 800 38 S 950 22, 1000 18" fill="none" stroke="#e0040b" strokeWidth="4" />
          </g>
          <text x="10" y="24">VISITAS VINDAS DO GOOGLE (ILUSTRATIVO)</text>
        </svg>

        <div className="jr-tabs" role="tablist" aria-label="Fases do trabalho">
          {fases.map((x, i) => (
            <button type="button" role="tab" key={x.when} aria-selected={i === f} onClick={() => pick(i)}>
              <span className="jr-when">{x.when}</span>
              <strong>{x.t}</strong>
              <i className="jr-prog" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="jr-panel" role="tabpanel" aria-live="polite" key={f}>
          <div className="jr-left">
            <span className="jr-tag">Fase {f + 1} de {fases.length} · {F.when}</span>
            <h3>{F.t}</h3>
            <p>{F.resumo}</p>
            <div className="jr-ve"><b>O que você acompanha</b>{F.ve}</div>
          </div>
          <div className="jr-right">
            <span className="jr-sub">O que a One Thank Digital entrega</span>
            <ul>{F.entrega.map((e) => <li key={e}><span aria-hidden="true">✓</span>{e}</li>)}</ul>
          </div>
        </div>
      </div>

      <div className="jr-know">
        <div className="jr-k">
          <span className="jr-kt">Quem conduz</span>
          <b>Robson Sant Ana</b>
          <span>Fundador e Arquiteto de Soluções em IA, com mais de 20 anos em telecom e TI.</span>
        </div>
        <div className="jr-k">
          <span className="jr-kt">Método testado em casa</span>
          <b>97 no celular · 100 em SEO</b>
          <span>O site da própria OTD passou por todas essas fases antes de oferecermos ao cliente.</span>
        </div>
        <div className="jr-k">
          <span className="jr-kt">Sem promessa vazia</span>
          <b>Relatório todo mês</b>
          <span>Prazos variam conforme a concorrência da região. Não prometemos 1º lugar: mostramos o que mudou e o que trouxe contato.</span>
        </div>
      </div>

      <div className="jr-cta">
        <a className="btn" href="/diagnostico/">Ver o plano para a minha empresa →</a>
        <small>Começa pelo diagnóstico gratuito, em 3 minutos</small>
      </div>
    </>
  );
}


export function ComoFunciona({ atual }) {
  const [flowStep, setFlowStep] = useState(0);
  const [flowTouched, setFlowTouched] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || flowTouched) return undefined;
    const flow = setInterval(() => setFlowStep((s) => (s + 1) % FLOW.length), 2400);
    return () => clearInterval(flow);
  }, [flowTouched]);
  const outros = FLOW.filter((f) => f.k !== atual);
  return (
    <section className="light flow2">
      <div className="wrap">
        <p className="eyebrow">Como funciona na prática</p>
        <h2>Do Google ao seu WhatsApp, <em>sem pagar anúncio</em></h2>
        <div className="fcards">
          {FLOW.map((f, i) => (
            <button
              type="button"
              key={f.t}
              className={'fcard' + (i === flowStep ? ' on' : '')}
              aria-pressed={i === flowStep}
              onClick={() => { setFlowTouched(true); setFlowStep(i); }}
              onMouseEnter={() => { setFlowTouched(true); setFlowStep(i); }}
            >
              <span className="fnum">Passo {i + 1}</span>
              <span className="fic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{f.p}</svg></span>
              <strong>{f.t}</strong>
              <span className="fd">{f.d}</span>
              <span className="fotd">Na OTD: <b>{f.otd}</b>{f.k === atual ? ' · esta página' : ''}</span>
            </button>
          ))}
        </div>
        <div className="fbar" aria-hidden="true"><i style={{ width: ((flowStep + 1) / FLOW.length) * 100 + '%' }} /></div>
        <p className="fout">
          Resultado: <b>um contato que você não pagou por clique</b>. Para levar cada passo mais longe:{' '}
          {outros.map((f, i, a) => (
            <React.Fragment key={f.href}><a href={f.href}>{f.otd}</a>{i < a.length - 1 ? ', ' : '.'}</React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}

export function Prova() {
  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">Prova, não promessa</p>
        <h2>Testamos primeiro em casa. <em>Os clientes confirmam.</em></h2>
        <div className="score"><b>5,0</b><span className="st" aria-hidden="true">★★★★★</span><span>16 avaliações no Google</span></div>
        <div className="reviews">
          {REVIEWS.map((r) => (
            <figure className="rev" key={r.who}>
              <span className="st" aria-label="5 estrelas">★★★★★</span>
              <blockquote>“{r.t}”</blockquote>
              <figcaption>{r.who} · Google</figcaption>
            </figure>
          ))}
        </div>
        <div className="lab2">
          <div className="metric">
            <div className="k">Desempenho no celular · site da OTD</div>
            <div className="v"><s>48</s> 97</div>
            <div className="psi">
              <span><b>95</b>Acessibilidade</span>
              <span><b>100</b>Boas práticas</span>
              <span><b>100</b>SEO</span>
            </div>
            <p>PageSpeed Insights do Google, página inicial, 23 de novembro de 2026.</p>
          </div>
          <div className="metric"><div className="k">Imagens dos serviços · site da OTD</div><div className="v"><s>2,2 MB</s> 82 KB</div><p>Site mais leve carrega antes do cliente desistir.</p></div>
        </div>
      </div>
    </section>
  );
}

export function Investimento({ titulo, texto, itens }) {
  return (
    <section>
      <div className="wrap inv">
        <div>
          <p className="eyebrow">Investimento</p>
          <h2>{titulo}</h2>
          <p className="lead" style={{ marginTop: 16 }}>{texto}</p>
        </div>
        <ul>{itens.map(([b, t]) => <li key={b}><b>{b}</b>{t}</li>)}</ul>
      </div>
    </section>
  );
}

const SERVICOS = [
  ['gmn', '/servicos/google-meu-negocio/', 'Google Meu Negócio'],
  ['seo', '/servicos/seo-trafego-organico/', 'SEO e busca por IA'],
  ['site', '/servicos/criacao-de-sites/', 'Criação de sites'],
  ['auto', '/servicos/automacao-digital/', 'Automação com IA']
];

export function FaqLinks({ faqs, aprofunde, atual }) {
  return (
    <section>
      <div className="wrap">
        <p className="eyebrow">Perguntas frequentes</p>
        <h2>O que você <em>ainda pergunta</em></h2>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <div className="links">
          <div>
            <h3>Aprofunde no tema</h3>
            <div className="row">{aprofunde.map(([h, t]) => <a key={h} href={h}>{t}</a>)}</div>
          </div>
          <div>
            <h3>Outras estruturas</h3>
            <div className="row">
              {SERVICOS.filter(([k]) => k !== atual).map(([k, h, t]) => <a key={k} href={h}>{t}</a>)}
              <a href="/cases/">Cases</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaFinal({ titulo, texto, barra }) {
  return (
    <>
      <section className="redband">
        <div className="wrap rb">
          <div>
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>
          <a className="btn-w" href="/diagnostico/">Fazer diagnóstico gratuito →</a>
        </div>
      </section>
      <div className="mbar"><span>{barra}</span><a href="/diagnostico/">Diagnóstico grátis</a></div>
    </>
  );
}

export function PaginaServico({ children }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <style>{ESTILOS}</style>
      <Navbar
        onOpenQuiz={() => { window.location.href = '/diagnostico/'; }}
        onOpenPilares={() => { window.location.href = '/pilares/'; }}
        onOpenHistoria={() => { window.location.href = '/historia/'; }}
      />
      <div className="seo2">{children}</div>
      <Footer
        onOpenQuiz={() => { window.location.href = '/diagnostico/'; }}
        onOpenPilares={() => { window.location.href = '/pilares/'; }}
        onOpenHistoria={() => { window.location.href = '/historia/'; }}
      />
    </>
  );
}
