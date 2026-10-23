// /src/data/landings.js
// Páginas de segmento (público ideal da OTD) e de cidade/região (Grande ABC, capital e litoral).
// Cada página tem conteúdo próprio: dores, contexto, regras do setor e FAQ específicos.
// Renderizadas por src/pages/LandingPage.jsx; rotas registradas no vite.config.js.

const SEGMENTOS = [
  {
    path: "/segmentos/escritorios-de-advocacia/",
    tipo: "segmento",
    nomeCurto: "Advocacia",
    titulo: "Presença Digital para Escritórios de Advocacia no ABC | One Thank Digital",
    descricao: "Site, Google Meu Negócio e atendimento digital para escritórios de advocacia do Grande ABC, dentro das regras de publicidade do Provimento 205/2021 da OAB.",
    label: "// ESCRITÓRIOS DE ADVOCACIA NO GRANDE ABC",
    h1: "Presença digital para escritórios de advocacia no Grande ABC",
    intro: "A One Thank Digital estrutura a presença digital de escritórios de advocacia de Santo André e região: site institucional, perfil no Google e atendimento organizado — com conteúdo informativo e sóbrio, dentro dos limites do Provimento 205/2021 da OAB.",
    dores: [
      { titulo: "INVISÍVEL NA BUSCA", texto: "Quem precisa de um advogado pesquisa no Google antes de pedir indicação — e o mapa mostra outros escritórios primeiro." },
      { titulo: "MEDO DE ERRAR NA ÉTICA", texto: "Por receio das regras da OAB, o escritório não publica nada e deixa o perfil e o site parados há anos." },
      { titulo: "CONTATOS SEM TRIAGEM", texto: "Mensagens chegam pelo WhatsApp de cada advogado, sem registro, sem retorno organizado e sem histórico." }
    ],
    contexto: {
      titulo: "PUBLICIDADE INFORMATIVA <span>QUE GERA CONFIANÇA.</span>",
      texto: "O cliente de um escritório não compra por impulso: ele pesquisa, compara e procura sinais de seriedade. Um site claro sobre as áreas de atuação, artigos que explicam direitos e um perfil completo no Google fazem exatamente isso — informam, sem prometer resultado.<br/><br/>É o tipo de presença que o Provimento 205/2021 incentiva: marketing de conteúdo, discreto e sóbrio, em vez de captação agressiva.",
      imagem: "/servico-website.png",
      alt: "Site institucional para escritório de advocacia"
    },
    solucaoTitulo: "O QUE FAZEMOS PARA ESCRITÓRIOS.",
    solucoes: [
      { titulo: "SITE INSTITUCIONAL SÓBRIO", texto: "Uma página para cada área de atuação, apresentação da equipe, conteúdo educativo e estrutura de busca — sem promessas de resultado nem expressões de autoengrandecimento." },
      { titulo: "PERFIL NO GOOGLE COMPLETO", texto: "Nome real do escritório, categoria correta, áreas de atuação, fotos sóbrias e publicações informativas, com orientação sobre como responder avaliações preservando o sigilo." },
      { titulo: "ATENDIMENTO ORGANIZADO", texto: "Contatos do site e do WhatsApp centralizados em um único número oficial, com triagem inicial e registro em CRM, para nenhum potencial cliente ficar sem retorno." }
    ],
    regras: {
      titulo: "ATENÇÃO ÀS REGRAS DA OAB",
      texto: "Todo o trabalho segue o Provimento 205/2021 do Conselho Federal da OAB: publicidade informativa, discreta e sóbria; sem referência a honorários como forma de captação; sem promessa de resultado; especialidade apenas com título que a comprove. Nas respostas a avaliações, nenhum dado de cliente ou de caso é exposto. Em situações específicas, recomendamos consultar o Tribunal de Ética da seccional."
    },
    links: [
      { href: "/insights/google-meu-negocio-para-advogados/", texto: "GOOGLE MEU NEGÓCIO PARA ADVOGADOS", publicaEm: "2026-11-17" },
      { href: "/guia/google-meu-negocio/", texto: "GUIA DE SEO LOCAL" },
      { href: "/servicos/criacao-de-sites/", texto: "CRIAÇÃO DE SITES" },
      { href: "/onehub/", texto: "WHATSAPP OFICIAL COM IA" }
    ],
    faqs: [
      { q: "Escritório de advocacia pode ter site e perfil no Google?", a: "Sim. O Provimento 205/2021 da OAB admite a publicidade informativa e o marketing de conteúdo. Site institucional e perfil no Google com informações objetivas, áreas de atuação e conteúdo educativo são compatíveis com as regras, desde que mantenham caráter discreto e sóbrio." },
      { q: "Vocês escrevem os conteúdos do escritório?", a: "Estruturamos e redigimos os textos institucionais e podemos produzir conteúdo educativo a partir das orientações dos advogados. Todo conteúdo técnico-jurídico é revisado e aprovado pelo escritório antes da publicação." },
      { q: "É possível anunciar no Google sendo advogado?", a: "O provimento admite anúncios, inclusive pagos, nos meios permitidos, desde que o conteúdo seja informativo e respeite as vedações do Código de Ética, como a captação de clientela e a referência a honorários como chamariz." },
      { q: "Como fica o sigilo profissional nas avaliações do Google?", a: "As respostas nunca confirmam que a pessoa foi cliente nem mencionam detalhes do atendimento. Orientamos o escritório a responder de forma cordial e genérica, oferecendo um canal reservado quando necessário." }
    ],
    ctaTexto: "PRONTO PARA SER ENCONTRADO <br /><em>POR QUEM PROCURA UM ADVOGADO</em>",
    servicoNome: "Presença digital para escritórios de advocacia",
    publico: "Escritórios de advocacia"
  },
  {
    path: "/segmentos/escritorios-de-contabilidade/",
    tipo: "segmento",
    nomeCurto: "Contabilidade",
    titulo: "Presença Digital para Escritórios de Contabilidade no ABC | One Thank Digital",
    descricao: "Site, Google Meu Negócio e automação de atendimento para escritórios de contabilidade do Grande ABC que querem atrair empresas e organizar a captação.",
    label: "// ESCRITÓRIOS DE CONTABILIDADE NO GRANDE ABC",
    h1: "Presença digital para escritórios de contabilidade no Grande ABC",
    intro: "A One Thank Digital ajuda escritórios contábeis de Santo André e região a serem encontrados por empresas que procuram contador, a explicar seus serviços com clareza e a organizar o atendimento — da primeira mensagem à proposta.",
    dores: [
      { titulo: "INDICAÇÃO NÃO ESCALA", texto: "O escritório cresce só por indicação e não aparece para quem pesquisa \"contador em Santo André\" ou \"abrir empresa no ABC\"." },
      { titulo: "PROPOSTAS PERDIDAS", texto: "Pedidos de orçamento chegam por e-mail, WhatsApp e telefone, e muitos ficam sem acompanhamento até o cliente fechar com outro." },
      { titulo: "SERVIÇO DIFÍCIL DE EXPLICAR", texto: "O cliente não entende a diferença entre os planos e escolhe pelo menor preço, sem perceber o valor da assessoria." }
    ],
    contexto: {
      titulo: "O EMPRESÁRIO PESQUISA <span>ANTES DE TROCAR DE CONTADOR.</span>",
      texto: "Abrir uma empresa, trocar de contador ou sair do MEI são decisões que começam numa busca no Google. Quem aparece com um perfil completo, avaliações recentes e um site que explica os serviços com clareza sai na frente — antes mesmo do primeiro contato.<br/><br/>Para escritórios contábeis, a presença digital também educa: conteúdo sobre regimes tributários, obrigações e prazos atrai exatamente o cliente que valoriza assessoria.",
      imagem: "/servico-google-maps.png",
      alt: "Escritório de contabilidade encontrado no Google Maps"
    },
    solucaoTitulo: "O QUE FAZEMOS PARA ESCRITÓRIOS CONTÁBEIS.",
    solucoes: [
      { titulo: "SITE QUE EXPLICA OS SERVIÇOS", texto: "Páginas para abertura de empresa, troca de contador, departamento pessoal e assessoria tributária, com linguagem clara para o empresário e estrutura de busca." },
      { titulo: "GOOGLE MEU NEGÓCIO ATIVO", texto: "Perfil completo com categorias e serviços corretos, rotina de avaliações após cada entrega e publicações sobre prazos e obrigações do mês." },
      { titulo: "FUNIL DE PROPOSTAS NO CRM", texto: "Cada pedido de orçamento entra no CRM com responsável e prazo de retorno. Lembretes automáticos pelo WhatsApp oficial evitam que propostas esfriem." }
    ],
    regras: {
      titulo: "ATENÇÃO AO CÓDIGO DE ÉTICA",
      texto: "A comunicação segue o Código de Ética Profissional do Contador (NBC PG 01): publicidade de natureza técnica, sem mercantilização, e com a identificação profissional exigida — nome, categoria e número de registro no CRC — nos anúncios e materiais do escritório."
    },
    links: [
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/servicos/automacao-digital/", texto: "AUTOMAÇÃO E CRM" },
      { href: "/insights/como-pedir-avaliacoes-no-google/", texto: "COMO PEDIR AVALIAÇÕES", publicaEm: "2026-11-03" },
      { href: "/insights/o-que-e-crm-pequenas-empresas/", texto: "O QUE É CRM" }
    ],
    faqs: [
      { q: "Escritório de contabilidade pode fazer marketing digital?", a: "Sim. O Código de Ética do Contador (NBC PG 01) permite a publicidade dos serviços, desde que tenha natureza técnica, não seja mercantilista e traga a identificação profissional, como o número de registro no CRC." },
      { q: "Vale a pena ter site se o escritório já vive de indicação?", a: "Sim. Mesmo quem chega por indicação pesquisa o escritório antes de ligar. Um site claro e um perfil bem avaliado confirmam a indicação e ainda trazem empresas que não conheciam o escritório." },
      { q: "Que tipo de conteúdo atrai clientes para contabilidade?", a: "Conteúdo que responde às dúvidas do empresário: como abrir empresa, quando sair do MEI, diferenças entre regimes tributários e prazos de obrigações. Esse conteúdo atrai quem valoriza assessoria, e não apenas preço." },
      { q: "A automação substitui o atendimento do escritório?", a: "Não. A automação organiza: registra cada contato, envia lembretes e faz a triagem inicial. As propostas e a assessoria continuam com a equipe, que passa a atender com mais contexto e menos retrabalho." }
    ],
    ctaTexto: "PRONTO PARA ATRAIR EMPRESAS <br /><em>ALÉM DA INDICAÇÃO</em>",
    servicoNome: "Presença digital para escritórios de contabilidade",
    publico: "Escritórios de contabilidade"
  },
  {
    path: "/segmentos/clinicas-e-consultorios/",
    tipo: "segmento",
    nomeCurto: "Clínicas",
    titulo: "Presença Digital para Clínicas e Consultórios no ABC | One Thank Digital",
    descricao: "Site, Google Meu Negócio e agendamento pelo WhatsApp para clínicas e consultórios do Grande ABC, com atenção às regras de publicidade dos conselhos de saúde.",
    label: "// CLÍNICAS E CONSULTÓRIOS NO GRANDE ABC",
    h1: "Presença digital para clínicas e consultórios no Grande ABC",
    intro: "A One Thank Digital estrutura a presença digital de clínicas e consultórios de Santo André e região: perfil no Google que leva a agendamentos, site com informações claras e atendimento pelo WhatsApp que não deixa paciente sem resposta.",
    dores: [
      { titulo: "AGENDA DEPENDENTE DE SORTE", texto: "A clínica não aparece no mapa quando o paciente pesquisa a especialidade no bairro, e a agenda oscila sem previsibilidade." },
      { titulo: "WHATSAPP SOBRECARREGADO", texto: "A recepção passa o dia respondendo as mesmas perguntas sobre convênio, horário e preparo — e mensagens fora do horário ficam sem resposta." },
      { titulo: "FALTAS E REMARCAÇÕES", texto: "Sem confirmação e lembrete, pacientes esquecem a consulta e o horário fica vazio." }
    ],
    contexto: {
      titulo: "O PACIENTE ESCOLHE <span>PELO QUE ENCONTRA NO GOOGLE.</span>",
      texto: "Antes de agendar, o paciente pesquisa a especialidade perto de casa, lê avaliações, confere o endereço e o horário. O perfil no Google e o site da clínica são, na prática, a primeira consulta.<br/><br/>Quando essas informações estão completas e o agendamento é simples, a clínica converte a busca em consulta marcada — inclusive à noite e no fim de semana.",
      imagem: "/servico-automacao.png",
      alt: "Agendamento automatizado pelo WhatsApp para clínicas"
    },
    solucaoTitulo: "O QUE FAZEMOS PARA CLÍNICAS.",
    solucoes: [
      { titulo: "PERFIL NO GOOGLE QUE AGENDA", texto: "Especialidades e serviços cadastrados, fotos do ambiente, horário atualizado, link de agendamento e rotina de avaliações para a clínica aparecer no mapa da região." },
      { titulo: "SITE CLARO E RÁPIDO", texto: "Páginas por especialidade e procedimento, informações de convênios e preparo, corpo clínico com registro profissional e estrutura de busca local." },
      { titulo: "ATENDIMENTO E LEMBRETES AUTOMÁTICOS", texto: "WhatsApp oficial com respostas às dúvidas frequentes, agendamento, confirmação e lembretes de consulta, com passagem para a recepção quando necessário." }
    ],
    regras: {
      titulo: "ATENÇÃO À PUBLICIDADE EM SAÚDE",
      texto: "Para clínicas médicas, a comunicação segue a Resolução CFM nº 2.336/2023: especialidades anunciadas apenas com RQE, imagens de \"antes e depois\" só com finalidade educativa e sem identificar o paciente, e depoimentos sem promessa de resultado. Odontologia, psicologia, fisioterapia e outras áreas seguem as normas dos respectivos conselhos, que verificamos em cada projeto."
    },
    links: [
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/onehub/", texto: "WHATSAPP OFICIAL COM IA" },
      { href: "/insights/leads-fora-do-horario-como-atender-24h/", texto: "ATENDIMENTO FORA DO HORÁRIO" },
      { href: "/insights/como-pedir-avaliacoes-no-google/", texto: "COMO PEDIR AVALIAÇÕES", publicaEm: "2026-11-03" }
    ],
    faqs: [
      { q: "Clínica pode divulgar preço de consulta na internet?", a: "Para médicos, a Resolução CFM nº 2.336/2023 passou a permitir a divulgação de valores de consultas e formas de pagamento, com vedações como venda casada e premiações. Outras áreas da saúde seguem as regras do próprio conselho, que devem ser verificadas antes da divulgação." },
      { q: "O agendamento pelo WhatsApp pode ser automático?", a: "Sim. Pela API oficial do WhatsApp, a clínica pode responder dúvidas frequentes, oferecer horários, confirmar e lembrar consultas automaticamente, mantendo a recepção para os casos que exigem atendimento humano." },
      { q: "Como a clínica aparece no Google Maps do bairro?", a: "Com o Perfil da Empresa no Google completo e verificado, categorias e especialidades corretas, fotos reais, horário atualizado e avaliações recentes. A distância do paciente pesa, mas relevância e reputação fazem a diferença entre clínicas próximas." },
      { q: "Posso publicar fotos de antes e depois?", a: "No caso de médicos, a Resolução CFM nº 2.336/2023 permite imagens comparativas apenas com finalidade educativa e preservando a identidade do paciente. Outras profissões seguem as normas de seus conselhos." }
    ],
    ctaTexto: "PRONTO PARA TRANSFORMAR BUSCAS <br /><em>EM CONSULTAS AGENDADAS</em>",
    servicoNome: "Presença digital para clínicas e consultórios",
    publico: "Clínicas e consultórios de saúde"
  }
];

