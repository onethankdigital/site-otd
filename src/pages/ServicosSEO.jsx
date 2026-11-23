import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lupa, ComoFunciona, SimuladorIA, SimuladorEstrutura, Jornada, Prova, Investimento, FaqLinks, CtaFinal, PaginaServico } from '../components/servico2/blocos';

const FAQS = [
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "Os primeiros sinais aparecem entre 60 e 90 dias, quando o Google começa a mostrar suas páginas. Resultados consistentes chegam entre 4 e 6 meses de trabalho contínuo. Em buscas locais com pouca concorrência, pode ser mais rápido."
  },
  {
    q: "Preciso parar de pagar anúncio?",
    a: "Não. Anúncio e SEO funcionam juntos: o anúncio traz contato agora, enquanto o SEO é construído. Quando as páginas se firmam no Google, você pode reduzir o investimento em anúncio sem sumir das buscas."
  },
  {
    q: "SEO funciona para empresa pequena no ABC?",
    a: "Sim, e muitas vezes funciona melhor. Em buscas locais, como \"contador em Santo André\", a concorrência é menor do que nas buscas nacionais, e uma empresa bem estruturada consegue disputar as primeiras posições."
  },
  {
    q: "O que é GEO e AEO?",
    a: "São os nomes técnicos do trabalho para as buscas feitas por IA. AEO prepara o conteúdo para virar resposta direta, como na visão geral criada por IA do Google. GEO trabalha para que o ChatGPT, o Gemini e o Perplexity citem sua empresa. Os dois dependem de um site bem estruturado."
  },
  {
    q: "Como aparecer na resposta da IA do Google?",
    a: "Com páginas que respondem perguntas reais do cliente de forma direta, dados organizados que o Google consegue ler e as mesmas informações da empresa no site, no Perfil do Google e nas redes."
  }
];

const PIECES = [
  { n: 1, t: "Descobrir o que seu cliente digita", w: "O título da página passa a usar as palavras da busca: quem procura “abrir empresa” encontra “abertura de empresa”.", tech: "pesquisa de palavras-chave" },
  { n: 2, t: "Arrumar o site para o Google ler", w: "Página rápida no celular, com nota, avaliações e informações organizadas. O Google confia mais e sobe o resultado.", tech: "SEO técnico e dados estruturados" },
  { n: 3, t: "Responder as dúvidas antes da ligação", w: "Perguntas reais respondidas no site aparecem direto no Google. O cliente já chega sabendo como funciona.", tech: "conteúdo e perguntas frequentes" },
  { n: 4, t: "Ser a empresa que a IA indica", w: "Mesmos dados no site, no Google e nas redes. Quando alguém pergunta ao ChatGPT, ele consegue confirmar e citar você.", tech: "GEO, AEO e llms.txt" }
];
const POS = ["Página 3 do Google", "Página 2 do Google", "Fim da 1ª página", "Entre os 3 primeiros", "1º resultado e citada pela IA"];
const FILL = [8, 30, 55, 78, 100];

const SEGMENTS = {
  cont: { label: "Contabilidade", link: ["/segmentos/escritorios-de-contabilidade/", "Ver como atendemos escritórios de contabilidade"], q: [["abrir empresa em Santo André", "Google"], ["contador para MEI em São Bernardo", "Google"], ["quanto custa trocar de contador", "Google"], ["contabilidade perto de mim aberta sábado", "Maps"], ["qual o melhor regime tributário para clínica", "IA"], ["contador para empresa de serviços no ABC", "IA"]] },
  adv: { label: "Advocacia", link: ["/segmentos/escritorios-de-advocacia/", "Ver como atendemos escritórios de advocacia"], q: [["advogado trabalhista em Santo André", "Google"], ["advogado de família em São Caetano", "Google"], ["como funciona inventário extrajudicial", "Google"], ["escritório de advocacia perto de mim", "Maps"], ["preciso de advogado para rescisão, o que levar", "IA"], ["advogado previdenciário no ABC atende online", "IA"]] },
  cli: { label: "Clínicas", link: ["/segmentos/clinicas-e-consultorios/", "Ver como atendemos clínicas e consultórios"], q: [["fisioterapia pós-cirúrgica em Santo André", "Google"], ["dermatologista particular em São Bernardo", "Google"], ["clínica de ortopedia que aceita convênio no ABC", "Google"], ["clínica perto de mim aberta agora", "Maps"], ["quanto tempo dura tratamento de fisioterapia", "IA"], ["clínica bem avaliada em Santo André", "IA"]] },
  b2b: { label: "Indústria e B2B", link: ["/diagnostico/", "Fazer o diagnóstico da sua indústria"], q: [["fabricante de displays em São Paulo", "Google"], ["empresa de manutenção industrial no ABC", "Google"], ["fornecedor de embalagens personalizadas", "Google"], ["usinagem sob encomenda em Diadema", "Maps"], ["como escolher fornecedor de peças sob medida", "IA"], ["indústria no ABC que faz lote pequeno", "IA"]] }
};

