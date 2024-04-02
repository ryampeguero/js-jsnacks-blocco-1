"use strict"
let somma;
for (let i = 0; i < 4; i++) {
    const quattroCifre = prompt("Inserisci un numero di 4 cifre");
    console.log(quattroCifre.length);
    console.log(isNaN(parseInt(quattroCifre)));
    if(quattroCifre.length != 4 || quattroCifre == null || quattroCifre == "" || isNaN(parseInt(quattroCifre))){
        i--;

    }else{
        somma += quattroCifre[i];
    }

    
}

console.log(somma);