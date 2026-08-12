// src/pages/OneHub.jsx
// Rota sugerida: /onehub
// Fontes: adicionar no index.html --
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
//
// CTAs SEM integração ainda — apontam pra wa.me. Trocar por fluxo real (form/n8n) depois do go-live.

import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Quero%20conhecer%20o%20OneHub"; // TODO: número real

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add("in"),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "", ...props }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  );
}

export default function OneHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>OneHub — CRM + WhatsApp + IA para Operações Comerciais | One Thank Digital</title>
        <meta name="description" content="O OneHub transforma seu WhatsApp em operação comercial estruturada. CRM integrado, agente de IA e automações para fechar mais negócios sem contratar mais pessoas." />
        <link rel="canonical" href="https://onethank.com.br/onehub" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/onehub" />
        <meta property="og:title" content="OneHub — CRM + WhatsApp + IA | One Thank Digital" />
        <meta property="og:description" content="Transforme cada conversa em processo comercial. CRM nativo, agente de IA e automações no WhatsApp." />
        <meta property="og:image" content="https://onethank.com.br/hero-bg.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://onethank.com.br/onehub" />
        <meta property="twitter:title" content="OneHub — CRM + WhatsApp + IA | One Thank Digital" />
        <meta property="twitter:description" content="Transforme cada conversa em processo comercial. CRM nativo, agente de IA e automações no WhatsApp." />
        <meta property="twitter:image" content="https://onethank.com.br/hero-bg.webp" />
      </Helmet>

      <div className="bg-[#FAF7F2] text-[#211E1B] font-sans overflow-x-hidden">
      <style>{`
        .font-display { font-family: 'Fraunces', serif; }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .8s ease, transform .8s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }
        .journey-line { position:absolute; top:32px; left:0; right:0; height:2px; background:repeating-linear-gradient(90deg, #D97757 0 8px, transparent 8px 16px); z-index:0; }
        body { font-family: 'Manrope', sans-serif; }
        .hero-img { border-radius: 16px; box-shadow: 0 24px 64px -12px rgba(33,30,27,.18), 0 0 0 1px rgba(33,30,27,.06); }
      `}</style>

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BE212A]" />
          <span className="font-display text-xl tracking-tight">OneHub</span>
        </div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
           className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#211E1B] text-[#FAF7F2]">
          Testar grátis
        </a>
      </nav>

      {/* 1. HERO */}
      <section className="relative z-10 overflow-hidden min-h-[520px] md:min-h-[620px] flex flex-col justify-end md:justify-center">

        {/* Imagem de fundo — cobre a seção inteira */}
        <img
          src="/onehub-hero.webp"
          alt="Interface do OneHub — CRM e automação de WhatsApp integrados"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />

        {/* Overlay gradiente — garante legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/10 md:to-transparent" />
        {/* Overlay inferior em mobile para texto não disputar com a imagem */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/80 via-transparent to-transparent md:hidden" />

        {/* Conteúdo de texto — fica sobre a imagem */}
        <div className="relative z-10 px-6 md:px-16 pt-14 pb-16 md:pt-20 md:pb-28 max-w-2xl">
          <p className="font-display italic text-[#D97757] text-sm mb-5">
            Ecossistema OneHub · CRM + WhatsApp + IA
          </p>
          <h1 className="font-display font-medium leading-[1.05] text-[42px] md:text-[58px] lg:text-[68px]">
            Seu WhatsApp vende.<br />
            <span className="italic text-[#BE212A]">Só ninguém está cuidando dele.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl max-w-xl text-[#4A453F]">
            OneHub transforma cada conversa em processo comercial — sem perder o tom humano.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
               className="px-7 py-3.5 rounded-full font-semibold text-white shadow-lg bg-[#BE212A]">
              Testar o OneHub grátis
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
               className="px-7 py-3.5 rounded-full font-semibold border-2 border-[#211E1B]">
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </div>

      </section>

      {/* 2. SITUAÇÃO + PROBLEMA */}
      <Reveal className="relative z-10 px-6 md:px-16 py-20 md:py-28 bg-[#211E1B] text-[#FAF7F2]">
        <div className="max-w-3xl">
          <h2 className="font-display italic text-3xl md:text-5xl leading-tight">
            Muitas conversas.<br />Muito movimento.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#C9C3B8]">
            O WhatsApp virou a porta de entrada do seu negócio. O problema é que ele nunca foi feito
            pra administrar operação comercial nenhuma.
          </p>
          <p className="mt-4 text-lg md:text-xl font-semibold text-[#D97757]">
            Excelente canal de comunicação. Péssimo sistema de gestão.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-4 gap-5">
          {[
            "Leads que se perdem no meio da rolagem de mensagens",
            "Follow-ups que ficam pra depois — e o depois nunca chega",
            "Nenhuma visão real de quantas oportunidades estão em aberto",
            "Você (ou seu time) apagando incêndio, em vez de vender",
          ].map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#2C2822]">
              <p className="font-display text-2xl mb-2 text-[#BE212A]">{`0${i + 1}`}</p>
              <p className="text-sm text-[#DED8CC]">{t}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 3. IMPLICAÇÃO */}
      <Reveal className="relative z-10 px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed text-[#4A453F]">
            Cada lead perdido no chat não é só uma mensagem sem resposta — é uma venda que foi pro
            concorrente que respondeu primeiro. Sem visibilidade do funil, toda decisão de crescimento
            vira palpite, não dado.
          </p>
          <p className="font-display italic text-2xl md:text-4xl mt-10 leading-snug">
            O aplicativo padrão não é uma ferramenta gratuita.<br />
            É o <span className="text-[#BE212A]">teto de vidro</span> da sua operação.
          </p>
          <p className="mt-6 text-base text-[#4A453F]">Você só não vê o preço até tentar crescer além dele.</p>
        </div>
      </Reveal>

      {/* 4. SOLUÇÃO */}
      <Reveal className="relative z-10 px-6 md:px-16 py-20 md:py-28 bg-[#F3EEE5]">
        <div className="max-w-2xl">
          <p className="font-display italic text-[#D97757] text-sm mb-3">A solução</p>
          <h2 className="font-display text-3xl md:text-5xl">Apresentando o OneHub.</h2>
          <p className="mt-3 text-lg text-[#4A453F]">Tecnologia aplicada à operação real.</p>
        </div>
        <p className="mt-10 font-display italic text-xl md:text-2xl max-w-xl text-[#D97757]">
          Primeiro organizamos. Depois automatizamos. Então escalamos com inteligência.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            ["CAMADA 1", "Organização & CRM", "Fim do caos. Funil visível, follow-up que não escapa mais."],
            ["CAMADA 2", "Automação & IA", "Um agente de inteligência artificial cuidando das conversas que hoje ninguém no seu time tem tempo de responder."],
            ["CAMADA 3", "Conversão & Escala", "Dado real pra decidir — não achismo."],
          ].map(([tag, title, desc], i) => (
            <div key={i} className="p-7 rounded-2xl bg-white border border-[#E4DDD0] transition-transform hover:-translate-y-1.5 hover:shadow-xl">
              <span className="text-xs font-bold tracking-wider text-[#BE212A]">{tag}</span>
              <h3 className="font-display text-xl mt-2 mb-3">{title}</h3>
              <p className="text-sm text-[#4A453F]">{desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 5. PRA QUEM É */}
      <Reveal className="relative z-10 px-6 md:px-16 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-4xl mb-12">Pra quem o OneHub foi desenhado</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Operações B2B", "Negociam com outras empresas, ciclo de venda mais longo e consultivo."],
            ["Prestadores de serviço", "Dependem de follow-up rigoroso e relacionamento no WhatsApp."],
            ["Vendas high-ticket", "Cada lead perdido representa um alto custo de oportunidade."],
          ].map(([title, desc], i) => (
            <div key={i} className="p-7 rounded-2xl bg-[#211E1B] text-[#FAF7F2]">
              <h3 className="font-display text-lg mb-2 text-[#D97757]">{title}</h3>
              <p className="text-sm text-[#C9C3B8]">{desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 6. JORNADA */}
      <Reveal className="relative z-10 px-6 md:px-16 py-20 md:py-28 bg-[#F3EEE5]">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-5xl">Comece onde você está.</h2>
          <p className="mt-3 text-lg text-[#4A453F]">
            A evolução é natural — cada etapa resolve a dor da anterior, sem perder histórico, sem esfriar lead.
          </p>
        </div>
        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="journey-line hidden md:block" />
          {[
            ["1", "Smart", "Fim do caos. Controle visual absoluto.",
              ["Centraliza contatos e tarefas", "Funil de vendas visível", "Follow-up estruturado"],
              "Ideal para primeiros passos na organização comercial.", false],
            ["2", "Flow Essencial", "Sua primeira camada de automação e IA.",
              ["Tudo do Smart", "Um agente de IA nas conversas", "Automação de processos primários"],
              "Ideal para reduzir esforço manual sem perder organização.", false],
            ["3", "Flow Pro", "Automação de alto nível pra crescimento acelerado.",
              ["Tudo do Flow Essencial", "Automações complexas e ramificadas", "Estrutura para equipes em expansão"],
              "Ideal para operações já validadas.", false],
            ["4", "Scale", "Inteligência, rastreabilidade e visão estratégica.",
              ["Tudo do Flow Pro", "Analytics e conversões avançado", "Atendimento consultivo dedicado", "Bônus: módulo OneHub Social"],
              "Ideal para alto volume e gestão rigorosa.", true],
          ].map(([n, title, tag, items, ideal, highlight], i) => (
            <div key={i}
                 className={`relative bg-white rounded-2xl p-6 transition-transform hover:-translate-y-1.5 hover:shadow-xl ${highlight ? "border-2 border-[#BE212A]" : "border border-[#E4DDD0]"}`}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-display text-sm font-semibold mb-4 bg-[#BE212A] text-white">{n}</div>
              <h3 className="font-display text-lg mb-1">{title}</h3>
              <p className="text-xs italic mb-3 text-[#D97757]">{tag}</p>
              <ul className="text-sm space-y-1.5 text-[#4A453F]">
                {items.map((it, j) => <li key={j}>· {it}</li>)}
              </ul>
              <p className="text-xs mt-4 pt-4 border-t border-[#E4DDD0] text-[#4A453F]">{ideal}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
             className="inline-block px-7 py-3.5 rounded-full font-semibold text-white bg-[#211E1B]">
            Quero descobrir qual etapa é a minha
          </a>
        </div>
      </Reveal>

      {/* 7. DIFERENCIAL */}
      <Reveal className="relative z-10 px-6 md:px-16 py-24 md:py-32 text-center bg-[#BE212A] text-white">
        <h2 className="font-display italic text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
          Não é CRM que ganhou WhatsApp.<br />É WhatsApp que ganhou cérebro.
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-[#FBE2E1]">
          O agente de IA não é um chatbot colado depois. É inteligência nativa em cada conversa —
          configurado sob medida pro escopo do seu negócio, do primeiro "oi" até o fechamento.
        </p>
      </Reveal>

      {/* 8. CTA FINAL */}
      <Reveal className="relative z-10 px-6 md:px-16 py-24 md:py-32 text-center">
        <h2 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto">
          Pare de apenas operar.<br />
          <span className="italic text-[#BE212A]">Comece a escalar com inteligência.</span>
        </h2>
        <p className="mt-6 text-lg text-[#4A453F]">Dê o próximo passo na maturidade comercial da sua empresa.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
           className="inline-block mt-10 px-9 py-4 rounded-full font-semibold text-white text-lg shadow-xl bg-[#BE212A]">
          Solicitar Diagnóstico Consultivo Gratuito
        </a>
      </Reveal>

      <footer className="relative z-10 px-6 md:px-16 py-8 border-t border-[#E4DDD0] text-center text-xs text-[#4A453F]">
        OneHub — um ecossistema OTD · onethank.com.br/onehub
      </footer>
    </div>
    </>
  );
}
