function bubblesChart() {
  const data = 
    {
      name: "Carnaval",
      children: [
        {
          name: "Atividades Recreativas no Carnaval",
          children: [{ name: "Jogar domino no Carnaval", value: 1 }],
        },
        {
          name: "Testando",
          children: [{ name: "TEstando 2", value: 34 }],
        },
        {
          name: "Atividades Sociais e Familiares",
          children: [
            { name: "Permanecer em casa durante o Carnaval", value: 24 },
            {
              name: "Reuni\u00e3o com Amigos/Fam\u00edlia no Carnaval",
              value: 14,
            },
            { name: "Vou curtir fam\u00edlia no Carnaval", value: 3 },
            { name: "Vou curtir comemorar no Carnaval", value: 2 },
          ],
        },
        {
          name: "Atividades de Descanso e Calma",
          children: [
            { name: "Vou celebrar a paz no Carnaval", value: 5 },
            { name: "Vou curtir dormir no Carnaval", value: 13 },
            { name: "Vou descansar no Carnaval", value: 6 },
          ],
        },
        {
          name: "Atividades na Praia",
          children: [
            { name: "Vou pro carnaval na praia", value: 5 },
            { name: "Vou curtir curtir o sol no Carnaval", value: 5 },
          ],
        },
        {
          name: "Consumo de Bebidas e Comportamento Relacionado",
          children: [
            { name: "Vou beber cerveja no Carnaval", value: 4 },
            { name: "Vou beber bastante no Carnaval", value: 50 },
            { name: "Vou beber vodka no Carnaval", value: 2 },
            { name: "beber muito no Carnaval", value: 3 },
            { name: "Vou curtir bebida no Carnaval", value: 4 },
            { name: "Vou beber whisky no Carnaval", value: 1 },
          ],
        },
        {
          name: "Educa\u00e7\u00e3o e Crescimento Pessoal",
          children: [
            { name: "Vou Treinar/Academia no Carnaval", value: 6 },
            { name: "Vou curtir Estudar/Ler no Carnaval", value: 3 },
            { name: "Assistir Filmes/S\u00e9ries no Carnaval", value: 2 },
          ],
        },
        {
          name: "Evitar e Fugir do Carnaval",
          children: [
            { name: "Optar por n\u00e3o participar do Carnaval", value: 13 },
            { name: "Desconectar-se completamente no Carnaval", value: 3 },
            { name: "Fugir da Folia no Carnaval", value: 54 },
            { name: "n\u00e3o vou no Carnaval", value: 2 },
          ],
        },
        {
          name: "Festividades e Participa\u00e7\u00e3o",
          children: [
            { name: "Participar de festas durante o Carnaval", value: 154 },
            { name: "Vou me fantasiar no Carnaval", value: 38 },
            { name: "Vou participar de um bloco no Carnaval", value: 24 },
            { name: "Vou curtir pagode no Carnaval", value: 2 },
            { name: "Vou curtir dan\u00e7ar no Carnaval", value: 3 },
            { name: "Participar de Blocos Rua no Carnaval", value: 74 },
            { name: "Vou curtir Dan\u00e7ar/Pular no Carnaval", value: 3 },
            { name: "Vou curtir m\u00fasica no Carnaval", value: 2 },
            { name: "Vou curtir M\u00fasica no Carnaval", value: 1 },
            { name: "Vou curtir banda no Carnaval", value: 1 },
          ],
        },
        {
          name: "Outras atividades no Carnaval",
          children: [{ name: "Outras atividades no Carnaval", value: 10 }],
        },
        {
          name: "Reclama\u00e7\u00f5es e Descontentamento",
          children: [
            { name: "Vou evitar o \u00f3dio no Carnaval", value: 2 },
            { name: "Vou enfrentar o \u00f3dio no Carnaval", value: 3 },
          ],
        },
        {
          name: "Trabalho e Obriga\u00e7\u00f5es",
          children: [{ name: "Vou trabalhar no Carnaval", value: 15 }],
        },
        {
          name: "Viagens e Explora\u00e7\u00e3o",
          children: [{ name: "Vou viajar durante o Carnaval", value: 21 }],
        },
      ],
    }
  // const data = {
  //   name: "Produtos",
  //   children: [
  //     {
  //       name: "Acessórios",
  //       children: [
  //         { name: "Óculos", value: 14 },
  //         { name: "Óculos de Sol", value: 2 },
  //         { name: "Pulseira", value: 10 },
  //         { name: "Brinco", value: 2 },
  //         { name: "Brincos", value: 3 },
  //         { name: "Mochila", value: 7 },
  //         { name: "Chilli Beans", value: 1 },
  //         { name: "Relógio", value: 30 },
  //       ],
  //     },
  //     {
  //       name: "Alimentação",
  //       children: [
  //         { name: "Pringles", value: 1 },
  //         { name: "Doce", value: 6 },
  //         { name: "Suplementos", value: 5 },
  //         { name: "Coxinha", value: 2 },
  //         { name: "Kinder", value: 1 },
  //         { name: "Sorvete", value: 1 },
  //         { name: "Hambúrguer", value: 1 },
  //         { name: "Banana", value: 1 },
  //         { name: "Manteiga", value: 2 },
  //         { name: "Cesta Básica", value: 4 },
  //         { name: "Nutella", value: 1 },
  //         { name: "Chocolate", value: 7 },
  //         { name: "Lanche", value: 1 },
  //         { name: "Comida", value: 9 },
  //         { name: "iFood", value: 4 },
  //       ],
  //     },
  //     {
  //       name: "Automóveis",
  //       children: [
  //         { name: "Óleo", value: 7 },
  //         { name: "Citroen", value: 1 },
  //         { name: "Carro", value: 17 },
  //         { name: "Amortecedores", value: 1 },
  //         { name: "Pneu", value: 6 },
  //       ],
  //     },
  //     {
  //       name: "Bebidas",
  //       children: [
  //         { name: "Bebida", value: 2 },
  //         { name: "Café", value: 9 },
  //         { name: "Nespresso", value: 2 },
  //       ],
  //     },
  //     {
  //       name: "Bebidas Alcoólicas",
  //       children: [
  //         { name: "Whisky", value: 3 },
  //         { name: "Brahma", value: 1 },
  //         { name: "Cerveja", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Beleza",
  //       children: [
  //         { name: "Protetor Solar", value: 16 },
  //         { name: "Oceane", value: 6 },
  //         { name: "Sombra", value: 8 },
  //         { name: "Peruca", value: 2 },
  //         { name: "Sabonete", value: 13 },
  //         { name: "Shampoo", value: 21 },
  //         { name: "Aliança", value: 5 },
  //         { name: "Condicionador", value: 4 },
  //         { name: "Secador", value: 13 },
  //         { name: "Delineador", value: 1 },
  //         { name: "L'Oreal", value: 3 },
  //         { name: "Anel", value: 19 },
  //         { name: "Desodorante", value: 3 },
  //         { name: "Bronzeador", value: 1 },
  //         { name: "Cosmeticos", value: 7 },
  //         { name: "Off", value: 112 },
  //         { name: "Escova de dente", value: 2 },
  //         { name: "Sabonete facial", value: 1 },
  //         { name: "Esmalte", value: 1 },
  //         { name: "Chapinha", value: 5 },
  //         { name: "Maquiagem", value: 31 },
  //         { name: "Creme", value: 13 },
  //         { name: "Escova", value: 12 },
  //         { name: "Hidratante", value: 53 },
  //         { name: "Nivea", value: 1 },
  //         { name: "Perfumes", value: 15 },
  //         { name: "Niacinamida", value: 2 },
  //         { name: "Tatuagem", value: 2 },
  //         { name: "Dove", value: 1 },
  //         { name: "Mac", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Cama, Mesa e Banho",
  //       children: [
  //         { name: "Toalha", value: 3 },
  //         { name: "Lençol", value: 5 },
  //         { name: "Travesseiro", value: 3 },
  //         { name: "Colchão", value: 11 },
  //         { name: "Box", value: 83 },
  //       ],
  //     },
  //     {
  //       name: "Decoração",
  //       children: [
  //         { name: "Luminária", value: 2 },
  //         { name: "Miniatura", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Eletrodoméstico",
  //       children: [
  //         { name: "Maquina de Lavar", value: 18 },
  //         { name: "Forno elétrico", value: 1 },
  //         { name: "Fritadeira elétrica", value: 4 },
  //         { name: "Liquidificador", value: 5 },
  //         { name: "Microondas", value: 9 },
  //         { name: "AirFryer", value: 10 },
  //         { name: "Eletrodoméstico", value: 2 },
  //         { name: "Cooktop", value: 2 },
  //         { name: "Ar Condicionado", value: 14 },
  //         { name: "Processador de alimentos", value: 1 },
  //         { name: "Lava-louças", value: 2 },
  //         { name: "Tanquinho", value: 1 },
  //         { name: "Fogão", value: 14 },
  //         { name: "Forno de embutir", value: 1 },
  //         { name: "Pipoqueira", value: 2 },
  //         { name: "Lava e Seca", value: 6 },
  //         { name: "Geladeira", value: 26 },
  //         { name: "Cafeteira", value: 8 },
  //         { name: "Mixer", value: 5 },
  //         { name: "Grill", value: 1 },
  //         { name: "Aspirador de po", value: 7 },
  //         { name: "Sanduicheira", value: 1 },
  //         { name: "Aquecedor", value: 2 },
  //         { name: "Freezer", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Eletrônicos",
  //       children: [
  //         { name: "Asus", value: 1 },
  //         { name: "Telefone", value: 18 },
  //         { name: "Canon", value: 2 },
  //         { name: "TV", value: 141 },
  //         { name: "iPhone", value: 142 },
  //         { name: "Celular", value: 290 },
  //         { name: "Kindle", value: 161 },
  //         { name: "Headset", value: 10 },
  //         { name: "Televisao", value: 15 },
  //         { name: "JBL", value: 12 },
  //         { name: "Echo Dot", value: 4 },
  //         { name: "Memoria Ram", value: 1 },
  //         { name: "Samsung", value: 25 },
  //         { name: "Kindle Paperwhite", value: 2 },
  //         { name: "ArmyBomb", value: 1 },
  //         { name: "Apple", value: 14 },
  //         { name: "Xbox", value: 23 },
  //         { name: "Roteador", value: 1 },
  //         { name: "Positivo", value: 3 },
  //         { name: "CD", value: 9 },
  //         { name: "Ventilador", value: 11 },
  //         { name: "iPad", value: 15 },
  //         { name: "SSD", value: 19 },
  //         { name: "AOC", value: 1 },
  //         { name: "Camera", value: 13 },
  //         { name: "Smartphone", value: 6 },
  //         { name: "Processador", value: 11 },
  //         { name: "Nintendo Switch", value: 24 },
  //         { name: "Switch", value: 59 },
  //         { name: "Ryzen", value: 3 },
  //         { name: "Eletrônicos", value: 12 },
  //         { name: "Redmi", value: 2 },
  //         { name: "Edifier", value: 1 },
  //         { name: "Buds", value: 3 },
  //         { name: "Pichau", value: 1 },
  //         { name: "Redragon", value: 1 },
  //         { name: "Smart Speaker", value: 3 },
  //         { name: "Xiaomi", value: 12 },
  //         { name: "Caixa de som", value: 3 },
  //         { name: "HD", value: 11 },
  //         { name: "Tablet", value: 25 },
  //         { name: "Polaroid", value: 4 },
  //         { name: "Impressora", value: 9 },
  //         { name: "Vibrador", value: 2 },
  //         { name: "Monitor", value: 46 },
  //         { name: "Notebook", value: 174 },
  //         { name: "Smartwatch", value: 6 },
  //         { name: "AMD", value: 2 },
  //         { name: "DELL", value: 7 },
  //         { name: "Video Game", value: 5 },
  //         { name: "Intel", value: 2 },
  //         { name: "Mouse Pad", value: 2 },
  //         { name: "LG", value: 3 },
  //         { name: "Headphone", value: 5 },
  //         { name: "Americanas", value: 44 },
  //         { name: "Acer", value: 3 },
  //         { name: "Fone de Ouvido", value: 7 },
  //         { name: "Alexa", value: 44 },
  //         { name: "Smartband", value: 1 },
  //         { name: "Motorola", value: 12 },
  //         { name: "DVDs", value: 1 },
  //         { name: "PlayStation", value: 6 },
  //         { name: "Home theater", value: 1 },
  //         { name: "Airpod", value: 1 },
  //         { name: "Teclado", value: 18 },
  //         { name: "Computador", value: 21 },
  //         { name: "Kabum", value: 7 },
  //         { name: "Mouse", value: 12 },
  //         { name: "Notebook Gamer", value: 3 },
  //         { name: "Philips", value: 2 },
  //         { name: "HD Externo", value: 1 },
  //         { name: "Console", value: 20 },
  //         { name: "Rádio", value: 4 },
  //         { name: "Dyson", value: 1 },
  //         { name: "Gabinete", value: 3 },
  //       ],
  //     },
  //     {
  //       name: "Estudos",
  //       children: [
  //         { name: "Curso", value: 25 },
  //         { name: "E-books", value: 2 },
  //       ],
  //     },
  //     {
  //       name: "Eventos",
  //       children: [
  //         { name: "Festival", value: 5 },
  //         { name: "Show", value: 44 },
  //         { name: "Ingresso", value: 21 },
  //       ],
  //     },
  //     {
  //       name: "Games",
  //       children: [
  //         { name: "Zelda", value: 1 },
  //         { name: "Jogos", value: 69 },
  //         { name: "DLC", value: 2 },
  //         { name: "Steam", value: 12 },
  //         { name: "GTA", value: 1 },
  //         { name: "Cadeira Gamer", value: 7 },
  //         { name: "Fifa", value: 14 },
  //         { name: "Bayonetta", value: 11 },
  //         { name: "Sonic", value: 13 },
  //         { name: "Sony", value: 2 },
  //         { name: "Resident Evil", value: 3 },
  //         { name: "The Sims", value: 5 },
  //         { name: "Games", value: 25 },
  //         { name: "God Of War", value: 1 },
  //         { name: "Epic Games", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Itens domésticos",
  //       children: [
  //         { name: "Pano", value: 3 },
  //         { name: "Tinta", value: 4 },
  //         { name: "Balde", value: 5 },
  //         { name: "Amaciante", value: 17 },
  //         { name: "Luva", value: 1 },
  //         { name: "Rodo", value: 1 },
  //         { name: "Papel Higiênico", value: 4 },
  //         { name: "Esponja", value: 1 },
  //         { name: "Lixeira", value: 1 },
  //         { name: "Vassoura", value: 2 },
  //         { name: "Sabão em pó", value: 1 },
  //         { name: "Prego", value: 1 },
  //         { name: "Detergente", value: 1 },
  //         { name: "Lâmpada", value: 4 },
  //         { name: "Cano", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Lazer",
  //       children: [
  //         { name: "Carrinho", value: 90 },
  //         { name: "Aposta", value: 1 },
  //         { name: "Piscina", value: 703 },
  //         { name: "Bola", value: 1 },
  //         { name: "Boneca", value: 4 },
  //       ],
  //     },
  //     {
  //       name: "Livraria",
  //       children: [
  //         { name: "Livraria", value: 6 },
  //         { name: "Bíblia", value: 2 },
  //         { name: "Gibi", value: 1 },
  //         { name: "Sandman", value: 1 },
  //         { name: "Livro", value: 661 },
  //         { name: "Saraiva", value: 5 },
  //         { name: "Manga", value: 19 },
  //       ],
  //     },
  //     {
  //       name: "Móveis",
  //       children: [
  //         { name: "Sofa", value: 16 },
  //         { name: "Varal", value: 1 },
  //         { name: "Armário", value: 7 },
  //         { name: "Cadeira", value: 64 },
  //         { name: "Estante", value: 31 },
  //         { name: "Berço", value: 2 },
  //         { name: "Polishop", value: 1 },
  //         { name: "Cama Box", value: 9 },
  //         { name: "Escrivaninha", value: 2 },
  //         { name: "Móveis", value: 20 },
  //         { name: "FlexForm", value: 4 },
  //         { name: "Mesa", value: 15 },
  //         { name: "Espelho", value: 4 },
  //       ],
  //     },
  //     {
  //       name: "Música",
  //       children: [
  //         { name: "Vinil", value: 19 },
  //         { name: "Microfone", value: 4 },
  //         { name: "Disco", value: 1 },
  //         { name: "Violao", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Papelaria",
  //       children: [
  //         { name: "Mochila", value: 7 },
  //         { name: "Caneta", value: 5 },
  //         { name: "Kalunga", value: 1 },
  //         { name: "Caderno", value: 2 },
  //         { name: "Cola", value: 1 },
  //         { name: "Panini", value: 6 },
  //         { name: "Papelaria", value: 2 },
  //       ],
  //     },
  //     {
  //       name: "Pet",
  //       children: [
  //         { name: "Racao", value: 8 },
  //         { name: "Zeedog", value: 6 },
  //         { name: "Coleira", value: 2 },
  //         { name: "Guia", value: 16 },
  //       ],
  //     },
  //     {
  //       name: "Remédios",
  //       children: [
  //         { name: "Remedio", value: 5 },
  //         { name: "Pomada", value: 2 },
  //       ],
  //     },
  //     {
  //       name: "Saúde",
  //       children: [
  //         { name: "Bicicleta", value: 7 },
  //         { name: "Absorvente", value: 1 },
  //         { name: "Máscara", value: 1 },
  //         { name: "Garrafinha", value: 1 },
  //         { name: "Whey", value: 23 },
  //         { name: "Growth", value: 3 },
  //         { name: "Academia", value: 16 },
  //         { name: "Creatina", value: 7 },
  //       ],
  //     },
  //     {
  //       name: "Utensílios de Cozinha",
  //       children: [
  //         { name: "Batedeira", value: 2 },
  //         { name: "Caneca", value: 1 },
  //         { name: "Escorredor", value: 1 },
  //         { name: "Panela de Pressão", value: 8 },
  //         { name: "Guarda roupa", value: 8 },
  //         { name: "Taca", value: 1 },
  //         { name: "Copo", value: 2 },
  //         { name: "Frigideira", value: 3 },
  //         { name: "Prato", value: 1 },
  //         { name: "Liquidificador", value: 5 },
  //         { name: "Panela", value: 21 },
  //       ],
  //     },
  //     {
  //       name: "Vestuário",
  //       children: [
  //         { name: "Cropped", value: 1 },
  //         { name: "Salto", value: 1 },
  //         { name: "Puffer", value: 1 },
  //         { name: "Biquinis", value: 5 },
  //         { name: "Luva", value: 1 },
  //         { name: "Havaianas", value: 3 },
  //         { name: "Chuteira", value: 2 },
  //         { name: "Sapato", value: 12 },
  //         { name: "Roupa", value: 130 },
  //         { name: "Riachuelo", value: 5 },
  //         { name: "Tenis", value: 99 },
  //         { name: "Vestido", value: 8 },
  //         { name: "Adidas", value: 32 },
  //         { name: "Baw", value: 10 },
  //         { name: "Blusa", value: 7 },
  //         { name: "Calvin Klein", value: 1 },
  //         { name: "Calca", value: 17 },
  //         { name: "Lingerie", value: 6 },
  //         { name: "Vans", value: 5 },
  //         { name: "Sapatilhas", value: 3 },
  //         { name: "Meia", value: 140 },
  //         { name: "Arezzo", value: 1 },
  //         { name: "Fralda", value: 10 },
  //         { name: "Renner", value: 3 },
  //         { name: "Nike", value: 28 },
  //         { name: "Crocs", value: 3 },
  //         { name: "Cueca", value: 6 },
  //         { name: "Centauro", value: 2 },
  //         { name: "Bone", value: 3 },
  //         { name: "Capa", value: 17 },
  //         { name: "Sapatos", value: 5 },
  //         { name: "Camiseta", value: 12 },
  //         { name: "Moletom", value: 10 },
  //         { name: "Sandália", value: 6 },
  //         { name: "Bolsa", value: 14 },
  //         { name: "Calca jeans", value: 1 },
  //         { name: "Jaqueta", value: 3 },
  //         { name: "Guarda Roupa", value: 8 },
  //         { name: "Body", value: 2 },
  //         { name: "Uniforme", value: 1 },
  //         { name: "Camisa", value: 45 },
  //         { name: "Calcinha", value: 8 },
  //         { name: "Puma", value: 3 },
  //         { name: "Casaco", value: 1 },
  //       ],
  //     },
  //     {
  //       name: "Viagens",
  //       children: [
  //         { name: "CVC", value: 1 },
  //         { name: "Viagem", value: 37 },
  //         { name: "Hotel", value: 2 },
  //         { name: "Mala", value: 9 },
  //         { name: "Passagens", value: 40 },
  //         { name: "Buser", value: 1 },
  //         { name: "Barraca", value: 1 },
  //         { name: "Pacote de Viagem", value: 10 },
  //         { name: "Passagem", value: 72 },
  //       ],
  //     },
  //   ],
  // };

  // Specify the dimensions of the chart.
  const width = 500;
  const height = width;
  const margin = 1; // to avoid clipping the root circle stroke

  // Specify the number format for values.
  const format = d3.format(",d");

  // Create the pack layout.
  const pack = d3
    .pack()
    .size([width - margin * 2, height - margin * 2])
    .padding(10);

  // Compute the hierarchy from the JSON data; recursively sum the
  // values for each node; sort the tree by descending value; lastly
  // apply the pack layout.
  const root = pack(
    d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value)
  );

  const zoom = d3
    .zoom()
    .scaleExtent([1, 5])
    .on("zoom", (event) => {
      nodesGroup.attr("transform", event.transform);
    });

  // Create the SVG container.
  const svg = d3
    .select(".chart2")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-margin, -margin, width, height])
    .attr("style", "width: 100%; height: 750px; font: 10px sans-serif;")
    .attr("text-anchor", "middle");

  var nodesGroup = svg.append("g");

  // Place each node according to the layout’s x and y values.
  const node = nodesGroup
    .selectAll()
    .data(root.descendants())
    .join("g")
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  nodesGroup.call(zoom);
  // Add a title.
  node.append("title").text(
    (d) =>
      `${d
        .ancestors()
        .map((d) => d.data.name)
        .reverse()
        .join("/")}\n${format(d.value)}`
  );

  // Add a filled or stroked circle.
  node
    .append("circle")
    //.attr("fill", (d) => (d.children ? "#fff" : "#ddd"))
    .attr("fill", (d) =>
      d.depth === 0
        ? "none"
        : d.children
        ? ((d.data.color = returnRandomColor()), d.data.color)
        : adjustTone(d.parent?.data.color, d.depth)
    )
    .attr("stroke", (d) => (d.depth != 0 ? "#fff" : ""))
    .style("stroke-width", "1px")
    .style("stroke-opacity", "0.5")
    //.attr("stroke", (d) => (d.children ? "#bbb" : null))
    .attr("r", (d) => d.r);

  // Add a label to leaf nodes.
  const text = node
    .filter((d) => !d.children)
    .append("text")
    .attr("clip-path", (d) => `circle(${d.r})`)
    .attr("fill", "#1C1C1C")
    .style("font-size", (d) => `${d.r / 5}px`)
    .style("font-family", "'Segoe UI'")
    .style("font-weight", "bold")
    .style("color", "#999");

  // Add a tspan for each CamelCase-separated word.
  text
    .selectAll()
    .data((d) => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
    .join("tspan")
    .attr("x", 0)
    .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.6}em`)
    .text((d) => d);

  // Primeiro, criar caminhos invisíveis para o texto seguir
  node
    .filter((d) => d.children != null)
    .append("path")
    .attr("id", (d, i) => `label-path-${i}`)
    .style("fill", "none")
    .style("stroke", "none")
    .attr("d", (d) => {
      // Este cria um caminho circular usando a sintaxe de arco SVG
      // O arco é desenhado para a parte superior interna do círculo
      const x = d.r - 0.1;
      const y = 0;
      // Inverter a direção do arco para que o texto siga pelo lado interno
      // Ajustar os flags de sweep e large-arc para desenhar o arco na direção correta
      const upperInnerArc = `M ${-x},${y} A ${d.r},${d.r} 0 0,1 ${x},${y}`;
      return upperInnerArc;
    });

  // Em seguida, anexar seu texto e usar o elemento 'textPath' para vincular o texto ao caminho
  const categoriesText = node
    .filter((d) => d.children != null)
    .append("text")
    .style("font-size", (d) => `${d.r / 6}px`)
    .attr("fill", "#fff")
    // Anexar um elemento textPath
    .append("textPath")
    // Vincular elemento textPath ao caminho pelo ID
    .attr("xlink:href", (d, i) => `#label-path-${i}`)
    .attr("startOffset", "50%") // Você pode ajustar isso para mudar onde o texto começa no caminho
    .text((d) => d.data.name)
    .attr("text-anchor", "middle") // Centralizar o texto no caminho
    .style("dominant-baseline", "hanging") // Garantir que o texto fique na parte de cima
    .style("pointer-events", "none") // Adicionado para evitar a sobreposição
    .style("font-weight", "bold");

  categoriesText.filter((d) => d.depth == 0).text("");

  return svg.node();
}

function returnRandomColor() {
  var colorList = [
    "#1E90FF",
    "#20B2AA",
    "#2E8B57",
    "#EE82EE",
    "#FE6244",
    "#FFB84C",
    "#BC7AF9",
    "#82CD47",
    "#96BAFF",
  ];

  let randomNumber = Math.floor(Math.random() * 9);

  return colorList[randomNumber];
}

function adjustTone(color, depth) {
  var colorObj = d3.color(color);
  // Evita que d3,color retorne nulo
  if (colorObj)
    // Ajuste a tonalidade com base na profundidade (mais claro ou mais escuro)
    return colorObj.brighter(depth * 0.5);
  // Ajuste o multiplicador conforme necessário
  else return color;
}
bubblesChart();
