"use strict"
//Inizializzazione variabili
const dispari = [];
let numero;
//Esecuzione logica
for (let i = 0; i < 6; i++) {
    numero = parseInt(prompt(`[${i}] Inserisci un numero pari o dispari`));
    console.log(numero);
    if(numero % 2 != 0 && !isNaN(numero)){
        dispari.push(numero);
    }else if(isNaN(numero)){
        i--;
    }
    
}

//OUTPUT
console.log(dispari);