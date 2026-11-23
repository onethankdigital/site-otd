// Estilos compartilhados das páginas de serviço (padrão da página de SEO).
const ESTILOS = `
        .seo2 {
          --bg:#050505; --panel:#0f0f10; --panel2:#161618; --line:#26262a;
          --fg:#f5f5f4; --mute:#a3a3a8; --red:#e0040b; --red-soft:rgba(224,4,11,.14); --ok:#16a34a;
          --paper:#ffffff; --ink:#202124; --link:#1a0dab; --gmute:#5f6368;
          --display:'Space Grotesk',system-ui,sans-serif; --serif:'DM Serif Display',Georgia,serif;
          --body:'Manrope',system-ui,sans-serif; --mono:'Space Mono',ui-monospace,monospace;
          background:var(--bg); color:var(--fg); font-family:var(--body); font-size:16px; line-height:1.6;
          padding-top:120px; overflow-x:hidden;
        }
        .seo2 *{box-sizing:border-box}
        .seo2 .wrap{max-width:1160px;margin:0 auto;padding-left:24px;padding-right:24px}
        .seo2 section{padding-block:72px;border-top:1px solid var(--line)}
        .seo2 h1,.seo2 h2,.seo2 h3{font-family:var(--display);text-wrap:balance;margin:0;letter-spacing:-.02em;color:inherit}
        .seo2 .display{font-family:var(--display);font-size:clamp(34px,5vw,58px);line-height:1.04;font-weight:700;letter-spacing:-.02em;text-wrap:balance;margin:0}
        .seo2 h2{font-size:clamp(28px,3.6vw,42px);line-height:1.1;font-weight:700}
        .seo2 h3{font-size:20px;font-weight:600}
        .seo2 em{font-family:var(--serif);font-style:italic;font-weight:400;letter-spacing:0}
        .seo2 p{margin:0}
        .seo2 .lead{color:var(--mute);font-size:18px;max-width:62ch}
        .seo2 .eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin:0 0 14px;font-weight:700;line-height:1.5}
        .seo2 .btn{display:inline-flex;align-items:center;gap:10px;background:var(--red);color:#fff;font-family:var(--display);font-weight:600;font-size:16px;padding:14px 22px;border-radius:10px;text-decoration:none;border:0;cursor:pointer;transition:transform .2s}
        .seo2 .btn:hover{transform:translateY(-2px)}
        .seo2 button:focus-visible,.seo2 a:focus-visible,.seo2 summary:focus-visible{outline:2px solid #fff;outline-offset:3px}

        .seo2 .head-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:48px;align-items:center}
        .seo2 .head-grid>*{min-width:0}
        .seo2 .head-grid .lead{margin-top:20px}
        .seo2 .head-cta{margin-top:28px;display:flex;gap:16px;flex-wrap:wrap;align-items:center}
        .seo2 .head-cta small{color:var(--mute);font-size:13px}
        .seo2 .serp-box{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:16px}
        .seo2 .segc{display:flex;background:var(--panel2);border-radius:10px;padding:4px;gap:4px;margin-bottom:14px}
        .seo2 .segc button{flex:1;border:0;background:transparent;color:var(--mute);font-family:var(--display);font-weight:600;font-size:14px;padding:10px;border-radius:8px;cursor:pointer}
        .seo2 .segc button[aria-selected="true"]{background:var(--fg);color:var(--bg)}
        .seo2 .serp{background:var(--paper);color:var(--ink);border-radius:12px;padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.45;min-height:400px}
        .seo2 .qbar{display:flex;align-items:center;gap:10px;border:1px solid #dfe1e5;border-radius:24px;padding:9px 14px;margin-bottom:14px;color:var(--ink)}
        .seo2 .aio{background:#f1f5fe;border-radius:12px;padding:12px 14px;margin-bottom:14px}
        .seo2 .aio-t{font-size:12px;font-weight:700;color:#174ea6;margin-bottom:6px}
        .seo2 .cite{background:#fff;border:1px solid #d2e3fc;border-radius:999px;padding:1px 8px;font-size:12px;color:#174ea6;white-space:nowrap}
        .seo2 .res{padding:8px 0;border-bottom:1px solid #f1f3f4}
        .seo2 .res .u{font-size:12px;color:var(--gmute)}
        .seo2 .res .t{color:var(--link);font-size:17px}
        .seo2 .res .d{color:#4d5156;font-size:13px}
        .seo2 .res.you{background:#fff4f4;outline:2px solid var(--red);border-radius:8px;padding:8px 10px;margin:4px -10px}
        .seo2 .res.you .t{font-weight:700}
        .seo2 .pin{display:inline-block;background:var(--red);color:#fff;font-size:11px;font-weight:700;border-radius:4px;padding:1px 6px;margin-left:6px;vertical-align:middle}
        .seo2 .missing{margin-top:12px;border:2px dashed #e8a5a5;border-radius:8px;padding:12px;color:#b3261e;font-size:13px;text-align:center}
        .seo2 .cap{margin-top:12px;font-family:var(--mono);font-size:11px;color:#9a9aa1;text-align:center}

        .seo2 .fcards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:36px}
        .seo2 .fcard{position:relative;display:flex;flex-direction:column;gap:10px;text-align:left;background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 20px;color:var(--fg);font:inherit;cursor:pointer;box-shadow:0 1px 2px rgba(20,20,20,.04);transition:transform .35s,box-shadow .35s,border-color .35s}
        .seo2 .fcard:not(:last-child)::after{content:"→";position:absolute;right:-14px;top:44px;color:var(--red);font-weight:700;z-index:1}
        .seo2 .fcard.on{transform:translateY(-6px);border-color:var(--red);box-shadow:0 18px 40px -18px rgba(224,4,11,.45)}
        .seo2 .fnum{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--mute)}
        .seo2 .fcard.on .fnum{color:var(--red)}
        .seo2 .fic{width:48px;height:48px;border-radius:12px;background:#f3f1ec;color:#141414;display:grid;place-items:center;transition:background .35s,color .35s}
        .seo2 .fcard.on .fic{background:var(--red);color:#fff}
        .seo2 .fcard strong{font-family:var(--display);font-size:19px;line-height:1.2}
        .seo2 .fd{color:var(--mute);font-size:14px;line-height:1.5}
        .seo2 .fotd{margin-top:auto;padding-top:10px;border-top:1px dashed var(--line);font-family:var(--mono);font-size:11px;letter-spacing:.04em;color:var(--mute)}
        .seo2 .fotd b{color:var(--fg);font-weight:700}
        .seo2 .fcard.on .fotd b{color:var(--red)}
        .seo2 .fbar{height:4px;background:var(--line);border-radius:2px;margin-top:22px;overflow:hidden}
        .seo2 .fbar i{display:block;height:100%;background:var(--red);border-radius:2px;transition:width .5s}
        .seo2 .fout{margin-top:18px;color:var(--mute);font-size:15px}
        .seo2 .fout b{color:var(--fg)}
        .seo2 .fout a{color:var(--red);font-weight:600;text-decoration:none;border-bottom:1px solid currentColor}

        .seo2 .lab4{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:36px;align-items:start}
        .seo2 .lab4>*{min-width:0}
        .seo2 .lab4-preview{position:sticky;top:100px;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:18px}
        .seo2 .meter-top{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-family:var(--mono);font-size:12px;color:var(--mute)}
        .seo2 .meter-top b{color:var(--fg);font-family:var(--display);font-size:16px}
        .seo2 .meter-bar{height:10px;background:var(--panel2);border-radius:5px;margin:12px 0;overflow:hidden}
        .seo2 .meter-bar i{display:block;height:100%;background:linear-gradient(90deg,#7a0306,var(--red));border-radius:5px;transition:width .6s cubic-bezier(.2,.8,.2,1)}
        .seo2 .chips{display:flex;gap:8px;flex-wrap:wrap}
        .seo2 .chip{font-family:var(--mono);font-size:11px;border:1px solid var(--line);color:var(--mute);border-radius:999px;padding:4px 10px;transition:all .3s}
        .seo2 .chip.on{border-color:var(--ok);color:#fff;background:rgba(22,163,74,.18)}
        .seo2 .chip.on::before{content:"✓ "}
        .seo2 .mini-serp{background:var(--paper);color:var(--ink);border-radius:12px;padding:14px 16px;margin-top:16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.45;min-height:300px}
        .seo2 .r-you{padding:10px;border-radius:8px;transition:background .4s;outline:2px solid transparent}
        .seo2 .r-you.up{background:#fff4f4;outline-color:var(--red)}
        .seo2 .r-you .u{font-size:12px;color:var(--gmute)}
        .seo2 .r-you .t{color:var(--link);font-size:17px}
        .seo2 .r-you .d{color:#4d5156;font-size:13px}
        .seo2 .rich{font-size:12px;color:var(--gmute);margin:2px 0}
        .seo2 .rich .stars{color:#f5a623;letter-spacing:1px}
        .seo2 .rich .fast{color:#137333;font-weight:700}
        .seo2 .faqmini{margin-top:8px;border-top:1px solid #ebebeb}
        .seo2 .faqmini div{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #ebebeb;font-size:13px;color:var(--ink)}
        .seo2 .ai-mini{margin-top:12px;background:#f1f5fe;border-radius:10px;padding:10px 12px}
        .seo2 .ai-q{font-size:12px;color:var(--gmute);margin-bottom:4px}
        .seo2 .ai-a{font-size:13px;color:var(--ink)}
        .seo2 .ai-a b{color:#174ea6}
        .seo2 .pieces{display:flex;flex-direction:column;gap:12px}
        .seo2 .piece{display:flex;gap:16px;align-items:flex-start;text-align:left;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:18px;color:var(--fg);font:inherit;cursor:pointer;transition:border-color .3s,background .3s;width:100%}
        .seo2 .piece:hover{border-color:#3a3a40}
        .seo2 .piece[aria-pressed="true"]{border-color:var(--red);background:linear-gradient(180deg,var(--red-soft),var(--panel) 80%)}
        .seo2 .sw{flex:none;width:44px;height:26px;border-radius:13px;background:var(--panel2);border:1px solid var(--line);position:relative;margin-top:2px;transition:background .3s}
        .seo2 .sw i{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--mute);transition:transform .3s,background .3s}
        .seo2 .piece[aria-pressed="true"] .sw{background:var(--red);border-color:var(--red)}
        .seo2 .piece[aria-pressed="true"] .sw i{transform:translateX(18px);background:#fff}
        .seo2 .pc{display:flex;flex-direction:column;gap:6px;min-width:0}
        .seo2 .pn{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}
        .seo2 .pc strong{font-family:var(--display);font-size:18px;font-weight:600;line-height:1.25}
        .seo2 .pw{color:var(--mute);font-size:14px;line-height:1.5}
        .seo2 .pt{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:#9a9aa1}
        .seo2 .pieces-foot{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:4px}
        .seo2 .pieces-foot span{font-family:var(--mono);font-size:12px;color:var(--mute);margin-left:auto}
        .seo2 .btn-ghost{border:1px solid var(--line);background:transparent;color:var(--fg);font-family:var(--display);font-weight:600;font-size:14px;padding:9px 16px;border-radius:999px;cursor:pointer}
        .seo2 .btn-ghost:hover{border-color:var(--red)}

        /* Simulador de vazamento: estrutura digital */
        .seo2 section.leaksec{position:relative;padding-block:96px;border-top:0;background:
          radial-gradient(ellipse 70% 55% at 50% 0%,rgba(224,4,11,.22),transparent 70%),
          radial-gradient(ellipse 60% 50% at 50% 100%,rgba(224,4,11,.12),transparent 70%),#070606}
        .seo2 section.leaksec::before,.seo2 section.leaksec::after{content:"";position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--red),transparent)}
        .seo2 section.leaksec::before{top:0}
        .seo2 section.leaksec::after{bottom:0}
        .seo2 .lk-head{text-align:center;max-width:820px;margin:0 auto}
        .seo2 .lk-head h2{font-size:clamp(32px,4.6vw,56px);line-height:1.05}
        .seo2 .lk-head .lead{margin:18px auto 0;text-align:center}
        .seo2 .lk-board{margin-top:48px;background:linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01));border:1px solid rgba(224,4,11,.35);border-radius:22px;padding:28px;box-shadow:0 40px 120px -40px rgba(224,4,11,.5)}
        .seo2 .lk-track{display:grid;grid-template-columns:auto 1fr 1.25fr 1fr 1.1fr 1fr 1.1fr 1fr auto;align-items:center}
        .seo2 .lk-end{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--mute)}
        .seo2 .lk-end .dot{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:var(--panel2);border:1px solid var(--line);color:#fff}
        .seo2 .lk-end.win .dot{background:var(--ok);border-color:var(--ok);box-shadow:0 0 0 8px rgba(22,163,74,.15),0 0 40px rgba(22,163,74,.5)}
        .seo2 .lk-end.win.low .dot{background:#3b2a12;border-color:#a16207;box-shadow:none}
        .seo2 .lk-end b{font-family:var(--display);font-size:28px;letter-spacing:0;color:#fff;line-height:1}
        .seo2 .wire{position:relative;height:4px;margin:0 6px;border-radius:2px;background:rgba(255,255,255,.08);overflow:visible}
        .seo2 .wire.flow{background:linear-gradient(90deg,rgba(224,4,11,.35),rgba(224,4,11,.7))}
        .seo2 .wire.broken{background:linear-gradient(90deg,rgba(224,4,11,.7) 0 40%,transparent 40% 60%,rgba(255,255,255,.06) 60%)}
        .seo2 .wire .p{position:absolute;top:50%;left:0;width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border-radius:50%;background:#fff;box-shadow:0 0 10px #fff,0 0 18px var(--red);opacity:0}
        .seo2 .wire.flow .p{animation:seo2flow 1.8s linear infinite}
        .seo2 .wire.broken .p{animation:seo2leak 1.8s ease-in infinite;background:#ffb4b4}
        .seo2 .wire.thin .p:nth-child(n+2){display:none}
        .seo2 .wire .p:nth-child(2){animation-delay:.6s}
        .seo2 .wire .p:nth-child(3){animation-delay:1.2s}
        @keyframes seo2flowv{0%{top:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
        @keyframes seo2leakv{0%{top:0;left:50%;opacity:0}10%{opacity:1}45%{top:40%;left:50%;opacity:1}100%{top:48%;left:900%;opacity:0}}
        @keyframes seo2flow{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:100%;opacity:0}}
        @keyframes seo2leak{0%{left:0;top:50%;opacity:0}10%{opacity:1}45%{left:40%;top:50%;opacity:1}100%{left:48%;top:420%;opacity:0}}
        .seo2 .lk-entry{display:flex;flex-direction:column;gap:12px}
        .seo2 .lk-doors{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--mute);text-align:center;border-bottom:1px dashed rgba(224,4,11,.45);padding-bottom:6px}
        .seo2 .lk-node{position:relative;display:flex;flex-direction:column;gap:6px;text-align:left;width:100%;background:#111012;border:1px solid rgba(224,4,11,.55);border-radius:14px;padding:14px 14px 12px;color:var(--fg);font:inherit;cursor:pointer;transition:all .35s;box-shadow:0 0 0 0 rgba(224,4,11,0)}
        .seo2 .lk-node:hover{box-shadow:0 0 24px -6px rgba(224,4,11,.6)}
        .seo2 .lk-node.cur{background:linear-gradient(180deg,rgba(224,4,11,.18),#111012)}
        .seo2 .lk-node[aria-pressed="false"]{border-style:dashed;border-color:#3a3a40;background:#0b0b0c;filter:saturate(.2)}
        .seo2 .lk-node[aria-pressed="false"] strong{color:#8a8a90}
        .seo2 .lk-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
        .seo2 .lk-node .sw{width:36px;height:22px;border-radius:11px;margin:0}
        .seo2 .lk-node .sw i{width:14px;height:14px}
        .seo2 .lk-node[aria-pressed="true"] .sw{background:var(--red);border-color:var(--red)}
        .seo2 .lk-node[aria-pressed="true"] .sw i{transform:translateX(14px);background:#fff}
        .seo2 .lk-role{font-family:var(--mono);font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--red);white-space:nowrap;font-weight:700}
        .seo2 .lk-node .sw{flex:none}
        .seo2 .lk-node strong{font-family:var(--display);font-size:16px;line-height:1.2}
        .seo2 .lk-node small{color:var(--mute);font-size:12.5px;line-height:1.4}
        .seo2 .lk-alert{position:absolute;top:-10px;right:-10px;width:24px;height:24px;border-radius:50%;background:var(--red);color:#fff;font-weight:800;display:grid;place-items:center;font-size:14px;box-shadow:0 0 0 4px rgba(224,4,11,.25)}
        .seo2 .lk-links{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:22px}
        .seo2 .lk-links a{font-family:var(--mono);font-size:11px;letter-spacing:.06em;color:var(--mute);text-decoration:none;border-top:1px solid var(--line);padding-top:10px}
        .seo2 .lk-links a b{color:var(--fg);font-family:var(--display);font-size:14px;letter-spacing:0;display:block;font-weight:600}
        .seo2 .lk-links a:hover b{color:var(--red)}
        .seo2 .lk-out{display:grid;grid-template-columns:1.3fr 1fr;gap:20px;margin-top:26px}
        .seo2 .lk-out>*{min-width:0}
        .seo2 .lk-funnel{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
        .seo2 .lk-f{background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:12px;padding:12px}
        .seo2 .lk-f b{display:block;font-family:var(--display);font-size:30px;line-height:1.05;font-variant-numeric:tabular-nums;transition:color .3s}
        .seo2 .lk-f span{font-size:12px;color:var(--mute)}
        .seo2 .lk-f.last b{color:var(--ok)}
        .seo2 .lk-f.last.low b{color:#f59e0b}
        .seo2 .lk-note{font-family:var(--mono);font-size:10.5px;color:#7a7a80;margin-top:8px}
        .seo2 .lk-leaks{border-radius:14px;padding:16px;border:1px solid rgba(22,163,74,.45);background:rgba(22,163,74,.07)}
        .seo2 .lk-leaks.bad{border-color:rgba(224,4,11,.55);background:rgba(224,4,11,.08)}
        .seo2 .lk-leaks h3{font-size:15px;margin-bottom:8px}
        .seo2 .lk-leaks ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
        .seo2 .lk-leaks li{font-size:14px;color:#e5e5e3;padding-left:22px;position:relative}
        .seo2 .lk-leaks li::before{content:"";position:absolute;left:4px;top:6px;width:9px;height:9px;background:var(--red);border-radius:50% 0 50% 50%;transform:rotate(-45deg)}
        .seo2 .lk-leaks p{font-size:14px;color:#d7f5df}
        .seo2 .lk-cta{display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:36px;text-align:center}
        .seo2 .lk-cta p{color:var(--mute);width:100%;font-size:15px}
        .seo2 .mid-cta{margin-top:28px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .seo2 .mid-cta small{color:var(--mute)}

        .seo2 section.light{background:#f3f1ec;--panel:#ffffff;--line:#e2ddd3;--fg:#141414;--mute:#5b5852;color:var(--fg);border-top:0}
        .seo2 .tabs{display:flex;gap:8px;flex-wrap:wrap;margin-top:32px}
        .seo2 .tabs button{border:1px solid var(--line);background:var(--panel);color:var(--fg);font-family:var(--display);font-weight:600;padding:10px 18px;border-radius:999px;cursor:pointer;font-size:14px}
        .seo2 .tabs button[aria-selected="true"]{background:var(--red);border-color:var(--red);color:#fff}
        .seo2 .queries{list-style:none;padding:0;margin:20px 0 0;display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
        .seo2 .queries li{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;min-width:0}
        .seo2 .queries li span{min-width:0}
        .seo2 .kind{margin-left:auto;font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute);border:1px solid var(--line);border-radius:6px;padding:3px 7px;white-space:nowrap}
        .seo2 .kind.ia{color:var(--red);border-color:var(--red)}
        .seo2 .seg-link{display:inline-flex;margin-top:18px;font-family:var(--display);font-weight:600;color:var(--red);text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:2px}

        .seo2 section.aisec{background:radial-gradient(ellipse 60% 70% at 85% 30%,rgba(91,140,255,.10),transparent 70%),radial-gradient(ellipse 50% 60% at 10% 90%,rgba(224,4,11,.10),transparent 70%),var(--bg)}
        .seo2 .aigrid{display:grid;grid-template-columns:1fr 1.15fr;gap:48px;align-items:center}
        .seo2 .aigrid>*{min-width:0}
        .seo2 .aichecks{list-style:none;padding:0;margin:24px 0 0;display:flex;flex-direction:column;gap:10px}
        .seo2 .aichecks li{display:flex;gap:14px;align-items:flex-start;padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.02);transition:border-color .4s,background .4s}
        .seo2 .aichecks li.on{border-color:rgba(22,163,74,.55);background:rgba(22,163,74,.08)}
        .seo2 .aichecks .ck{flex:none;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-family:var(--mono);font-size:12px;background:var(--panel2);color:var(--mute);transition:all .4s}
        .seo2 .aichecks li.on .ck{background:var(--ok);color:#fff}
        .seo2 .aichecks b{display:block;color:var(--fg);font-family:var(--display);font-weight:600}
        .seo2 .aichecks small{color:var(--mute);font-size:13px}
        .seo2 .aiwhy{margin-top:18px;color:var(--mute);font-size:15px;max-width:52ch}
        .seo2 .aiwin{background:linear-gradient(180deg,#121214,#0b0b0c);border:1px solid var(--line);border-radius:18px;box-shadow:0 30px 80px -30px color-mix(in srgb,var(--ai) 45%,transparent);transition:box-shadow .6s}
        .seo2 .aitabs{display:flex;gap:6px;padding:10px;border-bottom:1px solid var(--line);overflow-x:auto}
        .seo2 .aitabs button{display:flex;align-items:center;gap:8px;flex:none;border:1px solid transparent;background:transparent;color:var(--mute);font-family:var(--display);font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px;cursor:pointer;transition:all .3s}
        .seo2 .aitabs button i{width:9px;height:9px;border-radius:50%;background:var(--c)}
        .seo2 .aitabs button[aria-selected="true"]{color:#fff;border-color:var(--c);background:color-mix(in srgb,var(--c) 16%,transparent)}
        .seo2 .aibody{padding:20px;display:flex;flex-direction:column;gap:14px;min-height:360px}
        .seo2 .aiq{align-self:flex-end;max-width:88%;background:var(--panel2);padding:12px 16px;border-radius:16px 16px 4px 16px;font-size:15px;min-height:46px}
        .seo2 .aime{display:flex;align-items:center;gap:10px}
        .seo2 .aiav{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--ai);color:#fff;font-family:var(--display);font-weight:700;font-size:14px;transition:background .4s}
        .seo2 .ainame{font-family:var(--display);font-weight:600}
        .seo2 .aistatus{font-family:var(--mono);font-size:11px;color:var(--mute);margin-left:auto}
        .seo2 .aisrcs{display:flex;flex-wrap:wrap;gap:6px}
        .seo2 .aisrcs span{font-family:var(--mono);font-size:11px;border:1px dashed var(--line);border-radius:999px;padding:3px 10px;color:#6f6f76;transition:all .35s}
        .seo2 .aisrcs span.on{border-style:solid;border-color:rgba(22,163,74,.6);color:#d7f5df;background:rgba(22,163,74,.12)}
        .seo2 .aians{font-size:15px;line-height:1.6;color:#e7e7e5;min-height:96px}
        .seo2 .aians b{color:#fff;background:color-mix(in srgb,var(--ai) 22%,transparent);padding:0 4px;border-radius:4px}
        .seo2 .aiph{color:#6f6f76;font-size:14px}
        .seo2 .aicite{display:flex;flex-wrap:wrap;gap:6px;opacity:0;transform:translateY(6px);transition:all .4s}
        .seo2 .aicite.on{opacity:1;transform:none}
        .seo2 .aicite span{font-family:var(--mono);font-size:11px;border:1px solid var(--line);border-radius:999px;padding:3px 10px;color:var(--mute)}
        .seo2 .aicite span.me2{border-color:var(--red);color:#fff}
        .seo2 .caret{display:inline-block;width:2px;height:1em;background:currentColor;margin-left:2px;vertical-align:-2px;animation:seo2blink .8s steps(1) infinite}
        @keyframes seo2blink{50%{opacity:0}}
        .seo2 .aidisc{font-family:var(--mono);font-size:10.5px;color:#7a7a80;padding:0 20px 16px;line-height:1.5}

        .seo2 .jr{margin-top:36px;background:var(--panel);border:1px solid var(--line);border-radius:20px;overflow:hidden}
        .seo2 .jr-curve{width:100%;height:auto;display:block;background:linear-gradient(180deg,#0c0c0d,var(--panel))}
        .seo2 .jr-curve text{font-family:var(--mono);font-size:11px;fill:var(--mute)}
        .seo2 .jr-zone{fill:rgba(224,4,11,.08);transition:x .5s,width .5s}
        .seo2 .jr-tabs{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line)}
        .seo2 .jr-tabs button{position:relative;display:flex;flex-direction:column;gap:4px;text-align:left;background:transparent;border:0;border-right:1px solid var(--line);padding:16px 20px 18px;color:var(--mute);font:inherit;cursor:pointer;transition:background .3s,color .3s}
        .seo2 .jr-tabs button:last-child{border-right:0}
        .seo2 .jr-tabs button:hover{background:rgba(255,255,255,.02)}
        .seo2 .jr-tabs button[aria-selected="true"]{background:rgba(224,4,11,.08);color:var(--fg)}
        .seo2 .jr-when{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}
        .seo2 .jr-tabs strong{font-family:var(--display);font-size:18px}
        .seo2 .jr-prog{position:absolute;left:0;top:0;height:3px;width:0;background:var(--red)}
        .seo2 .jr-tabs button[aria-selected="true"] .jr-prog{width:100%;transition:width .4s}
        .seo2 .jr-panel{display:grid;grid-template-columns:1fr 1.15fr;gap:32px;padding:28px;border-top:1px solid var(--line);animation:seo2fade .45s ease}
        @keyframes seo2fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        .seo2 .jr-panel>*{min-width:0}
        .seo2 .jr-tag{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--mute)}
        .seo2 .jr-left h3{font-size:clamp(24px,2.6vw,32px);margin:8px 0 10px}
        .seo2 .jr-left p{color:var(--mute);font-size:16px}
        .seo2 .jr-ve{margin-top:18px;border-left:3px solid var(--ok);background:rgba(22,163,74,.07);border-radius:0 10px 10px 0;padding:12px 14px;font-size:14px;color:#d7f5df}
        .seo2 .jr-ve b{display:block;font-family:var(--display);color:#fff;margin-bottom:2px}
        .seo2 .jr-sub{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--red)}
        .seo2 .jr-right ul{list-style:none;margin:12px 0 0;padding:0;display:flex;flex-direction:column;gap:10px}
        .seo2 .jr-right li{display:flex;gap:12px;align-items:flex-start;background:var(--panel2);border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-size:15px;color:#e7e7e5}
        .seo2 .jr-right li span{flex:none;width:22px;height:22px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:700;margin-top:1px}
        .seo2 .jr-know{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px}
        .seo2 .jr-k{display:flex;flex-direction:column;gap:6px;border:1px solid var(--line);border-radius:16px;padding:20px;background:linear-gradient(180deg,rgba(255,255,255,.03),transparent)}
        .seo2 .jr-kt{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute)}
        .seo2 .jr-k b{font-family:var(--display);font-size:20px;color:var(--fg)}
        .seo2 .jr-k span:last-child{color:var(--mute);font-size:14px}
        .seo2 .jr-cta{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:28px}
        .seo2 .jr-cta small{color:var(--mute)}

        .seo2 .score{display:flex;align-items:center;gap:14px;margin-top:36px;flex-wrap:wrap}
        .seo2 .score b{font-family:var(--display);font-size:44px;line-height:1}
        .seo2 .st{color:#f5b301;letter-spacing:2px}
        .seo2 .score span{color:var(--mute)}
        .seo2 .reviews{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
        .seo2 .rev{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:22px;display:flex;flex-direction:column;gap:12px;margin:0}
        .seo2 .rev blockquote{margin:0;font-size:15px;color:var(--fg)}
        .seo2 .rev figcaption{margin-top:auto;font-family:var(--mono);font-size:12px;color:var(--mute)}
        .seo2 .lab2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:16px}
        .seo2 .metric{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:24px}
        .seo2 .metric .k{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--mute)}
        .seo2 .metric .v{font-family:var(--display);font-size:40px;font-weight:700;margin-top:10px;font-variant-numeric:tabular-nums;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
        .seo2 .metric .v s{font-size:20px;color:var(--mute);font-weight:500}
        .seo2 .metric p{color:var(--mute);font-size:14px;margin-top:8px}
        .seo2 .psi{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
        .seo2 .psi span{display:flex;align-items:center;gap:8px;border:1px solid rgba(22,163,74,.45);background:rgba(22,163,74,.08);border-radius:999px;padding:4px 12px 4px 4px;font-size:13px;color:var(--mute)}
        .seo2 .psi b{display:grid;place-items:center;min-width:34px;height:26px;padding:0 6px;border-radius:999px;background:var(--ok);color:#fff;font-family:var(--display);font-size:13px;font-variant-numeric:tabular-nums}


        .seo2 .faq-list{margin-top:32px;border-top:1px solid var(--line)}
        .seo2 .faq-list details{border-bottom:1px solid var(--line)}
        .seo2 .faq-list summary{list-style:none;cursor:pointer;padding:20px 40px 20px 0;font-family:var(--display);font-weight:600;font-size:18px;position:relative}
        .seo2 .faq-list summary::-webkit-details-marker{display:none}
        .seo2 .faq-list summary::after{content:"+";position:absolute;right:4px;top:16px;color:var(--red);font-size:24px;transition:transform .3s}
        .seo2 .faq-list details[open] summary::after{transform:rotate(45deg)}
        .seo2 .faq-list p{color:var(--mute);padding:0 0 20px;max-width:75ch}
        .seo2 .links{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:36px}
        .seo2 .links h3{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--mute);font-weight:400;margin-bottom:12px}
        .seo2 .links .row{display:flex;flex-wrap:wrap;gap:8px}
        .seo2 .links a{border:1px solid var(--line);border-radius:999px;padding:8px 14px;color:var(--fg);text-decoration:none;font-size:14px}
        .seo2 .links a:hover{border-color:var(--red)}

        .seo2 section.redband{background:linear-gradient(135deg,#e0040b,#9e0307);border-top:0}
        .seo2 .rb{display:grid;grid-template-columns:1.4fr auto;gap:28px;align-items:center}
        .seo2 .rb>*{min-width:0}
        .seo2 .rb h2,.seo2 .rb p{color:#fff}
        .seo2 .rb p{opacity:.9;margin-top:12px;max-width:60ch}
        .seo2 .btn-w{display:inline-flex;align-items:center;gap:10px;background:#0a0a0a;color:#fff;font-family:var(--display);font-weight:600;font-size:16px;padding:16px 24px;border-radius:10px;text-decoration:none}
        .seo2 .mbar{display:none}

        @media (max-width:860px){
          .seo2{padding-top:96px}
          .seo2 section{padding-block:56px}
          .seo2 .aibody{min-height:0}
          .seo2 section.leaksec{padding-block:64px}
          .seo2 .lk-board{padding:18px 14px}
          .seo2 .lk-track{grid-template-columns:1fr;justify-items:center}
          .seo2 .lk-track>.lk-entry,.seo2 .lk-track>.lk-node{width:100%;max-width:440px}
          .seo2 .lk-entry{display:grid;grid-template-columns:1fr 1fr;gap:10px}
          .seo2 .lk-doors{grid-column:1/-1}
          .seo2 .wire{width:4px;height:34px;margin:6px auto}
          .seo2 .wire.flow{background:linear-gradient(180deg,rgba(224,4,11,.35),rgba(224,4,11,.7))}
          .seo2 .wire.broken{background:linear-gradient(180deg,rgba(224,4,11,.7) 0 40%,transparent 40% 60%,rgba(255,255,255,.06) 60%)}
          .seo2 .wire .p{left:50%;top:0}
          .seo2 .wire.flow .p{animation-name:seo2flowv}
          .seo2 .wire.broken .p{animation-name:seo2leakv}
          .seo2 .lk-links{grid-template-columns:1fr 1fr}
          .seo2 .lk-out{grid-template-columns:1fr}
          .seo2 .lk-funnel{grid-template-columns:1fr 1fr}
          .seo2 .lk-alert{top:-8px;right:-6px}
          .seo2 .head-grid,.seo2 .aigrid,.seo2 .lab4,.seo2 .links,.seo2 .rb{grid-template-columns:1fr}
          .seo2 .queries,.seo2 .reviews,.seo2 .lab2{grid-template-columns:1fr}
          .seo2 .jr-tabs button{padding:12px 10px 14px}
          .seo2 .jr-curve text{display:none}
          .seo2 .jr-tabs strong{font-size:14px;line-height:1.2}
          .seo2 .jr-when{font-size:9.5px;letter-spacing:.08em}
          .seo2 .jr-panel{grid-template-columns:1fr;gap:20px;padding:20px 16px}
          .seo2 .jr-know{grid-template-columns:1fr}
          .seo2 .fcards{grid-template-columns:1fr 1fr;gap:12px}
          .seo2 .fcard::after{display:none}
          .seo2 .fcard{padding:16px 14px}
          .seo2 .fcard strong{font-size:16px}
          .seo2 .fd{font-size:13px}
          .seo2 .lab4-preview{top:72px;z-index:2;padding:12px}
          .seo2 .mini-serp{min-height:0;padding:10px 12px;margin-top:10px}
          .seo2 .r-you .d,.seo2 .lab4 .cap{display:none}
          .seo2 .pw{font-size:13px}
          .seo2 .mbar{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:40;gap:12px;align-items:center;justify-content:space-between;background:rgba(10,10,10,.96);border-top:1px solid var(--line);padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px))}
          .seo2 .mbar span{font-size:13px;color:var(--mute)}
          .seo2 .mbar a{background:var(--red);color:#fff;text-decoration:none;font-family:var(--display);font-weight:600;padding:10px 16px;border-radius:9px;font-size:14px;white-space:nowrap}
          .seo2{padding-bottom:72px}
        }
        .seo2 .iv{position:relative;overflow:hidden}
        .seo2 .iv::before{content:"";position:absolute;right:-10%;top:10%;width:620px;height:620px;max-width:90vw;background:radial-gradient(closest-side,rgba(224,4,11,.16),transparent);pointer-events:none}
        .seo2 .iv .wrap{position:relative}
        .seo2 .iv-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:28px;margin-top:44px;align-items:start}
        .seo2 .iv-grid>*{min-width:0}
        .seo2 .iv-calc{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:24px}
        .seo2 .iv-calc label{font-family:var(--display);font-weight:600;font-size:15px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
        .seo2 .iv-calc output{font-family:var(--mono);font-size:15px}
        .seo2 .iv-calc input[type=range]{width:100%;accent-color:var(--red);margin:12px 0 4px}
        .seo2 .iv-ticks,.seo2 .iv-months{display:flex;justify-content:space-between;font-family:var(--mono);font-size:11px;color:#8a8a90}
        .seo2 .iv-months{margin-top:6px}
        .seo2 .iv-calc .iv-switch{display:flex;justify-content:flex-start;align-items:center;gap:10px;margin-top:18px;font-family:var(--body);font-weight:500;font-size:14px;color:var(--mute);cursor:pointer;user-select:none}
        .seo2 .iv-switch input{appearance:none;-webkit-appearance:none;width:42px;height:24px;border-radius:999px;background:var(--panel2);border:1px solid var(--line);position:relative;cursor:pointer;transition:background .2s;flex:none;margin:0}
        .seo2 .iv-switch input::after{content:"";position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:var(--mute);transition:transform .2s,background .2s}
        .seo2 .iv-switch input:checked{background:var(--red-soft);border-color:var(--red)}
        .seo2 .iv-switch input:checked::after{transform:translateX(18px);background:var(--red)}
        .seo2 .iv-switch input:focus-visible{outline:2px solid var(--fg);outline-offset:2px}
        .seo2 .iv-rows{margin-top:22px;display:flex;flex-direction:column;gap:18px}
        .seo2 .iv-rh{display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:8px}
        .seo2 .iv-rh strong{font-family:var(--display);font-size:16px}
        .seo2 .iv-rh span{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--mute)}
        .seo2 .iv-cells{display:grid;grid-template-columns:repeat(24,1fr);gap:3px}
        .seo2 .iv-cells i{display:block;height:30px;border-radius:3px;transition:background .35s}
        .seo2 .iv-res{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}
        .seo2 .iv-res>div{border:1px solid var(--line);border-radius:12px;padding:14px 16px;background:#0b0b0c}
        .seo2 .iv-res b{display:block;font-family:var(--display);font-size:clamp(22px,2.6vw,28px);line-height:1.1;font-variant-numeric:tabular-nums}
        .seo2 .iv-res small{display:block;color:var(--mute);font-size:13.5px;margin-top:6px;line-height:1.45}
        .seo2 .iv-res .bad b{color:#ff5a5f}
        .seo2 .iv-res .good b{color:#4ade80}
        .seo2 .iv-close{position:sticky;top:96px;border-radius:18px;padding:2px;background:linear-gradient(150deg,var(--red),rgba(224,4,11,.15) 45%,var(--line));box-shadow:0 0 60px rgba(224,4,11,.18)}
        .seo2 .iv-in{background:linear-gradient(180deg,#140405,#0b0b0c 40%);border-radius:16px;padding:26px 24px}
        .seo2 .iv-pill{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#fff;background:var(--red);border-radius:999px;padding:5px 12px}
        .seo2 .iv-pill::before{content:"";width:7px;height:7px;border-radius:50%;background:#fff;animation:ivpulse 1.6s infinite}
        @keyframes ivpulse{50%{opacity:.25}}
        .seo2 .iv-in h3{font-family:var(--display);font-size:26px;line-height:1.15;margin:16px 0 6px}
        .seo2 .iv-sub{color:var(--mute);margin:0 0 18px;font-size:15px}
        .seo2 .iv-steps{list-style:none;margin:0 0 20px;padding:0;counter-reset:ivs}
        .seo2 .iv-steps li{counter-increment:ivs;display:grid;grid-template-columns:34px 1fr;gap:12px;padding:12px 0;border-top:1px solid var(--line)}
        .seo2 .iv-steps li::before{content:counter(ivs);width:30px;height:30px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;font-family:var(--mono);font-size:13px;color:var(--mute)}
        .seo2 .iv-steps li:first-child::before{background:var(--red);border-color:var(--red);color:#fff}
        .seo2 .iv-steps b{display:block;font-family:var(--display);font-size:15.5px}
        .seo2 .iv-steps span{color:var(--mute);font-size:14px;line-height:1.45}
        .seo2 .iv-steps .iv-free{display:inline;font-family:var(--mono);font-size:10.5px;color:#4ade80;letter-spacing:.08em;text-transform:uppercase;margin-left:6px}
        .seo2 .iv-btn{display:flex;justify-content:center;align-items:center;gap:10px;background:var(--red);color:#fff;font-family:var(--display);font-weight:700;font-size:17px;padding:17px 22px;border-radius:12px;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 10px 30px rgba(224,4,11,.35)}
        .seo2 .iv-btn:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(224,4,11,.5)}
        .seo2 .iv-btn:focus-visible{outline:2px solid #fff;outline-offset:3px}
        .seo2 .iv-micro{text-align:center;color:var(--mute);font-size:13px;margin:10px 0 0}
        .seo2 .iv-proof{display:flex;justify-content:center;flex-wrap:wrap;gap:8px 16px;margin-top:18px;padding-top:16px;border-top:1px dashed var(--line);font-family:var(--mono);font-size:11.5px;color:var(--mute)}
        .seo2 .iv-proof b{color:#fbbf24}
        .seo2 .iv-nos{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
        .seo2 .iv-nos span{font-size:12.5px;border:1px solid var(--line);border-radius:999px;padding:5px 11px;color:var(--mute)}
        .seo2 .iv-nos span::before{content:"✕ ";color:var(--red)}
        .seo2 .iv-urg{margin-top:26px;border-left:3px solid var(--red);padding:4px 0 4px 16px;max-width:60ch}
        .seo2 .iv-urg p{margin:0;font-size:17px;line-height:1.5}
        .seo2 .iv-urg strong{font-family:var(--display)}
        @media (max-width:880px){.seo2 .iv-grid{grid-template-columns:1fr}.seo2 .iv-close{position:static}}
        @media (max-width:480px){.seo2 .iv-res{grid-template-columns:1fr}.seo2 .iv-cells i{height:24px}.seo2 .iv-cells{gap:2px}}
        @media (prefers-reduced-motion:reduce){.seo2 *{transition:none!important;animation:none!important}}
`;

export default ESTILOS;
