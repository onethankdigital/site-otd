// src/pages/OneHub.jsx
// Rota: /onehub
// Direção Visual: Craft editorial premium (Sóbrio, tipografia forte, respiro, contraste intencional)
// Paleta: Base marfim #FAF7F2, Texto carvão #211E1B, Vermelho #BE212A (CTA/acento), Terracota #D97757 (apoio)

import { useState, useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OneHubMotionSection from "../components/OneHubMotionSection";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_LINK = "https://wa.me/5511978679090?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20os%2014%20dias%20assistidos%20do%20OneHub.";

export default function OneHub() {
  const container = useRef();
  const [activePin, setActivePin] = useState(1);
  const [activeMotor, setActiveMotor] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);

  const ecosystemMotors = [
    {
      id: 1,
      name: "Agente IA",
      tag: "Qualificação & Atendimento 24/7",
      metric: "Atendimento em < 3 seg",
      desc: "Qualificação automática com coleta do nome do cliente (ex: Marcos), porte da equipe e intenção antes de direcionar ao especialista.",
      color: "#BE212A",
      spot: { top: "18%", left: "50%" },
    },
    {
      id: 2,
      name: "Central de Atendimento",
      tag: "Gestão & Qualidade Comercial",
      metric: "98% Satisfação (NPS)",
      desc: "Distribuição inteligente por filas de atendimento, acompanhamento de tempo de resposta e controle rigoroso de SLA da equipe.",
      color: "#A855F7",
      spot: { top: "35%", left: "15%" },
    },
    {
      id: 3,
      name: "CRM de Vendas",
      tag: "Governança & Pipeline",
      metric: "R$ 1.250.000 em Carteira",
      desc: "Funil Kanban em tempo real no OneHub Smart, histórico unificado de conversas e carteira blindada diretamente com o vendedor responsável.",
      color: "#D97757",
      spot: { top: "35%", left: "85%" },
    },
    {
      id: 4,
      name: "Redes Sociais Omnichannel",
      tag: "Captação Multicanal",
      metric: "5 Canais Integrados",
      desc: "Instagram, TikTok, LinkedIn, YouTube e Facebook direcionando todos os leads qualificados diretamente para a mesma fila de entrada.",
      color: "#3B82F6",
      spot: { top: "72%", left: "20%" },
    },
    {
      id: 5,
      name: "Conversões & Meta API",
      tag: "Performance & Ads",
      metric: "ROAS 4.6x Rastreado",
      desc: "Conexão oficial Meta Cloud API (Verificada) com mensuração de faturamento real atribuído a cada campanha e anúncio veiculado.",
      color: "#10B981",
      spot: { top: "72%", left: "80%" },
    },
  ];

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

        {/* 3. CANVAS INTERATIVO DO PRODUTO (CONCEITO A — ARQUITETURA 3D FULL WIDTH) */}
        <section className="scene-teto relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E4DDD0]/60 overflow-hidden">
          
          {/* Luzes ambiente de acento */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#BE212A]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[280px] bg-[#D97757]/8 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">

            {/* Cabeçalho Editorial */}
            <div className="scene-teto-text max-w-4xl mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BE212A]/10 border border-[#BE212A]/20 text-[#BE212A] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-[#BE212A] animate-ping" />
                OPERAÇÃO NA PRÁTICA
              </div>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-[48px] leading-[1.15] text-[#211E1B] tracking-tight">
                Do caos no WhatsApp à{" "}
                <span className="text-[#BE212A]">governança no CRM.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5C554E] leading-relaxed max-w-3xl">
                Um único ecossistema conectando atendimento imediato por IA, qualificação com nome do lead, distribuição direta para o vendedor e controle total de receita em um painel unificado.
              </p>
            </div>

            {/* Palco do Canvas Interativo 3D em Camadas (100% de Largura Expandida) */}
            <div className="relative rounded-3xl bg-[#1A1714] border border-[#3A352F] p-5 sm:p-8 md:p-12 lg:p-14 overflow-hidden shadow-2xl w-full">
              
              {/* Grid de fundo do palco */}
              <div className="absolute inset-0 bg-[radial-gradient(#3A352F_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

              {/* Seletor de Pins / Hotspots no Topo do Palco */}
              <div className="relative z-20 flex flex-wrap items-center justify-center gap-3 mb-10">
                {[
                  { id: 1, label: "01. Triagem com Nome & IA 24/7", tag: "Atendimento Instantâneo" },
                  { id: 2, label: "02. Roteamento Direto ao Vendedor", tag: "Fila & Carteira Protegida" },
                  { id: 3, label: "03. Funil & Dados em Tempo Real", tag: "Gestão Financeira ao Vivo" },
                ].map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setActivePin(pin.id)}
                    className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                      activePin === pin.id
                        ? "bg-[#BE212A] text-white shadow-lg shadow-[#BE212A]/30 scale-[1.02]"
                        : "bg-[#2C2822] text-[#C9C3B8] hover:bg-[#3A352F] hover:text-white border border-[#3A352F]"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${activePin === pin.id ? "bg-white animate-pulse" : "bg-[#D97757]"}`} />
                    <span>{pin.label}</span>
                  </button>
                ))}
              </div>

              {/* Área do Mockup Duplo (Celular + Desktop CRM) com Mais Espaço */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
                
                {/* Lado Esquerdo (Camada 1): Mockup do Celular WhatsApp */}
                <div className="lg:col-span-5 relative group">
                  <div className={`rounded-3xl p-5 sm:p-6 bg-[#211E1B] border transition-all duration-500 shadow-xl ${activePin === 1 ? "border-[#BE212A] shadow-[0_0_30px_rgba(190,33,42,0.3)]" : "border-[#3A352F]"}`}>
                    
                    {/* Header do WhatsApp */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#3A352F] mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/One Hub - Fundo Preto.svg"
                          alt="OneHub Logo"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover border border-[#3A352F] p-0.5 bg-black"
                        />
                        <div>
                          <p className="text-sm font-bold text-white flex items-center gap-1.5">
                            OneHub Oficial
                            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                          </p>
                          <p className="text-[11px] text-[#94A3B8]">WhatsApp API Cloud (Oficial)</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#10B981]/15 text-[#10B981] font-bold">
                        API VERIFICADA
                      </span>
                    </div>

                    {/* Balões de Conversa Simulados (Com Nome do Cliente & Roteamento) */}
                    <div className="space-y-3 font-sans text-xs sm:text-sm">
                      <div className="bg-[#2C2822] text-[#E4DDD0] p-3.5 rounded-2xl rounded-tl-xs max-w-[88%] border border-[#3A352F]">
                        <p className="text-[11px] font-bold text-[#D97757] mb-1">Lead Entrada • 09:00:02</p>
                        <p>&ldquo;Olá! Meu nome é <strong>Marcos</strong>, sou gestor da Construtora Alfa. Quero entender sobre o OneHub.&rdquo;</p>
                      </div>

                      <div className="bg-[#BE212A]/15 text-white p-3.5 rounded-2xl rounded-tr-xs ml-auto max-w-[90%] border border-[#BE212A]/40 shadow-sm">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[11px] font-bold text-[#FF334B] flex items-center gap-1">
                            🤖 Agente IA OneHub • 09:00:05
                          </p>
                          <span className="text-[10px] font-mono text-white/80">3 seg</span>
                        </div>
                        <p>&ldquo;Olá, <strong>Marcos</strong>! Prazer. Sou a IA do OneHub. Para direcionar você ao especialista certo: qual é o tamanho da sua equipe comercial?&rdquo;</p>
                      </div>

                      <div className="bg-[#2C2822] text-[#E4DDD0] p-3.5 rounded-2xl rounded-tl-xs max-w-[88%] border border-[#3A352F]">
                        <p>&ldquo;Temos 8 vendedores no WhatsApp.&rdquo;</p>
                      </div>

                      <div className="bg-[#10B981]/15 text-white p-3.5 rounded-2xl rounded-tr-xs ml-auto max-w-[92%] border border-[#10B981]/40">
                        <p className="text-[11px] font-bold text-[#10B981] mb-1">
                          👤 Roteado Direto → Juliana Prado (SDR Senior)
                        </p>
                        <p>&ldquo;Perfeito, <strong>Marcos</strong>! Triagem concluída. Já transferi seu atendimento diretamente para a <strong>Juliana Prado</strong> no painel.&rdquo;</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Conector Central Glowing (Apenas a Seta) */}
                <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#BE212A]/20 border border-[#BE212A] flex items-center justify-center text-[#FF334B] animate-pulse shadow-[0_0_20px_rgba(190,33,42,0.4)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Lado Direito (Camada 2): Dashboard do CRM OneHub Smart (col-span-6 para máximo espaço) */}
                <div className="lg:col-span-6">
                  <div className={`rounded-3xl p-5 sm:p-6 bg-[#211E1B] border transition-all duration-500 shadow-xl ${activePin === 3 ? "border-[#BE212A] shadow-[0_0_30px_rgba(190,33,42,0.3)]" : "border-[#3A352F]"}`}>
                    
                    {/* Header da Dashboard — ONEHUB SMART (Sem "100% ONLINE") */}
                    <div className="pb-4 border-b border-[#3A352F] mb-4">
                      <p className="text-xs font-mono font-bold text-[#BE212A] tracking-wider">ONEHUB SMART</p>
                      <p className="text-sm font-bold text-white mt-0.5">Funil de Vendas em Tempo Real</p>
                    </div>

                    {/* Colunas do Funil Kanban */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs">
                      
                      {/* Coluna 1: Novos Leads (Sem Valores em R$, Apenas Triagem & Vendedor Alocado) */}
                      <div className="bg-[#2C2822] p-2.5 rounded-xl border border-[#3A352F]">
                        <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-[#3A352F]">
                          <span className="font-bold text-slate-300 text-[11px]">Novos</span>
                          <span className="bg-[#BE212A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">14</span>
                        </div>
                        
                        {/* Lead Roteado em Destaque (Sem R$) */}
                        <div className="bg-[#10B981]/15 p-2 rounded-lg border border-[#10B981]/40 mb-2">
                          <p className="font-bold text-white text-[11px]">Marcos • Construtora Alfa</p>
                          <p className="text-[10px] text-[#10B981] font-semibold mt-0.5">👤 Vendedor: Juliana Prado</p>
                          <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] text-[9px] font-bold">
                            IA Triou
                          </span>
                        </div>

                        {/* Segundo Lead Novo (Sem R$) */}
                        <div className="bg-[#1A1714] p-2 rounded-lg border border-[#3A352F]">
                          <p className="font-bold text-white text-[11px]">Grupo Beta</p>
                          <p className="text-[10px] text-[#D97757] mt-0.5">Fila Comercial #2</p>
                        </div>
                      </div>

                      {/* Coluna 2: Em Negociação (Propostas com Valores R$) */}
                      <div className="bg-[#2C2822] p-2.5 rounded-xl border border-[#3A352F]">
                        <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-[#3A352F]">
                          <span className="font-bold text-slate-300 text-[11px]">Propostas</span>
                          <span className="bg-[#D97757] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">8</span>
                        </div>

                        <div className="bg-[#1A1714] p-2 rounded-lg border border-[#3A352F] mb-2">
                          <p className="font-bold text-white text-[11px]">Tech Solution</p>
                          <p className="text-[11px] font-mono font-bold text-[#FF334B] mt-0.5">R$ 42.000</p>
                          <p className="text-[9px] text-slate-400 mt-0.5">Em Negociação</p>
                        </div>

                        <div className="bg-[#1A1714] p-2 rounded-lg border border-[#3A352F]">
                          <p className="font-bold text-white text-[11px]">Editora Soma</p>
                          <p className="text-[11px] font-mono font-bold text-[#FF334B] mt-0.5">R$ 18.500</p>
                          <p className="text-[9px] text-slate-400 mt-0.5">Proposta Enviada</p>
                        </div>
                      </div>

                      {/* Coluna 3: Ganhos (Contratos Fechados com Valores R$) */}
                      <div className="bg-[#2C2822] p-2.5 rounded-xl border border-[#3A352F]">
                        <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-[#3A352F]">
                          <span className="font-bold text-[#10B981] text-[11px]">Ganhos</span>
                          <span className="bg-[#10B981] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">22</span>
                        </div>
                        <div className="bg-[#10B981]/15 p-2 rounded-lg border border-[#10B981]/40">
                          <p className="font-bold text-[#10B981] text-[11px]">Contrato 089</p>
                          <p className="text-[11px] text-white font-mono font-bold mt-0.5">R$ 65.000/mês</p>
                          <p className="text-[9px] text-[#10B981] font-semibold mt-0.5">✓ Fechado</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

              {/* Bloco de CTA — 14 Dias Assistidos Grátis */}
              <div className="relative z-20 mt-8 sm:mt-10 p-6 sm:p-7 rounded-2xl bg-[#2C2822] border border-[#3A352F] flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Pronto para estruturar esse ecossistema na sua empresa?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#C9C3B8]">
                    Montamos toda a sua operação com você. Sem custo, sem cartão e sem fidelidade.
                  </p>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base bg-[#BE212A] hover:bg-[#A61B23] transition-all shadow-md active:scale-[0.99] flex-shrink-0 whitespace-nowrap"
                >
                  Quero meus 14 dias assistidos — grátis
                </a>
              </div>

            </div>

            {/* Barra de Prova / Métricas na Base da Seção 3 (Cards Pretos) */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { val: "< 3 seg", title: "Primeira Resposta por IA", desc: "Triagem com nome do cliente 24/7." },
                { val: "Direto", title: "Roteamento para Vendedor", desc: "Encaminhado para a carteira certa no OneHub Smart." },
                { val: "Dados", title: "Visão em Tempo Real", desc: "Controle de conversão e propostas no painel." },
              ].map((m, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#1A1714] border border-[#2E2824] shadow-md text-center">
                  <p className="font-display text-3xl sm:text-4xl font-black text-[#BE212A] mb-1.5">{m.val}</p>
                  <p className="font-bold text-sm text-white mb-1">{m.title}</p>
                  <p className="text-xs text-[#C9C3B8]">{m.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. SOLUÇÃO — O ECOSSISTEMA ONEHUB (DARK HIGH TECH INTERACTIVE 3D HUD) */}
        <section className="scene-solucao relative z-10 px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#211E1B] text-white border-b border-[#3A352F] overflow-hidden">
          {/* Luzes ambiente de acento */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#BE212A]/10 blur-[170px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Cabeçalho Editorial */}
            <div className="scene-solucao-header max-w-3xl mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BE212A]/15 border border-[#BE212A]/30 text-[#FF334B] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                O ECOSSISTEMA ONEHUB
              </div>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
                5 Motores Conectados em um <span className="text-[#BE212A]">Hub Centralizador.</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#C9C3B8] leading-relaxed">
                Passe o mouse ou toque sobre as cúpulas de vidro para explorar os detalhes de cada motor em tempo real.
              </p>
            </div>

            {/* Seletores / Chips Rápidos para Alternar o Motor (Desktop + Mobile — Sem Números) */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
              {ecosystemMotors.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMotor(m.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeMotor === m.id
                      ? "bg-[#BE212A] text-white shadow-[0_0_20px_rgba(190,33,42,0.4)] border border-[#FF334B]"
                      : "bg-[#2C2822] text-[#C9C3B8] hover:text-white border border-[#3A352F]"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: m.color }}
                  />
                  {m.name}
                </button>
              ))}
            </div>

            {/* Palco 100% Full-Bleed do Diagrama 3D com Hotspots Limpos (Sem Números) */}
            <div className="relative rounded-3xl bg-[#1A1714] border border-[#3A352F] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] mb-14 p-3 sm:p-6 md:p-8">
              
              {/* Moldura da Imagem 100% Full Container */}
              <div className="relative w-full aspect-square max-w-[900px] mx-auto flex items-center justify-center">
                <img
                  src="/onehub-ecossistema.webp"
                  alt="Ecossistema 5 Motores OneHub 3D HUD"
                  className="w-full h-full object-contain rounded-2xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                />

                {/* Hotspots Invisíveis & Anéis de Brilho Sutil sobre as Cúpulas */}
                {ecosystemMotors.map((m) => {
                  const isActive = activeMotor === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveMotor(m.id)}
                      onMouseEnter={() => setActiveMotor(m.id)}
                      style={{ top: m.spot.top, left: m.spot.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      {/* Aura/Anel Sutil de Destaque Sem Números */}
                      <span
                        className={`w-full h-full rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? "border-[#BE212A] shadow-[0_0_35px_rgba(190,33,42,0.9)] bg-[#BE212A]/10 scale-105"
                            : "border-transparent group-hover:border-white/40 group-hover:bg-white/5"
                        }`}
                      />
                    </button>
                  );
                })}

                {/* Pop-up Flutuante Centralizado EXATAMENTE no Meio da Imagem */}
                {activeMotor && (() => {
                  const current = ecosystemMotors.find((m) => m.id === activeMotor) || ecosystemMotors[0];
                  return (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] max-w-lg z-30 p-5 sm:p-7 rounded-3xl bg-[#1A1714]/95 backdrop-blur-xl border border-[#BE212A] shadow-[0_0_60px_rgba(190,33,42,0.6)] transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#3A352F] mb-3">
                        <div>
                          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FF334B] font-bold block mb-0.5">
                            {current.tag}
                          </span>
                          <h3 className="text-lg sm:text-2xl font-bold text-white">
                            {current.name}
                          </h3>
                        </div>
                        <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-[#BE212A] shadow-md shrink-0">
                          {current.metric}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#C9C3B8] leading-relaxed mb-4">
                        {current.desc}
                      </p>

                      <div className="pt-3 border-t border-[#3A352F] flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>⚡ Motor Operacional Ativo</span>
                        <span className="text-[#10B981] font-bold">100% Integrado no OneHub</span>
                      </div>
                    </div>
                  );
                })()}

              </div>

            </div>

            {/* As 3 Camadas da Jornada de Implantação */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                ["CAMADA 1", "Organização & CRM", "Fim do caos. Funil visível, histórico unificado e follow-up que não escapa mais."],
                ["CAMADA 2", "Automação & IA", "Um agente de inteligência artificial cuidando das conversas que hoje ninguém no seu time tem tempo de responder."],
                ["CAMADA 3", "Conversão & Escala", "Dados reais para decidir — métricas de fechamento, tempo de resposta e previsão financeira."],
              ].map(([tag, title, desc], i) => (
                <div key={i} className="camada-card p-7 rounded-2xl bg-[#1A1714] border border-[#3A352F] shadow-sm">
                  <span className="text-xs font-bold tracking-wider text-[#BE212A] block mb-2">{tag}</span>
                  <h3 className="font-display font-medium text-xl mb-3 text-white">{title}</h3>
                  <p className="text-sm text-[#C9C3B8] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 5. QUALIFICAÇÃO & SEGMENTOS (PRA QUEM É) */}
        <section className="gsap-reveal relative z-10 px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E4DDD0]/60">
          <div className="max-w-7xl mx-auto">
            
            {/* Cabeçalho Editorial & Diagnóstico */}
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D97757] block mb-2">
                QUALIFICAÇÃO & SEGMENTOS
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-[#211E1B] leading-tight">
                Desenhado para operações onde cada lead perdido <span className="text-[#BE212A]">custa caro.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5C554E] leading-relaxed">
                Se a sua equipe atende clientes no WhatsApp todos os dias, mas você não tem previsibilidade do valor exato em aberto nas propostas... essa estrutura foi feita para o seu negócio.
              </p>
            </div>

            {/* Grid dos 3 Segmentos de Alto Impacto com Badges de Resultado */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Operações B2B & Consultivas",
                  scenario: "Empresas que vendem para outras empresas, com ciclo consultivo, múltiplos decisores e necessidade de histórico impecável.",
                  solution: "Atribuição direta ao Closer responsável (ex: Juliana Prado), protegendo a carteira comercial e eliminando conversas perdidas.",
                  badges: ["✓ Roteamento por Carteira", "✓ Funil P&L Visível"],
                },
                {
                  title: "Prestadores de Serviço & Soluções",
                  scenario: "Empresas com alto volume de contatos diários que dependem de agendamento ágil e resposta imediata.",
                  solution: "A IA atende o cliente pelo nome (ex: Marcos), faz a qualificação preliminar em < 3s e transfere o lead quente ao vendedor sem fila de espera.",
                  badges: ["✓ Triagem IA < 3s", "✓ Agendamento Automático"],
                },
                {
                  title: "Vendas High-Ticket & Ticket Médio/Alto",
                  scenario: "Negócios onde cada cliente vale R$ 10k+ e um único atendimento esquecido representa prejuízo direto no fim do mês.",
                  solution: "Notificações de follow-up que não escapam, histórico unificado e mensuração de receita real por campanha via Meta API.",
                  badges: ["✓ Follow-up Blindado", "✓ ROAS Rastreado"],
                },
              ].map((s, i) => (
                <div key={i} className="p-7 rounded-2xl bg-[#211E1B] text-[#FAF7F2] border border-[#3A352F] shadow-md flex flex-col justify-between">
                  <div>
                    {/* Badges de Resultado no Topo */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {s.badges.map((b, j) => (
                        <span key={j} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                          {b}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-medium text-xl mb-3 text-white">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mb-3 leading-relaxed italic border-b border-[#3A352F] pb-3">
                      &ldquo;{s.scenario}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[#C9C3B8] leading-relaxed">
                      <strong className="text-[#FF334B] font-semibold">Como o OneHub atua:</strong> {s.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner de Inversão de Autoridade — Para quem o OneHub NÃO é */}
            <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#211E1B] border border-[#3A352F] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#BE212A]/20 border border-[#BE212A]/40 text-[#FF334B] flex items-center justify-center font-bold text-lg shrink-0">
                  🚫
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Para quem o OneHub NÃO foi feito:</h4>
                  <p className="text-xs sm:text-sm text-[#C9C3B8] leading-relaxed max-w-3xl">
                    Não trabalhamos com disparadores de spam em massa, números não oficiais ou robôs de bloqueio sem conformidade. O OneHub é construído com engenharia séria sobre a Meta Cloud API Oficial para empresas que prezam por governança comercial e segurança.
                  </p>
                </div>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#BE212A] hover:bg-[#A61B23] text-white font-bold text-xs sm:text-sm transition-all shrink-0 whitespace-nowrap shadow-md active:scale-[0.99]"
              >
                Validar meu perfil comercial →
              </a>
            </div>

          </div>
        </section>

        {/* 6. JORNADA DE EVOLUÇÃO — PREMIUM CARDS */}
        <section className="scene-jornada relative z-10 px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#F4EFE6] border-b border-[#E4DDD0]/60">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D97757] block mb-2">Maturação</span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-[#211E1B] leading-tight">
                Comece onde você está.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#5C554E] leading-relaxed">
                A evolução é natural — cada etapa resolve a dor da anterior, sem perder histórico, sem esfriar lead.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  tag: "ORGANIZAÇÃO",
                  title: "Smart",
                  metric: "CRM + Funil",
                  color: "#BE212A",
                  tagline: "Fim do caos. Controle visual absoluto.",
                  desc: "Sua empresa para de perder leads no WhatsApp. Todos os contatos centralizados, funil visível e follow-up que não escapa — mesmo sem automação.",
                  items: ["Centraliza contatos e tarefas", "Funil de vendas visível", "Follow-up estruturado"],
                  connection: "Conecta: WhatsApp Business → CRM Visual",
                  highlight: false,
                },
                {
                  tag: "AUTOMAÇÃO & IA",
                  title: "Flow Essencial",
                  metric: "IA + Automação",
                  color: "#F59E0B",
                  tagline: "Sua primeira camada de inteligência operacional.",
                  desc: "O agente de IA responde, qualifica e direciona leads automaticamente. Sua equipe foca no fechamento enquanto a máquina cuida da entrada.",
                  items: ["Tudo do Smart", "Um agente de IA nas conversas", "Automação de processos primários"],
                  connection: "Conecta: CRM → Agente IA → Atendimento Automático",
                  highlight: true,
                },
                {
                  tag: "ESCALA",
                  title: "Flow Pro",
                  metric: "Equipes + Ramificação",
                  color: "#10B981",
                  tagline: "Automação de alto nível pra crescimento acelerado.",
                  desc: "Automações complexas com ramificações por segmento, roteamento inteligente e estrutura para equipes em crescimento sem perder controle.",
                  items: ["Tudo do Flow Essencial", "Automações complexas e ramificadas", "Estrutura para equipes em expansão"],
                  connection: "Conecta: Agente IA → Multi-Atendentes → Roteamento",
                  highlight: false,
                },
                {
                  tag: "INTELIGÊNCIA TOTAL",
                  title: "Scale",
                  metric: "Analytics + Social",
                  color: "#3B82F6",
                  tagline: "Rastreabilidade total e visão estratégica.",
                  desc: "Dados reais para decidir — métricas de fechamento, conversões rastreadas via Meta API, atendimento consultivo e módulo Social incluso.",
                  items: ["Tudo do Flow Pro", "Analytics e conversões avançado", "Atendimento consultivo dedicado", "Módulo OneHub Social incluso"],
                  connection: "Conecta: CRM → Meta API → Dashboards → Social",
                  highlight: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#1A1714]/95 backdrop-blur-xl border-2 border-[#F59E0B] shadow-[0_0_60px_rgba(245,158,11,0.15)]"
                      : "bg-[#1A1714] border border-[#3A352F] hover:border-[#5C554E]"
                  }`}
                >
                  {/* Badge Recomendado */}
                  {plan.highlight && (
                    <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-[#F59E0B] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      Recomendado
                    </div>
                  )}

                  <div>
                    {/* Header — Título + Badge (Estilo Pop-up) */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#3A352F] mb-4">
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                          {plan.title}
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white shadow-md shrink-0 whitespace-nowrap" style={{ backgroundColor: plan.color }}>
                        {plan.metric}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs italic text-[#D97757] mb-3">{plan.tagline}</p>

                    {/* Descrição */}
                    <p className="text-xs sm:text-sm text-[#C9C3B8] leading-relaxed mb-5">
                      {plan.desc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-5">
                      {plan.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-[#C9C3B8] leading-relaxed">
                          <span className="text-[#10B981] font-bold mt-0.5 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rodapé — Tag + Conexão do Negócio (Alinhado na Base) */}
                  <div className="mt-auto pt-4 border-t border-[#3A352F]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF334B] font-bold block mb-1.5">
                      {plan.tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <span className="text-[#10B981]">⚡</span>
                      <span>{plan.connection}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA — 14 Dias Assistidos */}
            <div className="mt-12 p-7 sm:p-8 rounded-2xl bg-[#211E1B] border border-[#3A352F] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display font-medium text-xl sm:text-2xl text-white leading-snug">
                  Não sabe qual nível é o seu? <span className="text-[#D97757]">A gente monta com você.</span>
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#C9C3B8] max-w-2xl leading-relaxed">
                  14 dias de acompanhamento assistido, sem custo, sem cartão, sem fidelidade. Montamos a operação juntos e você decide se faz sentido.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-xl bg-[#BE212A] hover:bg-[#A61B23] text-white font-bold text-sm sm:text-base transition-all shrink-0 whitespace-nowrap shadow-lg active:scale-[0.98]"
              >
                Quero meus 14 dias — grátis →
              </a>
            </div>

          </div>
        </section>

        {/* 7. DIFERENCIAL — LAYOUT SPLIT COM IMAGEM AMPLIADA E MOTION DINÂMICO */}
        <section className="scene-diferencial relative z-10 px-5 sm:px-8 md:px-12 py-20 md:py-32 bg-[#211E1B] text-white border-b border-[#3A352F]/60 overflow-hidden">
          <style>{`
            @keyframes floatBrain {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-14px); }
            }
            .animate-float-brain {
              animation: floatBrain 5.5s ease-in-out infinite;
            }
          `}</style>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Coluna Esquerda: Frase de Alto Impacto com Espaçamento Generoso */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-tight space-y-6 sm:space-y-8">
                <span className="block text-white">
                  Não é CRM que ganhou WhatsApp.
                </span>
                <span className="block text-[#BE212A]">
                  É WhatsApp que ganhou cérebro.
                </span>
              </h2>
            </div>

            {/* Coluna Direita: Imagem Ampliada com Motion e Auras Neon */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                
                {/* Auras de Luz Pulsante (Verde Meta e Carmim) */}
                <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#10B981]/20 blur-3xl pointer-events-none animate-pulse" />
                <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full bg-[#BE212A]/25 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />

                {/* Stage 3D com Levitação e Glow Suave */}
                <div className="animate-float-brain relative w-full rounded-3xl overflow-hidden border border-[#3A352F] shadow-[0_25px_70px_rgba(0,0,0,0.9)] bg-[#1A1714] group transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/onehub-whatsapp-brain.webp"
                    alt="OneHub WhatsApp IA com Cérebro"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradiente de Fusão na Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/70 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 8. FAQ & TIRA-DÚVIDAS ESTRATÉGICO */}
        <section className="gsap-reveal relative z-10 px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E4DDD0]/60">
          <div className="max-w-4xl mx-auto">
            
            {/* Cabeçalho do FAQ */}
            <div className="text-center mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D97757] block mb-2">
                TIRA-DÚVIDAS COMERCIAL
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-[#211E1B] leading-tight">
                Perguntas Frequentes & Respostas Diretas
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5C554E] max-w-2xl mx-auto leading-relaxed">
                Tudo o que você precisa saber sobre a Meta Cloud API Oficial, integrações com ERPs, agentes de IA e segurança da sua operação.
              </p>
            </div>

            {/* Lista de Perguntas e Respostas em Acordeão */}
            <div className="space-y-4">
              {[
                {
                  q: "O OneHub integra com ERPs e ferramentas como Bling, Tiny, HubSpot ou RD Station?",
                  a: "Sim. O OneHub conta com webhooks abertos e integração nativa para conectar com ERPs como o Bling e Tiny (sincronizando status de faturamento, emissão de notas e pedidos) e CRMs de mercado (HubSpot, RD Station, Pipedrive). Quando uma venda é fechada ou uma etapa avança no WhatsApp, o ecossistema atualiza seus sistemas automaticamente sem retrabalho manual.",
                },
                {
                  q: "Existe risco de o número de WhatsApp da minha empresa ser bloqueado ou banido pela Meta?",
                  a: "Zero risco. O OneHub opera 100% sobre a Meta Cloud API Oficial (WhatsApp Business API). Nós não utilizamos conexões não-oficiais (emuladores de QR Code piratas ou disparadores de spam), garantindo total conformidade jurídica com as políticas da Meta, alta taxa de entrega e possibilidade de solicitar o selo de verificação verde oficial.",
                },
                {
                  q: "Como a IA do OneHub aprende sobre meu negócio? Ela pode 'inventar' informações (alucinar) ou errar preços?",
                  a: "Não. O agente de IA é treinado e parametrizado com base estrita no catálogo de produtos, tabela de preços e regras comerciais da sua empresa. Se um lead fizer uma pergunta fora do escopo ou solicitar uma condição personalizada, a IA transfere imediatamente o atendimento para um consultor humano da sua equipe, enviando um resumo detalhado da conversa.",
                },
                {
                  q: "Quantos atendentes podem responder pelo mesmo número de WhatsApp simultaneamente?",
                  a: "Quantos a sua empresa precisar. Toda a sua equipe de vendas, suporte e administrativo atende através do mesmo número oficial, com distribuição automática por carteira de clientes, filas por departamento e controle individual de permissões e métricas de desempenho.",
                },
                {
                  q: "Como funciona o período de 14 dias de teste assistido?",
                  a: "Não entregamos um login vazio para você tentar configurar sozinho. Um especialista da One Thank agenda uma sessão de onboarding dedicada com você, conecta seu WhatsApp oficial, estrutura seu funil de vendas e treina o agente de IA para a sua realidade. Não pedimos cartão de crédito e não há contrato de fidelidade.",
                },
                {
                  q: "O que acontece com o histórico das conversas e os dados dos clientes (LGPD)?",
                  a: "Todas as conversas, anexos, propostas e dados de clientes são armazenados em nuvem segura com criptografia ponta a ponta. A base pertence 100% à sua empresa — você nunca mais perde o histórico quando um funcionário sai da equipe, mantendo total governança comercial e conformidade com a LGPD.",
                },
              ].map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-[#211E1B] text-white border-[#3A352F] shadow-lg"
                        : "bg-white text-[#211E1B] border-[#E4DDD0] hover:border-[#D97757]/40 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-display font-medium text-base sm:text-lg leading-snug">
                        {item.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "bg-[#BE212A] text-white rotate-45"
                            : "bg-[#FAF7F2] text-[#211E1B] border border-[#E4DDD0]"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#C9C3B8] leading-relaxed border-t border-[#3A352F]/60">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dúvida adicional CTA */}
            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-[#736B63] mb-3">
                Tem uma dúvida técnica ou arquitetura específica na sua empresa?
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-[#BE212A] hover:underline"
              >
                Falar diretamente com um especialista técnico via WhatsApp →
              </a>
            </div>

          </div>
        </section>

        {/* 9. CTA FINAL */}
        <section className="gsap-reveal relative z-10 px-5 sm:px-8 md:px-12 py-20 md:py-28 text-center bg-[#211E1B] text-white">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-bold block mb-3">
              ⚡ ONBOARDING GUIADO & GRATUITO
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Pare de apenas operar.<br />
              <span className="text-[#FF334B]">Comece a escalar com inteligência.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#DED8CC] leading-relaxed max-w-2xl mx-auto">
              Dê o próximo passo na maturidade comercial da sua empresa com 14 dias de acompanhamento assistido. Montamos a estrutura com você.
            </p>
            
            {/* Micro-Garantias */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#C9C3B8]">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1714] border border-[#3A352F]">
                🛡️ Sem Cartão de Crédito
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1714] border border-[#3A352F]">
                ⚡ Setup em 48h com Especialista
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1714] border border-[#3A352F]">
                🔒 100% Meta Cloud API Oficial
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center px-9 py-4 rounded-xl font-bold text-white text-base sm:text-lg shadow-xl bg-[#BE212A] hover:bg-[#A61B23] transition-all hover:scale-105 active:scale-95">
                Quero meus 14 dias assistidos — grátis →
              </a>
              <p className="mt-3 text-xs sm:text-sm text-[#736B63]">
                Sem custo, sem cartão, sem contrato de fidelidade.
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
