const botaoPlayPause = document.getElementById("play-pause");
const botaoVoltarCapitulo = document.getElementById("voltar");
const botaoAvancarCapitulo = document.getElementById("avançar");
const textoCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const qtdCapitulo = 10;

let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
  audio.play();
  taTocando = true;
  console.log("Deu Play!");

  botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
  audio.pause();
  taTocando = false;
  console.log("Deu Pause!");

   botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausar() {
  if(taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function avancarCapitulo() {
  pausarFaixa();

  if (capituloAtual < qtdCapitulo) {
    capituloAtual = capituloAtual + 1;
  } else {
    capituloAtual = 1;
  }
  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo" + capituloAtual;
}

function voltarCapitulo() {
  pausarFaixa();

  if (capituloAtual === 1 ) {
    capituloAtual = qtdCapitulo;
  } else {
    capituloAtual = capituloAtual - 1;
  }
  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo" + capituloAtual;
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancarCapitulo.addEventListener("click", avancarCapitulo);
botaoVoltarCapitulo.addEventListener("click", voltarCapitulo);