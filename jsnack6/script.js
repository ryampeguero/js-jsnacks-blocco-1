"use strict"
//inizializzazione varibili
let numero;
let cubo;

//Esecuzione logica    
while(true){
    numero = parseInt(prompt("Inserisci un numero da fare al cubo"));
    
    console.log(numero);
    if(!isNaN(numero)){
         cubo = numero**2; 
        break;
    }  
}

//Output
console.log(cubo);  
    

