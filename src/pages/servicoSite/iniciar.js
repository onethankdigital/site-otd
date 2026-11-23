// Interações da página de Criação de Sites (gerado a partir da prévia aprovada).
export default function iniciarPaginaSites() {

  // 1 medidor real: tempo até a página carregar neste aparelho
  const medir = () => setTimeout(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const ms = nav ? nav.loadEventEnd || nav.domContentLoadedEventEnd : performance.now();
    document.getElementById('lt').textContent = (ms / 1000).toFixed(1).replace('.', ',') + ' s';
  }, 0);
  if (document.readyState === 'complete') medir(); else addEventListener('load', medir, { once: true });

  // 1 simulador: site real, modo cliente x Google
  const $ = id => document.getElementById(id);
  const view = $('view'), scan = $('scan');
  const reduceM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let modo = 'cli', anim = null, mexeu = false;
  function setMode(m) {
    if (m === modo) return; modo = m;
    document.querySelectorAll('.mode button').forEach(b => b.setAttribute('aria-pressed', b.dataset.m === m));
    const from = m === 'gg' ? 0 : 100, to = m === 'gg' ? 100 : 0;
    cancelAnimationFrame(anim);
    if (reduceM) { view.style.setProperty('--scan', to + '%'); return; }
    const t0 = performance.now(), dur = 900; scan.classList.add('on');
    const step = now => {
      const k = Math.min(1, (now - t0) / dur), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      view.style.setProperty('--scan', (from + (to - from) * e) + '%');
      if (k < 1) anim = requestAnimationFrame(step); else scan.classList.remove('on');
    };
    anim = requestAnimationFrame(step);
  }
  document.querySelectorAll('.mode button').forEach(b => b.onclick = () => { mexeu = true; setMode(b.dataset.m); });
  // demonstração única: mostra a planta depois de 3,5 s e volta, se o visitante ainda não mexeu
  if (!reduceM) setTimeout(() => { if (!mexeu) { setMode('gg'); setTimeout(() => { if (!mexeu) setMode('cli'); }, 3800); } }, 3500);

  // 2 diferenças entre os dois sites
  const DIFS = [
    { t: 'Mensagem', o: '"Bem-vindo ao nosso site"', n: '"Abra sua empresa em Santo André"', c: 'Em 5 segundos o visitante não entende o que você faz e volta para o Google. O próximo resultado é o seu concorrente.' },
    { t: 'Velocidade', o: 'carregando há 8,4 s', n: 'abre em menos de 1 s', c: 'No celular, quem espera a página carregar desiste antes de ver o seu nome. E o Google também considera a velocidade para decidir quem mostrar.' },
    { t: 'Contato', o: 'formulário em outra página', n: 'WhatsApp a um toque', c: 'Cada passo a mais é um contato que não chega. Pelo celular, o cliente quer tocar e conversar, não procurar a página Fale Conosco.' },
    { t: 'Prova', o: '"somos referência", sem prova', n: '★ 4,9 e depoimento real', c: 'Quem contrata serviço B2B quer saber se outra empresa confiou antes. Sem prova, ele pede orçamento para três e escolhe pelo preço.' },
    { t: 'Menu', o: 'Home, Quem Somos, Links', n: 'os serviços pelo nome', c: 'O cliente procura pelo serviço, não pelo nome da página. Menu genérico esconde exatamente o que ele veio buscar, para ele e para o Google.' }
  ];
  const diffs = document.getElementById('diffs'), cost = document.getElementById('cost'), vs = document.getElementById('vs');
  const dbtn = DIFS.map((d, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<button type="button"><span class="num">${i + 1}</span><span><b>${d.t}</b><small><s>${d.o}</s> → <i>${d.n}</i></small></span></button>`;
    li.firstChild.onclick = () => difShow(i); diffs.appendChild(li); return li.firstChild;
  });
  function difShow(i) {
    dbtn.forEach((b, k) => b.setAttribute('aria-pressed', k === i));
    vs.querySelectorAll('[data-n]').forEach(el => el.classList.toggle('hl', +el.dataset.n === i + 1));
    cost.innerHTML = `<div class="lbl">O que isso custa · ${i + 1} de 5</div><p>${DIFS[i].c}</p>`;
  }
  vs.querySelectorAll('[data-n]').forEach(el => { el.style.cursor = 'pointer'; el.onclick = () => difShow(+el.dataset.n - 1); });
  difShow(0);
  document.querySelectorAll('.vs-toggle button').forEach(b => b.onclick = () => {
    document.querySelectorAll('.vs-toggle button').forEach(x => x.setAttribute('aria-pressed', x === b)); vs.dataset.show = b.dataset.p;
  });

  document.querySelectorAll('.dev-toggle button').forEach(b => b.onclick = () => {
    document.querySelectorAll('.dev-toggle button').forEach(x => x.setAttribute('aria-pressed', x === b)); vs.dataset.dev = b.dataset.d;
  });

  // 2 autoavaliação
  const QS = [
    'O título da primeira tela diz o que você faz e onde atende?',
    'O site abre em poucos segundos no celular?',
    'Dá para falar com você pelo WhatsApp com um toque?',
    'A primeira tela mostra avaliações ou clientes reais?',
    'O menu usa o nome dos seus serviços?'
  ];
  const resp = Array(QS.length).fill(null), qs = document.getElementById('qs');
  QS.forEach((q, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${i + 1}. ${q}</span><div class="yn" role="group" aria-label="Resposta ${i + 1}"><button type="button" data-v="1" aria-pressed="false">Sim</button><button type="button" data-v="0" aria-pressed="false">Não</button></div>`;
    li.querySelectorAll('button').forEach(b => b.onclick = () => {
      resp[i] = +b.dataset.v; li.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b)); placar();
    });
    qs.appendChild(li);
  });
  function placar() {
    const feitas = resp.filter(v => v !== null).length, sim = resp.filter(v => v === 1).length;
    const sc = document.getElementById('score'), v = document.getElementById('verdict');
    if (feitas < QS.length) { document.getElementById('scoreN').textContent = '–'; sc.className = 'score'; v.innerHTML = `Responda as 5 perguntas para ver o resultado. <span>${feitas} de 5 respondidas</span>`; return; }
    document.getElementById('scoreN').textContent = sim;
    sc.className = 'score ' + (sim <= 2 ? 'lv0' : sim <= 4 ? 'lv1' : 'lv2');
    const msg = sim <= 2 ? '<strong>Seu site só existe.</strong> Ele aparece, mas não convence nem facilita o contato.'
      : sim <= 4 ? '<strong>Seu site trabalha pela metade.</strong> Cada "não" é um ponto onde o cliente desiste.'
      : '<strong>Seu site trabalha.</strong> O diagnóstico mostra o que ainda dá para ganhar no Google e nas IAs.';
    v.innerHTML = `<span>${msg}</span><a class="btn" href="#teste">Fazer diagnóstico gratuito →</a>`;
  }
  placar();

  // 3 anatomia: a página inteira, parte por parte
  const AN = [
    { tg: 'primeira tela', w: '<div class="m-nav"><b>Silva Contábil</b><span>Serviços · Sobre · Contato</span></div><div class="m-h">Abra sua empresa em Santo André <em>sem burocracia</em></div><p class="m-p">Abertura, contabilidade mensal e IR para empresas do ABC.</p><span class="m-btn">Falar no WhatsApp</span>',
      q: 'Isso é o que eu procuro?', tem: ['Título com o serviço e a cidade: "Abra sua empresa em Santo André"', 'Uma frase de apoio dizendo para quem é', 'Um botão de ação, visível sem rolar'],
      g: ['Título da página', 'Os mesmos termos que o cliente digitou. É assim que o Google entende que a página responde àquela busca.'] },
    { tg: 'prova', w: '<div class="m-st"><span>★★★★★</span> <b>4,9</b> · 38 avaliações no Google</div><div class="m-rev"><p>“Abriram minha empresa em uma semana.”<small>Marina · clínica</small></p><p>“Resolveram meu IR em dois dias.”<small>Paulo · MEI</small></p></div>',
      q: 'Posso confiar nessa empresa?', tem: ['Nota e avaliações do Google', 'Clientes reais ou números verificáveis', 'Depoimento com nome e segmento'],
      g: ['Perfil do Google', 'Site ligado ao Perfil da Empresa no Google, onde ficam as avaliações que o mapa e as IAs consultam.'] },
    { tg: 'serviços', w: '<div class="m-t">Serviços</div><div class="m-cards"><span>Abertura de empresa<i>Ver detalhes →</i></span><span>Contabilidade mensal<i>Ver detalhes →</i></span><span>Imposto de renda<i>Ver detalhes →</i></span></div>',
      q: 'Vocês fazem exatamente o que eu preciso?', tem: ['Um card para cada serviço, com o nome que o cliente usa', 'Cada card leva a uma página própria do serviço', 'O que está incluído, em uma linha'],
      g: ['Uma página por serviço', 'Cada página disputa uma busca diferente: "abertura de empresa", "contador para MEI", "imposto de renda".'] },
    { tg: 'como funciona', w: '<div class="m-t">Como funciona</div><ol class="m-steps"><li><b>1</b>Conversa</li><li><b>2</b>Documentos</li><li><b>3</b>Abertura</li><li><b>4</b>Empresa pronta</li></ol>',
      q: 'Como vai ser trabalhar com vocês?', tem: ['3 ou 4 passos, do primeiro contato à entrega', 'Prazo de cada passo', 'O que o cliente precisa enviar'],
      g: ['Texto em passos', 'Conteúdo organizado em etapas é o formato que as IAs usam para responder "como funciona…".'] },
    { tg: 'perguntas frequentes', w: '<div class="m-t">Perguntas frequentes</div><div class="m-faq"><span>Quanto custa abrir uma empresa?</span><span>Quanto tempo demora?</span><span>Posso abrir sendo MEI?</span></div>',
      q: 'E se…? Quanto custa? Quanto demora?', tem: ['As dúvidas que a equipe mais ouve no WhatsApp', 'Respostas curtas e diretas', 'Preço e prazo tratados com clareza'],
      g: ['Perguntas marcadas', 'Perguntas marcadas para o Google viram fonte direta das respostas do Google e das IAs.'] },
    { tg: 'contato e mapa', w: '<div class="m-ct"><div><div class="m-t">Fale com a gente</div><span class="m-btn">Falar no WhatsApp</span><p class="m-p">Rua das Figueiras, 100 · Santo André<br>Seg a sex, das 8h às 18h</p></div><span class="m-map"></span></div>',
      q: 'Como falo com vocês agora?', tem: ['WhatsApp e telefone a um toque', 'Endereço com mapa e horário de atendimento', 'Formulário curto como alternativa'],
      g: ['Busca local', 'Endereço, telefone e horário iguais aos do Perfil do Google. Dados diferentes fazem o Google desconfiar.'] },
    { tg: 'rodapé', w: '<div class="m-ft"><b>Silva Contábil Ltda</b> · CNPJ 00.000.000/0001-00<br>Política de privacidade · Instagram · LinkedIn</div>',
      q: 'Essa empresa existe de verdade?', tem: ['CNPJ e endereço completo', 'Política de privacidade (LGPD)', 'Links para as redes da empresa'],
      g: ['Dados da empresa', 'Dados da empresa organizados para o Google confirmar quem ela é, onde fica e como contatar.'] }
  ];
  const page = document.querySelector('.an-page'), card = document.getElementById('anCard'), prog = document.getElementById('anProg');
  let anI = 0;
  const blks = AN.map((d, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'blk';
    b.innerHTML = `<span class="pin">${i + 1}</span><span class="tg">${d.tg}</span>${d.w}`;
    b.setAttribute('aria-label', `Parte ${i + 1}: ${d.tg}`); b.onclick = () => anShow(i); page.appendChild(b);
    const pi = document.createElement('i'); prog.appendChild(pi); return b;
  });
  const esc = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  function anShow(i) {
    anI = (i + AN.length) % AN.length; const d = AN[anI];
    blks.forEach((b, k) => b.setAttribute('aria-pressed', k === anI));
    [...prog.children].forEach((p, k) => p.classList.toggle('on', k <= anI));
    card.innerHTML = `<div class="an-step">${String(anI + 1).padStart(2, '0')} de ${String(AN.length).padStart(2, '0')} · ${d.tg}</div>
      <div class="an-q"><small>O cliente pensa</small>“${d.q}”</div>
      <p class="an-h">O que essa parte precisa ter</p><ul>${d.tem.map(t => `<li>${t}</li>`).join('')}</ul>
      <div class="an-g"><code>${esc(d.g[0])}</code><p>${d.g[1]}</p></div>`;
  }
  document.getElementById('anPrev').onclick = () => anShow(anI - 1);
  document.getElementById('anNext').onclick = () => anShow(anI + 1);
  anShow(0);

  // 4 noite: notificações chegando entre 18h e 8h
  const NT = [
    { m: 75, ic: 'em', app: 'E-mail · formulário do site', t: 'Orçamento: abertura de empresa', x: 'Ana, Santo André. Quer abrir uma clínica de estética.', o: 'Google Maps · contabilidade perto de mim' },
    { m: 220, ic: 'wa', app: 'WhatsApp', t: 'Novo contato pelo site', x: '"Olá! Vim pelo site e quero saber sobre contabilidade mensal."', o: 'busca no Google · contador para MEI em Santo André' },
    { m: 305, ic: 'em', app: 'E-mail · formulário do site', t: 'Pedido de contato: imposto de renda', x: 'Carlos, São Bernardo. Prefere retorno pela manhã.', o: 'busca no Google · declaração de imposto de renda ABC' },
    { m: 770, ic: 'wa', app: 'WhatsApp', t: 'Novo contato pelo site', x: '"Bom dia, vocês atendem MEI? Vi o site ontem à noite."', o: 'link na bio do Instagram da empresa' }
  ];
  const ntR = document.getElementById('ntRange'), ntList = document.getElementById('ntList'), ntScr = document.getElementById('ntScreen');
  const fmt = m => { const t = (18 * 60 + m) % 1440; return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0'); };
  let ntShown = -1;
  function ntDraw(m, anim) {
    document.getElementById('ntTime').textContent = fmt(m);
    const h = (18 * 60 + m) % 1440 / 60;
    document.getElementById('ntDate').textContent = m < 360 ? 'segunda-feira, escritório fechado' : m >= 840 ? 'terça-feira, a equipe chegou' : 'terça-feira, madrugada';
    document.getElementById('ntDay').textContent = m < 360 ? 'seg' : 'ter';
    const night = m < 30 ? m / 30 : m > 720 ? Math.max(0, (840 - m) / 120) : 1;
    ntScr.style.setProperty('--sky1', `hsl(${220 - 10 * (1 - night)} ${40 + 20 * (1 - night)}% ${8 + 26 * (1 - night)}%)`);
    ntScr.style.setProperty('--sky2', `hsl(${215 + 20 * (1 - night)} ${45 + 15 * (1 - night)}% ${20 + 30 * (1 - night)}%)`);
    const vis = NT.filter(n => n.m <= m);
    if (vis.length !== ntShown) {
      ntList.innerHTML = vis.slice().reverse().map((n, k) => `<div class="nf" style="${anim && k === 0 && vis.length > ntShown ? '' : 'animation:none'}"><span class="ic ${n.ic}" aria-hidden="true">${n.ic === 'wa' ? '💬' : '✉️'}</span><div><div class="hd"><span>${n.app}</span><span>${fmt(n.m)}</span></div><b>${n.t}</b><p>${n.x}</p><em class="orig">Veio de: ${n.o}</em></div></div>`).join('');
      ntShown = vis.length;
    }
    const fim = m >= 840;
    document.getElementById('ntSum').innerHTML = `<b>${vis.length}</b><div><p>${fim ? 'contatos chegaram enquanto o escritório estava fechado.' : 'contatos até agora, com o escritório fechado.'}</p><small>${fim ? 'Às 8h, a equipe começa o dia com pedidos esperando resposta.' : 'Continue arrastando até as 8h.'}</small></div>`;
  }
  ntR.addEventListener('input', () => { clearInterval(ntT); ntDraw(+ntR.value, true); });
  let ntT = null;
  document.getElementById('ntPlay').onclick = () => {
    clearInterval(ntT); let m = 0; ntShown = -1; ntR.value = 0; ntDraw(0, true);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { ntR.value = 840; ntDraw(840, false); return; }
    ntT = setInterval(() => { m = Math.min(840, m + 6); ntR.value = m; ntDraw(m, true); if (m >= 840) clearInterval(ntT); }, 40);
  };
  ntDraw(840, false);

  // 5 desenvolvimento em 3 fases
  const OB = [
    { nm: 'Projeto', wk: { 3: 'Semana 1', 6: 'Semanas 1 e 2' }, url: 'previa.silvacontabil.com.br', badge: 'Prévia',
      sub: 'Antes de desenvolver, desenhamos o site: o que cada página precisa dizer e para quem.',
      us: ['Conversa de diagnóstico sobre o seu negócio e os seus clientes', 'Mapa das páginas e das buscas que o site vai disputar', 'Textos de cada página, escritos com você'],
      you: ['Participa da conversa de diagnóstico', 'Envia logo, fotos e informações da empresa', 'Aprova o mapa das páginas'],
      see: ['O mapa do seu site: as páginas, o objetivo de cada uma e a busca que ela vai disputar'] },
    { nm: 'Desenvolvimento', wk: { 3: 'Semana 2', 6: 'Semanas 3 a 5' }, url: 'previa.silvacontabil.com.br', badge: 'Prévia',
      sub: 'O site ganha forma com IA e é revisado por nós, página por página.',
      us: ['Desenvolvimento das páginas com IA e revisão humana', 'Versão para celular ajustada tela por tela', 'Blog ou área de membros, quando fizer parte do projeto'],
      you: ['Revisa a prévia num link privado', 'Pede os ajustes de texto e imagem'],
      see: ['O site navegável num link de prévia, antes de ir ao ar'] },
    { nm: 'No ar', wk: { 3: 'Semana 3', 6: 'Semana 6' }, url: '🔒 silvacontabil.com.br', badge: 'No ar',
      sub: 'Testes finais, publicação e o site começa a trabalhar.',
      us: ['Testes de velocidade, formulário e WhatsApp', 'Endereço do site, cadeado de segurança e hospedagem', 'Google Search Console configurado para você acompanhar as buscas'],
      you: ['Dá a aprovação final'],
      see: ['Seu site no ar, com nota de velocidade do Google e o acompanhamento das buscas pronto'] }
  ];
  let obT = 3, obF = 0;
  const obTabs = document.getElementById('obTabs'), obSite = document.getElementById('obSite'), obInfo = document.getElementById('obInfo');
  const obBtns = OB.map((f, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.setAttribute('role', 'tab');
    b.onclick = () => obShow(i); obTabs.appendChild(b); return b;
  });
  const li = a => a.map(x => `<li>${x}</li>`).join('');
  function obShow(i) {
    obF = i; const f = OB[i];
    obBtns.forEach((b, k) => { b.innerHTML = `<span class="wk">${OB[k].wk[obT]}</span><span class="nm">${OB[k].nm}</span>`; b.setAttribute('aria-selected', k === i); b.classList.toggle('done', k < i); });
    obSite.dataset.f = i; obSite.parentElement.dataset.f = i; document.getElementById('obUrl').textContent = f.url; document.getElementById('obBadge').textContent = f.badge;
    obInfo.innerHTML = `<h3>${f.wk[obT]} · ${f.nm}</h3><p class="sub">${f.sub}</p>
      <div class="ob-col us"><p>Nós fazemos</p><ul>${li(f.us)}</ul></div>
      <div class="ob-col you"><p>Você faz</p><ul>${li(f.you)}</ul></div>
      <div class="ob-col see"><p>Você recebe</p><ul>${li(f.see)}</ul></div>`;
  }
  document.querySelectorAll('.ob-type button').forEach(b => b.onclick = () => {
    document.querySelectorAll('.ob-type button').forEach(x => x.setAttribute('aria-pressed', x === b));
    obT = +b.dataset.t; document.querySelector('.ob').closest('section').querySelector('h2 .r').textContent = obT === 3 ? 'em 3 semanas' : 'em até 6 semanas'; obShow(obF);
  });
  obShow(0);

  // 7 teste em 3 passos
  const st1 = document.getElementById('st1'), st2 = document.getElementById('st2'), st3 = document.getElementById('st3');
  document.getElementById('f').addEventListener('submit', e => {
    e.preventDefault();
    let v = document.getElementById('url').value.trim(); const err = document.getElementById('err');
    if (!/^[^\s]+\.[^\s]{2,}$/.test(v)) { err.textContent = 'Digite o endereço completo, por exemplo www.suaempresa.com.br'; return; }
    err.textContent = '';
    if (!/^https?:\/\//i.test(v)) v = 'https://' + v;
    const a = document.createElement('a'); a.href = 'https://pagespeed.web.dev/analysis?url=' + encodeURIComponent(v); a.target = '_blank'; a.rel = 'noopener'; document.body.appendChild(a); a.click(); a.remove();
    st1.classList.add('done'); st2.classList.add('on');
  });
  const FX = [
    { l: 'faixa de 0 a 49', x: 0, w: 49, c: '#ff5a5f', t: '<strong>Seu site está perdendo visitante antes de abrir.</strong> No celular, a maioria das pessoas desiste de esperar. Um site novo resolve na raiz, e o diagnóstico mostra o que dá para aproveitar.' },
    { l: 'faixa de 50 a 89', x: 49, w: 40, c: '#fbbf24', t: '<strong>Seu site funciona, mas deixa contato pelo caminho.</strong> O diagnóstico mostra se compensa ajustar o que existe ou desenvolver um site novo.' },
    { l: 'faixa de 90 a 100', x: 89, w: 11, c: '#22c55e', t: '<strong>Velocidade boa.</strong> Agora o ponto é se o site convence e gera contato: mensagem, prova e caminho até o WhatsApp. É isso que o diagnóstico avalia.' }
  ];
  document.querySelectorAll('.picks button').forEach(b => b.onclick = () => {
    const r = +b.dataset.r, f = FX[r];
    document.querySelectorAll('.picks button').forEach(x => x.setAttribute('aria-pressed', x === b));
    const you = document.getElementById('cbYou'); you.style.left = f.x + '%'; you.style.width = f.w + '%'; you.style.background = f.c;
    document.getElementById('cbYouL').textContent = f.l;
    const vd = document.getElementById('verd2'); vd.className = 'verd2 v' + r; vd.innerHTML = f.t;
    st1.classList.add('done'); st2.classList.add('done'); st3.classList.add('on');
  });

}
