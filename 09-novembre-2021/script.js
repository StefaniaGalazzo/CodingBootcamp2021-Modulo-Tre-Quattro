/*
Continuare la funzione calculator vista a lezione, 
implementando le operazioni di moltiplicazione e divisione, 
inoltre provate a risolvere il problema della sottrazione. 
Risolvere l'esercizio senza utilizzare i metodi map filter e reduce.
*/

function calculator(numbers) {
    function sum() {
      let sumTotal = 0;
      for (num of numbers) sumTotal += num;
      return sumTotal;
    }
  
    function sub() {
      let subTotal = numbers[0];
      for (num of numbers) subTotal -= num;
      return subTotal;
    }
  
    function mult() {
        let multTotal = numbers[0];
        for (num of numbers) multTotal *= num;
        return multTotal;
      }

      function div() {
        let divTotal = numbers[0];
        for (num of numbers) divTotal /= num;
        return divTotal;
      }


    return {
      sum: sum(),
      sub: sub(),
      mult: mult(),
      div: div(),
    };
}
  

  console.log(calculator([6,2]))



/* 
Stessa cosa dell'esercizio 1., 
ma questa volta risolvete il tutto utilizzando esclusivamente 
i metodi map filter e `reduce, scegliete voi quello che reputate 
più adatto in base al caso.*/


function minimalCalc(numbers) {
    
    const sum = () => numbers.reduce((acc, num) => acc + num);
    const sub = () => numbers.reduce((acc, num) => acc - num);
    const mult = () => numbers.reduce((acc, num) => acc * num);
    const div = () => numbers.reduce((acc, num) => acc / num);
    const pow = () => numbers.reduce((acc, num) => acc ** num);
    

    return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(),
    pow: pow(),
    }
}

console.log(minimalCalc([5,5]));
