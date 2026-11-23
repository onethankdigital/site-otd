// Interações da página de Google Meu Negócio (gerado a partir da prévia aprovada em 23/11/2026).
// Devolve uma função de limpeza: relógios e eventos param quando o visitante sai da página.
export default function iniciarPaginaGMN() {
  const _timers = [], _ouvintes = [];
  const _si = (f, ms) => { const id = setInterval(f, ms); _timers.push(id); return id; };
  const _on = (alvo, ev, f) => { alvo.addEventListener(ev, f); _ouvintes.push([alvo, ev, f]); };

(() => {
  const MESES =['Set', 'Out', 'Nov'];
  const MET = [['Pessoas que viram o perfil', [1240, 1610, 2050]], ['Ligações', [18, 27, 38]], ['Pedidos de rota', [22, 30, 41]], ['Cliques no site', [31, 44, 59]]];
  const TERMOS = [
    [['contador santo andré', 142], ['contabilidade perto de mim', 88], ['escritório de contabilidade', 61], ['abertura de empresa santo andré', 30], ['imposto de renda santo andré', 12]],
    [['contador santo andré', 181], ['contabilidade perto de mim', 109], ['escritório de contabilidade', 79], ['abertura de empresa santo andré', 44], ['imposto de renda santo andré', 25]],
    [['contador santo andré', 214], ['contabilidade perto de mim', 131], ['escritório de contabilidade', 97], ['abertura de empresa santo andré', 58], ['imposto de renda santo andré', 41]]
  ];
  const FEITO = [
    [['Perfil revisado: categorias, serviços e descrição'], ['Endereço e pino conferidos no mapa'], ['18 fotos novas da equipe e do escritório'], ['Rotina de pedidos de avaliação ativada']],
    [['11 avaliações novas, todas respondidas'], ['4 publicações sobre serviços e prazos'], ['Dados iguais no site e em 6 diretórios']],
    [['14 avaliações novas, todas respondidas'], ['4 publicações, uma sobre o imposto de renda'], ['6 fotos novas do escritório e da equipe']]
  ];
  const PROX = ['<b>Próximo mês:</b> publicações semanais e as primeiras respostas às avaliações.',
    '<b>Próximo mês:</b> reforçar o serviço de abertura de empresas, que começou a aparecer nas buscas.',
    '<b>Próximo mês:</b> preparar o perfil para a época do imposto de renda, que começa a ser buscada em fevereiro.'];
  const fmt = n => n.toLocaleString('pt-BR');
  function mostrar(m){
    document.querySelectorAll('.meses button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.m === m));
    document.getElementById('metricas').innerHTML = MET.map(([nm, v]) => {
      const max = Math.max(...v), d = m > 0 ? Math.round((v[m] - v[m - 1]) / v[m - 1] * 100) : null;
      return `<div class="met"><span class="nm">${nm}</span><span class="vl">${fmt(v[m])}</span><span class="df">${d === null ? '&nbsp;' : '+' + d + '% sobre o mês anterior'}</span>
        <div class="barras" aria-hidden="true">${v.map((x, i) => `<i class="${i === m ? 'ag' : ''}" style="height:${Math.round(x / max * 100)}%"></i>`).join('')}</div>
        <div class="meses-l" aria-hidden="true">${MESES.map(x => `<span>${x}</span>`).join('')}</div></div>`;
    }).join('');
    const t = TERMOS[m], mx = TERMOS[2][0][1];
    document.getElementById('termos-l').innerHTML = t.map(([n, v]) => `<li><span>${n}</span><b>${v}</b><i style="--w:${Math.round(v / mx * 100)}%"></i></li>`).join('');
    document.getElementById('feito').innerHTML = FEITO[m].map(([x]) => `<li>${x}</li>`).join('');
    document.getElementById('prox-m').innerHTML = PROX[m];
  }
  document.querySelectorAll('.meses button').forEach(b => b.addEventListener('click', () => mostrar(+b.dataset.m)));
  mostrar(2);
})();


(() => {
  const D = {
    sem: {
      txt: '<p>Encontrei alguns escritórios na região. A Sua Contabilidade aparece com poucas avaliações, a mais recente de 2023, e não há informações suficientes sobre o atendimento. O Concorrente A tem mais avaliações recentes e elogios à agilidade.</p>',
      fontes: ['3 avaliações', 'última em 2023'],
      avs: [['Marcos A.', '★★★★☆', 'há 2 anos', 'Bom serviço.', false], ['Lúcia P.', '★★★☆☆', 'há 3 anos', 'Demorou para retornar meu contato.', false]]
    },
    com: {
      txt: '<p>A <b>Sua Contabilidade</b>, no Centro de Santo André, tem nota 4,9 com 48 avaliações. Os clientes elogiam o atendimento rápido e as explicações claras, principalmente na abertura de empresas e no imposto de renda. A empresa responde todas as avaliações.</p>',
      fontes: ['48 avaliações', '12 nos últimos 3 meses', 'todas respondidas'],
      avs: [['Carla M.', '★★★★★', 'há 1 semana', 'Atendimento rápido e tudo explicado com calma.', true], ['Ricardo T.', '★★★★★', 'há 3 semanas', 'Resolveram a contabilidade da minha clínica sem dor de cabeça.', true]]
    }
  };
  const bts = document.querySelectorAll('.ia-chave button');
  function mostrar(v){
    const d = D[v];
    bts.forEach(b => b.setAttribute('aria-pressed', b.dataset.v === v));
    const t = document.getElementById('ia-texto');
    t.innerHTML = d.txt + '<div class="fontes">' + d.fontes.map(f => `<span>${f}</span>`).join('') + '</div>'; t.className = 'troca';
    document.getElementById('avs').innerHTML = d.avs.map(([n, e, q, x, r]) =>
      `<div class="av-c troca"><div class="topo-a"><b>${n}</b><span class="est">${e}</span></div>"${x}"<span class="r${r ? '' : ' sem'}">${r ? '✓ Respondida pelo proprietário' : 'Sem resposta'} · ${q}</span></div>`).join('');
  }
  bts.forEach(b => b.addEventListener('click', () => mostrar(b.dataset.v)));
  mostrar('sem');
})();


(() => {
  const caixa = document.getElementById('mock'), checks = [...document.querySelectorAll('#check input')];
  const tem = k => checks.find(c => c.dataset.k === k).checked;
  const falta = t => `<span class="pf-falta">${t}</span>`;
  function montar(){
    const n = checks.filter(c => c.checked).length;
    document.getElementById('pontos').innerHTML = n + '<small>/10</small>';
    document.getElementById('parecer').innerHTML = n <= 4
      ? '<b>O Google tem pouco para mostrar.</b> Com tantos itens faltando, o perfil dificilmente aparece entre os três primeiros.'
      : n <= 7 ? '<b>Está no caminho.</b> Os itens que faltam são justamente os que o cliente olha antes de ligar.'
      : n < 10 ? '<b>Quase completo.</b> Agora o que faz diferença é manter o perfil ativo todo mês.'
      : '<b>Perfil completo.</b> O próximo passo é manter: avaliações novas, respostas e publicações todo mês.';
    caixa.innerHTML = `
      <div class="pf-foto">${tem('foto') ? '<div class="fotos" data-k><i></i><i></i><i></i><em>24 fotos</em></div>' : 'Sem fotos'}</div>
      <div class="pf-corpo">
        <div><div class="pf-nome">Sua Contabilidade</div>
          <div class="pf-linha">${tem('aval') ? '<span data-k class="pf-linha"><span class="nota">4,9</span><span class="est">★★★★★</span><span>(48)</span></span>' : '<span>Nenhuma avaliação</span>'}
          ${tem('cat') ? '<span data-k>· Escritório de contabilidade</span>' : '<span>· Empresa</span>'}</div></div>
        <div class="pf-btns">${tem('tel') ? '<span data-k><i>☎</i>Ligar</span>' : ''}<span><i>➤</i>Rotas</span>${tem('site') ? '<span data-k><i>⌂</i>Site</span>' : ''}${tem('tel') ? '<span data-k><i>✉</i>WhatsApp</span>' : ''}</div>
        <hr class="pf-sep">
        <div class="pf-info">
          ${tem('hora') ? '<span data-k><span class="aberto">Aberto</span> · Fecha às 18h</span>' : falta('Horário não informado')}
          <span>Centro, Santo André</span>
          ${tem('desc') ? '<span data-k>Contabilidade para pequenas empresas e profissionais liberais em Santo André: abertura de empresas, folha de pagamento e imposto de renda.</span>' : ''}
          ${tem('serv') ? '<div class="pf-chips" data-k><span>Abertura de empresas</span><span>Imposto de renda</span><span>Folha de pagamento</span><span>MEI para ME</span></div>' : falta('Nenhum serviço cadastrado')}
        </div>
        ${tem('post') ? '<div class="pf-post" data-k><b>Publicação · há 5 dias</b>Prazo do imposto de renda: veja os documentos que você já pode separar.</div>' : ''}
        ${tem('aval') ? `<div data-k><div class="pf-linha"><b style="color:var(--tinta)">Carla M.</b><span class="est">★★★★★</span></div>"Atendimento rápido e tudo explicado com calma."${tem('resp') ? '<div class="pf-resp" data-k><b>Resposta do proprietário:</b> Obrigada, Carla! Foi um prazer cuidar da sua mudança para ME.</div>' : ''}</div>` : ''}
      </div>`;
  }
  checks.forEach(c => c.addEventListener('change', montar));
  montar();
})();


(() => {
  const bts = document.querySelectorAll('.termos button'), cats = document.querySelectorAll('#cats span');
  function marcar(t){
    bts.forEach(b => b.setAttribute('aria-pressed', b.dataset.t === t));
    cats.forEach(c => c.classList.toggle('bate', c.dataset.t.split(' ').includes(t)));
  }
  bts.forEach(b => b.addEventListener('click', () => marcar(b.dataset.t)));
  marcar('0');
})();


(() => {
  const $ = id => document.getElementById(id);
  // quadras e ruas do mapa (grade levemente girada, como um bairro real)
  const NS = 'http://www.w3.org/2000/svg', ruas = $('ruas'), quadras = $('quadras');
  const g = document.createElementNS(NS, 'g'); g.setAttribute('transform', 'rotate(-9 360 300)');
  for (let x = -120; x < 860; x += 58) for (let y = -120; y < 740; y += 46) {
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('x', x + 5); r.setAttribute('y', y + 5); r.setAttribute('width', 48); r.setAttribute('height', 36); r.setAttribute('rx', 3);
    r.setAttribute('fill', 'var(--quadra)'); g.append(r);
  }
  quadras.append(g);
  const g2 = document.createElementNS(NS, 'g'); g2.setAttribute('transform', 'rotate(-9 360 300)'); g2.setAttribute('stroke-width', '4');
  for (let x = -120; x < 860; x += 58) { const l = document.createElementNS(NS, 'line'); l.setAttribute('x1', x); l.setAttribute('x2', x); l.setAttribute('y1', -150); l.setAttribute('y2', 760); g2.append(l); }
  for (let y = -120; y < 740; y += 46) { const l = document.createElementNS(NS, 'line'); l.setAttribute('y1', y); l.setAttribute('y2', y); l.setAttribute('x1', -150); l.setAttribute('x2', 880); g2.append(l); }
  ruas.append(g2);

  // ordem da lista em cada estado
  const ORDEM = { off: ['a', 'b', 'c', 'div', 'seu'], on: ['a', 'seu', 'b', 'div', 'c'] };
  const lista = $('resultados'), cen = $('cenario');
  const itens = id => id === 'div' ? $('divisor') : lista.querySelector(`[data-id="${id}"]`);
  function posicionar(v){
    let y = 0;
    ORDEM[v].forEach(id => { const el = itens(id); el.style.transform = `translateY(${y}px)`; y += el.offsetHeight; });
    // no celular a lista mostra todos os resultados, sem cortar
    lista.style.height = matchMedia('(max-width:640px)').matches ? y + 'px' : '';
  }
  function estado(v){
    cen.classList.toggle('on', v === 'on');
    document.querySelectorAll('.chave button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === v));
    $('aviso').innerHTML = v === 'on'
      ? '<b>Mesmo endereço, mesma distância.</b> O que mudou foi o perfil: completo, com fotos, horário, avaliações respondidas e publicações.'
      : '<b>A sua empresa é a mais perto</b> de quem pesquisou e, mesmo assim, ficou fora das três primeiras.';
    requestAnimationFrame(() => posicionar(v));
  }
  document.querySelectorAll('.chave button').forEach(b => b.addEventListener('click', () => estado(b.dataset.v)));
  _on(window, 'resize', () => posicionar(cen.classList.contains('on') ? 'on' : 'off'));
  estado('off');
  document.fonts && document.fonts.ready.then(() => posicionar(cen.classList.contains('on') ? 'on' : 'off'));

  // a busca é digitada uma vez, quando o cenário aparece
  const termo = $('termo'), texto = termo.textContent, calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!calmo && 'IntersectionObserver' in window) {
    termo.textContent = '';
    const io = new IntersectionObserver(es => {
      if (!es.some(e => e.isIntersecting)) return; io.disconnect();
      let i = 0; const t = _si(() => { termo.textContent = texto.slice(0, ++i); if (i >= texto.length) clearInterval(t); }, 55);
    }, { threshold: .4 });
    io.observe(cen);
  }
})();

  return () => { _timers.forEach(clearInterval); _ouvintes.forEach(([a, e, f]) => a.removeEventListener(e, f)); };
}
