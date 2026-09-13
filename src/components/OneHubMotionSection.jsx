import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OneHubMotionSection() {
  const containerRef = useRef();

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Animar Textos
    tl.fromTo(".text-header", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" });

    // Animar Mockups
    tl.fromTo(".mockup-phone", 
      { y: 50, autoAlpha: 0, rotateX: 10 },
      { y: 0, autoAlpha: 1, rotateX: 0, duration: 0.6, ease: "back.out(1.2)" }, 
      "-=0.2"
    );

    // 1. Cliente envia 1ª mensagem
    tl.fromTo(".bubble-client-1", { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 0.2 }, "+=0.1");

    // 2. CRM aparece
    tl.fromTo(".mockup-crm", 
        { x: -50, autoAlpha: 0 }, 
        { x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" }, 
        "-=0.1"
      );
    
    // Linha de conexão
    tl.fromTo(".connect-line", { scaleX: 0, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: 0.3 }, "-=0.1");

    // 3. Lead entra no CRM (Entrada)
    tl.fromTo(".crm-card", { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out" })
      .set(".col-count-1", { textContent: "1", color: "#25D366" });
    
    // 4. IA responde de forma humana e pergunta o nicho
    tl.fromTo(".bubble-ai-1", { autoAlpha: 0, x: 20 }, { autoAlpha: 1, x: 0, duration: 0.2 }, "+=0.3");

    // 5. Cliente responde seu nicho
    tl.fromTo(".bubble-client-2", { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 0.2 }, "+=0.3")
      .to(".crm-card", { xPercent: 100, x: 36, duration: 0.4, ease: "power2.inOut" }, "-=0.1")
      .to(".crm-card-inner", { backgroundColor: "#BE212A", color: "#FFF", duration: 0.3 }, "-=0.2")
      .set(".crm-card-status", { textContent: "Qualificando", color: "#FFF" })
      .set(".col-count-1", { textContent: "0", color: "#6b7280" })
      .set(".col-count-2", { textContent: "1", color: "#BE212A" });

    // 6. IA qualifica e oferece proposta
    tl.fromTo(".bubble-ai-2", { autoAlpha: 0, x: 20 }, { autoAlpha: 1, x: 0, duration: 0.2 }, "+=0.3");

    // 7. Cliente aceita proposta
    tl.fromTo(".bubble-client-3", { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 0.2 }, "+=0.3")
      .to(".crm-card", { xPercent: 200, x: 72, duration: 0.4, ease: "power2.inOut" }, "-=0.1")
      .set(".crm-card-status", { textContent: "Proposta Enviada", color: "#facc15" })
      .set(".col-count-2", { textContent: "0", color: "#6b7280" })
      .set(".col-count-3", { textContent: "1", color: "#facc15" });

    // 8. IA envia confirmação e agenda reunião no CRM
    tl.fromTo(".bubble-ai-3", { autoAlpha: 0, x: 20 }, { autoAlpha: 1, x: 0, duration: 0.2 }, "+=0.3")
      .to(".crm-card", { xPercent: 300, x: 108, duration: 0.4, ease: "power2.inOut" }, "-=0.1")
      .set(".crm-card-status", { textContent: "Agendado", color: "#4ade80" })
      .set(".col-count-3", { textContent: "0", color: "#6b7280" })
      .set(".col-count-4", { textContent: "1", color: "#4ade80" });

  }, { scope: containerRef });

  return (
    <section className="relative bg-[#FAF7F2] py-24 md:py-32 overflow-hidden" ref={containerRef}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-header max-w-3xl mb-16 md:mb-24 text-center mx-auto invisible">
          <p className="font-display italic text-[#D97757] text-sm mb-3">Conexão Total</p>
          <h2 className="font-display text-4xl md:text-5xl text-[#211E1B]">
            De ponta a ponta. Sem atrito.
          </h2>
          <p className="mt-5 text-lg text-[#4A453F]">
            Os leads entram via WhatsApp e imediatamente o núcleo da operação reage. A IA assume a qualificação, respondendo dúvidas enquanto mapeia tudo no CRM em tempo real. Fim do Ctrl+C e Ctrl+V.
          </p>
        </div>

        {/* MOCKUPS NA PARTE DE BAIXO */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-10 md:gap-16 relative">
          
          {/* Mockup Celular (WhatsApp) */}
          <div className="mockup-phone shrink-0 relative z-20 w-[280px] h-[520px] bg-white rounded-[2rem] shadow-2xl border-[6px] border-[#211E1B] overflow-hidden flex flex-col invisible">
            <div className="bg-[#25D366] text-white p-4 font-semibold text-sm flex items-center shadow-sm">
              <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.83 3.08 1.27 4.79 1.27 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.4c-.2.56-1.15 1.08-1.59 1.15-.4.06-.9.14-2.58-.56-2.02-.84-3.32-2.92-3.42-3.06-.1-.13-2.03-2.7-2.03-5.15s1.28-3.66 1.74-4.14c.46-.48.99-.6 1.32-.6.33 0 .66 0 .93.01.26.01.62-.1 1.06.94.46 1.09 1.45 3.56 1.59 3.86.13.3.26.65.1.98-.17.33-.26.53-.53.84-.26.31-.55.68-.78.91-.25.25-.51.52-.23.99.28.48 1.25 2.06 2.68 3.34 1.84 1.65 3.39 2.16 3.89 2.4.5.24.79.2 1.08-.13.29-.33 1.25-1.44 1.59-1.93.33-.5.66-.41 1.12-.24.46.17 2.91 1.37 3.41 1.62.5.25.83.38.96.58.13.2.13 1.15-.07 1.71z"/></svg>
              </div>
              Atendimento OneHub
            </div>
            <div className="flex-1 bg-[#E5DDD5] p-3.5 flex flex-col gap-2.5 relative overflow-y-auto text-[12px]">
              
              {/* Turno 1: Cliente inicia */}
              <div className="bubble-client-1 self-start bg-white p-2.5 rounded-r-xl rounded-bl-xl shadow-sm text-gray-800 max-w-[88%] invisible">
                Olá! Gostaria de entender como a solução da OneHub se aplica à nossa operação.
              </div>

              {/* Turno 1: IA acolhe formalmente e solicita identificação */}
              <div className="bubble-ai-1 self-end bg-[#DCF8C6] p-2.5 rounded-l-xl rounded-br-xl shadow-sm text-gray-800 max-w-[88%] invisible">
                Olá! Seja bem-vindo à OneHub. Como posso chamá-lo e qual o segmento da sua empresa?
              </div>

              {/* Turno 2: Cliente se identifica e informa nicho */}
              <div className="bubble-client-2 self-start bg-white p-2.5 rounded-r-xl rounded-bl-xl shadow-sm text-gray-800 max-w-[88%] invisible">
                Me chamo Carlos, represento uma distribuidora e buscamos organizar nossas vendas pelo WhatsApp.
              </div>

              {/* Turno 2: IA usa o nome, qualifica o nicho e oferece proposta */}
              <div className="bubble-ai-2 self-end bg-[#DCF8C6] p-2.5 rounded-l-xl rounded-br-xl shadow-sm text-gray-800 max-w-[88%] invisible">
                Prazer, Carlos! Para distribuidoras, estruturamos o funil de pedidos e equipes. Podemos avançar com uma proposta?
              </div>

              {/* Turno 3: Cliente concorda formalmente */}
              <div className="bubble-client-3 self-start bg-white p-2.5 rounded-r-xl rounded-bl-xl shadow-sm text-gray-800 max-w-[88%] invisible">
                Excelente. Gostaria de receber a proposta e agendar uma demonstração técnica.
              </div>

              {/* Turno 3: IA confirma proposta e agenda reunião */}
              <div className="bubble-ai-3 self-end bg-[#DCF8C6] p-2.5 rounded-l-xl rounded-br-xl shadow-sm text-gray-800 max-w-[88%] invisible flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                Proposta enviada! Agendei nossa apresentação para amanhã às 14h.
              </div>

            </div>
            <div className="bg-[#F0F0F0] h-12 flex items-center px-4 border-t border-gray-200">
              <div className="w-full h-8 bg-white rounded-full flex items-center px-3 text-gray-400 text-xs">Mensagem...</div>
            </div>
          </div>

          {/* Linha de Conexão (Visível apenas em Desktop) */}
          <div className="connect-line hidden xl:block z-10 w-[60px] lg:w-[100px] h-1 bg-gradient-to-r from-[#25D366] to-[#BE212A] invisible origin-left rounded-full"></div>

          {/* Mockup CRM Expandido (Kanban) */}
          <div className="mockup-crm flex-1 w-full max-w-[800px] relative z-20 bg-[#2C2822] rounded-[2rem] shadow-2xl p-5 flex flex-col gap-4 invisible border-[6px] border-[#211E1B]">
            <div className="flex items-center justify-between border-b border-[#3A352F] pb-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 mr-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <span className="text-[#C9C3B8] font-display text-sm tracking-wide flex items-center gap-2">
                  Pipeline de Vendas
                </span>
              </div>
              <span className="text-[#BE212A] text-[10px] font-bold bg-[#BE212A]/10 px-2 py-1 rounded tracking-wider whitespace-nowrap">MODO IA</span>
            </div>
            
            {/* Grid Kanban */}
            <div className="flex-1 pb-2">
              <div className="grid grid-cols-4 gap-3 w-full h-full">
                
                {/* Coluna 1 */}
                <div className="flex-1 bg-[#2C2822] rounded-xl p-3 min-h-[240px] relative border border-[#3A352F]">
                  <div className="flex items-center justify-between mb-3 border-b border-[#3A352F] pb-2">
                    <p className="text-[11px] font-semibold text-[#C9C3B8] uppercase tracking-wider">Entrada</p>
                    <span className="col-count-1 text-[10px] text-gray-500 bg-black/20 px-1.5 rounded font-bold transition-colors">0</span>
                  </div>
                  {/* Container do Card para permitir movimento de X em % com facilidade */}
                  <div className="absolute left-3 top-12 w-[calc(100%-24px)] z-10">
                    <div className="crm-card invisible relative z-10 w-full">
                      <div className="crm-card-inner bg-[#3A352F] text-[#FAF7F2] p-3 rounded-lg shadow-lg border border-[#4A453F]/50">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></div>
                          <p className="font-semibold text-[13px] truncate">Carlos — Distribuidora</p>
                        </div>
                        <p className="text-[11px] opacity-80 leading-relaxed truncate">Via Bot WhatsApp</p>
                        <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                          <span className="crm-card-status text-[9px] bg-black/20 px-1.5 py-0.5 rounded text-white/70">Aguardando IA</span>
                          <span className="text-[9px] text-white/50">Agora</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna 2 */}
                <div className="flex-1 bg-[#2C2822] rounded-xl p-3 min-h-[240px] border border-[#3A352F]">
                  <div className="flex items-center justify-between mb-3 border-b border-[#3A352F] pb-2">
                    <p className="text-[11px] font-semibold text-[#C9C3B8] uppercase tracking-wider">Qualificação</p>
                    <span className="col-count-2 text-[10px] text-gray-500 bg-black/20 px-1.5 rounded font-bold transition-colors">0</span>
                  </div>
                </div>

                {/* Coluna 3 */}
                <div className="flex-1 bg-[#2C2822] rounded-xl p-3 min-h-[240px] border border-[#3A352F]">
                  <div className="flex items-center justify-between mb-3 border-b border-[#3A352F] pb-2">
                    <p className="text-[11px] font-semibold text-[#C9C3B8] uppercase tracking-wider">Proposta</p>
                    <span className="col-count-3 text-[10px] text-gray-500 bg-black/20 px-1.5 rounded font-bold transition-colors">0</span>
                  </div>
                </div>

                {/* Coluna 4 */}
                <div className="flex-1 bg-[#2C2822] rounded-xl p-3 min-h-[240px] border border-[#3A352F]">
                  <div className="flex items-center justify-between mb-3 border-b border-[#3A352F] pb-2">
                    <p className="text-[11px] font-semibold text-[#C9C3B8] uppercase tracking-wider">Aguard. Reunião</p>
                    <span className="col-count-4 text-[10px] text-gray-500 bg-black/20 px-1.5 rounded font-bold transition-colors">0</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
