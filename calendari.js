const calendari = document.querySelector(".calendari");
const nomMesos = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];

const obtenirDiesMes = function(any) {
    return 28 + (any % 4 === 0 && (any % 100 !== 0 || any % 400 === 0));
};

/* Creo el calendari amb les dates actuals + posicions de numeros  */

const calendariDades = function(mes, any) {
    let diesCalendari = calendari.querySelector(".dies-calendari");
    let anyTopCalendari = calendari.querySelector("#any");

    let diesMes = [31, obtenirDiesMes(any), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    diesCalendari.innerHTML = "";

    const dataActual = new Date();
    mes = mes || dataActual.getMonth();
    any = any || dataActual.getFullYear();

    const mesActual = nomMesos[mes];
    seleccio.innerHTML = mesActual;
    anyTopCalendari.innerHTML = any;

    let primerDia = new Date(any, mes, 1);

    /* Creo el calendari amb els hovers, dies de partit i data d'avui */

    for (let i = primerDia.getDay(); i <= diesMes[mes] + primerDia.getDay() - 1; i++) {
        const dia = document.createElement("div");
        dia.classList.add("dia-calendari-hover");
        dia.innerHTML = i - primerDia.getDay() + 1;
        dia.innerHTML = dia.innerHTML + "<span></span><span></span><span></span><span></span>";

        if (i - primerDia.getDay() + 1 === dataActual.getDate() && any === dataActual.getFullYear() && mes === dataActual.getMonth()) {
            dia.classList.add("curr-data"); /* Dia actual */
        }

        /* Dia de partit */
        if (i % 7 === 0) {
            dia.classList.add("diaPartit");
            dia.innerHTML = dia.innerHTML + '<span class="icona-partit">🏒</span>';
        }

        diesCalendari.appendChild(dia);
    }
};


/* Creo els messos de l'any amb la capçalera i per poder-lo triar */

let llMesos = calendari.querySelector(".llista-mesos");

for (let i = 0; i < nomMesos.length; ++i) {
    const mes = document.createElement("div");
    mes.innerHTML = '<div data-mes="' + i + '">' + nomMesos[i] + '</div>';

    mes.querySelector("div").onclick = () => {
        llMesos.classList.remove("show");
        seleccio.value = i;
        calendariDades(i, anyTopCalendari.value);
    };
    llMesos.appendChild(mes);
}

const seleccio = calendari.querySelector("#seleccionador-mes");
const anyTopCalendari = calendari.querySelector("#any");

seleccio.onclick = () => {
    llMesos.classList.add("show");
};



/* Poso l'any,dia, i mes actual i les interaccions onclick de calendari < > */

const dataActual = new Date();
let mesActual = { valor: dataActual.getMonth() };
let anyActual = { valor: dataActual.getFullYear() };

calendariDades(mesActual.valor, anyActual.valor);

document.querySelector("#any-anterior").onclick = () => {
    anyActual.valor = anyActual.valor - 1;
    calendariDades(mesActual.valor, anyActual.valor);
};

document.querySelector("#any-seguent").onclick = () => {
    anyActual.valor = anyActual.valor + 1;
    calendariDades(mesActual.valor, anyActual.valor);
};




/* Dies on marco "Dia de Partit" al calendari */

let diaPartit = document.querySelectorAll(".dia-partit");

for (let i = 0; i < diaPartit.length; ++i) {
    let dia = diaPartit[i];

    if (dia.classList.contains("dia-partit") && dia.dataset.dia % 7 === 0) {
        dia.innerHTML = dia.innerHTML + '<span class="icona-partit">🏒</span>';
    }
}