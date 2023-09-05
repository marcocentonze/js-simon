/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno? 24
Da quanti minuti è composta un'ora? 60
Da quanti secondi è composto un minuto? 60
Da quanti millisecondi è composto un secondo? 1000
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? */

//variabili con i vari .newDate ecc
const now = new Date();
const tomorrow = new Date(now);
//+1 per arrivare a domani
tomorrow.setDate(now.getDate() + 1); 
// Imposta l'orario alle 9:30 di domani mattina
tomorrow.setHours(9, 30, 0, 0); 
//ottengo il tempo preciso che voglio
const wantedTime = tomorrow.getTime(); 
console.log(wantedTime);

//funzione countdown

//if per dire quando finisce

//operazion di calcolo

//stampa
