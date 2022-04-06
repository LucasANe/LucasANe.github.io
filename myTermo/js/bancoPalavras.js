const listaPaises = [
  "Afeganistão",
  "Cabul",
  "África do Sul",
  "Pretória",
  "Albânia",
  "Tirana",
  "Alemanha",
  "Berlim",
  "Andorra",
  "Andorra-a-Velha",
  "Angola",
  "Luanda",
  "Antiga e Barbuda",
  "São João",
  "Arábia Saudita",
  "Riade",
  "Argélia",
  "Argel",
  "Argentina",
  "Buenos Aires",
  "Arménia",
  "Erevã",
  "Austrália",
  "Camberra",
  "Áustria",
  "Viena",
  "Azerbaijão",
  "Bacu",
  "Bahamas",
  "Nassau",
  "Bangladexe",
  "Daca",
  "Barbados",
  "Bridgetown",
  "Barém",
  "Manama",
  "Bélgica",
  "Bruxelas",
  "Belize",
  "Belmopã",
  "Benim",
  "Porto Novo",
  "Bielorrússia",
  "Minsque",
  "Bolívia",
  "Sucre",
  "Bósnia e Herzegovina",
  "Saraievo",
  "Botsuana",
  "Gaborone",
  "Brasil",
  "Brasília",
  "Brunei",
  "Bandar Seri Begauã",
  "Bulgária",
  "Sófia",
  "Burquina Faso",
  "Uagadugu",
  "Burúndi",
  "Bujumbura",
  "Butão",
  "Timbu",
  "Cabo Verde",
  "Praia",
  "Camarões",
  "Iaundé",
  "Camboja",
  "Pnom Pene",
  "Canadá",
  "Otava",
  "Catar",
  "Doa",
  "Cazaquistão",
  "Astana",
  "Chade",
  "Jamena",
  "Chile",
  "Santiago",
  "China",
  "Pequim",
  "Chipre",
  "Nicósia",
  "Colômbia",
  "Bogotá",
  "Comores",
  "Moroni",
  "Congo-Brazzaville",
  "Brazavile",
  "Coreia do Norte",
  "Pionguiangue",
  "Coreia do Sul",
  "Seul",
  "Cosovo",
  "Pristina",
  "Costa do Marfim",
  "Iamussucro",
  "Costa Rica",
  "São José",
  "Croácia",
  "Zagrebe",
  "Cuaite",
  "Cidade do Cuaite",
  "Cuba",
  "Havana",
  "Dinamarca",
  "Copenhaga",
  "Dominica",
  "Roseau",
  "Egito",
  "Cairo",
  "Emirados Árabes Unidos",
  "Abu Dabi",
  "Equador",
  "Quito",
  "Eritreia",
  "Asmara",
  "Eslováquia",
  "Bratislava",
  "Eslovénia",
  "Liubliana",
  "Espanha",
  "Madrid",
  "Essuatíni",
  "Lobamba",
  "Estado da Palestina",
  "Jerusalém Oriental",
  "Estados Unidos",
  "Washington, D.C.",
  "Estónia",
  "Talim",
  "Etiópia",
  "Adis Abeba",
  "Fiji",
  "Suva",
  "Filipinas",
  "Manila",
  "Finlândia",
  "Helsínquia",
  "França",
  "Paris",
  "Gabão",
  "Libreville",
  "Gâmbia",
  "Banjul",
  "Gana",
  "Acra",
  "Geórgia",
  "Tebilíssi",
  "Granada",
  "São Jorge",
  "Grécia",
  "Atenas",
  "Guatemala",
  "Cidade da Guatemala",
  "Guiana",
  "Georgetown",
  "Guiné",
  "Conacri",
  "Guiné Equatorial",
  "Malabo",
  "Guiné-Bissau",
  "Bissau",
  "Haiti",
  "Porto Príncipe",
  "Honduras",
  "Tegucigalpa",
  "Hungria",
  "Budapeste",
  "Iémen",
  "Saná",
  "Ilhas Marechal",
  "Majuro",
  "Índia",
  "Nova Déli",
  "Indonésia",
  "Jacarta",
  "Irã",
  "Teerão",
  "Iraque",
  "Bagdade",
  "Irlanda",
  "Dublim",
  "Islândia",
  "Reiquiavique",
  "Israel",
  "Jerusalém",
  "Itália",
  "Roma",
  "Jamaica",
  "Kingston",
  "Japão",
  "Tóquio",
  "Jibuti",
  "Jibuti",
  "Jordânia",
  "Amã",
  "Laus",
  "Vienciana",
  "Lesoto",
  "Maseru",
  "Letónia",
  "Riga",
  "Líbano",
  "Beirute",
  "Libéria",
  "Monróvia",
  "Líbia",
  "Trípoli",
  "Listenstaine",
  "Vaduz",
  "Lituânia",
  "Vílnius",
  "Luxemburgo",
  "Luxemburgo",
  "Macedónia do Norte",
  "Escópia",
  "Madagáscar",
  "Antananarivo",
  "MalásiaCuala ",
  "Lumpur",
  "Maláui",
  "Lilôngue",
  "Maldivas",
  "Malé",
  "Mali",
  "Bamaco",
  "Malta",
  "Valeta",
  "Marrocos",
  "Rebate",
  "Maurícia",
  "Porto Luís",
  "Mauritânia",
  "Nuaquechote",
  "México",
  "Cidade do México",
  "Mianmar",
  "Nepiedó",
  "Micronésia",
  "Paliquir",
  "Moçambique",
  "Maputo",
  "Moldávia",
  "Quixinau",
  "Mónaco",
  "Mónaco",
  "Mongólia",
  "Ulã Bator",
  "Montenegro",
  "Podgoritsa",
  "Namíbia",
  "Vinduque",
  "Nauru",
  "Iarém",
  "Nepal",
  "Catmandu",
  "Nicarágua",
  "Manágua",
  "Níger",
  "Niamei",
  "Nigéria",
  "Abuja",
  "Noruega",
  "Oslo",
  "Nova Zelândia",
  "Wellington",
  "Omã",
  "Mascate",
  "Países Baixos",
  "Amesterdão",
  "Palau",
  "Ngerulmud",
  "Panamá",
  "Cidade do Panamá",
  "Papua Nova Guiné",
  "Porto Moresby",
  "Paquistão",
  "Islamabade",
  "Paraguai",
  "Assunção",
  "Peru",
  "Lima",
  "Polónia",
  "Varsóvia",
  "Portugal",
  "Lisboa",
  "Quénia",
  "Nairóbi",
  "Quirguistão",
  "Bisqueque",
  "Quiribáti",
  "Taraua do Sul",
  "Reino Unido",
  "Londres",
  "República Centro-Africana",
  "Bangui",
  "República Checa",
  "Praga",
  "República Democrática do Congo",
  "Quinxassa",
  "República Dominicana",
  "São Domingos",
  "Roménia",
  "Bucareste",
  "Ruanda",
  "Quigali",
  "Rússia",
  "Moscovo",
  "Salomão",
  "Honiara",
  "El Salvador",
  "São Salvador",
  "Samoa",
  "Apia",
  "Santa Lúcia",
  "Castries",
  "São Cristóvão e Neves",
  "Basseterre",
  "São Marinho",
  "São Marinho",
  "São Tomé e Príncipe",
  "São Tomé",
  "São Vicente e Granadinas",
  "Kingstown",
  "Seicheles",
  "Vitória",
  "Senegal",
  "Dacar",
  "Serra Leoa",
  "Freetown",
  "Sérvia",
  "Belgrado",
  "Singapura",
  "Singapura",
  "Síria",
  "Damasco",
  "Somália",
  "Mogadíscio",
  "Sri Lanca",
  "Sri Jaiavardenapura-Cota",
  "Sudão",
  "Cartum",
  "Sudão do Sul",
  "Juba",
  "Suécia",
  "Estocolmo",
  "Suíça",
  "Berna",
  "Suriname",
  "Paramaribo",
  "Tailândia",
  "Banguecoque",
  "Taiuã",
  "Taipé",
  "Tajiquistão",
  "Duchambé",
  "Tanzânia",
  "Dodoma",
  "Timor-Leste",
  "Díli",
  "Togo",
  "Lomé",
  "Tonga",
  "Nucualofa",
  "Trindade e Tobago",
  "Porto de Espanha",
  "Tunísia",
  "Tunes",
  "Turcomenistão",
  "Asgabate",
  "Turquia",
  "Ancara",
  "Tuvalu",
  "Funafuti",
  "Ucrânia",
  "Quieve",
  "Uganda",
  "Campala",
  "Uruguai",
  "Montevideu",
  "Usbequistão",
  "Tasquente",
  "Vanuatu",
  "Porto Vila",
  "Vaticano",
  "Vaticano",
  "Venezuela",
  "Caracas",
  "Vietname",
  "Hanói",
  "Zâmbia",
  "Lusaca",
  "Zimbábue",
  "Harare",
];

