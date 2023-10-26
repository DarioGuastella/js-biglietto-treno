const kilometers  = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt ("Quanti anni hai?");
const kmtariff = 0.21
// let subtotal = kilometers / kmtariff;
let total = kilometers / kmtariff;
if (age < 18) {
    let total = ((total / 100) * 80).toFixed(2);
    // let total = `(${total} / 100) * 80`.toFixed(2);

} else {
    // let total = `(${total} / 100) * 60`.toFixed(2);
    let total = ((total / 100) * 60).toFixed(2);
    
}
