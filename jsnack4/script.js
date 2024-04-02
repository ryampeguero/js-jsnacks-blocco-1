//Inizializzazione variabili
const invitati = ["Gatsby", "Carraway", "Buchanan", "Baker", "Wilson"];
let cognome = prompt("Inserisca il suo cognome");
let messaggio = "";

//Esecuzione logica
for (let i = 0; i < invitati.length; i++) {
    const cognomeInvitati = invitati[i];
    if(cognome === cognomeInvitati){
        messaggio = "Puoi partecipare";
        break;
    }else if(cognome == "" || cognome == null){
        cognome = prompt("Inserisci un cognome!!");
        i--;
    }else{
        messaggio = "Non sei in lista mi dispiace";
    }
    
    
}

//Output
alert(messaggio);