const FASES = [
  {
    when: 'Mês 1', t: 'Base arrumada', x0: 0, x1: 333,
    resumo: 'Antes de publicar qualquer coisa, deixamos o terreno pronto para o Google confiar na sua empresa.',
    entrega: ['Diagnóstico do site e do Perfil do Google, com as notas de partida', 'Correções técnicas e de velocidade aplicadas no site', 'Mapa das buscas do seu segmento na sua região', 'Plano das páginas e conteúdos dos próximos meses'],
    ve: 'Relatório inicial: onde sua empresa está hoje e o que vai mudar.'
  },
  {
    when: 'Meses 2 e 3', t: 'Primeiras posições', x0: 333, x1: 666,
    resumo: 'Sua empresa passa a ter páginas que respondem exatamente o que o cliente pesquisa.',
    entrega: ['Páginas de serviço criadas ou reescritas para as buscas certas', 'Artigos e perguntas frequentes publicados no site', 'Dados estruturados e llms.txt para o Google e as IAs lerem', 'Perfil do Google com serviços, fotos e atualizações'],
    ve: 'As primeiras buscas em que sua empresa aparece, direto do Google Search Console.'
  },
  {
    when: 'Meses 4 a 6', t: 'Contatos chegando', x0: 666, x1: 1000,
    resumo: 'Com a base firme, reforçamos o que traz visita e ligamos a pesquisa ao seu atendimento.',
    entrega: ['Ajustes nas páginas que mais trazem visita e contato', 'Novos conteúdos para as buscas que dão resultado', 'Preparação contínua para as respostas das IAs', 'Ligação com WhatsApp e CRM, para nenhum contato se perder'],
    ve: 'Relatório mensal com buscas, posições e os contatos que vieram do Google.'
  }
];

