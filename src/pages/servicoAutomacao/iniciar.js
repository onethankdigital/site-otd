// Interações da página de Automação (gerado a partir da prévia aprovada em 23/11/2026).
// Devolve uma função de limpeza: relógios e eventos param quando o visitante sai da página.
export default function iniciarPaginaAutomacao() {
  const _timers = [], _ouvintes = [];
  const _si = (f, ms) => { const id = setInterval(f, ms); _timers.push(id); return id; };
  const _on = (alvo, ev, f) => { alvo.addEventListener(ev, f); _ouvintes.push([alvo, ev, f]); };

(() => {
  const el = document.getElementById('hora-final');
  const h2 = document.getElementById('h-final');
  const t = () => {
    const d = new Date(), h = d.getHours();
    el.textContent = 'Agora são ' + h + 'h' + String(d.getMinutes()).padStart(2, '0');
    h2.textContent = (h >= 18 || h < 6) ? 'Agora mesmo, alguém pode estar chamando a sua empresa.' : 'Hoje à noite alguém vai chamar a sua empresa.';
  };
  t(); _si(t, 15000);
})();


(() => {
  const $ = id => document.getElementById(id), brl = n => n.toLocaleString('pt-BR');
  const num = s => +String(s).replace(/\D/g, '') || 0;
  function calc(){
    const fora = +$('c-fora').value, taxa = +$('c-taxa').value, valor = num($('c-valor').value);
    const mes = Math.round(fora * 4.3), clientes = Math.round(mes * taxa / 10 * 10) / 10;
    const total = Math.round(mes * taxa / 10 * valor / 100) * 100;
    $('o-fora').textContent = fora; $('o-taxa').textContent = taxa + ' de 10';
    $('rs').innerHTML = 'R$ ' + brl(total) + '<small>a cada mês</small>';
    const cl = clientes < 1 ? 'menos de 1 cliente novo' : (Math.round(clientes) === 1 ? '1 cliente novo' : brl(Math.round(clientes)) + ' clientes novos');
    $('rs-tx').textContent = `São cerca de ${brl(mes)} mensagens por mês. Se ${taxa} de cada 10 virarem clientes, são ${cl} por mês, cada um valendo R$ ${brl(valor)} no ano. Hoje, eles esperam resposta até o próximo expediente.`;
  }
  ['c-fora','c-taxa'].forEach(id => $(id).addEventListener('input', calc));
  $('c-valor').addEventListener('input', e => { const v = num(e.target.value); e.target.value = v ? brl(v) : ''; calc(); });
  calc();
})();


(() => {
  const DADOS = {
    semana:{funil:[['Chegaram',38],['Atendidos na hora',38],['Marcaram horário',14],['Viraram clientes',6]], fora:16,
      canais:[['WhatsApp','--wa',21],['Instagram','--ig',8],['Site','--site',5],['E-mail','--mail',3],['Messenger','--msg',1]]},
    mes:{funil:[['Chegaram',151],['Atendidos na hora',151],['Marcaram horário',57],['Viraram clientes',22]], fora:63,
      canais:[['WhatsApp','--wa',84],['Instagram','--ig',31],['Site','--site',22],['E-mail','--mail',10],['Messenger','--msg',4]]}
  };
  const funil = document.getElementById('funil'), canais = document.getElementById('canais-v');
  function mostrar(p){
    const d = DADOS[p], tot = d.funil[0][1], maxC = d.canais[0][2];
    funil.innerHTML = d.funil.map(([n, v], i) => `<div class="etapa${i === 3 ? ' fim' : ''}"><div class="lin"><span>${n}</span><b>${v}</b></div><div class="tr"><i style="width:${v/tot*100}%"></i></div></div>`).join('');
    canais.innerHTML = d.canais.map(([n, c, v]) => `<div class="canal-l" style="--c:var(${c})"><span>${n}</span><div class="tr"><i style="width:${v/maxC*100}%"></i></div><b>${v}</b></div>`).join('');
    document.getElementById('fora').innerHTML = `<b>${d.fora} de ${tot}</b> chegaram com o escritório fechado e foram atendidos pela IA.`;
    document.querySelectorAll('.periodo button').forEach(b => b.setAttribute('aria-pressed', b.dataset.p === p));
  }
  document.querySelectorAll('.periodo button').forEach(b => b.addEventListener('click', () => mostrar(b.dataset.p)));
  mostrar('semana');
})();


(() => {
  const $ = id => document.getElementById(id), conv = $('conv'), bt = $('assumir');
  const base = conv.innerHTML; let comEquipe = false;
  bt.addEventListener('click', () => {
    comEquipe = !comEquipe;
    if (comEquipe) {
      conv.insertAdjacentHTML('beforeend',
        '<div class="sis entra"><b>Paula assumiu a conversa.</b> A IA parou de responder aqui.</div>' +
        '<div class="cm eq entra"><small>Paula, da equipe, 10:14</small>Oi, Carla! Vi sua conversa de ontem. Te mando a proposta para ME até as 11h, combinado?</div>');
      $('estado').className = 'estado eq'; $('estado-tx').textContent = 'Paula no controle';
      $('campo').textContent = 'Escreva uma mensagem'; bt.textContent = 'Devolver para a IA'; bt.classList.add('devolver');
    } else {
      conv.innerHTML = base;
      $('estado').className = 'estado ia'; $('estado-tx').textContent = 'IA respondendo';
      $('campo').textContent = 'A IA está respondendo esta conversa'; bt.textContent = 'Assumir conversa'; bt.classList.remove('devolver');
    }
    bt.setAttribute('aria-pressed', comEquipe);
  });
})();


(() => {
  const passos = [...document.querySelectorAll('#passos .passo')], prog = document.getElementById('prog');
  function ativar(i, foco){
    passos.forEach((p, k) => {
      p.classList.toggle('ativo', k === i); p.classList.toggle('feito', k < i);
      p.querySelector(':scope > button').setAttribute('aria-expanded', k === i);
    });
    const y = el => el.querySelector('.n').getBoundingClientRect().top, base = y(passos[0]);
    prog.style.height = (y(passos[i]) - base) + 'px';
    document.getElementById('trilho').style.height = (y(passos[passos.length - 1]) - base) + 'px';
    if (foco) passos[i].querySelector(':scope > button').focus();
  }
  passos.forEach((p, i) => {
    p.querySelector(':scope > button').addEventListener('click', () => ativar(i));
    p.querySelector('.prox').addEventListener('click', () => ativar((i + 1) % passos.length, true));
  });
  _on(window, 'resize', () => ativar(passos.findIndex(p => p.classList.contains('ativo'))));
  ativar(0);
})();


(() => {
  const $ = id => document.getElementById(id);
  const DIAS = ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
  const NOMES = ['segunda','terça','quarta','quinta','sexta','sábado','domingo'];
  const g = $('grade'); let ligada = false;
  // cabeçalho das horas
  g.append(Object.assign(document.createElement('span'), {className:'h'}));
  for (let h = 0; h < 24; h++) { const s = document.createElement('span'); s.className = 'h'; if (h % 6 === 0) s.innerHTML = `<span>${h}h</span>`; g.append(s); }
  const cels = [];
  DIAS.forEach((d, i) => {
    g.append(Object.assign(document.createElement('span'), {className:'d', textContent:d}));
    cels[i] = [];
    for (let h = 0; h < 24; h++) { const c = document.createElement('span'); c.className = 'cel-h'; g.append(c); cels[i][h] = c; }
  });
  // relógio vivo: dia e hora do visitante, atualizados a cada 15 segundos
  let agora, diaHoje, horaHoje;
  function relogio(){
    agora = new Date(); diaHoje = (agora.getDay() + 6) % 7; horaHoje = agora.getHours();
    document.querySelectorAll('.cel-h.agora').forEach(c => c.classList.remove('agora'));
    cels[diaHoje][horaHoje].classList.add('agora');
  }
  relogio();

  function aberto(d, h){
    const ab = +$('abre').value, fe = +$('fecha').value, alm = $('almoco').value === '1', sab = +$('sabado').value;
    if (d < 5) return h >= ab && h < fe && !(alm && h === 12);
    if (d === 5) return sab > 0 && h >= ab && h < sab;
    return false;
  }
  function desenhar(){
    let eq = 0;
    cels.forEach((linha, d) => linha.forEach((c, h) => {
      const a = aberto(d, h); if (a) eq++;
      c.classList.toggle('ab', a); c.classList.toggle('ia', !a && ligada);
    }));
    const sem = 168 - eq;
    $('conta').classList.toggle('ligada', ligada);
    $('num').innerHTML = (ligada ? 0 : sem) + '<small>h</small>';
    $('frase').innerHTML = ligada
      ? `<b>Nenhuma hora sem resposta.</b> Sua equipe continua nas ${eq} horas dela e a IA atende as outras ${sem}.`
      : `<b>sem ninguém para responder</b>, de ${168} horas da semana. Sua equipe atende ${eq} horas, ${Math.round(eq/168*100)}% do tempo.`;
    $('b-eq').style.width = (eq/168*100) + '%';
    $('b-ia').style.width = ligada ? (sem/168*100) + '%' : '0%';
    $('det').textContent = ligada ? 'Quando a conversa pede uma pessoa, ela fica registrada no CRM para sua equipe assumir no horário dela.' : 'Conta feita com o horário que você marcou. Mude os campos para ver a sua.';
    const hhmm = String(agora.getHours()).padStart(2,'0') + 'h' + String(agora.getMinutes()).padStart(2,'0');
    const ab = aberto(diaHoje, horaHoje);
    $('agora-txt').innerHTML = `<b>Agora é ${NOMES[diaHoje]}, ${hhmm}.</b> ` + (ab
      ? 'Neste horário sua equipe estaria atendendo.'
      : (ligada ? 'Quem chamasse agora seria atendido pela IA.' : 'Quem chamasse agora ficaria sem resposta até o próximo expediente.'));
    $('ligar-tx').textContent = ligada ? 'Automação ligada: ver sem ela' : 'Ver com a automação ligada';
    $('ligar').setAttribute('aria-pressed', ligada);
  }
  ['abre','fecha','almoco','sabado'].forEach(id => $(id).addEventListener('change', desenhar));
  $('ligar').addEventListener('click', () => { ligada = !ligada; desenhar(); });
  desenhar();
  _si(() => { relogio(); desenhar(); }, 15000);
  _on(document, 'visibilitychange', () => { if (!document.hidden) { relogio(); desenhar(); } });
})();


(() => {
  const $ = id => document.getElementById(id);
  const CANAIS = {
    wa:{nome:'WhatsApp',c:'var(--wa)'}, ig:{nome:'Instagram',c:'var(--ig)'}, mail:{nome:'E-mail',c:'var(--mail)'},
    site:{nome:'Site',c:'var(--site)'}, msg:{nome:'Messenger',c:'var(--msg)'}
  };
  // contatos que já estavam no CRM, do horário comercial
  const INICIO = [
    {col:'novos', cn:'site', h:'16:20', nome:'Marcos A.', ass:'Abertura de filial em Santo André', ia:'pediu proposta; equipe envia amanhã'},
    {col:'agendados', cn:'wa', h:'17:05', nome:'Clínica Bem Viver', ass:'Troca de contabilidade', ia:'reunião amanhã, 11h'}
  ];
  const CHAT = [
    ['ela','20:47','Boa noite! Vocês fazem abertura de empresa? Sou MEI e quero mudar para ME.'],
    ['emp','20:47','Boa noite, Carla! Fazemos sim. Sua empresa presta serviço ou vende produto?'],
    ['ela','20:48','Serviço, sou designer.'],
    ['emp','20:48','Perfeito. A Paula, nossa contadora, tem amanhã às 9h30 ou 14h. Qual prefere?'],
    ['ela','20:49','9h30!'],
    ['emp','20:49','Combinado: amanhã, 9h30, com a Paula. Te mando um lembrete às 8h.']
  ];
  const EVENTOS = [
    {cn:'wa', h:'20:49', chat:true, log:['Entendeu: abertura de empresa','Agendou com a Paula, 9h30','Registrou no CRM'],
     card:{col:'agendados', nome:'Carla M.', ass:'MEI para ME, prestação de serviço', ia:'amanhã, 9h30, com a Paula'}},
    {cn:'ig', h:'21:12', quem:'@studio.lumen', tx:'Vocês fazem declaração de imposto de renda pessoa física?',
     resp:'Fazemos sim! Te mandei a lista de documentos e o prazo de entrega.',
     log:['Respondeu prazos e documentos','Pediu os informes de rendimento','Registrou no CRM'],
     card:{col:'conversa', nome:'Juliana R.', ass:'Imposto de renda pessoa física', ia:'enviou lista de documentos'}},
    {cn:'mail', h:'21:40', quem:'Ricardo Teixeira', tx:'Gostaria de um orçamento de contabilidade para minha clínica.',
     resp:'Olá, Ricardo! Para montar o orçamento: a clínica tem quantos funcionários?',
     log:['Respondeu o e-mail na hora','Coletou porte e regime da clínica','Avisou a equipe comercial'],
     card:{col:'novos', nome:'Ricardo T.', ass:'Contabilidade para clínica', ia:'dados coletados; proposta com a equipe'}},
    {cn:'site', h:'22:05', quem:'Formulário do site', tx:'Fernanda Lopes quer trocar de contador.',
     resp:'Oi, Fernanda! Vi seu pedido no site. Quinta, 14h, fica bom para conversar com o Diego?', respPor:'wa',
     log:['Chamou a Fernanda no WhatsApp','Agendou quinta, 14h','Registrou no CRM'],
     card:{col:'agendados', nome:'Fernanda L.', ass:'Troca de contador', ia:'quinta, 14h, com o Diego'}},
    {cn:'msg', h:'23:18', quem:'Paulo Souza', tx:'Vocês atendem no sábado?',
     resp:'Atendemos de segunda a sexta. Posso reservar segunda, 10h, para você?',
     log:['Respondeu o horário de atendimento','Ofereceu horário na segunda','Registrou no CRM'],
     card:{col:'conversa', nome:'Paulo S.', ass:'Dúvida sobre atendimento', ia:'ofereceu segunda, 10h'}}
  ];

  const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let token = 0, contagem = {};
  const espera = (ms, id) => new Promise((ok, nao) => setTimeout(() => id === token ? ok() : nao('parou'), ms));

  function chips(){
    $('canais').innerHTML = Object.entries(CANAIS).map(([k,v]) =>
      `<span class="chip" id="chip-${k}" style="--c:${v.c}"><i></i>${v.nome} <b>${contagem[k]||0}</b></span>`).join('');
  }
  function contar(){ ['novos','conversa','agendados'].forEach(c => $('n-'+c).textContent = $(c).children.length); }
  function card(d, cn, h, anim){
    const el = document.createElement('div'); el.className = 'card' + (anim ? ' novo' : '');
    el.innerHTML = `<div class="lin"><span class="cn" style="--c:${CANAIS[cn].c}"><i></i>${CANAIS[cn].nome}</span><span>${h}</span></div><b></b><p></p><span class="ia"></span>`;
    el.querySelector('b').textContent = d.nome; el.querySelector('p').textContent = d.ass; el.querySelector('.ia').textContent = d.ia;
    $(d.col).prepend(el); contar();
  }
  function bolha([q,t,x], anim){
    const el = document.createElement('div'); el.className = 'm ' + q + (anim ? ' entra' : '');
    if (q !== 'ela') { const s = document.createElement('span'); s.className = 'quem'; s.textContent = q === 'pessoa' ? 'Paula, da equipe' : 'Assistente da Sua Contabilidade'; el.append(s); }
    el.append(document.createTextNode(x));
    const s = document.createElement('span'); s.className = 't'; s.textContent = t + (q === 'ela' ? ' ✓✓' : ''); el.append(s);
    $('msgs').append(el); $('relogio').textContent = t;
  }
  function log(txt, cn){
    const p = document.createElement('p'); p.textContent = txt; p.style.setProperty('--c', CANAIS[cn].c);
    const d = $('diario'); d.prepend(p); while (d.children.length > 4) d.lastChild.remove();
  }
  function marcar(cn){
    contagem[cn] = (contagem[cn]||0) + 1; chips();
    const c = $('chip-'+cn); c.classList.add('acende'); setTimeout(() => c && c.classList.remove('acende'), 1400);
    $('placar').textContent = Object.values(contagem).reduce((a,b)=>a+b,0);
  }

  // fios entre celular → IA → CRM
  function fios(){
    const p = $('palco').getBoundingClientRect(), r = id => $(id).getBoundingClientRect();
    const a = r('cel'), n = $('miolo').getBoundingClientRect(), c = r('crm');
    const y1 = a.top + a.height*.42 - p.top, x1 = a.right - p.left - 6;
    const ny = n.top + n.height/2 - p.top, nx1 = n.left - p.left, nx2 = n.right - p.left;
    const x3 = c.left - p.left + 2, y3 = c.top + c.height*.45 - p.top;
    $('f1').setAttribute('d', `M${x1} ${y1} C${x1+60} ${y1},${nx1-60} ${ny},${nx1} ${ny}`);
    $('f2').setAttribute('d', `M${nx2} ${ny} C${nx2+50} ${ny},${x3-50} ${y3},${x3} ${y3}`);
  }
  function viajar(pathId, cor, ms, id){
    if (getComputedStyle($('fios')).display === 'none') return espera(ms*.6, id);
    const path = $(pathId), L = path.getTotalLength();
    const g = document.createElementNS('http://www.w3.org/2000/svg','circle');
    g.setAttribute('r', 5); g.setAttribute('fill', cor); g.style.filter = `drop-shadow(0 0 8px ${cor})`;
    $('fios').append(g);
    return new Promise((ok, nao) => {
      const t0 = performance.now();
      const passo = now => {
        if (id !== token) { g.remove(); return nao('parou'); }
        const k = Math.min(1, (now - t0)/ms), e = k<.5 ? 2*k*k : 1-Math.pow(-2*k+2,2)/2;
        const pt = path.getPointAtLength(e*L); g.setAttribute('cx', pt.x); g.setAttribute('cy', pt.y);
        k < 1 ? requestAnimationFrame(passo) : (g.remove(), ok());
      };
      requestAnimationFrame(passo);
    });
  }
  function notif(ev, resposta){
    const n = $('notif'), cn = resposta && ev.respPor ? ev.respPor : ev.cn;
    n.style.setProperty('--c', CANAIS[cn].c); n.classList.toggle('resp', !!resposta);
    n.querySelector('.app span').textContent = CANAIS[cn].nome; n.querySelector('.app em').textContent = ev.h;
    n.querySelector('b').textContent = resposta ? 'Resposta enviada ✓' : ev.quem;
    n.querySelector('.tx').textContent = resposta ? ev.resp : ev.tx;
    n.classList.add('on'); $('relogio').textContent = ev.h;
  }
  const MANHA = [{dia:'Quarta-feira'}, ['pessoa','08:02','Bom dia, Carla! Aqui é a Paula. Já li sua conversa, nos vemos às 9h30.']];
  function manha(anim){
    $('notif').classList.remove('on'); $('relogio').textContent = '08:02';
    const d = document.createElement('div'); d.className = 'dia' + (anim ? ' entra' : ''); d.textContent = MANHA[0].dia; $('msgs').append(d);
    bolha(MANHA[1], anim); $('manha').classList.add('on');
  }

  function reset(){
    contagem = {}; $('placar').textContent = '0'; chips();
    ['novos','conversa','agendados','msgs'].forEach(i => $(i).textContent = '');
    INICIO.forEach(d => card(d, d.cn, d.h, false));
    $('diario').innerHTML = '<p>Aguardando mensagens</p>'; $('notif').classList.remove('on'); $('relogio').textContent = '20:47';
    $('manha').classList.remove('on');
  }
  function finalEstatico(){
    reset(); CHAT.forEach(m => bolha(m, false));
    EVENTOS.forEach(ev => { card(ev.card, ev.cn, ev.h, false); contagem[ev.cn] = (contagem[ev.cn]||0)+1; });
    chips(); $('placar').textContent = EVENTOS.length;
    $('diario').innerHTML = ''; EVENTOS.slice(-1)[0].log.slice().reverse().forEach(t => log(t, 'msg'));
    manha(false);
  }

  async function rodar(){
    const id = ++token; reset(); fios();
    if (calmo) return finalEstatico();
    try {
      bolha(CHAT[0], false);
      await espera(900, id);
      for (const ev of EVENTOS) {
        if (ev.chat) {
          for (const m of CHAT.slice(1)) {
            if (m[0] === 'emp') {
              $('status').textContent = 'digitando…';
              const d = document.createElement('div'); d.className = 'digitando'; d.innerHTML = '<i></i><i></i><i></i>'; $('msgs').append(d);
              await espera(900, id); d.remove(); $('status').textContent = 'online';
            }
            bolha(m, true); await espera(m[0] === 'ela' ? 900 : 700, id);
          }
        } else { notif(ev); await espera(1100, id); }
        await viajar('f1', CANAIS[ev.cn].c, 700, id);
        $('miolo').classList.add('pulsa');
        for (const t of ev.log) { log(t, ev.cn); await espera(520, id); }
        $('miolo').classList.remove('pulsa');
        if (ev.resp) { notif(ev, true); await espera(1300, id); }
        await viajar('f2', CANAIS[ev.cn].c, 700, id);
        card(ev.card, ev.cn, ev.h, true); marcar(ev.cn); $('notif').classList.remove('on');
        await espera(900, id);
      }
      await espera(600, id); manha(true);
    } catch (e) { /* reiniciado pelo botão */ }
  }
  $('denovo').addEventListener('click', rodar);
  _on(window, 'resize', fios);
  document.fonts && document.fonts.ready.then(fios);
  // primeiro quadro já mostra a cena montada; a história começa quando o palco aparece na tela
  reset(); bolha(CHAT[0], false);
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); rodar(); } }, {threshold:.35});
    io.observe($('palco'));
  } else rodar();
})();

  return () => { _timers.forEach(clearInterval); _ouvintes.forEach(([a, e, f]) => a.removeEventListener(e, f)); };
}
