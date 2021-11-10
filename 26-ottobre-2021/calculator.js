/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.
    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.

    /* Esercizio avanzato:
    Oltre alle classiche funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/



/* Creare una calcolatrice che permetta all'utente di selezionare
   una operazione e dati piu di un numero (altrimenti restituisce lo stesso)
   ritorni la corrispettiva operazione.
   // Concetto di callback => guardate al parametro 'operation'
   // Contectto di spread operator => guardate ai tre puntini
   PSEUDOCODICE di esempio
   1. L'utente sceglie l'operazione e i numeri
   2. Se il numero scelto:
      - è uno solo, ritorna lo stesso numero
      - è inesistente, ritorna un errore
      - se più di uno, ne ritorna l'operazione
   3. Stampa a video il risultato dell'operazione
*/


const sum = (numOne, numTwo) => numOne + numTwo; 

const subt = (numOne, numTwo) => numOne - numTwo; 

const mult = (numOne, numTwo) => numOne * numTwo;

const div = (numOne, numTwo) => numOne / numTwo;

const squaredRoot = (numOne,numTwo) => Math.sqrt(numOne) + Math.sqrt(numTwo);
//const pow = (numOne, numTwo) => numOne**numTwo;
const powe = (numOne,numTwo) => Math.pow(numOne,numTwo);


    // funzione per il calcolo

  function calculator(operation, numbers) {
  let totOperation = 0;  
  totOperation = operation(...numbers); 
  return totOperation;               
}


let operationChoice = prompt(`Inserisci operazione: 
                                                somma => "+"
                                                sottrazione => "-"
                                                moltiplicazione => "*" 
                                                divisione => "/"
                                                potenza => "powe" 
                                                radice quadrata => "root"`); 



let numbersChoice = prompt("Inserisci numeri: ") 

const numbers = numbersChoice.split(","); 

const parsedNumbers = [];           


for (x of numbers) {
    if (isNaN(parseFloat(x))) {
        console.log("Devi inserire solo numeri");
    } else if (typeof numbers[1] === 'undefined') {
        console.log(numbers[0])
    }
    else {
        parsedNumbers.push(parseFloat(x));
    }

}


switch (operationChoice) {
    case "+":
        calculator(sum, parsedNumbers);
    break;

    case "-":
        calculator(subt, parsedNumbers);
    break;

    case "*":
        calculator(mult, parsedNumbers);
    break;

    case "/":
        calculator(div, parsedNumbers);
    break;

    case "root":
        calculator(squaredRoot, parsedNumbers);
    break;

    case "powe":
        calculator(powe, parsedNumbers);
    break;

    default:
        ("Operatore non trovato");

}


/*
   
if (operationChoice === "+") { //se la scelta dell'utente corrisponde alla stringa "somma" 
  console.log(calculator(sum, parsedNumbers));
} else if (operationChoice === "-") {
    console.log(calculator(subt, parsedNumbers));
  } else if (operationChoice === "*") {
    console.log(calculator(mult, parsedNumbers));
    } else if (operationChoice === "/") {
    console.log(calculator(div, parsedNumbers));
    } else if (operationChoice === "**") {
        console.log(calculator(pow, parsedNumbers));
    }
*/


