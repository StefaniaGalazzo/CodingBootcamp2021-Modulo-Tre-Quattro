import { getData, saveData } from "./data.js";

const update = (event) => {
    const id = parseInt(event.target.id);
    const newData = getData().map((item) =>{
        // voglio mod solo un elemento
        //se l'elemento è uguale a quello cliccato allora*
        if(item.id === id) {
            console.log ({...item, completed: !item.completed})
            // *genera la mia chiave "completed" con il suo valoro opposto rispetto a quello presente
            // così va a sovrascrivere il valore "checked" dell'elemento selezionato
            return {...item, completed: !item.completed};
            // si crea così una nuova coppia dell'oggetto con un parametro differente 
        } else {
            return item;
        }
    });

    // Salviamo i dati nello stato locale (localStorage per ora) e invochiamo
    // nuovamente il render con i dati aggiornati
    saveData(newData)
    render(newData);
};

export const render = (data) => {
    const todos = document.querySelector('#todos');

    const items = data.map(
      (item) => 
        `<li><label><input 
        type="checkbox" ${item.completed ? 'checked' : " "} id="${item.id}"> 
        ${item.title}</label></li>`
);

    todos.innerHTML = items.join("");


    //[...NodeList] converte una NodeList in Array
    const list = [...todos.querySelectorAll("input")]; // smonto la mia nodelist di "li" e la trasformo in un array di 20 lenght
    //ora posso fare il foreach
    list.forEach((item) => { 
        item.addEventListener('click', update);
        });

};