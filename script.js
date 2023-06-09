var frangoAssado = document.getElementById("frango-assado");
var alcatraSuina = document.getElementById("alcatra-suina");
var costelaSuina = document.getElementById("alcatra-suina");
var frangoFrito = document.getElementById("frango-frito");
var salpicao = document.getElementById("salpicao");
var batataFrita = document.getElementById("batata-frita");
var almofadasQueijo = document.getElementById("almofadas-queijo");
var p = document.getElementById("p");
var total = document.getElementById("valor-total")

function fAssado() {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>FRANGO ASSADO</span> <span>R$ 45,00</span>";
    p.appendChild(listItem)
}

function aSuina() {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>ALCATRA SUÍNA</span> <span>R$ 38,00</span>";
    p.appendChild(listItem);
}

function cSuina() {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>COSTELA SUÍNA</span> <span>R$ 50,00</span>";
    p.appendChild(listItem);
}

function fFrito() {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>FRANGO FRITO</span> <span>R$ 36,00</span>";
    p.appendChild(listItem);
}

function slp() {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>SALPICÃO</span> <span>R$ 25,00</span>";
    p.appendChild(listItem);
}

function bFrita() {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>BATATA FRITO</span> <span>R$ 15,00</span>";
    p.appendChild(listItem);
}

function aQueijo() {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<span>ALMOFADAS DE QUEIJO</span> <span>R$ 20,00</span>";
    p.appendChild(listItem);
}


















