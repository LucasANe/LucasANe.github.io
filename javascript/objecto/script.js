// function Dom(seletor) {
//   (this.elemento = function () {
//     return document.querySelector(seletor);
//   }),
//     (this.ativar = function () {
//       this.elemento().classList.add("ativo");
//     });
// }
// // Transforme o objeto abaixo em uma Constructor Function
// function pessoa(nome, idade) {
//   (this.nome = nome),
//     (this.idade = idade),
//     (this.andar = function () {
//       console.log(this.nome + " andou");
//     });
// }

// // Crie 3 pessoas, João - 20 anos,
// // Maria - 25 anos, Bruno - 15 anos
// pessoa1 = new pessoa(João, 20);
// pessoa2 = new pessoa(Maria, 25);
// pessoa3 = new pessoa(Bruno, 15);

// // Crie uma Constructor Function (Dom) para manipulação
// // de listas de elementos do dom. Deve conter as seguintes
// // propriedades e métodos:
// // elements, retorna NodeList com os elementos selecionados
// // addClass(classe), adiciona a classe a todos os elementos
// // removeClass(classe), remove a classe a todos os elementos

// function consFunDom(seletor) {
//   const elementList = document.querySelectorAll(seletor);
//   this.element = elementList;
//   this.addClass = function (classe) {
//     elementList.forEach((item) => {
//       item.classList.add(classe);
//     });
//   };
//   this.removeClass = function (classe) {
//     elementList.forEach((item) => {
//       item.classList.revome(classe);
//     });
//   };
// }

// // Crie uma função construtora de Pessoas
// // Deve conter nome, sobrenome e idade
// // Crie um método no protótipo que retorne
// // o nome completo da pessoa
// function Pessoa(nome, sobrenome, idade) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;
// }
// Pessoa.prototype.nomecompleto = function () {
//   return (this.nomeCompleto = `${this.nome} ${this.sobrenome}`);
// };

// // Liste os métodos acessados por
// // dados criados com NodeList,
// // HTMLCollection, Document

// // Liste os construtores dos dados abaixo
// const li = document.querySelector("li");

// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
const precoTotal = compras.reduce((anterior, item, index) => {
  const itemValor = +item.preco.slice(3).replace(",", ".");
  return anterior + itemValor;
}, 0);
console.log(precoTotal);
