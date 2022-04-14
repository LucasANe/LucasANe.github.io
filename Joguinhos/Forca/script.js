const palavras =
  "sagaz negro âmargo êxito mexer termo senso nobre algoz afeto plena ética mútua sutil tênue vigor aquém audaz porém fazer sanar seção inato assim cerne ideia desde fosse poder moral torpe honra muito justo anexo fútil razão quiçá etnia ícone sobre tange égide lapso mútuo sonho expor haver hábil amigo empo pesar posse ávido então boçal ardil coser genro corja seara dengo prole detém causa dizer não paz fel vil sobe ser céu mal ver ter ego mãe bem mas vão vir dar bom ora dom são era réu que elo luz com rol tal nós seu vis hum uma até foi pós por ato dia pro dor dou pai sol sem eis lua pau mim irá tez ler fim rua tão empatia embuste cônjuge exceção efêmero prolixo caráter verbete idílico análogo genuíno história sublime pêsames aurélio sucinto inferir família apático audácia acepção recesso astúcia pródigo redimir estigma estável refutar cultura cinismo virtude icônico exortar perspicaz recíproco impressão concessão supérfluo escrúpulo retificar paradigma presunção concepção dicotomia implícito propósito hipócrita plenitude ratificar essencial hemogenia corolário incidente esdrúxulo hermético vagabundo altruísmo persuadir aleatório altruísta promíscuo deliberar esperança sapiência confiança demasiado indelével mesquinho resignado eminência regozijar impetuoso descrição diligente inusitado compaixão prudência pretensão analítico discrição amor fato puta viés mito caos você esmo como brio vide ação após sede pois auge vida ermo saga ônus idem mote suma medo tolo casa foda apto crer além urge vovó sina veio pude zelo área pela ruim cota coxo soar rude gozo ente ater fase faça auto para tudo  mais voga rima será onde amar trás cedo logo cujo jugo meio ante sela meta teor doce face cela arte nojo traz pose numa pelo deus base asco teve alvo vale agir rito ócio foco alma todo alva eita sair ágil alto noia alta peço ódio nexo tese orla isso irmão reger";
const palavrasMatriz = palavras.split(" ");
// palavrasMatriz.forEach((item, index) => {
//     // console.log(index);
//   });
for (let c = palavrasMatriz.length; c > 0; --c) {
  for (let i = 0; i < palavrasMatriz.length; ++i) {
    if (i !== c) {
      if (palavrasMatriz[i] === palavrasMatriz[c]) {
        // console.log(`${palavrasMatriz[i]} = ${palavrasMatriz[c]}`);
        // console.log(i + " " + c);
      }
    }
  }
}
function puxarPalavra() {
  fetch("https://api.dicionario-aberto.net/random")
    .then((r) => r.json())
    .then((r) => {});
}
// puxarPalavra();

const input = document.querySelector("input");
const errada = document.querySelector(".erradas");
// console.log(errada);
let vidasNumber = 4;
const palavraSorteada =
  palavrasMatriz[Math.round(Math.random() * (305 - 0) + 0)].toUpperCase();
const matrizPalavraSorteada = palavraSorteada.split("");
function replaceSpecialChars(str) {
  str = str.replace(/[ÀÁÂÃÄÅ]/gi, "A");
  str = str.replace(/[ÍÌÎ]/gi, "I");
  str = str.replace(/[ÓÒÔÕ]/gi, "O");
  str = str.replace(/[ÚÙÛ]/gi, "U");
  str = str.replace(/[ÈÉÊË]/gi, "E");
  str = str.replace(/[Ç]/gi, "C");
  return str.replace(/[^a-z0-9]/gi, "");
}
const palavraFinal = replaceSpecialChars(palavraSorteada);
const matrizPalavraFinal = palavraFinal.split("");
// console.log(palavraFinal);
const linhaOculta = [];
const acertou = [];
matrizPalavraSorteada.forEach(() => {
  linhaOculta.push("_");
  acertou.push("False");
});
const tamanhoInput = linhaOculta.length * 2;
input.style.width = `${tamanhoInput}ch`;
const linhaResposta = document.createElement("h1");
linhaResposta.innerText = linhaOculta;
if (window.matchMedia("(max-width: 500px)").matches) {
  linhaResposta.innerText = linhaResposta.innerText.replace(/[,]+/g, "");
} else {
  linhaResposta.innerText = linhaResposta.innerText.replace(/[,]+/g, " ");
}
document.querySelector("main").appendChild(linhaResposta);
const linksA = document.querySelectorAll("a");
const listaA = Array.from(linksA);
const vidas = document.querySelectorAll("img");
// console.log(vidas);
function verificar(event) {
  let tentativa = linhaOculta.length;
  // console.log(this.innerText);
  this.classList.add("chutou");
  errada.appendChild(this);
  let letraChute = this.innerText;
  matrizPalavraFinal.forEach((letra, index) => {
    if (letraChute === letra) {
      linhaOculta[index] = letraChute;
      linhaResposta.innerText = linhaOculta;
      if (window.matchMedia("(max-width: 500px)").matches) {
        linhaResposta.innerText = linhaResposta.innerText.replace(/[,]+/g, "");
      } else {
        linhaResposta.innerText = linhaResposta.innerText.replace(/[,]+/g, " ");
      }
      acertou[index] = "True";
      tentativa = 10;
    } else if (tentativa === index + 1) {
      vidas[vidasNumber].setAttribute("src", "./coracao-vazio-48.png");
      --vidasNumber;
      // console.log(vidasNumber);
    }
  });
  if (vidasNumber === -1) {
    const perdeu = document.createElement("h1");
    perdeu.classList.add("perdeu");
    document.querySelector("main").appendChild(perdeu);
    perdeu.innerText = `Você Perdeu! A palavra era ${palavraSorteada}`;
    listaA.forEach((item) => {
      item.style.display = "none";
    });
  } else if (!acertou.includes("False")) {
    const ganhou = document.createElement("h1");
    ganhou.classList.add("ganhou");
    document.querySelector("main").appendChild(ganhou);
    ganhou.innerText = `Você Ganhou! A palavra era ${palavraSorteada}`;
    listaA.forEach((item) => {
      item.style.display = "none";
    });
  }
}

function tentativaInteira(e) {
  let resposta = document.querySelector("#resposta").value.toUpperCase();
  if (resposta == palavraFinal || resposta == palavraSorteada) {
    const ganhou = document.createElement("h1");
    ganhou.classList.add("ganhou");
    document.querySelector("main").appendChild(ganhou);
    ganhou.innerText = `Você Ganhou! A palavra era ${palavraSorteada}`;
    listaA.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    vidas[vidasNumber].setAttribute("src", "./coracao-vazio-48.png");
    --vidasNumber;
    // console.log(vidasNumber);
  }
  if (vidasNumber === -1) {
    const perdeu = document.createElement("h1");
    perdeu.classList.add("perdeu");
    document.querySelector("main").appendChild(perdeu);
    perdeu.innerText = `Você Perdeu! A palavra era ${palavraSorteada}`;
    listaA.forEach((item) => {
      item.style.display = "none";
    });
  }
  document.querySelector("#resposta").value = "";
}

listaA.forEach((item) => {
  item.addEventListener("click", verificar);
});
// console.log(listaA);
// console.log(linhaOculta);
// console.log(linhaResposta);
