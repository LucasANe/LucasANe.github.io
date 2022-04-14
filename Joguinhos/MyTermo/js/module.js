import cincoLetras from "./Todas-as-palavras.js";
import initEstrutura from "./estrutura.js";
import trocarFoco from "./foco.js";

const palavras = cincoLetras();
console.log(palavras);
initEstrutura(palavras);
trocarFoco();