const CIDADES = [
  {
    path: "/atendimento/sao-bernardo-do-campo/",
    tipo: "cidade",
    nomeCurto: "São Bernardo do Campo",
    titulo: "Marketing Digital, Sites e Google Meu Negócio em São Bernardo do Campo | OTD",
    descricao: "Sites, Google Meu Negócio, SEO e automação para empresas de São Bernardo do Campo. Atendimento próximo, a partir de Santo André, para empresas B2B e de serviços.",
    label: "// SÃO BERNARDO DO CAMPO",
    h1: "Presença digital para empresas de São Bernardo do Campo",
    intro: "A One Thank Digital atende empresas de São Bernardo do Campo a partir de Santo André, na cidade vizinha: site profissional, perfil no Google, SEO e automação de atendimento para empresas B2B, indústrias e prestadores de serviço.",
    dores: [
      { titulo: "FORNECEDOR INVISÍVEL", texto: "Empresas que atendem a cadeia industrial da cidade dependem de indicação e não aparecem quando o comprador pesquisa um fornecedor." },
      { titulo: "CONCORRÊNCIA DA CAPITAL", texto: "A cidade é vizinha de São Paulo, e quem não ocupa as buscas locais perde clientes para empresas de fora da região." },
      { titulo: "SITE QUE NÃO VENDE", texto: "O site existe, mas é antigo, lento no celular e não gera pedidos de orçamento." }
    ],
    contexto: {
      titulo: "A MAIOR CIDADE DO ABC <span>TAMBÉM PESQUISA NO GOOGLE.</span>",
      texto: "Com tradição industrial e uma rede extensa de fornecedores e prestadores de serviço, São Bernardo tem um mercado B2B em que a decisão de compra é técnica — e começa numa pesquisa. Ter um site que comprova capacidade e um perfil bem posicionado no mapa é o que coloca a empresa na lista de cotação.<br/><br/>Para quem atende o consumidor final, a disputa é por bairro: o Google mostra primeiro os perfis mais relevantes e bem avaliados perto de quem pesquisa.",
      imagem: "/servico-seo.png",
      alt: "Empresa de São Bernardo do Campo no topo do Google"
    },
    solucaoTitulo: "COMO ATENDEMOS SÃO BERNARDO.",
    solucoes: [
      { titulo: "SITES PARA B2B E INDÚSTRIA", texto: "Sites que apresentam capacidade técnica, certificações, portfólio e formas de contato, com páginas por linha de produto ou serviço e estrutura de busca." },
      { titulo: "GOOGLE MEU NEGÓCIO POR REGIÃO", texto: "Perfil configurado com endereço ou área de atendimento corretos, categorias e serviços precisos para aparecer nas buscas da cidade e dos bairros atendidos." },
      { titulo: "AUTOMAÇÃO COMERCIAL", texto: "Pedidos de orçamento centralizados no CRM e atendimento pelo WhatsApp oficial, com acompanhamento até a proposta." }
    ],
    regras: {
      titulo: "ATENDIMENTO EM SÃO BERNARDO",
      texto: "Nossa base fica em Santo André, na Rua Monte Casseros, 281 — Centro, cidade vizinha de São Bernardo. Fazemos reuniões presenciais com agendamento e acompanhamos os projetos também por reuniões online e WhatsApp, de segunda a sexta, das 9h às 18h."
    },
    links: [
      { href: "/servicos/criacao-de-sites/", texto: "CRIAÇÃO DE SITES" },
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/servicos/seo-trafego-organico/", texto: "SEO E TRÁFEGO ORGÂNICO" },
      { href: "/servicos/automacao-digital/", texto: "AUTOMAÇÃO E CRM" }
    ],
    faqs: [
      { q: "Vocês atendem presencialmente em São Bernardo do Campo?", a: "Sim. Estamos em Santo André, cidade vizinha, e fazemos reuniões presenciais com agendamento. O acompanhamento do dia a dia acontece por reuniões online e WhatsApp." },
      { q: "Minha empresa fica em São Bernardo. Ela aparece em buscas de Santo André?", a: "A distância de quem pesquisa é um dos fatores do Google, então o perfil tende a aparecer com mais força perto do endereço. Para atender várias cidades do ABC, trabalhamos a área de atendimento do perfil, páginas no site para cada região e a reputação da empresa." },
      { q: "Vocês fazem sites para indústrias e fornecedores B2B?", a: "Sim. Desenvolvemos sites que apresentam capacidade técnica, portfólio e diferenciais para compradores e engenheiros, com estrutura de busca e formulários de cotação integrados ao CRM." },
      { q: "Quanto tempo leva para aparecer melhor no Google?", a: "Ajustes no perfil do Google costumam ter efeito em semanas. Posicionar o site para buscas de serviço na cidade leva alguns meses de trabalho consistente, dependendo da concorrência do setor." }
    ],
    ctaTexto: "PRONTO PARA SER ENCONTRADO <br /><em>EM SÃO BERNARDO DO CAMPO</em>",
    servicoNome: "Sites, Google Meu Negócio e SEO em São Bernardo do Campo",
    cidade: "São Bernardo do Campo"
  },
  {
    path: "/atendimento/sao-caetano-do-sul/",
    tipo: "cidade",
    nomeCurto: "São Caetano do Sul",
    titulo: "Marketing Digital, Sites e Google Meu Negócio em São Caetano do Sul | OTD",
    descricao: "Sites, Google Meu Negócio, SEO e automação para empresas de São Caetano do Sul. Presença digital à altura de um público exigente, com atendimento próximo.",
    label: "// SÃO CAETANO DO SUL",
    h1: "Presença digital para empresas de São Caetano do Sul",
    intro: "A One Thank Digital atende empresas de São Caetano do Sul a partir de Santo André, cidade vizinha: site profissional, perfil no Google, SEO e automação de atendimento para escritórios, clínicas, comércio e prestadores de serviço.",
    dores: [
      { titulo: "CLIENTE EXIGENTE, VITRINE FRACA", texto: "O público da cidade compara antes de escolher — e um site desatualizado ou um perfil sem avaliações passa a impressão errada." },
      { titulo: "DISPUTA QUARTEIRÃO A QUARTEIRÃO", texto: "Numa cidade compacta e densa, vários concorrentes estão a poucas quadras, e o mapa decide quem recebe a ligação." },
      { titulo: "ATENDIMENTO QUE NÃO ACOMPANHA", texto: "Mensagens fora do horário e retornos demorados fazem o cliente procurar a próxima opção da lista." }
    ],
    contexto: {
      titulo: "CIDADE COMPACTA, <span>CONCORRÊNCIA PRÓXIMA.</span>",
      texto: "São Caetano é o menor município do ABC em área e figura historicamente entre as cidades com maior IDH do país. Isso significa um público informado, que pesquisa, lê avaliações e compara antes de contratar — e concorrentes muito próximos uns dos outros.<br/><br/>Nesse cenário, a diferença está nos detalhes: perfil completo e ativo, avaliações recentes, site rápido e atendimento que responde na hora.",
      imagem: "/servico-google-maps.png",
      alt: "Empresa de São Caetano do Sul no Google Maps"
    },
    solucaoTitulo: "COMO ATENDEMOS SÃO CAETANO.",
    solucoes: [
      { titulo: "PERFIL NO GOOGLE DE ALTO PADRÃO", texto: "Fotos profissionais do ambiente, serviços detalhados, rotina de avaliações e publicações semanais para se destacar entre concorrentes vizinhos." },
      { titulo: "SITE À ALTURA DO PÚBLICO", texto: "Design sob medida, velocidade no celular e conteúdo que responde às dúvidas de quem compara antes de decidir." },
      { titulo: "RESPOSTA IMEDIATA", texto: "WhatsApp oficial com triagem e respostas automáticas fora do horário, para nenhum contato esperar até o dia seguinte." }
    ],
    regras: {
      titulo: "ATENDIMENTO EM SÃO CAETANO",
      texto: "Nossa base fica em Santo André, na Rua Monte Casseros, 281 — Centro, cidade vizinha de São Caetano do Sul. Fazemos reuniões presenciais com agendamento e acompanhamos os projetos também por reuniões online e WhatsApp, de segunda a sexta, das 9h às 18h."
    },
    links: [
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/servicos/criacao-de-sites/", texto: "CRIAÇÃO DE SITES" },
      { href: "/onehub/", texto: "WHATSAPP OFICIAL COM IA" },
      { href: "/insights/empresa-nao-aparece-google-maps/", texto: "EMPRESA NÃO APARECE NO MAPS?" }
    ],
    faqs: [
      { q: "Vocês atendem empresas de São Caetano do Sul presencialmente?", a: "Sim. Estamos em Santo André, cidade vizinha, e fazemos reuniões presenciais com agendamento. O acompanhamento do dia a dia acontece por reuniões online e WhatsApp." },
      { q: "Como me destacar no mapa se há concorrentes na mesma rua?", a: "Quando a distância é parecida, pesam a relevância e o destaque do perfil: categoria e serviços corretos, fotos reais, publicações frequentes e um fluxo constante de avaliações recentes, além de um site que confirme as informações." },
      { q: "Vocês atendem comércio e varejo ou só empresas B2B?", a: "Atendemos empresas de serviço, escritórios, clínicas e também comércio local. O foco é sempre o mesmo: ser encontrado por quem pesquisa e transformar o contato em cliente." },
      { q: "Preciso de site se já tenho Instagram?", a: "O Instagram atrai atenção, mas o site é o ativo que aparece no Google, que você controla e que converte visitantes em contatos. Os dois funcionam melhor juntos." }
    ],
    ctaTexto: "PRONTO PARA SE DESTACAR <br /><em>EM SÃO CAETANO DO SUL</em>",
    servicoNome: "Sites, Google Meu Negócio e SEO em São Caetano do Sul",
    cidade: "São Caetano do Sul"
  },
  {
    path: "/atendimento/diadema/",
    tipo: "cidade",
    nomeCurto: "Diadema",
    titulo: "Marketing Digital, Sites e Google Meu Negócio em Diadema | OTD",
    descricao: "Sites, Google Meu Negócio, SEO e automação para indústrias, distribuidores e prestadores de serviço de Diadema, com atendimento a partir de Santo André.",
    label: "// DIADEMA",
    h1: "Presença digital para empresas de Diadema",
    intro: "A One Thank Digital atende empresas de Diadema a partir de Santo André: sites que apresentam capacidade técnica, perfil no Google, SEO e automação comercial para pequenas e médias indústrias, distribuidores e prestadores de serviço.",
    dores: [
      { titulo: "CAPACIDADE QUE NINGUÉM VÊ", texto: "A empresa tem estrutura e experiência, mas o site não mostra o que ela fabrica, atende ou certifica." },
      { titulo: "COTAÇÕES QUE NÃO CHEGAM", texto: "Compradores de outras cidades pesquisam fornecedores no Google e encontram apenas os concorrentes." },
      { titulo: "VENDA PRESA AO VENDEDOR", texto: "O relacionamento comercial está no celular de cada vendedor, sem histórico e sem acompanhamento das cotações." }
    ],
    contexto: {
      titulo: "PARQUE INDUSTRIAL <span>QUE PRECISA SER ENCONTRADO.</span>",
      texto: "Diadema reúne um parque industrial diversificado, com muitas pequenas e médias empresas que vendem para outras empresas. Nesse mercado, o comprador pesquisa fornecedores, compara capacidade e pede cotação — e quem não aparece nem entra na concorrência.<br/><br/>Um site técnico, bem estruturado para busca, abre portas para clientes de toda a Grande São Paulo, sem depender só da carteira atual.",
      imagem: "/servico-website.png",
      alt: "Site técnico para indústria de Diadema"
    },
    solucaoTitulo: "COMO ATENDEMOS DIADEMA.",
    solucoes: [
      { titulo: "SITE TÉCNICO E CATÁLOGO", texto: "Páginas por produto, processo ou serviço, com especificações, certificações e formulário de cotação — conteúdo que o comprador técnico procura." },
      { titulo: "SEO PARA BUSCAS DE FORNECEDOR", texto: "Estrutura de busca para termos que o comprador usa ao procurar fornecedores, além de perfil no Google completo." },
      { titulo: "CRM DE COTAÇÕES", texto: "Cada cotação registrada com responsável, valor e prazo, com lembretes de acompanhamento pelo WhatsApp oficial." }
    ],
    regras: {
      titulo: "ATENDIMENTO EM DIADEMA",
      texto: "Nossa base fica em Santo André, na Rua Monte Casseros, 281 — Centro. Atendemos empresas de Diadema com reuniões presenciais agendadas e acompanhamento por reuniões online e WhatsApp, de segunda a sexta, das 9h às 18h."
    },
    links: [
      { href: "/servicos/criacao-de-sites/", texto: "CRIAÇÃO DE SITES" },
      { href: "/servicos/seo-trafego-organico/", texto: "SEO E TRÁFEGO ORGÂNICO" },
      { href: "/servicos/automacao-digital/", texto: "AUTOMAÇÃO E CRM" },
      { href: "/insights/concorrente-aparece-antes-no-google/", texto: "CONCORRENTE APARECE ANTES?" }
    ],
    faqs: [
      { q: "Vocês atendem indústrias de Diadema?", a: "Sim. Desenvolvemos sites técnicos, estrutura de busca e organização comercial para pequenas e médias indústrias, distribuidores e prestadores de serviço B2B de Diadema." },
      { q: "Indústria precisa de Google Meu Negócio?", a: "Sim. Além de aparecer no mapa para buscas da região, o perfil confirma que a empresa existe e funciona no endereço, o que dá segurança ao comprador que está pesquisando fornecedores." },
      { q: "O site pode ter catálogo de produtos sem venda online?", a: "Sim. Para B2B, o mais comum é um catálogo técnico com formulário de cotação, sem carrinho de compras. O pedido vai direto para o CRM e para o vendedor responsável." },
      { q: "Vocês fazem reuniões presenciais em Diadema?", a: "Sim, com agendamento. O acompanhamento do projeto também acontece por reuniões online e WhatsApp." }
    ],
    ctaTexto: "PRONTO PARA RECEBER COTAÇÕES <br /><em>PELO GOOGLE</em>",
    servicoNome: "Sites, Google Meu Negócio e SEO em Diadema",
    cidade: "Diadema"
  },
  {
    path: "/atendimento/maua/",
    tipo: "cidade",
    nomeCurto: "Mauá",
    titulo: "Marketing Digital, Sites e Google Meu Negócio em Mauá | OTD",
    descricao: "Sites, Google Meu Negócio, SEO e automação para empresas de Mauá: indústria, comércio e serviços com presença digital estruturada e atendimento próximo.",
    label: "// MAUÁ",
    h1: "Presença digital para empresas de Mauá",
    intro: "A One Thank Digital atende empresas de Mauá a partir de Santo André, cidade vizinha: site profissional, perfil no Google, SEO e automação de atendimento para prestadores de serviço, comércio, clínicas e empresas ligadas à indústria.",
    dores: [
      { titulo: "PERDENDO CLIENTES PARA A VIZINHANÇA", texto: "Quem pesquisa um serviço em Mauá encontra empresas de Santo André e de outras cidades antes das locais." },
      { titulo: "PERFIL ABANDONADO", texto: "O perfil no Google foi criado anos atrás, sem fotos, sem avaliações recentes e com horário desatualizado." },
      { titulo: "SEM TEMPO PARA RESPONDER", texto: "O dono atende, vende e executa — e as mensagens do WhatsApp acumulam sem resposta." }
    ],
    contexto: {
      titulo: "A EMPRESA LOCAL <span>PRECISA OCUPAR A BUSCA LOCAL.</span>",
      texto: "Mauá tem uma economia que combina indústria — com destaque para o polo petroquímico na divisa com Santo André — e um comércio e setor de serviços em crescimento. Muitos negócios locais ainda não ocupam as buscas da própria cidade, o que abre espaço para quem se estruturar primeiro.<br/><br/>Perfil completo, avaliações recentes e um site simples e rápido já colocam a empresa à frente da maior parte da concorrência local.",
      imagem: "/servico-google-maps.png",
      alt: "Empresa de Mauá no Google Maps"
    },
    solucaoTitulo: "COMO ATENDEMOS MAUÁ.",
    solucoes: [
      { titulo: "GOOGLE MEU NEGÓCIO REVITALIZADO", texto: "Revisão completa do perfil: categorias, serviços, fotos, horário, publicações e rotina de avaliações para voltar a aparecer nas buscas da cidade." },
      { titulo: "SITE DE PRESENÇA OU INSTITUCIONAL", texto: "Do site enxuto, para dar credibilidade, ao institucional com uma página por serviço — conforme o papel que o site precisa cumprir." },
      { titulo: "WHATSAPP QUE RESPONDE SOZINHO", texto: "Respostas automáticas às perguntas frequentes e triagem de contatos, para o dono focar em executar e fechar negócios." }
    ],
    regras: {
      titulo: "ATENDIMENTO EM MAUÁ",
      texto: "Nossa base fica em Santo André, na Rua Monte Casseros, 281 — Centro, cidade vizinha de Mauá. Fazemos reuniões presenciais com agendamento e acompanhamos os projetos também por reuniões online e WhatsApp, de segunda a sexta, das 9h às 18h."
    },
    links: [
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/servicos/criacao-de-sites/", texto: "CRIAÇÃO DE SITES" },
      { href: "/insights/quanto-custa-um-site-profissional/", texto: "QUANTO CUSTA UM SITE", publicaEm: "2026-10-27" },
      { href: "/insights/whatsapp-business-api-oficial-ou-app/", texto: "API OFICIAL DO WHATSAPP" }
    ],
    faqs: [
      { q: "Vocês atendem empresas de Mauá presencialmente?", a: "Sim. Estamos em Santo André, cidade vizinha, e fazemos reuniões presenciais com agendamento. O acompanhamento do dia a dia acontece por reuniões online e WhatsApp." },
      { q: "Meu perfil no Google é antigo. Dá para recuperar a visibilidade?", a: "Na maioria dos casos, sim. Revisamos categorias, serviços, fotos e informações, ativamos publicações e uma rotina de avaliações. Perfis antigos e verificados costumam responder bem quando voltam a ter atividade." },
      { q: "Pequena empresa precisa de site?", a: "Depende do papel que o site vai cumprir. Para muitas pequenas empresas, um site de presença bem feito, rápido e com contato pelo WhatsApp já resolve. Quando o site precisa trazer clientes, vale um institucional com uma página por serviço." },
      { q: "A automação do WhatsApp serve para empresa pequena?", a: "Sim. Respostas automáticas às dúvidas mais comuns e a triagem de contatos economizam horas do dono e evitam que clientes desistam por demora na resposta." }
    ],
    ctaTexto: "PRONTO PARA SER ENCONTRADO <br /><em>EM MAUÁ</em>",
    servicoNome: "Sites, Google Meu Negócio e SEO em Mauá",
    cidade: "Mauá"
  },
  {
    path: "/atendimento/sao-paulo/",
    tipo: "cidade",
    nomeCurto: "São Paulo",
    titulo: "Marketing Digital, Sites e Google Meu Negócio em São Paulo (SP) | OTD",
    descricao: "Sites, Google Meu Negócio, SEO e automação para empresas da capital paulista, com atendimento próximo a partir de Santo André, cidade na divisa com São Paulo.",
    label: "// SÃO PAULO — CAPITAL",
    h1: "Presença digital para empresas de São Paulo",
    intro: "A One Thank Digital atende empresas da capital paulista a partir de Santo André, cidade que faz divisa com São Paulo: site profissional, perfil no Google, SEO e automação de atendimento para escritórios, clínicas e empresas B2B.",
    dores: [
      { titulo: "SOTERRADO PELA CONCORRÊNCIA", texto: "Para qualquer serviço há centenas de empresas na cidade, e as buscas genéricas ficam com os grandes players e os anúncios." },
      { titulo: "INVISÍVEL FORA DO PRÓPRIO BAIRRO", texto: "O mapa favorece quem está perto de quem pesquisa — e a empresa não aparece nos bairros onde estão seus melhores clientes." },
      { titulo: "INVESTIMENTO SEM RASTREIO", texto: "Site, anúncios e redes sociais funcionam separados, sem saber qual canal traz o contato que vira cliente." }
    ],
    contexto: {
      titulo: "O MAIOR MERCADO DO PAÍS <span>SE DISPUTA POR NICHO E POR BAIRRO.</span>",
      texto: "São Paulo concentra a maior economia do país e, por isso, as buscas genéricas estão entre as mais disputadas. A estratégia que funciona é ser específico: aparecer para o serviço certo, na região certa, para o público certo — com páginas por serviço, um perfil no Google forte na vizinhança do endereço e conteúdo que responde às dúvidas do cliente.<br/><br/>Para empresas B2B, o alcance é a cidade inteira: o comprador pesquisa pelo serviço, e um site técnico bem estruturado entra na lista de cotação independentemente do bairro.",
      imagem: "/servico-seo.png",
      alt: "Empresa de São Paulo bem posicionada no Google"
    },
    solucaoTitulo: "COMO ATENDEMOS A CAPITAL.",
    solucoes: [
      { titulo: "SEO DE NICHO E POR REGIÃO", texto: "Estrutura de busca para termos específicos do seu serviço e das regiões que você atende, onde a concorrência é menor e a intenção de compra é maior." },
      { titulo: "GOOGLE MEU NEGÓCIO NA VIZINHANÇA", texto: "Perfil completo, categorias precisas, fotos reais e rotina de avaliações para dominar o mapa nos bairros próximos ao endereço." },
      { titulo: "CONTATO QUE NÃO SE PERDE", texto: "Formulários e WhatsApp oficial centralizados no CRM, com origem de cada contato registrada para saber o que realmente traz clientes." }
    ],
    regras: {
      titulo: "ATENDIMENTO NA CAPITAL",
      texto: "Nossa base fica em Santo André, na Rua Monte Casseros, 281 — Centro, cidade que faz divisa com São Paulo. Fazemos reuniões presenciais com agendamento e acompanhamos os projetos também por reuniões online e WhatsApp, de segunda a sexta, das 9h às 18h."
    },
    links: [
      { href: "/servicos/seo-trafego-organico/", texto: "SEO E TRÁFEGO ORGÂNICO" },
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/insights/concorrente-aparece-antes-no-google/", texto: "CONCORRENTE APARECE ANTES?" },
      { href: "/insights/como-aparecer-no-chatgpt-e-na-ia-do-google/", texto: "APARECER NO CHATGPT E NA IA DO GOOGLE", publicaEm: "2026-11-10" }
    ],
    faqs: [
      { q: "Uma agência de Santo André atende empresas de São Paulo?", a: "Sim. Santo André faz divisa com a capital, e fazemos reuniões presenciais com agendamento. O acompanhamento do dia a dia acontece por reuniões online e WhatsApp, como na maioria dos projetos digitais." },
      { q: "Dá para aparecer no Google em São Paulo com tanta concorrência?", a: "Sim, com foco. Em vez de disputar termos genéricos, o trabalho mira buscas específicas de serviço e região, com páginas próprias para cada serviço, um perfil forte perto do endereço e reputação construída com avaliações. Os resultados vêm em meses, conforme a concorrência do setor." },
      { q: "Minha empresa atende a cidade toda. Como aparecer em outros bairros?", a: "O mapa favorece a proximidade do endereço, então o alcance em regiões mais distantes vem principalmente do site: páginas de serviço e conteúdo que posicionam na busca orgânica. Para empresas que atendem no local do cliente, o perfil também pode indicar a área de atendimento." },
      { q: "Vocês atendem empresas B2B da capital?", a: "Sim. Desenvolvemos sites técnicos, estrutura de busca para termos de fornecedor e organização comercial com CRM e WhatsApp oficial para empresas que vendem para outras empresas." }
    ],
    ctaTexto: "PRONTO PARA SER ENCONTRADO <br /><em>EM SÃO PAULO</em>",
    servicoNome: "Sites, Google Meu Negócio e SEO em São Paulo",
    cidade: "São Paulo"
  },
  {
    path: "/atendimento/santos-e-baixada-santista/",
    tipo: "cidade",
    nomeCurto: "Santos e Baixada Santista",
    titulo: "Marketing Digital, Sites e Google Meu Negócio em Santos e Baixada | OTD",
    descricao: "Sites, Google Meu Negócio, SEO e automação para empresas de Santos, São Vicente, Guarujá, Praia Grande e toda a Baixada Santista. Atendimento online e presencial.",
    label: "// SANTOS E BAIXADA SANTISTA",
    h1: "Presença digital para empresas de Santos e da Baixada Santista",
    intro: "A One Thank Digital atende empresas de Santos, São Vicente, Guarujá, Praia Grande, Cubatão e demais cidades da Baixada Santista: site profissional, perfil no Google, SEO e automação de atendimento para escritórios, clínicas, fornecedores do porto e negócios de turismo.",
    dores: [
      { titulo: "MOVIMENTO QUE VARIA COM A TEMPORADA", texto: "A demanda dispara no verão e nos feriados e cai no resto do ano — e a empresa não tem um canal que traga clientes fora da temporada." },
      { titulo: "VISITANTE QUE NÃO ENCONTRA", texto: "Quem chega à cidade pesquisa \"perto de mim\" no celular, e perfis incompletos ou sem avaliações ficam fora da lista." },
      { titulo: "FORNECEDOR DO PORTO SEM VITRINE", texto: "Empresas de logística, manutenção e serviços portuários vivem de contato pessoal e não aparecem quando o comprador pesquisa um fornecedor." }
    ],
    contexto: {
      titulo: "PORTO, SERVIÇOS E TURISMO <span>NA MESMA REGIÃO.</span>",
      texto: "A Baixada Santista reúne o maior porto do Brasil, o polo industrial de Cubatão, um setor de serviços que atende a população fixa e um turismo que multiplica a demanda em feriados e na temporada. Cada perfil de negócio pede uma estratégia diferente.<br/><br/>O fornecedor do porto precisa de um site técnico que entre na cotação; a clínica e o escritório precisam aparecer no mapa do bairro; o comércio e o turismo precisam ser encontrados no celular de quem acabou de chegar.",
      imagem: "/servico-google-maps.png",
      alt: "Empresa de Santos encontrada no Google Maps"
    },
    solucaoTitulo: "COMO ATENDEMOS A BAIXADA.",
    solucoes: [
      { titulo: "PERFIL PARA MORADOR E VISITANTE", texto: "Perfil no Google completo, com horários especiais de feriado, fotos recentes e avaliações respondidas, para aparecer tanto para quem mora quanto para quem está de passagem." },
      { titulo: "SITES PARA SERVIÇOS E B2B", texto: "Do site institucional de escritórios e clínicas ao site técnico de fornecedores portuários, com páginas por serviço e estrutura de busca." },
      { titulo: "ATENDIMENTO NO PICO DA TEMPORADA", texto: "WhatsApp oficial com respostas automáticas e triagem para absorver o volume de feriados sem deixar contato sem resposta." }
    ],
    regras: {
      titulo: "ATENDIMENTO NA BAIXADA SANTISTA",
      texto: "Atendemos a Baixada Santista online e presencialmente. O acompanhamento do dia a dia acontece por reuniões online e WhatsApp, de segunda a sexta, das 9h às 18h — e, quando o projeto pede, vamos até a sua empresa. Nossa base fica em Santo André, na Rua Monte Casseros, 281 — Centro."
    },
    links: [
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/servicos/criacao-de-sites/", texto: "CRIAÇÃO DE SITES" },
      { href: "/onehub/", texto: "WHATSAPP OFICIAL COM IA" },
      { href: "/insights/empresa-nao-aparece-google-maps/", texto: "EMPRESA NÃO APARECE NO MAPS?" }
    ],
    faqs: [
      { q: "Vocês atendem presencialmente na Baixada Santista?", a: "Sim. Atendemos online e presencialmente: o dia a dia do projeto corre por reuniões online e WhatsApp, e quando é preciso estar no local — reunião com a equipe, levantamento ou treinamento — vamos até a sua empresa." },
      { q: "Como aproveitar a temporada no Google?", a: "Preparando o perfil antes do movimento: horários especiais de feriado, fotos recentes, publicações com novidades e respostas rápidas às avaliações. O WhatsApp também precisa estar pronto para o volume, com respostas automáticas às perguntas mais comuns." },
      { q: "Empresa que atende o porto precisa de presença digital?", a: "Sim. Áreas de compras e suprimentos pesquisam fornecedores no Google antes de pedir cotação. Um site técnico com capacidade, certificações e contato direto coloca a empresa na disputa." },
      { q: "Vocês atendem as outras cidades da Baixada além de Santos?", a: "Sim: São Vicente, Guarujá, Praia Grande, Cubatão, Bertioga, Mongaguá, Itanhaém e Peruíbe. A estratégia considera a cidade do endereço e a área que a empresa atende." }
    ],
    ctaTexto: "PRONTO PARA SER ENCONTRADO <br /><em>NA BAIXADA SANTISTA</em>",
    servicoNome: "Sites, Google Meu Negócio e SEO em Santos e na Baixada Santista",
    municipios: ["Santos", "São Vicente", "Guarujá", "Praia Grande", "Cubatão", "Bertioga", "Mongaguá", "Itanhaém", "Peruíbe"]
  },
  {
    path: "/atendimento/litoral-norte/",
    tipo: "cidade",
    nomeCurto: "Litoral Norte",
    titulo: "Marketing Digital, Sites e Google Meu Negócio no Litoral Norte de SP | OTD",
    descricao: "Sites, Google Meu Negócio, SEO e WhatsApp automatizado para pousadas, restaurantes e prestadores de serviço de Ubatuba, Caraguatatuba, São Sebastião e Ilhabela.",
    label: "// LITORAL NORTE DE SÃO PAULO",
    h1: "Presença digital para empresas do Litoral Norte de São Paulo",
    intro: "A One Thank Digital atende empresas de Ubatuba, Caraguatatuba, São Sebastião e Ilhabela: perfil no Google, site, SEO e atendimento automatizado pelo WhatsApp para pousadas, restaurantes, passeios, imobiliárias e prestadores de serviço.",
    dores: [
      { titulo: "RESERVA QUE DEPENDE DA PLATAFORMA", texto: "Sem canal próprio, quase toda reserva passa por plataformas que cobram comissão — inclusive a do cliente que já conhecia o negócio." },
      { titulo: "WHATSAPP LOTADO NO FERIADO", texto: "Perguntas sobre disponibilidade, valores e como chegar chegam todas ao mesmo tempo, justamente quando a equipe está atendendo." },
      { titulo: "BUSCA FEITA ANTES DA VIAGEM", texto: "O visitante decide de casa, semanas antes. Quem tem perfil fraco e poucas fotos perde a escolha antes de o cliente pegar a estrada." }
    ],
    contexto: {
      titulo: "O CLIENTE PESQUISA <span>ANTES DE DESCER A SERRA.</span>",
      texto: "No Litoral Norte, boa parte dos clientes não mora na região: o visitante planeja da capital, do Vale do Paraíba ou de outros estados, pesquisa no Google, olha fotos e avaliações e decide antes de viajar. Por isso, a presença digital precisa funcionar à distância — com perfil completo, um site que mostra a experiência e um canal direto de reserva ou orçamento.<br/><br/>Para quem atende os moradores — clínicas, escritórios, construção e manutenção — vale a lógica do mapa local: perfil bem posicionado na cidade e atendimento que responde rápido.",
      imagem: "/servico-website.png",
      alt: "Site de pousada do Litoral Norte com reserva direta"
    },
    solucaoTitulo: "COMO ATENDEMOS O LITORAL NORTE.",
    solucoes: [
      { titulo: "PERFIL NO GOOGLE QUE ATRAI VISITANTES", texto: "Fotos que mostram a experiência, atributos e serviços completos, horários de temporada e avaliações respondidas — o que o viajante confere antes de escolher." },
      { titulo: "SITE COM CANAL DIRETO", texto: "Site rápido no celular, com fotos, informações da cidade e da praia e contato direto para reserva ou orçamento pelo WhatsApp." },
      { titulo: "WHATSAPP QUE RESPONDE NO PICO", texto: "Respostas automáticas sobre disponibilidade, localização e horários, com passagem para a equipe quando o cliente está pronto para fechar." }
    ],
    regras: {
      titulo: "ATENDIMENTO NO LITORAL NORTE",
      texto: "Atendemos o Litoral Norte online e presencialmente. O acompanhamento do dia a dia acontece por reuniões online e WhatsApp, de segunda a sexta, das 9h às 18h — e, quando o projeto pede, vamos até a sua empresa. Nossa base fica em Santo André, na Rua Monte Casseros, 281 — Centro."
    },
    links: [
      { href: "/servicos/google-meu-negocio/", texto: "GOOGLE MEU NEGÓCIO" },
      { href: "/servicos/criacao-de-sites/", texto: "CRIAÇÃO DE SITES" },
      { href: "/onehub/", texto: "WHATSAPP OFICIAL COM IA" },
      { href: "/insights/como-pedir-avaliacoes-no-google/", texto: "COMO PEDIR AVALIAÇÕES", publicaEm: "2026-11-03" }
    ],
    faqs: [
      { q: "Vocês atendem pousadas e restaurantes do Litoral Norte?", a: "Sim. Estruturamos o perfil no Google, o site e o atendimento pelo WhatsApp de pousadas, restaurantes e passeios. Atendemos online e presencialmente: quando é preciso estar no local, vamos até a sua empresa." },
      { q: "Ter site próprio ajuda a depender menos das plataformas de reserva?", a: "Ajuda. As plataformas continuam úteis para alcance, mas um site com canal direto e um perfil no Google com link de contato permitem que o cliente que já conhece o negócio reserve sem passar pela plataforma." },
      { q: "Como aparecer para quem pesquisa de São Paulo antes de viajar?", a: "Quando a busca inclui o nome da cidade, como \"pousada em Ubatuba\", o Google mostra resultados daquele lugar, mesmo que a pessoa esteja longe. Para aparecer, o perfil precisa ser relevante e bem avaliado, e o site deve ter páginas com a cidade e a região atendidas." },
      { q: "Atendem empresas que funcionam o ano todo, não só no turismo?", a: "Sim. Clínicas, escritórios, imobiliárias, construção e manutenção também precisam aparecer no mapa da cidade e responder rápido. A estratégia muda conforme o público, não a estrutura de trabalho." }
    ],
    ctaTexto: "PRONTO PARA SER ENCONTRADO <br /><em>ANTES DA VIAGEM</em>",
    servicoNome: "Sites, Google Meu Negócio e SEO no Litoral Norte de São Paulo",
    municipios: ["Ubatuba", "Caraguatatuba", "São Sebastião", "Ilhabela"]
  }
];

export const landings = [...SEGMENTOS, ...CIDADES];
export const segmentos = SEGMENTOS;
export const cidades = CIDADES;

export const getLanding = (pathname) => {
  const p = pathname.endsWith("/") ? pathname : pathname + "/";
  return landings.find((l) => l.path === p) || null;
};

// Links para artigos agendados só aparecem a partir da data de publicação
export const linkPublicado = (link) =>
  !link.publicaEm || link.publicaEm <= new Date().toISOString().slice(0, 10);
