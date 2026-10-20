const units = [
  {
    id: 1,
    nome: 'Unidade Centro',
    endereco: 'Av. Central, 100 - Centro',
    horario: '10h às 22h'
  },
  {
    id: 2,
    nome: 'Unidade Shopping',
    endereco: 'Shopping Raízes - Piso 1',
    horario: '10h às 22h'
  },
  {
    id: 3,
    nome: 'Unidade Norte',
    endereco: 'Rua do Sol, 250 - Norte',
    horario: '10h às 22h'
  },
  {
    id: 4,
    nome: 'Unidade Sul',
    endereco: 'Av. das Palmeiras, 500 - Sul',
    horario: '10h às 22h'
  }
];

const products = [
  [
    1,
    'X-Tudo Nordestino',
    'Lanches',
    24.90,
    'Pão, hambúrguer, queijo, presunto, ovo, alface, tomate e maionese.',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85'
  ],
  [
    2,
    'X-Bacon',
    'Lanches',
    22.90,
    'Hambúrguer, bacon, queijo, alface, tomate e maionese.',
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=85'
  ],
  [
    3,
    'X-Calabresa',
    'Lanches',
    20.90,
    'Hambúrguer, calabresa, queijo, alface, tomate e maionese.',
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=85'
  ],
  [
    4,
    'X-Frango',
    'Lanches',
    19.90,
    'Filé de frango, queijo, alface, tomate e maionese.',
    'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=85'
  ],
  [
    5,
    'X-Duplo',
    'Lanches',
    26.90,
    'Dois hambúrgueres, queijo, alface, tomate e maionese.',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=85'
  ],
  [
    6,
    'Tapioca de Queijo Coalho',
    'Lanches',
    12.90,
    'Tapioca quentinha recheada com queijo coalho.',
    '../imagens/tapiocadequeijocoalho.jpeg'
  ],
  [
    7,
    'Tapioca de Carne de Sol',
    'Lanches',
    18.90,
    'Tapioca recheada com carne de sol e queijo coalho.',
    '../imagens/tapioca-de-carne-seca.webp'
  ],
  [
    8,
    'Acarajé',
    'Lanches',
    15.90,
    'Acarajé com vatapá, camarão seco e vinagrete.',
    '../imagens/acaraje.jpg'
  ],
  [
    9,
    'Coxinha de Frango',
    'Lanches',
    8.90,
    'Coxinha crocante com recheio cremoso de frango.',
    '../imagens/coxinha.webp'
  ],
  [
    10,
    'Pastel de Carne',
    'Lanches',
    9.90,
    'Pastel crocante recheado com carne temperada.',
    '../imagens/pasteldecarne.png'
  ],
  [
    11,
    'Baião de Dois',
    'Pratos',
    27.90,
    'Arroz, feijão, carne de sol, queijo coalho e temperos regionais.',
    '../imagens/baiaodedois.jpg'
  ],
  [
    12,
    'Carne de Sol',
    'Pratos',
    29.90,
    'Carne de sol grelhada, acompanhada de arroz e farofa.',
    '../imagens/carnedesol.jpg'
  ],
  [
    13,
    'Arrumadinho de Carne de Sol',
    'Pratos',
    29.90,
    'Carne de sol, feijão verde, arroz, farofa e vinagrete.',
    '../imagens/arrumadinhodecarnedesol.jpeg'
  ],
  [
    14,
    'Macaxeira com Carne de Sol',
    'Pratos',
    28.90,
    'Macaxeira cozida, carne de sol e manteiga de garrafa.',
    '../imagens/macaxeiracomcarnedesol.jpeg'
  ],
  [
    15,
    'Galinhada Nordestina',
    'Pratos',
    26.90,
    'Arroz, frango, temperos e especiarias nordestinas.',
    '../imagens/galinhada.jpg'
  ],
  [
    16,
    'Escondidinho de Carne de Sol',
    'Pratos',
    25.90,
    'Purê de macaxeira cremoso com carne de sol e queijo.',
    '../imagens/escondidinho.jpeg'
  ],
  [
    17,
    'Cuscuz Nordestino',
    'Pratos',
    16.90,
    'Cuscuz de milho servido com queijo coalho e acompanhamentos.',
    '../imagens/cuscuz-nordestino-temperado.webp'
  ],
  [
    18,
    'Cocada Cremosa',
    'Sobremesas',
    9.90,
    'Cocada cremosa de coco com textura macia.',
    '../imagens/cocada-cremosa-13143.png'
  ],
  [
    19,
    'Cartola',
    'Sobremesas',
    11.90,
    'Banana, queijo coalho, canela e açúcar.',
    '../imagens/cartola.webp'
  ],
  [
    20,
    'Pudim de Leite',
    'Sobremesas',
    10.90,
    'Pudim cremoso com calda de caramelo.',
    '../imagens/pudim.webp'
  ],
  [
    21,
    'Bolo de Rolo',
    'Sobremesas',
    12.90,
    'Fatia tradicional de bolo de rolo com goiabada.',
    '../imagens/boloderolo.jpeg'
  ],
  [
    22,
    'Suco de Caju',
    'Bebidas',
    7.90,
    'Suco gelado de caju.',
    'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85'
  ],
  [
    23,
    'Suco de Maracujá',
    'Bebidas',
    7.90,
    'Suco natural de maracujá.',
    'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=85'
  ],
  [
    24,
    'Refrigerante Lata 350ml',
    'Bebidas',
    6.50,
    'Refrigerante gelado em lata de 350 ml.',
    'https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=800&q=85'
  ],
  [
    25,
    'Guaraná Regional',
    'Bebidas',
    6.50,
    'Guaraná gelado para acompanhar seu pedido.',
    'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=85'
  ],
  [
    26,
    'Água Mineral 500ml',
    'Bebidas',
    4.50,
    'Água mineral sem gás, 500 ml.',
    'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=85'
  ]
].map(([id, nome, categoria, preco, descricao, imagem]) => ({
  id,
  nome,
  categoria,
  preco,
  descricao,
  imagem,
  unidades: [1, 2, 3, 4]
}));

const categories = [
  'Todos',
  'Lanches',
  'Pratos',
  'Sobremesas',
  'Bebidas'
];