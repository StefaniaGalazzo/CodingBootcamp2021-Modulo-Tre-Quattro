const q = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', () => {
    const form = q('form');
    const input = q('form input');
    const list = q('ul');

    const elements = data.map((element, index) => { // .map lavora sul contenuto dell'array senza sostituirlo
        // return element.name + ", " + element.phone + ", " + element.email + ", "; // concateno valori e stringhe
    return `<li>
                <h3> ${element.name} </h3> 
                <p> Phone: <a href="tel:${element.phone}">${element.phone}</a></p> 
                <p> Email: <a href="mailto:${element.email}">${element.email}</a></p>
            </li>`;
        });

        const content = elements.join('');
        list.innerHTML = content;
});