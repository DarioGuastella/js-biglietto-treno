const kilometers  = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt ("Quanti anni hai?");
const kmtariff = 0.21
let total = kilometers * kmtariff;
if ( !isFinite(kilometers) || !isFinite(age) ) {
    document.getElementById("title").innerHTML = `Controlla di aver inserito correttamente i dati.`;
} else if (age < 18) {
    total = ((total / 100) * 80).toFixed(2);
    document.getElementById("title").innerHTML = `Il prezzo del biglietto è di:`;
    document.getElementById("price").innerHTML = `${total} €`;
    
} else if (age >= 65) {
    total = ((total / 100) * 60).toFixed(2);
    document.getElementById("title").innerHTML = `Il prezzo del biglietto è di:`;
    
}
document.getElementById("price").style.color = "green";

