import {API, render} from "./utils.js"

const add = () => {
    const container = document.querySelector('#container')
    render(container, 
        `<form id="add-to-list">
            <label for="title">Title:</label>
            <input type="text" name="title" id="title">

            <label for="expires">Expires:</label>
            <input type="date" name="expires" id="expires">

            <button id="add-to-list">Add to list</button>
        </form>`
        );

    const form = document.querySelector('#add-to-list');
    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        const element = {
            title: event.target.title.value,
            expires: event.target.expires.value.toString()
        };

        fetch(API, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(element),
        })
    });
};

export { add };