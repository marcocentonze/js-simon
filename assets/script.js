/* Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?    24
Da quanti minuti è composta un'ora?    60
Da quanti secondi è composto un minuto? 60
Da quanti millisecondi è composto un secondo? 1000
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? */

/* Da quante ore è composto un giorno?    24
Da quanti minuti è composta un'ora?    60
Da quanti secondi è composto un minuto? 60
Da quanti millisecondi è composto un secondo? 1000
*/

//funzione per aggiornare il countdown
function updateCountdown() {
  //variabili con i vari .newDate ecc
  let now = new Date();
  let tomorrow = new Date(now);
  //+1 per arrivare a domani
  tomorrow.setDate(now.getDate() + 1);
  // Imposta l'orario alle 9:30 di domani mattina
  tomorrow.setHours(9, 30, 0, 0);
  //ottengo il tempo preciso che voglio
  let wantedTime = tomorrow.getTime();
  console.log(wantedTime);

  const currentTime = new Date().getTime(); // Ottiene quella corrente
  const timeDifference = wantedTime - currentTime; // calcola la differenza tra adesso e domani
  

  //if per dire quando finisce o continua
  if (timeDifference <= 0) {
    // Countdown terminato
    console.log("Il countdown è terminato!");
  } else {
    //operazioni di calcolo
    // Calcola le ore, i minuti, i secondi e i millisecondi
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


    // Stampo il tempo rimanente in pagina con l'id
    document.getElementById('countdown_result').innerHTML = `Countdown: ${hours} ore ${minutes} minuti ${seconds} secondi`;
  }
}

// Aggiorna il countdown in continuazione
setInterval(updateCountdown, 1000); // la aggiorna chiamando sempre la funzione
