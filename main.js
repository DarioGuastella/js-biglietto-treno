const kilometers  = Number( prompt("Quanti chilometri vuoi percorrere?"));
const age = Number( prompt("Quanti anni hai?"));
const kmtariff = 0.21
const titleElement = document.getElementById("title");
const priceElement = document.getElementById("price");
titleElement.innerHTML = `Il prezzo del biglietto è di:`;

let total = kilometers * kmtariff;
if ( !isFinite(kilometers) || !isFinite(age) ) {
    titleElement.innerHTML = `Controlla di aver inserito correttamente i dati.`;
} else if (age < 18) {
    total = (total * 0.8).toFixed(2);
    priceElement.innerHTML = `${total} €`;
    priceElement.style.color = "green";
    
} else if (age >= 65) {
    total = (total * 0.6).toFixed(2);
    priceElement.style.color = "green";
    priceElement.innerHTML = `${total} €`;
} else {
    priceElement.innerHTML = `${total} €`;
    priceElement.style.color = "green";
}
document.getElementById("pageBody").style.backgroundColor = "black";
titleElement.style.color = "white";
titleElement.style.textAlign = "center";
priceElement.style.textAlign = "center";


