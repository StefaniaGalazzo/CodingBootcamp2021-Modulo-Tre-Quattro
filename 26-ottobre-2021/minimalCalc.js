
function minimalCalc(numbers) {
    
    const sum = () => numbers.reduce((acc, num) => acc + num);
    const sub = () => numbers.reduce((acc, num) => acc - num);
    const mult = () => numbers.reduce((acc, num) => acc * num);
    const div = () => numbers.reduce((acc, num) => acc / num);
    const pow = () => numbers.reduce((acc, num) => acc ** num);
    const sqrt = () => numbers.map(num => Math.sqrt(num));

    return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(),
    pow: pow(),
    sqrt: sqrt(),
    }
}

console.log(minimalCalc([5,5]));


const numbers = numbersChoice.split(","); 
const parsedNumbers = [];          

let operationChoice = prompt("Inserisci operazione: ");
let numbersChoice = prompt("Inserisci numeri: "); 