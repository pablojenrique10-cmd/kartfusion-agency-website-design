export type Niche = {
  id: string;
  name: string;
  demo: string;
  kw: string[];
};

export type Category = {
  id: string;
  name: string;
  glyph: string;
  niches: Niche[];
};

export const DEMO_FEATURES: Record<string, string> = {
  restaurante: "cardápio digital, reservas pelo WhatsApp, galeria de pratos, avaliações e localização",
  cafeteria: "menu com preços, galeria do ambiente, horários, avaliações e pedidos pelo WhatsApp",
  clinica: "apresentação de especialidades, equipe profissional, depoimentos, dúvidas frequentes e agendamento online",
  loja: "vitrine de produtos com carrinho, promoções, categorias, avaliações e checkout demonstrativo",
  barbearia: "tabela de serviços e preços, galeria do ambiente, equipe, avaliações e agendamento",
  academia: "modalidades, planos de assinatura, professores, resultados e matrícula pelo WhatsApp",
  imobiliaria: "imóveis em destaque com fotos e valores, filtros, diferenciais e agendamento de visita",
  games: "vitrine geek, planos, setups em destaque, FAQ e atendimento gamer",
  educacao: "cursos com valores, metodologia, professores, depoimentos de alunos e aula experimental",
  advocacia: "áreas de atuação, sócios, credibilidade, dúvidas frequentes e consulta pelo WhatsApp",
  petshop: "serviços de banho e tosa, lojinha de produtos, galeria pet, avaliações e agendamento",
  automoveis: "estoque de veículos com fotos e preços, serviços, financiamento e test drive pelo WhatsApp",
};

