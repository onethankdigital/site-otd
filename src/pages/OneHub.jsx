// src/pages/OneHub.jsx
// Rota: /onehub
// Direção Visual: Craft editorial premium (Sóbrio, tipografia forte, respiro, contraste intencional)
// Paleta: Base marfim #FAF7F2, Texto carvão #211E1B, Vermelho #BE212A (CTA/acento), Terracota #D97757 (apoio)

import { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OneHubMotionSection from "../components/OneHubMotionSection";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_LINK = "https://wa.me/5511978679090?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20os%2014%20dias%20assistidos%20do%20OneHub.";

export default function OneHub() {
  const container = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // 1. DESKTOP & REDUCED MOTION (Sóbrio, editorial e fluido)
    mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
      // Entrada sutil do Hero Text & Background
      const tlHero = gsap.timeline({ defaults: { ease: "power2.out" } });
      tlHero.from(".nav-anim", { y: -15, autoAlpha: 0, duration: 0.6 })
            .from(".hero-anim", { y: 25, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, "-=0.3")
            .from(".hero-bg-anim", { autoAlpha: 0, scale: 1.02, duration: 1.2 }, "-=0.6");

      // CENA 2: Situação & Problema (Sóbrio)
      gsap.fromTo(".scene-problema-title", 
        { autoAlpha: 0, y: 30 },
        { 
          autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: ".scene-problema", start: "top 80%" }
        }
      );

      gsap.utils.toArray(".card-problema").forEach((card, index) => {
        gsap.fromTo(card, 
          { autoAlpha: 0, y: 30 + index * 10 },
          {
            autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // CENA 3: Teto de Vidro & Implicação
      gsap.fromTo(".scene-teto-text",
        { autoAlpha: 0.4, y: 20 },
        {
          autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: ".scene-teto",
            start: "top 80%"
          }
        }
      );

      // CENA 4: Solução em 3 Camadas
      gsap.fromTo(".scene-solucao-header", 
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: ".scene-solucao", start: "top 80%" }
        }
      );

      gsap.utils.toArray(".camada-card").forEach((card) => {
        gsap.fromTo(card,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // CENA 5: Jornada
      gsap.fromTo(".journey-card",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: ".scene-jornada",
            start: "top 75%"
          }
        }
      );
    });

    // 2. MOBILE E PREFERS-REDUCED-MOTION (Experiência Leve e Fluida)
    mm.add("(max-width: 768px), (prefers-reduced-motion: reduce)", () => {
      gsap.from(".nav-anim", { autoAlpha: 0, duration: 0.4 });
      gsap.from(".hero-anim", { autoAlpha: 0, y: 15, duration: 0.5, stagger: 0.08 });

      gsap.utils.toArray(".gsap-reveal, .card-problema, .camada-card, .journey-card").forEach(el => {
        gsap.fromTo(el, 
          { autoAlpha: 0, y: 15 },
          {
            autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%" }
          }
        );
      });
    });

  }, { scope: container });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>OneHub — WhatsApp API Oficial (Meta) · Atendimento + Vendas com IA | One Thank Digital</title>
        <meta name="description" content="O OneHub organiza seu WhatsApp num sistema só: a IA responde na hora, sua equipe atende no mesmo número oficial, e você vê cada negócio num painel." />
        <link rel="canonical" href="https://onethank.com.br/onehub" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/onehub" />
        <meta property="og:title" content="OneHub — WhatsApp API Oficial (Meta) · Atendimento + Vendas com IA" />
        <meta property="og:description" content="O OneHub organiza seu WhatsApp num sistema só: a IA responde na hora, sua equipe atende no mesmo número oficial, e você vê cada negócio num painel." />
        <meta property="og:image" content="https://onethank.com.br/onehub-transformacao-caos-ao-crm.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://onethank.com.br/onehub" />
        <meta property="twitter:title" content="OneHub — WhatsApp API Oficial (Meta) · Atendimento + Vendas com IA" />
        <meta property="twitter:description" content="O OneHub organiza seu WhatsApp num sistema só: a IA responde na hora, sua equipe atende no mesmo número oficial, e você vê cada negócio num painel." />
        <meta property="twitter:image" content="https://onethank.com.br/onehub-transformacao-caos-ao-crm.webp" />
      </Helmet>

      <div ref={container} className="bg-[#FAF7F2] text-[#211E1B] font-sans overflow-x-hidden selection:bg-[#BE212A] selection:text-white">
        <style>{`
          .font-display { font-family: 'Fraunces', 'DM Serif Display', Georgia, serif; letter-spacing: -0.015em; }
          .journey-line { position:absolute; top:32px; left:0; right:0; height:2px; background:repeating-linear-gradient(90deg, #D97757 0 8px, transparent 8px 16px); z-index:0; }
          .gsap-reveal, .nav-anim, .hero-anim, .hero-bg-anim { will-change: transform, opacity; }
        `}</style>

        {/* 1. HERO SECTION COM BACKGROUND FULL E OPACIDADE CLARA EQUILIBRADA */}
        <section className="hero-section relative z-10 overflow-hidden min-h-[640px] sm:min-h-[720px] md:min-h-[820px] flex flex-col justify-between bg-[#FAF7F2] pt-6 pb-16 sm:pt-8 sm:pb-20 md:pt-10 md:pb-24">
          
          {/* Imagem de Fundo Full-Bleed em Alta Visibilidade */}
          <div className="hero-bg-anim absolute inset-0 w-full h-full z-0 pointer-events-none">
            <img
              src="/onehub-transformacao-caos-ao-crm.webp"
              alt="Transformação OneHub: Do caos no WhatsApp à governança comercial no CRM"
              width={2400}
              height={1350}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center md:object-right opacity-55 md:opacity-65"
            />
            {/* Máscara clara com transição suave que clareia o lado esquerdo sem escurecer o texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/85 to-[#FAF7F2]/20 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/75 via-transparent to-[#FAF7F2]/60" />
            {/* Transição Suave no Rodapé da Hero para o Carvão (#211E1B) da Seção 2 */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-b from-transparent via-[#211E1B]/50 to-[#211E1B] pointer-events-none" />
          </div>

          {/* Header Alinhado: Logo OneHub Ampliada */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full flex items-center justify-between mb-8 sm:mb-12">
            <a href="/onehub" className="nav-anim inline-block flex-shrink-0">
              <img
                src="/logo-onehub-black.svg"
                alt="OneHub Logo"
                width={220}
                height={58}
                loading="eager"
                decoding="async"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Conteúdo de Texto por Cima com TAG no Lado Esquerdo */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full my-auto">
            <div className="max-w-2xl">
              
              {/* TAG / Eyebrow no Lado Esquerdo acima do H1 */}
              <div className="hero-anim inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFE9DF]/95 border border-[#DDD5C7] text-[#211E1B] text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D97757] flex-shrink-0" />
                <span>WhatsApp API Oficial (Meta) · Atendimento + Vendas com IA</span>
              </div>

              {/* H1 em 2 linhas (2ª em vermelho #BE212A) */}
              <h1 className="hero-anim font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[62px] leading-[1.12] text-[#211E1B] tracking-tight drop-shadow-sm">
                Seu WhatsApp recebe cliente o dia todo.<br />
                <span className="text-[#BE212A]">E perde venda na bagunça.</span>
              </h1>

              {/* Subtítulo */}
              <p className="hero-anim mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#332F2A] leading-relaxed max-w-2xl font-normal">
                O OneHub organiza seu WhatsApp num sistema só: a IA responde na hora, sua equipe atende no mesmo número oficial, e você vê cada negócio num painel. Nenhum lead esquecido — sem perder o tom humano.
              </p>

              {/* CTA Primário & Microcopy (Mobile First — Visível acima da dobra) */}
              <div className="hero-anim mt-7 sm:mt-9 flex flex-col items-start">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl font-bold text-white text-base sm:text-lg bg-[#BE212A] hover:bg-[#A61B23] transition-all shadow-md active:scale-[0.99]"
                >
                  Quero meus 14 dias assistidos — grátis
                </a>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#5C554E] font-medium">
                  Montamos sua operação com você. Sem custo, sem cartão, sem fidelidade.
                </p>
              </div>

            </div>
          </div>

          {/* Espaçador inferior */}
          <div className="relative z-10"></div>
        </section>

        {/* 2. O PREÇO DO QUE VOCÊ NÃO VÊ (DARK EDITORIAL — PAS COPY) */}
        <section className="scene-problema relative z-10 px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[#211E1B] text-[#FAF7F2] overflow-hidden">

          {/* Background Full-Bleed: Silhueta do Caos no WhatsApp */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <img
              src="/whatsapp-caos.webp"
              alt=""
              aria-hidden="true"
              width={2400}
              height={1350}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center opacity-[0.42]"
            />
            {/* Overlay suave mantendo a cobertura total do background */}
            <div className="absolute inset-0 bg-[#211E1B]/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#211E1B]/80 via-transparent to-[#211E1B]/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">

            {/* Cabeçalho */}
            <div className="scene-problema-title max-w-3xl mb-14 md:mb-18">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#BE212A] block mb-5">
                O PREÇO DO QUE VOCÊ NÃO VÊ
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-[46px] leading-[1.18] tracking-tight">
                Você responde 50 mensagens por dia.{" "}
                <span className="text-[#FAF7F2]/60">
                  Quantas viram faturamento no fim do mês?
                </span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
                Seu time trabalha, o WhatsApp não para e parece produtividade. Mas sem funil, sem histórico centralizado e sem IA para qualificar quem tem dinheiro no bolso, você está apenas pagando hora extra para operar no escuro.
              </p>
            </div>

            {/* Grid 2×2 de Cards Diagnóstico */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-12 lg:mb-16">
              {[
                {
                  num: "01",
                  title: "Resposta lenta mata o interesse",
                  desc: "O lead entra com intenção de compra às 9h e só é respondido às 14h. Ele já fechou com o concorrente que atendeu em 2 minutos.",
                  impact: "Perda de até 80% da intenção de compra.",
                },
                {
                  num: "02",
                  title: "Histórico zerado na volta do cliente",
                  desc: "O contato retorna 3 semanas depois e ninguém sabe o que foi combinado. Ele percebe a falta de processo e desiste da negociação.",
                  impact: "Destruição da autoridade comercial.",
                },
                {
                  num: "03",
                  title: "Funil de vendas invisível",
                  desc: "Você tem centenas de conversas abertas, mas não sabe quantas são propostas ativas e quantas esfriaram há dias no celular de alguém.",
                  impact: "Impossibilidade de prever receita.",
                },
                {
                  num: "04",
                  title: "Decisão na base do palpite",
                  desc: "O faturamento oscila e você só descobre no fechamento contábil. Sem telemetria diária, toda reunião vira discussão sem fatos.",
                  impact: "Gestão cega sem saber onde ajustar.",
                },
              ].map((card) => (
                <div
                  key={card.num}
                  className="card-problema group p-6 sm:p-7 rounded-2xl bg-[#1A1714] border border-[#2E2824] hover:border-[#BE212A]/40 transition-colors duration-300"
                >
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#BE212A] block mb-3 leading-none">
                    {card.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FAF7F2] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#C9C3B8] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <div className="flex items-start gap-2 pt-4 border-t border-[#2E2824]">
                    <span className="w-2 h-2 rounded-full bg-[#BE212A] flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm font-semibold text-[#D97757]">
                      Impacto: {card.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card de Autoridade + Ponte para a Solução */}
            <div className="gsap-reveal p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#1A1714] border-l-4 border-[#BE212A]">
              <p className="text-base sm:text-lg lg:text-xl font-bold text-[#FAF7F2] leading-relaxed mb-4">
                <span className="text-xl sm:text-2xl mr-2">📊</span>
                &ldquo;Empresas que demoram mais de 5 minutos para responder um lead perdem até 80% das chances de conversão.&rdquo;
                <span className="block sm:inline text-sm sm:text-base font-normal text-[#94A3B8] ml-0 sm:ml-2 mt-1 sm:mt-0">
                  — Harvard Business Review
                </span>
              </p>
              <p className="text-sm sm:text-base text-[#D97757] font-semibold leading-relaxed">
                O OneHub resolve essa equação: atendimento imediato com IA, distribuição automática e governança total em um único painel.
              </p>
            </div>

          </div>
        </section>

        {/* 3. A TRANSFORMAÇÃO OPERACIONAL — ANTES VS. DEPOIS (LIGHT EDITORIAL) */}
        <section className="scene-teto relative z-10 px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[#F4EFE6] border-b border-[#E4DDD0]/60">
          <div className="max-w-7xl mx-auto">

            {/* Cabeçalho */}
            <div className="scene-teto-text max-w-3xl mb-14 md:mb-18">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#BE212A] block mb-4">
                A TRANSFORMAÇÃO OPERACIONAL
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.18] text-[#211E1B] tracking-tight">
                Sua empresa não precisa de mais um canal.{" "}
                <span className="text-[#BE212A] block sm:inline">
                  Precisa de governança comercial.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#5C554E] leading-relaxed max-w-2xl">
                Veja a diferença entre operar o WhatsApp no improviso e ter a engenharia do OneHub acelerando suas vendas todos os dias.
              </p>
            </div>

            {/* Grid Comparativo Antes vs Depois */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
              
              {/* Coluna 1: Sem Governança (O Velho Jeito) */}
              <div className="p-7 sm:p-9 rounded-3xl bg-[#EFE9DF] border border-[#E0D7C8] shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D8CFC0]">
                  <span className="w-8 h-8 rounded-full bg-[#BE212A]/10 text-[#BE212A] flex items-center justify-center font-bold text-sm">
                    ✕
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#211E1B]">
                      SEM GOVERNANÇA
                    </h3>
                    <p className="text-xs font-semibold text-[#8C8275] uppercase tracking-wider">
                      Operação no Escuro
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Conversas espalhadas em 3 ou 4 celulares individuais de vendedores",
                    "Vendedor sai da empresa e leva a carteira de clientes junto",
                    "Resposta em 2h a 5h — o lead esfria e fecha com o concorrente",
                    "Nenhuma visão de quantas propostas estão paradas sem follow-up",
                    "Faturamento oscila e você descobre a causa só no fim do mês",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#4A453F] leading-relaxed">
                      <span className="text-[#BE212A] font-bold mt-0.5 flex-shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 2: Com OneHub (Engenharia Comercial) */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-[#10B981]/30 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#10B981] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                  Engenharia OneHub
                </div>

                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E4DDD0]">
                  <span className="w-8 h-8 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#211E1B]">
                      COM ONEHUB
                    </h3>
                    <p className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                      Governança & Escala
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "1 Número Oficial (Meta Cloud API) com atendentes ilimitados",
                    "Carteira 100% centralizada e protegida no painel da empresa",
                    "IA qualifica e responde em 3 segundos (24 horas por dia)",
                    "Funil Kanban em tempo real com alertas de oportunidade parada",
                    "Previsibilidade de receita e métricas diárias por atendente",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#211E1B] font-medium leading-relaxed">
                      <span className="text-[#10B981] font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Card de Fechamento Editorial da Seção 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#EFE9DF] border border-[#E0D7C8] text-center max-w-4xl mx-auto">
              <p className="text-base sm:text-lg font-medium text-[#211E1B] leading-relaxed">
                💡 <span className="font-bold">&ldquo;O OneHub não substitui a sua equipe comercial.&rdquo;</span>{" "}
                <span className="text-[#5C554E]">
                  Ele elimina a burocracia do caminho para que seu time fale exclusivamente com quem já está pronto para comprar.
                </span>
              </p>
            </div>

          </div>
        </section>

        {/* 4. SOLUÇÃO (LIGHT EDITORIAL EM 3 CAMADAS) */}
        <section className="scene-solucao relative z-10 px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#F4EFE6] border-b border-[#E4DDD0]/60">
          <div className="max-w-7xl mx-auto">
            <div className="scene-solucao-header max-w-2xl">
              <p className="text-xs uppercase font-bold tracking-widest text-[#D97757] mb-2">A Arquitetura</p>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-[#211E1B]">
                Apresentando o OneHub.
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#4A453F]">Tecnologia aplicada à operação real.</p>
            </div>

            <p className="mt-8 font-display italic text-lg sm:text-xl md:text-2xl max-w-2xl text-[#211E1B]">
              Primeiro organizamos. Depois automatizamos. Então escalamos com inteligência.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ["CAMADA 1", "Organização & CRM", "Fim do caos. Funil visível, histórico unificado e follow-up que não escapa mais."],
                ["CAMADA 2", "Automação & IA", "Um agente de inteligência artificial cuidando das conversas que hoje ninguém no seu time tem tempo de responder."],
                ["CAMADA 3", "Conversão & Escala", "Dado real para decidir — métricas de fechamento, tempo de resposta e previsão financeira."],
              ].map(([tag, title, desc], i) => (
                <div key={i} className="camada-card p-7 rounded-2xl bg-white border border-[#E4DDD0] shadow-sm">
                  <span className="text-xs font-bold tracking-wider text-[#BE212A] block mb-2">{tag}</span>
                  <h3 className="font-display font-medium text-xl mb-3 text-[#211E1B]">{title}</h3>
                  <p className="text-sm text-[#4A453F] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEMONSTRAÇÃO INTERATIVA DO FLUXO */}
        <OneHubMotionSection />

        {/* 5. PRA QUEM É */}
        <section className="gsap-reveal relative z-10 px-5 sm:px-8 md:px-12 py-16 md:py-24 border-b border-[#E4DDD0]/60">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D97757] block mb-2">Segmentos</span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#211E1B]">
                Para quem o OneHub foi desenhado
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ["Operações B2B", "Negociam com outras empresas, ciclo de venda consultivo e múltiplos pontos de contato."],
                ["Prestadores de Serviço", "Dependem de follow-up rigoroso, agendamentos rápidos e relacionamento ativo."],
                ["Vendas High-Ticket", "Cada lead perdido representa um alto custo de oportunidade e receita que não volta."],
              ].map(([title, desc], i) => (
                <div key={i} className="p-7 rounded-2xl bg-[#211E1B] text-[#FAF7F2]">
                  <h3 className="font-display font-medium text-lg mb-2 text-[#D97757]">{title}</h3>
                  <p className="text-sm text-[#C9C3B8] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. JORNADA DE EVOLUÇÃO */}
        <section className="scene-jornada relative z-10 px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#F4EFE6] border-b border-[#E4DDD0]/60">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D97757] block mb-2">Maturação</span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-[#211E1B]">
                Comece onde você está.
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#4A453F]">
                A evolução é natural — cada etapa resolve a dor da anterior, sem perder histórico, sem esfriar lead.
              </p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="journey-line hidden lg:block" />
              {[
                ["1", "Smart", "Fim do caos. Controle visual absoluto.",
                  ["Centraliza contatos e tarefas", "Funil de vendas visível", "Follow-up estruturado"],
                  "Ideal para primeiros passos na organização comercial.", false],
                ["2", "Flow Essencial", "Sua primeira camada de automação e IA.",
                  ["Tudo do Smart", "Um agente de IA nas conversas", "Automação de processos primários"],
                  "Ideal para reduzir esforço manual sem perder organização.", false],
                ["3", "Flow Pro", "Automação de alto nível pra crescimento acelerado.",
                  ["Tudo do Flow Essencial", "Automações complexas e ramificadas", "Estrutura para equipes em expansão"],
                  "Ideal para operações já validadas que exigem tração.", false],
                ["4", "Scale", "Inteligência, rastreabilidade e visão estratégica.",
                  ["Tudo do Flow Pro", "Analytics e conversões avançado", "Atendimento consultivo dedicado", "Módulo OneHub Social incluso"],
                  "Ideal para alto volume, alta performance e gestão rigorosa.", true],
              ].map(([n, title, tag, items, ideal, highlight], i) => (
                <div key={i}
                     className={`journey-card relative bg-white rounded-2xl p-6 shadow-sm ${highlight ? "border-2 border-[#BE212A]" : "border border-[#E4DDD0]"}`}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold mb-4 bg-[#BE212A] text-white">{n}</div>
                  <h3 className="font-display font-medium text-lg mb-1 text-[#211E1B]">{title}</h3>
                  <p className="text-xs italic mb-4 text-[#D97757]">{tag}</p>
                  <ul className="text-xs sm:text-sm space-y-2 text-[#4A453F]">
                    {items.map((it, j) => <li key={j} className="flex items-start gap-1.5"><span className="text-[#BE212A] font-bold">·</span> {it}</li>)}
                  </ul>
                  <p className="text-xs mt-5 pt-4 border-t border-[#E4DDD0] text-[#736B63]">{ideal}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                 className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-white bg-[#211E1B] hover:bg-[#BE212A] transition-colors">
                Quero descobrir qual etapa é a minha
              </a>
            </div>
          </div>
        </section>

        {/* 7. DIFERENCIAL */}
        <section className="scene-diferencial relative z-10 px-5 sm:px-8 md:px-12 py-20 md:py-28 text-center bg-[#211E1B] text-white overflow-hidden">
          <div className="scene-diferencial-text max-w-3xl mx-auto">
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl leading-tight">
              Não é CRM que ganhou WhatsApp.<br />
              <span className="text-[#BE212A]">É WhatsApp que ganhou cérebro.</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#DED8CC] leading-relaxed">
              O agente de IA não é um chatbot colado depois. É inteligência nativa em cada conversa — configurado sob medida para o escopo do seu negócio, do primeiro contato ao fechamento.
            </p>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section className="gsap-reveal relative z-10 px-5 sm:px-8 md:px-12 py-20 md:py-28 text-center bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-[#211E1B] leading-tight">
              Pare de apenas operar.<br />
              <span className="text-[#BE212A]">Comece a escalar com inteligência.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4A453F]">
              Dê o próximo passo na maturidade comercial da sua empresa com 14 dias de acompanhamento assistido.
            </p>
            <div className="mt-8 flex flex-col items-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center px-9 py-4 rounded-xl font-bold text-white text-base sm:text-lg shadow-sm bg-[#BE212A] hover:bg-[#A61B23] transition-colors">
                Quero meus 14 dias assistidos — grátis
              </a>
              <p className="mt-3 text-xs sm:text-sm text-[#736B63]">
                Montamos sua operação com você. Sem custo, sem cartão, sem fidelidade.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 px-5 sm:px-8 md:px-12 py-8 border-t border-[#E4DDD0] text-center text-xs text-[#736B63]">
          OneHub — um ecossistema One Thank Digital · onethank.com.br/onehub
        </footer>
      </div>
    </>
  );
}
