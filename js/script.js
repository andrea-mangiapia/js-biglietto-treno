//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let userKm = parseInt ( prompt( "Quanti chilometri vorresti percorrere?"));

const userAge = parseInt (prompt("Quanti anni hai?"));

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
const userPriceTotal = userKm * 0.21;
console.log(userPriceTotal)

/*
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.
*/

let userDiscountPrice;
let msgPrice;
let discountText

if (userAge < 18) {
    userDiscountPrice = userPriceTotal - (userPriceTotal * 20 / 100);
    msgPrice = "€ " + userDiscountPrice.toFixed(2);
    discountText = "Abbiamo applicato lo sconto del 20%"; 
    
} else if (userAge > 65) {
        userDiscountPrice = userPriceTotal - (userPriceTotal * 40 / 100);
        msgPrice = "€ " + userDiscountPrice.toFixed(2); 
        discountText = "Abbiamo applicato lo sconto del 40%";
} else {
    msgPrice = '€ ' + userPriceTotal.toFixed(2);
    discountText = "Nessuno sconto applicato";
}

document.getElementById('am-km').innerHTML = userKm;
document.getElementById('am-msg-price').innerHTML = msgPrice;
document.getElementById('am-discount').innerHTML = discountText;