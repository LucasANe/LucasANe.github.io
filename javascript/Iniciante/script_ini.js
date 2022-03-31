// Crie uma função para verificar se um valor é Truthy
function isTrue(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function areaQuadrada(lado) {
  return lado * lado;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function isEven(number) {
  if (number % 2 === 0) {
    return "é par";
  } else if (number % 2 === 1) {
    return "é impar";
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("lucas");
});

// -------------------------------------------------------------
// addEventListener("click", function () {
//   var number = Math.round(100 * Math.random());
//   if (number) {
//     console.log(number);
//   } else {
//   }
// });
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let ano = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
ano.forEach(function (n) {
  console.log(`O brasil ganhou a copa de ${n}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
let i = 0;
frutas.forEach(function (n) {
  if (i < 3) console.log(n);
  i++;
});

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var u = frutas[frutas.length - 1];
console.log(u);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;
darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
