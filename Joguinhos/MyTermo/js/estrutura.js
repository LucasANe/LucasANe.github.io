export default function initEstrutura(palavras) {
  function palavraSorteada(palavras) {
    let i = Math.floor(Math.random() * (6025 - 0) + 0);
    let palavraSorteada = palavras[i];
    return palavraSorteada;
  }
  function criarPs() {}
  palavraSorteada = palavraSorteada(palavras);
  console.log(palavraSorteada);

  //   if (this.value.length == this.maxLength) {
  //     $(this).next(".inputs").focus();
  //   }
}
