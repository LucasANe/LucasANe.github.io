// Retorne no console todas as imagens do site
// console.log(document.querySelectorAll("img"));

// Retorne no console apenas as imagens que começaram com a palavra imagem
// console.log(document.querySelectorAll("[src^='img/imagem']"));

// Selecione todos os links internos (onde o href começa com #)
// console.log(document.querySelectorAll("[href^='#']"));

// Selecione o primeiro h2 dentro de .animais-descricao
// console.log(document.querySelector(".animais-descricao h2"));

// // Selecione o último p do site
// const p = document.querySelectorAll("p");
// console.log(p[--p.length].innerHTML);

// const titulosArray = Array.from(document.getElementsByClassName("titulo"));

// titulosArray.forEach((item) => console.log(item.innerHTML));

// Mostre no console cada parágrado do site
// p.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
// p.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu
// const menu_a = document.querySelectorAll(".menu a");
// menu_a.forEach((item) => item.classList.add("ativo"));
// menu_a.forEach((item) => console.log(item));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// menu_a.forEach(function (item, index) {
//   if (index !== 0) {
//     item.classList.remove("ativo");
//   }
// });

// Verifique se as imagens possuem o atributo alt
// imgs.forEach((item) => {
//   console.log(item.hasAttribute("alt"));
// });

// Verifique a distância da primeira imagem
// em relação ao topo da página
// console.log(document.querySelector("img").clientHeight);

// Retorne a soma da largura de todas as imagens
// let soma = 0;
// imgs.forEach((item, index) => {
//   let largura = item.getBoundingClientRect();
//   soma += largura.width;
//   if (--imgs.length === index) {
//     console.log(soma);
//   }
// });

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
// links = document.querySelectorAll("a");
// links.forEach((link, index) => {
//   let linkInfo = link.getBoundingClientRect();
//   if (linkInfo.width >= 48 && linkInfo.height >= 48) {
//     console.log(
//       `[${linkInfo.width}] [${linkInfo.height}] [${link.innerHTML}] tem o tamanho adequado`
//     );
//   } else {
//     console.log(
//       `[${linkInfo.width}] [${linkInfo.height}] [${link.innerHTML}] não tem o tamanho adequado`
//     );
//   }
// });

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
// if (window.matchMedia("(max-width: 720px)").matches) {
//   document.querySelector("nav").classList.add("menu-mobile");
//   console.log(document.querySelector(".menu").classList);
// } else {
//   console.log(document.querySelector(".menu").classList);
// }

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const linksI = document.querySelectorAll("a[href^='#']");
// function cliquei(event) {
//   event.preventDefault();
//   linksI.forEach((link) => {
//     link.classList.remove("ativo");
//   });
//   event.currentTarget.classList.add("ativo");
// }

// linksI.forEach((link) => {
//   link.addEventListener("click", cliquei);
// });
// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados
// const elem = document.querySelectorAll("body *");

// function mostraElem(event) {
//   console.log(event.currentTarget);
// }

// elem.forEach((e) => {
//   e.addEventListener("click", mostraElem);
// });

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento

// // Se o usuário clicar na tecla (t), aumente todo o texto do site.
// function aumentarFont(event) {
//   if (event.key === "t") {
//     document.documentElement.classList.toggle("texto-maior");
//   }
// }

// window.addEventListener("keydown", aumentarFont);

// Duplique o menu e adicione ele em copy
// const menu = document.querySelector(".menu");
// const cloneMenu = menu.cloneNode(true);
// const copy = document.querySelector(".copy");
// copy.appendChild(cloneMenu);

// // Selecione o primeiro DT da dl de Faq
// const fDt = document.querySelector(".faq-lista dt:first-child");

// // Selecione o DD referente ao primeiro DT
// const fDdDt = fDt.nextElementSibling;

// // Substitua o conteúdo html de .faq pelo de .animais
// const animais = document.querySelector(".animais");
// const faq = document.querySelector(".faq");
// faq.innerHTML = animais.innerHTML;
