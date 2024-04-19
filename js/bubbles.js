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
          name: "Consumo de Bebidas",
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
  
  // const zoom = d3
  //   .zoom()
  //   .scaleExtent([1, 5])
  //   .on("zoom", (event) => {
  //     nodesGroup.attr("transform", event.transform);
  //   });
  d3.selectAll('circle')
  .on('click', function(event, d) {

    // Determina o ponto focal do zoom
    var x = d.x;
    var y = d.y;
    var r = d.r;
    
    // Calcula o fator de escala necessário para que a bolha clicada se ajuste na tela
    var scaleFactor = Math.min(width / (r * 2), height / (r * 2));

    // Calcula as posições para centralizar a bolha
    var translateX = width / 2 - scaleFactor * x;
    var translateY = height / 2 - scaleFactor * y;

    // Define a transformação de zoom
    var zoomTransform = d3.zoomIdentity.translate(translateX, translateY).scale(scaleFactor);
  });


// // Definição do comportamento de zoom
  var zoom = d3.zoom()
    .scaleExtent([1, 40])  // Limites de zoom
    .translateExtent([[0, 0], [width, height]]) // Limites de translação
    .on('zoom', function(event) {
      nodesGroup.attr('transform', event.transform);
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

  // Cria um ouvinte de eventos no fundo do SVG para resetar o zoom
  svg.on('click', function(event) {
    // Verifica se o clique ocorreu diretamente no svg e não em um elemento filho
    if (event.target.tagName === 'svg') {
      svg.transition()
        .duration(500)
        .call(zoom.transform, d3.zoomIdentity); // Resetar para transformação de identidade
    }
  });

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
    .style("font-size", (d) => `${d.r / 7}px`)
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
  
     // Create the zoom behavior and zoom immediately in to the initial focus node.
  svg.on("click", (event) => zoom(event, root));
  let focus = root;
  let view;
  zoomTo([focus.x, focus.y, focus.r * 2]);

  function zoomTo(v) {
    const k = width / v[2];

    view = v;

    label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("r", d => d.r * k);
  }

  function zoom(event, d) {
    const focus0 = focus;

    focus = d;

    const transition = svg.transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

    label
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

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
