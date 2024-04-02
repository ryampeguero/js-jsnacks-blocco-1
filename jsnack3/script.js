"use strict"
//Inizializzazione variabili
const numero = [];
let somma = 0;
    
//Esecuzione logica
for (let i = 0; i < 10; i++) {
    
    numero[i] = parseInt(prompt(`[${i}] Inserisci un numero `));
    if(numero[i] == null || isNaN(numero[i])){
        i--;
        console.warn("Inserisci un numero valido!")
    }else{
        
        somma += numero[i];
        console.log(numero[i]);
        
    }
}


//Output
console.log(numero);
console.log("Somma: ", somma);