export const CATEGORIES: Category[] = [
  {
    id: "alimentacao", name: "Alimentação", glyph: "🍔",
    niches: [
      { id: "restaurante", name: "Restaurante", demo: "restaurante", kw: ["comida", "almoco", "jantar"] },
      { id: "lanchonete", name: "Lanchonete", demo: "restaurante", kw: ["lanche", "salgado"] },
      { id: "hamburgueria", name: "Hamburgueria", demo: "restaurante", kw: ["burger", "hamburguer", "artesanal"] },
      { id: "pizzaria", name: "Pizzaria", demo: "restaurante", kw: ["pizza", "delivery"] },
      { id: "delivery", name: "Delivery", demo: "restaurante", kw: ["entrega", "ifood", "rapido"] },
      { id: "cafeteria", name: "Cafeteria", demo: "cafeteria", kw: ["cafe", "espresso", "coffe"] },
      { id: "confeitaria", name: "Confeitaria", demo: "cafeteria", kw: ["doces", "bolos", "sobremesa"] },
      { id: "padaria", name: "Padaria", demo: "cafeteria", kw: ["pao", "panificadora"] },
      { id: "bar", name: "Bar", demo: "restaurante", kw: ["drinks", "cerveja", "pub"] },
      { id: "churrascaria", name: "Churrascaria", demo: "restaurante", kw: ["churrasco", "carne", "rodizio"] },
      { id: "foodtruck", name: "Food Truck", demo: "restaurante", kw: ["truck", "rua", "evento"] },
    ],
  },
  {
    id: "beleza", name: "Beleza e Estética", glyph: "💇",
    niches: [
      { id: "barbearia", name: "Barbearia", demo: "barbearia", kw: ["barba", "corte", "navalha"] },
      { id: "salao", name: "Salão de Beleza", demo: "barbearia", kw: ["cabelo", "escova"] },
      { id: "cabeleireiro", name: "Cabeleireiro", demo: "barbearia", kw: ["hair", "coloracao"] },
      { id: "manicure", name: "Manicure", demo: "barbearia", kw: ["unha", "pedicure", "esmalte"] },
      { id: "maquiadora", name: "Maquiadora", demo: "barbearia", kw: ["make", "makeup", "noiva"] },
      { id: "estetica", name: "Estética", demo: "clinica", kw: ["limpeza de pele", "facial"] },
      { id: "clinica-estetica", name: "Clínica de Estética", demo: "clinica", kw: ["harmonizacao", "botox"] },
      { id: "sobrancelhas", name: "Designer de Sobrancelhas", demo: "barbearia", kw: ["micropigmentacao", "henna"] },
      { id: "spa", name: "Spa", demo: "clinica", kw: ["massagem", "relaxamento"] },
    ],
  },
  {
    id: "saude", name: "Saúde", glyph: "🏥",
    niches: [
      { id: "clinica-medica", name: "Clínica Médica", demo: "clinica", kw: ["medico", "consulta", "saude"] },
      { id: "dentista", name: "Dentista", demo: "clinica", kw: ["odontologia", "odontologica", "dental", "sorriso"] },
      { id: "psicologo", name: "Psicólogo", demo: "clinica", kw: ["terapia", "psicologia", "mental"] },
      { id: "fisioterapia", name: "Fisioterapia", demo: "clinica", kw: ["reabilitacao", "fisio"] },
      { id: "nutricionista", name: "Nutricionista", demo: "clinica", kw: ["nutricao", "dieta"] },
      { id: "farmacia", name: "Farmácia", demo: "loja", kw: ["remedio", "medicamento"] },
      { id: "laboratorio", name: "Laboratório", demo: "clinica", kw: ["exame", "analise"] },
    ],
  },
  {
    id: "profissionais", name: "Profissionais", glyph: "⚖️",
    niches: [
      { id: "advogado", name: "Advogado", demo: "advocacia", kw: ["advocacia", "juridico", "direito"] },
      { id: "contador", name: "Contador", demo: "advocacia", kw: ["contabilidade", "imposto"] },
      { id: "consultoria", name: "Consultoria", demo: "advocacia", kw: ["consultor", "gestao"] },
      { id: "corretor", name: "Corretor", demo: "imobiliaria", kw: ["imoveis", "creci"] },
      { id: "imobiliaria", name: "Imobiliária", demo: "imobiliaria", kw: ["casa", "apartamento", "aluguel"] },
      { id: "escritorio", name: "Escritório Empresarial", demo: "advocacia", kw: ["empresa", "corporativo"] },
      { id: "agencia-marketing", name: "Agência de Marketing", demo: "games", kw: ["trafego", "social media"] },
    ],
  },
  {
    id: "comercio", name: "Comércio", glyph: "🏪",
    niches: [
      { id: "roupas", name: "Loja de Roupas", demo: "loja", kw: ["moda", "boutique", "vestuario"] },
      { id: "calcados", name: "Loja de Calçados", demo: "loja", kw: ["tenis", "sapato"] },
      { id: "acessorios", name: "Loja de Acessórios", demo: "loja", kw: ["bolsas", "joias", "relogio"] },
      { id: "eletronicos", name: "Loja de Eletrônicos", demo: "games", kw: ["celular", "informatica", "tech"] },
      { id: "moveis", name: "Loja de Móveis", demo: "loja", kw: ["decoracao", "planejados"] },
      { id: "cosmeticos", name: "Loja de Cosméticos", demo: "loja", kw: ["maquiagem", "perfume", "skincare"] },
      { id: "petshop-loja", name: "Pet Shop", demo: "petshop", kw: ["racao", "pet"] },
    ],
  },
  {
    id: "automoveis", name: "Automóveis", glyph: "🚗",
    niches: [
      { id: "concessionaria", name: "Concessionária", demo: "automoveis", kw: ["carros", "seminovos", "veiculos"] },
      { id: "oficina", name: "Oficina Mecânica", demo: "automoveis", kw: ["mecanica", "revisao"] },
      { id: "funilaria", name: "Funilaria", demo: "automoveis", kw: ["pintura", "martelinho"] },
      { id: "lavarapido", name: "Lava Rápido", demo: "automoveis", kw: ["lavagem", "detalhamento"] },
      { id: "autopecas", name: "Auto Peças", demo: "loja", kw: ["pecas", "acessorios automotivos"] },
      { id: "guincho", name: "Guincho", demo: "automoveis", kw: ["reboque", "24 horas"] },
    ],
  },
  {
    id: "casa", name: "Casa e Construção", glyph: "🏠",
    niches: [
      { id: "construtora", name: "Construtora", demo: "imobiliaria", kw: ["obra", "empreendimento"] },
      { id: "arquitetura", name: "Arquitetura", demo: "imobiliaria", kw: ["arquiteto", "projeto"] },
      { id: "interiores", name: "Designer de Interiores", demo: "imobiliaria", kw: ["decor", "ambientes"] },
      { id: "marcenaria", name: "Marcenaria", demo: "advocacia", kw: ["madeira", "planejados"] },
      { id: "eletricista", name: "Eletricista", demo: "advocacia", kw: ["eletrica", "instalacao"] },
      { id: "encanador", name: "Encanador", demo: "advocacia", kw: ["hidraulica", "vazamento"] },
      { id: "pintor", name: "Pintor", demo: "advocacia", kw: ["pintura", "reforma"] },
      { id: "jardinagem", name: "Jardinagem", demo: "cafeteria", kw: ["paisagismo", "plantas"] },
      { id: "reformas", name: "Empresa de Reformas", demo: "imobiliaria", kw: ["construcao", "obra"] },
    ],
  },
  {
    id: "educacao", name: "Educação", glyph: "🎓",
    niches: [
      { id: "escola", name: "Escola", demo: "educacao", kw: ["colegio", "infantil", "ensino"] },
      { id: "curso-online", name: "Curso Online", demo: "educacao", kw: ["ead", "digital", "mentoria"] },
      { id: "professor", name: "Professor Particular", demo: "educacao", kw: ["aula", "reforco"] },
      { id: "idiomas", name: "Escola de Idiomas", demo: "educacao", kw: ["ingles", "espanhol"] },
      { id: "faculdade", name: "Faculdade", demo: "educacao", kw: ["graduacao", "pos"] },
      { id: "treinamentos", name: "Treinamentos", demo: "educacao", kw: ["capacitacao", "workshop"] },
    ],
  },
  {
    id: "tecnologia", name: "Tecnologia", glyph: "💻",
    niches: [
      { id: "software", name: "Empresa de Software", demo: "games", kw: ["sistemas", "saas", "app"] },
      { id: "dev", name: "Desenvolvedor", demo: "games", kw: ["programador", "freelancer dev"] },
      { id: "agencia-digital", name: "Agência Digital", demo: "games", kw: ["sites", "web"] },
      { id: "assistencia", name: "Assistência Técnica", demo: "games", kw: ["conserto", "notebook", "celular"] },
      { id: "loja-gamer", name: "Loja Gamer", demo: "games", kw: ["pc gamer", "perifericos", "setup"] },
      { id: "ti", name: "Serviços de TI", demo: "games", kw: ["suporte", "infra", "redes"] },
    ],
  },
  {
    id: "entretenimento", name: "Entretenimento", glyph: "🎮",
    niches: [
      { id: "streamer", name: "Streamer", demo: "games", kw: ["twitch", "live", "youtube"] },
      { id: "gamer", name: "Gamer", demo: "games", kw: ["esports", "clan"] },
      { id: "produtor", name: "Produtor de Conteúdo", demo: "games", kw: ["influencer", "criador"] },
      { id: "eventos", name: "Eventos", demo: "games", kw: ["festa", "shows", "ingressos"] },
      { id: "fotografo", name: "Fotógrafo", demo: "games", kw: ["foto", "ensaio"] },
      { id: "videomaker", name: "Videomaker", demo: "games", kw: ["video", "filmagem"] },
      { id: "dj", name: "DJ", demo: "games", kw: ["musica", "balada"] },
    ],
  },
  {
    id: "turismo", name: "Turismo", glyph: "🏨",
    niches: [
      { id: "hotel", name: "Hotel", demo: "imobiliaria", kw: ["hospedagem", "quartos"] },
      { id: "pousada", name: "Pousada", demo: "imobiliaria", kw: ["chalé", "serra", "praia"] },
      { id: "viagens", name: "Agência de Viagens", demo: "imobiliaria", kw: ["pacotes", "turismo"] },
      { id: "guia", name: "Guia Turístico", demo: "imobiliaria", kw: ["passeio", "trilha"] },
      { id: "aluguel-imoveis", name: "Aluguel de Imóveis", demo: "imobiliaria", kw: ["temporada", "airbnb"] },
    ],
  },
  {
    id: "animais", name: "Animais", glyph: "🐶",
    niches: [
      { id: "petshop", name: "Pet Shop", demo: "petshop", kw: ["banho e tosa", "racao"] },
      { id: "veterinario", name: "Veterinário", demo: "clinica", kw: ["vet", "animal", "cirurgia"] },
      { id: "hotel-pets", name: "Hotel para Pets", demo: "petshop", kw: ["hospedagem pet", "creche"] },
      { id: "adestrador", name: "Adestrador", demo: "petshop", kw: ["comportamento", "treinamento"] },
    ],
  },
  {
    id: "esportes", name: "Esportes", glyph: "🏋️",
    niches: [
      { id: "academia", name: "Academia", demo: "academia", kw: ["musculacao", "fitness", "gym"] },
      { id: "crossfit", name: "Crossfit", demo: "academia", kw: ["box", "wod"] },
      { id: "futebol", name: "Escola de Futebol", demo: "academia", kw: ["futsal", "base"] },
      { id: "personal", name: "Personal Trainer", demo: "academia", kw: ["treino", "pt"] },
      { id: "loja-esportiva", name: "Loja Esportiva", demo: "loja", kw: ["suplemento", "fitness"] },
    ],
  },
  {
    id: "outros", name: "Outros Serviços", glyph: "📦",
    niches: [
      { id: "freelancer", name: "Freelancer", demo: "advocacia", kw: ["portfolio", "autonomo"] },
      { id: "fotografia", name: "Fotografia", demo: "cafeteria", kw: ["casamento", "ensaio"] },
      { id: "casamento", name: "Casamento", demo: "cafeteria", kw: ["cerimonial", "buffet"] },
      { id: "eventos-org", name: "Organização de Eventos", demo: "educacao", kw: ["producao", "formatura"] },
      { id: "seguranca", name: "Segurança", demo: "advocacia", kw: ["vigilancia", "portaria"] },
      { id: "limpeza", name: "Limpeza", demo: "clinica", kw: ["higienizacao", "faxina"] },
      { id: "transportadora", name: "Transportadora", demo: "automoveis", kw: ["frete", "mudanca"] },
      { id: "logistica", name: "Empresa de Logística", demo: "automoveis", kw: ["distribuicao", "entregas"] },
    ],
  },
];

export const ALL_NICHES: (Niche & { category: string; catName: string; glyph: string })[] = CATEGORIES.flatMap(
  (c) => c.niches.map((n) => ({ ...n, category: c.id, catName: c.name, glyph: c.glyph }))
);

export function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function searchNiches(query: string) {
  const q = normalize(query.trim());
  if (!q) return ALL_NICHES;
  const terms = q.split(/\s+/);
  return ALL_NICHES.filter((n) => {
    const hay = normalize(`${n.name} ${n.catName} ${n.kw.join(" ")}`);
    return terms.every((t) => hay.includes(t));
  });
}