export default function ServicosSEO() {
  const [serp, setSerp] = useState('hoje');
  const [touched, setTouched] = useState(false);
  const [on, setOn] = useState({ 1: true, 2: false, 3: false, 4: false });
  const [seg, setSeg] = useState('cont');

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || touched) return undefined;
    const t = setTimeout(() => setSerp('com'), 3000);
    return () => clearTimeout(t);
  }, [touched]);

  const n = Object.values(on).filter(Boolean).length;
  const toggle = (k) => setOn((o) => ({ ...o, [k]: !o[k] }));
  const S = SEGMENTS[seg];

  return (
    <PaginaServico>
        <Helmet>
          <title>SEO e Busca por IA para Empresas no ABC | One Thank Digital</title>
          <meta name="description" content="SEO para o Google e para as respostas de IA (GEO/AEO): sua empresa no Google, no AI Overview, no ChatGPT e no Gemini, sem depender de anúncio." />
          <meta property="og:title" content="SEO e Busca por IA (GEO/AEO) para Empresas B2B | One Thank Digital" />
          <meta property="og:description" content="SEO para o Google e para as respostas de IA (GEO/AEO): sua empresa no Google, no AI Overview, no ChatGPT e no Gemini, sem depender de anúncio." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://onethank.com.br/servicos/seo-trafego-organico/" />
          <meta property="og:image" content="https://onethank.com.br/hero-seo-organico.webp" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="SEO e Busca por IA (GEO/AEO) para Empresas B2B | One Thank Digital" />
          <meta property="twitter:description" content="SEO para o Google e para as respostas de IA (GEO/AEO): sua empresa no Google, no AI Overview, no ChatGPT e no Gemini, sem depender de anúncio." />
          <meta property="twitter:image" content="https://onethank.com.br/hero-seo-organico.webp" />
          <link rel="canonical" href="https://onethank.com.br/servicos/seo-trafego-organico/" />
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": FAQS.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "SEO e Otimização para Buscas por IA (GEO/AEO)",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "One Thank Digital",
                  "address": { "@type": "PostalAddress", "addressLocality": "Santo André", "addressRegion": "SP" }
                },
                "areaServed": [
                  { "@type": "City", "name": "Santo André" },
                  { "@type": "City", "name": "São Bernardo do Campo" },
                  { "@type": "City", "name": "São Caetano do Sul" }
                ],
                "offers": {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "PriceSpecification", "priceType": "https://schema.org/MinimumBasePrice" },
                  "availability": "https://schema.org/InStock"
                }
              }
            ])}
          </script>
        </Helmet>

        {/* TOPO com simulação de busca */}
        <section style={{ borderTop: 0, paddingTop: 40 }}>
          <div className="wrap head-grid">
            <div>
              <h1 className="eyebrow">SEO e busca por IA para empresas B2B no ABC Paulista</h1>
              <p className="display">Seu cliente está pesquisando agora. <em>Ele encontra você</em> ou o concorrente?</p>
              <p className="lead">Fazemos sua empresa aparecer quando alguém do ABC procura o seu serviço no Google ou pergunta ao ChatGPT. Sem pagar por clique.</p>
              <div className="head-cta">
                <a className="btn" href="/diagnostico/">Ver como minha empresa aparece hoje →</a>
                <small>Diagnóstico gratuito em 3 minutos</small>
              </div>
            </div>
            <div className="serp-box">
              <div className="segc" role="tablist" aria-label="Comparar resultado">
                <button type="button" role="tab" aria-selected={serp === 'hoje'} onClick={() => { setTouched(true); setSerp('hoje'); }}>Hoje, sem SEO</button>
                <button type="button" role="tab" aria-selected={serp === 'com'} onClick={() => { setTouched(true); setSerp('com'); }}>Com SEO e busca por IA</button>
              </div>
              <div className="serp" aria-live="polite">
                <div className="qbar"><Lupa s={16} /> contabilidade para pequena empresa em santo andré</div>
                {serp === 'hoje' ? (
                  <div>
                    <div className="res"><div className="u">contabilidadealfa.com.br</div><div className="t">Contabilidade Alfa · Santo André</div><div className="d">Abertura de empresa, MEI e Simples Nacional. Atendimento no centro.</div></div>
                    <div className="res"><div className="u">escritoriobeta.com.br</div><div className="t">Escritório Beta Contábil</div><div className="d">Contabilidade para empresas do ABC há 15 anos.</div></div>
                    <div className="res"><div className="u">guiadoabc.com.br › contadores</div><div className="t">10 contadores em Santo André</div><div className="d">Lista com endereço e telefone de escritórios contábeis da cidade.</div></div>
                    <div className="missing">Sua empresa não aparece na primeira página.<br />Quem pesquisou fechou com quem estava aqui.</div>
                  </div>
                ) : (
                  <div>
                    <div className="aio">
                      <div className="aio-t">✦ Visão geral criada por IA</div>
                      <p>Para pequenas empresas em Santo André, escritórios como a <b>Sua Contabilidade</b> <span className="cite">suacontabilidade.com.br</span> oferecem abertura de empresa, MEI e Simples Nacional, com atendimento no centro e aos sábados.</p>
                    </div>
                    <div className="res you"><div className="u">suacontabilidade.com.br › pequenas-empresas</div><div className="t">Contabilidade para pequenas empresas em Santo André<span className="pin">VOCÊ</span></div><div className="d">Abertura de empresa em até 7 dias, MEI e Simples Nacional. Fale no WhatsApp.</div></div>
                    <div className="res"><div className="u">contabilidadealfa.com.br</div><div className="t">Contabilidade Alfa · Santo André</div><div className="d">Abertura de empresa, MEI e Simples Nacional.</div></div>
                    <div className="res"><div className="u">escritoriobeta.com.br</div><div className="t">Escritório Beta Contábil</div><div className="d">Contabilidade para empresas do ABC.</div></div>
                  </div>
                )}
              </div>
              <div className="cap">Exemplo ilustrativo · toque nas abas para comparar</div>
            </div>
          </div>
        </section>

        <ComoFunciona atual="seo" />

        {/* O QUE FAZEMOS (interativo) */}
        <section>
          <div className="wrap">
            <p className="eyebrow">O que fazemos</p>
            <h2>Ative cada etapa e veja <em>sua empresa subir no Google</em></h2>
            <p className="lead" style={{ marginTop: 14 }}>O SEO acontece em quatro etapas. Toque em cada uma e acompanhe, ao lado, o que muda para quem pesquisa.</p>
            <div className="lab4">
              <div className="lab4-preview" aria-live="polite">
                <div className="meter-top"><span>Onde sua empresa aparece</span><b>{POS[n]}</b></div>
                <div className="meter-bar"><i style={{ width: FILL[n] + '%' }} /></div>
                <div className="chips">
                  <span className={'chip' + (n >= 2 ? ' on' : '')}>Google</span>
                  <span className={'chip' + (on[2] && n >= 2 ? ' on' : '')}>Google Maps</span>
                  <span className={'chip' + (on[4] ? ' on' : '')}>ChatGPT e Gemini</span>
                </div>
                <div className="mini-serp">
                  <div className="qbar"><Lupa /> abrir empresa em santo andré</div>
                  <div className={'r-you' + (n >= 3 ? ' up' : '')}>
                    <div className="u">{on[1] ? 'suacontabilidade.com.br › abertura-de-empresa' : 'suacontabilidade.com.br'}</div>
                    <div className="t">{on[1] ? 'Abertura de empresa em Santo André em até 7 dias | Sua Contabilidade' : 'Home - Sua Contabilidade'}</div>
                    {on[2] && <div className="rich"><span className="stars">★★★★★</span> 4,9 · 87 avaliações · <span className="fast">⚡ carrega em 1,2 s</span></div>}
                    <div className="d">{on[1] ? 'Abra seu CNPJ em Santo André com acompanhamento do início ao fim. MEI, Simples Nacional e prestadores de serviço.' : 'Bem-vindo ao nosso site. Somos uma empresa séria e comprometida com nossos clientes.'}</div>
                    {on[3] && (
                      <div className="faqmini">
                        <div>Quanto custa abrir uma empresa em 2026? <span>▾</span></div>
                        <div>Quanto tempo leva para abrir o CNPJ? <span>▾</span></div>
                      </div>
                    )}
                  </div>
                  {on[4] && (
                    <div className="ai-mini">
                      <div className="ai-q">“Qual contabilidade em Santo André abre empresa rápido?”</div>
                      <div className="ai-a">✦ A <b>Sua Contabilidade</b> abre empresas em até 7 dias e atende MEI, segundo o site e o perfil no Google.</div>
                    </div>
                  )}
                </div>
                <div className="cap">Exemplo ilustrativo</div>
              </div>
              <div className="pieces" role="group" aria-label="Etapas do SEO">
                {PIECES.map((p) => (
                  <button type="button" key={p.n} className="piece" aria-pressed={on[p.n]} onClick={() => toggle(p.n)}>
                    <span className="sw" aria-hidden="true"><i /></span>
                    <span className="pc">
                      <span className="pn">Etapa {p.n}</span>
                      <strong>{p.t}</strong>
                      <span className="pw">{p.w}</span>
                      <span className="pt">Termo técnico: {p.tech}</span>
                    </span>
                  </button>
                ))}
                <div className="pieces-foot">
                  <button type="button" className="btn-ghost" onClick={() => setOn({ 1: true, 2: true, 3: true, 4: true })}>Ativar todas</button>
                  <button type="button" className="btn-ghost" onClick={() => setOn({ 1: false, 2: false, 3: false, 4: false })}>Recomeçar</button>
                  <span>{n} de 4 etapas ativas</span>
                </div>
              </div>
            </div>
            <div className="mid-cta">
              <a className="btn" href="/diagnostico/">Quero ver minha empresa assim →</a>
              <small>Diagnóstico gratuito, resultado na hora</small>
            </div>
          </div>
        </section>

        {/* BUSCAS POR SEGMENTO */}
        <section className="light">
          <div className="wrap">
            <p className="eyebrow">O que seus clientes pesquisam</p>
            <h2>Escolha o seu segmento e veja <em>as buscas que disputamos</em></h2>
            <div className="tabs" role="tablist" aria-label="Segmento">
              {Object.entries(SEGMENTS).map(([k, v]) => (
                <button type="button" key={k} role="tab" aria-selected={seg === k} onClick={() => setSeg(k)}>{v.label}</button>
              ))}
            </div>
            <ul className="queries">
              {S.q.map(([q, kind]) => (
                <li key={q}>
                  <Lupa c="currentColor" s={16} />
                  <span>{q}</span>
                  <span className={'kind' + (kind === 'IA' ? ' ia' : '')}>{kind === 'IA' ? 'pergunta à IA' : kind === 'Maps' ? 'Google Maps' : 'Google'}</span>
                </li>
              ))}
            </ul>
            <a className="seg-link" href={S.link[0]}>{S.link[1]} →</a>
          </div>
        </section>

        {/* BUSCA POR IA (simulador) */}
        <section className="aisec">
          <SimuladorIA />
        </section>

        {/* ESTRUTURA DIGITAL (simulador de vazamento) */}
        <section className="leaksec">
          <SimuladorEstrutura atual="seo" />
        </section>

        {/* O QUE ESPERAR */}
        <section>
          <div className="wrap">
            <Jornada fases={FASES} titulo={<>SEO é construção. <em>Veja o que entregamos em cada fase</em></>} />
          </div>
        </section>

        <Prova />

        <Investimento
          titulo={<>Sem pacote de links, <em>sem promessa de 1º lugar</em></>}
          texto="O valor é definido depois de olhar o seu segmento na região: quantos concorrentes disputam as mesmas buscas e o que o seu site já tem. O objetivo é trocar um gasto que nunca termina, o anúncio, por um ativo que continua trazendo cliente."
          itens={[
            ['Diagnóstico antes da proposta', 'Você sabe onde está antes de decidir.'],
            ['Relatório todo mês', 'Buscas, posições e contatos que vieram do Google.'],
            ['Funciona junto com anúncio', 'O anúncio traz resultado agora, o SEO reduz essa dependência com o tempo.']
          ]}
        />

        <FaqLinks
          atual="seo"
          faqs={FAQS}
          aprofunde={[
            ['/guia/seo-trafego-organico/', 'Guia de SEO B2B'],
            ['/insights/seo-organico-vs-trafego-pago/', 'SEO ou tráfego pago?'],
            ['/insights/concorrente-aparece-antes-no-google/', 'Concorrente aparece antes de você?'],
            ['/insights/como-aparecer-no-chatgpt-e-na-ia-do-google/', 'Como aparecer no ChatGPT']
          ]}
        />

        <CtaFinal
          titulo={<>Como sua empresa aparece <em>hoje</em> no Google?</>}
          texto="Responda 20 perguntas em 3 minutos e receba o resultado por pilar, incluindo SEO e busca por IA."
          barra="Sua empresa aparece no Google?"
        />
    </PaginaServico>
  );
}
