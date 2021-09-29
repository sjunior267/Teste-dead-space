
var cartas = [carta1 = {
  foto:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  nome: "Bulbasauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 10
  }
}, carta2 = {
  foto:
    "https://cdn.singulart.com/artworks/v2/cropped/5877/main/base/713867_6ed990ab826a4975c232711091e55cdc.jpeg",
  nome: "Darth Vader",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 2
  }
}, carta3 = {
  foto:
    "https://i.pinimg.com/736x/cc/3f/b1/cc3fb11cfb6bd5517414fce82a35b2a4.jpg",
  nome: "shiryu de dragão",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
}, carta4 = {
  foto: "https://images4.alphacoders.com/944/944653.jpg",
  nome: "Nero",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 8
  }
}, carta5 = {
  foto:
    "https://assets.gamepur.com/wp-content/uploads/2020/09/28062114/devil-may-cry-5-vergil-dlc-release-date.jpg",
  nome: "Vergil",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 10
  }
}, carta6 = {
  foto: "https://images4.alphacoders.com/944/944653.jpg",
  nome: "Amaral O Pincel",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
}];

var cartaMaquina;
var cartaJogador = {
  foto: "https://img2.goodfon.com/wallpaper/nbig/7/84/dead-space-isaac-clarke-84.jpg",
  nome: "Isaac Clarke",
  atributos: {
    ataque: 5,
    defender: 5,
    cura: 1
  }
};
var inventario = [bala = { foto: "https://i.imgur.com/KcOOTrX.png", nome:"Munição", bala: 10 },
kitP = { foto: "https://i.imgur.com/2bb1Sm3.png",nome:"KitMedico Pequeno", kitP: 1 },
kitM = { foto: "https://i.imgur.com/2bb1Sm3.png",nome:"KitMedico Medio", kitM: 0 }
];
console.log(inventario)

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador()
}


function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu</p>" + "<a href='https://codepen.io/sjunior267/full/MWoPxKB'>Next Area</a>";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnLoot").disabled = false;
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu, a carta da máquina é maior</p>" + "<a href='https://codepen.io/sjunior267/full/MWoPxKB'>Next Area</a>";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnLoot").disabled = false;
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>" + "<a href='https://codepen.io/sjunior267/full/MWoPxKB'>Next Area</a>";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnLoot").disabled = false;
  }
  exibirCartaMaquina()
}


function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.foto})`
  //  divCartaJogador.style.backgroundImage = "url(" + cartaJogador.foto + ")"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var bolca = ""
  bolca += "<div class='bolca' class='carta-status'><p> bala:" + inventario[0].bala + "</p><p> KitP:" + inventario[1].kitP + "</p><p> KitM:" + inventario[2].kitM + "</p></div>"

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>" + bolca + moldura

}


function loot() {
  var loot = parseInt(Math.random() * 100)
  console.log(loot)
  var teste = 0

  if (loot <= 59) {
    console.log("Munição")
    inventario[0].bala = inventario[0].bala + 2
    teste = 0
  } else if (loot >= 60 && loot <= 89) {
    console.log("KitMedico Pequeno")
    inventario[1].kitP = inventario[1].kitP + 1
    teste = 1
  } else {
    console.log("KitMedico Medio")
    inventario[2].kitM = inventario[2].kitM + 1
    teste = 2
  }
  mostraLoot(teste)


  document.getElementById("btnLoot").disabled = true;


  exibirCartaJogador(inventario)
}

console.log(inventario)

function mostraLoot(teste) {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${inventario[teste].foto})`
  //  divCartaJogador.style.backgroundImage = "url(" + cartaJogador.foto + ")"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div class='carta-status'>"

  var opcoesTexto = "";


  divCartaMaquina.innerHTML = moldura + tagHTML + "<p>" + inventario[teste].nome +"</p>"+ opcoesTexto + "</div>"
}




function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`
  //  divCartaJogador.style.backgroundImage = "url(" + cartaJogador.foto + ")"
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name'atributo' value=''" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}

