// renderizzare questi dati in una pagina HTML con Javascript, 
// utilizzando un input di tipo checkbox per rappresentare il campo 
// completed (vuoto se false, flaggato se true).

const q = (selector) => document.querySelector(selector);
const btnPop = document.querySelector('#btnPop');

document.addEventListener('DOMContentLoaded', () => {
    const form = q('form');
    render(form, arrList);
});


const render = (container, items) => {
    const elements = items.map((element) => {
        if (element.completed) {
            return `<div>
            <input type="radio" name="lorem" id="box" checked>
            <label for="lorem">${element.title}</label>
          </div>`
        } else  {
            return `<div>
            <input type="radio" name="lorem" id="box">
            <label for="lorem">${element.title}</label>
          </div>`
        }
    });
    
    const content = elements.join('');
    container.innerHTML = content;
    
// aggiungere un pulsante che al click rimuove l'ultimo elemento della lista con il metodo .pop() aggiornando il render in pagina.

    btnPop.addEventListener('click', () => {
        elements.pop(" ");
        const cont = elements.join(" ");
        container.innerHTML = cont;
    });
  }
  



