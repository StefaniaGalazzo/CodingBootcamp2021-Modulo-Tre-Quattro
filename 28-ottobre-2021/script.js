//darkmode
const darkButton = document.querySelector(".darkSwitch");

darkButton.addEventListener(
    "click", () => {
      document.body.classList.toggle("darkMode");
    }
  );



// light hobby section
const lightDiv = document.querySelector("#hobby");
const lightButton = document.querySelector(".lightSwitch");

lightButton.addEventListener(
      "click", () => {
        lightDiv.classList.toggle("lightMode");
        },
    );



// seleziona tutti i paragrafi INSERIRE AL CLICK
// document.addEventListener("mousemove", countParagraph);
// function countParagraph() {
//     let paragraph = document.getElementsByTagName('p');
//     console.log(paragraph)}



// Animated bar
let i = 0;

function move() {
  if (i == 0) {
    i = 1;
    let bar = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }
  }
}







// Sulla base del vostro esercizio di ieri, andate ad aggiungere queste funzionalità:

// Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt e 
// che faccia il console.log della somma soltanto dopo 10 secondi. 

// ATTENZIONE: Questa funzione non 'renderizza' alcunchè all'interno della pagina HTML, eccetto il prompt che chiede i numeri all'utente. 
// Scegliete saggiamente tra setInterval e setTimeout!


// Inserire un cerchio all'interno della vostra pagina html, 
// che cambia colore ogni 5 secondi. Utilizzate un elemento già presente 
// all'interno del documento HTML e usate il DOM per manipolarlo. 
// Alla pressione del tasto Enter il listener viene rimosso e il cerchio smetterà di cambiare colore. 
// TIP: removeEventListener!







// const sum = (numOne, numTwo) => numOne + numTwo; 

//     // funzione per il calcolo

//   function calculator(operation, numbers) {
//   let totOperation = 0;  
//   totOperation = operation(...numbers); 
//   return totOperation;               
// }


// let operationChoice = prompt(`Inserisci operazione:"+"`); 
// let numbersChoice = prompt("Inserisci numeri: ") 

// const numbers = numbersChoice.split(","); 

// const parsedNumbers = [];           


// for (x of numbers) {
//     if (isNaN(parseFloat(x))) {
//         console.log("Devi inserire solo numeri");
//     } else if (typeof numbers[1] === 'undefined') {
//         console.log(numbers[0])
//     }
//     else {
//         parsedNumbers.push(parseFloat(x));
//     }

// }


// switch (operationChoice) {
//     case "+":
//         calculator(sum, parsedNumbers);
//     break;

//     default:
//         ("Operatore non trovato");

// }



// setTimeout(() => {
//   console.log(calculator(sum, parsedNumbers));
// }, 10000);




// pallina cambiacolore

let index = 0;

function change() {
  let div = document.querySelector(".radius");
  let color = ["red", "orange", "yellow", "green", "blue", "purple"];
  div.style.backgroundColor = color[index];
  index = (index + 1) % color.length;
}

setInterval(change, 500);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    clearInterval(index);
    index = null;
  }
})
