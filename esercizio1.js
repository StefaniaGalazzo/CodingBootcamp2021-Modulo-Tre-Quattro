/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

/*
// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: 3.14 
//           3.14


const PI = 3.14;  // definisco la mia variabile


console.log(PI);  // determino il contenuto che andrà in console


if (PI >= 3) {
  console.log(PI); // determino con una booleana che: 
                  // SE è VERO che il contenuto della variabile PI è maggiore o uguale a 3 (inteso come numero intero) 
                  // mostrami in console il valore della variabile indicata (3.14)
}

// Il risultato in console sarà: 3.14
//                               3.14

*/




/*
// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA:  Il mio colore preferito è: violet
//            Ci sono 12 mesi in un anno



var favColour = "violet";   // stabilisco la mia variabile globale
let monthsInAYear = 12;     // stabilisco la mia variabile locale 


if (true) {         // indico con una booleana che: SE è vero che il contenuto della variabile è uguale a se stesso
  var favColour = "violet";     // allora mostrami in console la stringa ""Il mio colore preferito è:" più il valore della variabile favColour"
  console.log("Il mio colore preferito è:", favColour);
}


console.log("Ci sono", monthsInAYear, "mesi in un anno.");  
// indico che voglio mostrare in console la stringa "Ci sono" + il contenuto della variabile prestabilita + la stringa "mesi in un anno"

*/








// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana.
//           Errore perchè manca la dichiarazione della variabile theSecond


function makePizza(moreIngredients) {  // descrivo la mia funzione sulla variabile makePizza
  let theSecond = "Sugo di pomodoro freschissimo"; // stabilisco la mia variabile locale
  // { ... }
  console.log(theSecond + ", " + moreIngredients); // mando in console il valore della variabile theSecond + , + valore variabile moreIngredients
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}


if (true) { // stabilisco che: SE il valore della variabile (stabilita nella funzione) è vero (uguale a se stesso), allora mostrami il contenuto della
  makePizza("rucola, prosciutto crudo e scaglie di grana."); // doveva essere: let theSecond = "rucola, prosciutto crudo e scaglie di grana."
  console.log("Il secondo ingrediente necessario: ", theSecond); // quindi mostrami questa stringa + il valore della variabile theSecond
}

