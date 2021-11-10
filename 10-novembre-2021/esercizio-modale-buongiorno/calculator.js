/*Riprendendo la vostra calcolatrice passata (scegliete voi la più adatta, non importa se la prima o una delle successive): 
implementate try e catch che sollevino un'eccezzione (throw) se:

- il numero passato come parametro è uno solo => errore: Hai passato un solo valore
- non è stato passato alcun parametro => errore: Nessun parametro passato alla funzione*/

const sum = (numOne, numTwo) => numOne + numTwo; 

const subt = (numOne, numTwo) => numOne - numTwo; 

const mult = (numOne, numTwo) => numOne * numTwo;

const div = (numOne, numTwo) => numOne / numTwo;

const squaredRoot = (numOne,numTwo) => Math.sqrt(numOne) + Math.sqrt(numTwo);
//const pow = (numOne, numTwo) => numOne**numTwo;
const powe = (numOne,numTwo) => Math.pow(numOne,numTwo);

try {
// funzione per il calcolo

  function calculator(operation, numbers) {
  let totOperation = 0;  
  totOperation = operation(...numbers); 
  return totOperation;               
}


let operationChoice = prompt(`Inserisci operazione: "`); 
let numbersChoice = prompt("Inserisci numeri: "); 


if (operationChoice === "") {
    throw `operazione vuota`;
} else if (numbersChoice === "") {
    throw `nessun numero`;
} else if (operationChoice === "" && numbersChoice === "") {
    throw `Non hai inserito nessun parametro`;
}


const numbers = numbersChoice.split(","); 
const parsedNumbers = [];           


for (x of numbers) {
        parsedNumbers.push(parseFloat(x));
    }


switch (operationChoice) {
    case "+":
        console.log(calculator(sum, parsedNumbers));
    break;

    case "-":
        console.log(calculator(subt, parsedNumbers));
    break;

    case "*":
        console.log(calculator(mult, parsedNumbers));
    break;

    case "/":
        console.log(calculator(div, parsedNumbers));
    break;

    case "root":
        console.log(calculator(squaredRoot, parsedNumbers));
    break;

    case "powe":
        console.log(calculator(powe, parsedNumbers));
    break;

    default:
        console.log("Operatore non trovato");
}
} catch (err) {

    switch (err) {
     case `operazione vuota`:
     console.error("Non hai inserito l'operazione");
     break

     case `nessun numero`:
         console.error("Non hai inserito nessun numero");

     case `Non hai inserito nessun parametro`:
         console.error("non hai inserito nessun paramentro");
    }
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


// TRY / CATCH / FINALLY syntax
// const userNum = prompt("Inserisci un numero minore di 10");
// try {
//   if (userNum >= 10) throw "il numero inserito è maggiore di 10";
//   if (userNum <= 0) throw "il numero inserito è minore 1";
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Hai fatto la tua scelta.");
// }