//
let pais = [];
const paisesECapitais = [];
listaPaises.forEach((item, index) => {
  if (index % 2) {
    paisesECapitais.push({ pais: pais, capital: item });
  }
  pais = item;
});
//

//
const sorteio = Math.round(Math.random() * (197 - 0) + 0);
const paisSorteado = paisesECapitais[sorteio];
paisesECapitais.splice(sorteio, 1);
const paisSorteadoH1 = document.createElement("h2");
paisSorteadoH1.innerText = paisSorteado.pais;
document.querySelector("main").appendChild(paisSorteadoH1);
//

//
let paisErrado;
const paisesErrados = [];
for (let i = 0; i < 10; i++) {
  paisErrado = Math.round(Math.random() * (196 - i - 0) + 0);
  paisesErrados[i] = paisesECapitais[paisErrado];
  paisesECapitais.splice(paisErrado, 1);
}
//

//
const num = Math.round(Math.random() * (9 - 0) + 0);
const alternativas = [];
paisesErrados.forEach((item, i) => {
  alternativas[i] = document.createElement("a");
  if (i === num) {
    alternativas[i].innerText = paisSorteado.capital;
  } else {
    alternativas[i].innerText = item.capital;
  }
  document.querySelector("section").appendChild(alternativas[i]);
});
//

//
const acertou = [
  (acertou1 = document.createElement("p")),
  (acertou2 = document.createElement("p")),
  (acertou3 = document.createElement("p")),
];
acertou[0].innerText = "Parabéns você acertou!";
acertou[1].innerText = "A capital é";
acertou[2].innerText = paisSorteado.capital;
function tentativa(event) {
  this.classList.add("chutou");
  if (this.innerText === paisSorteado.capital) {
    alternativas.forEach((item) => {
      item.classList.add("acertou");
    });
    acertou.forEach((item) => {
      document.querySelector("section").appendChild(item);
    });
  }
}

alternativas.forEach((item) => {
  item.addEventListener("click", tentativa);
});
