import { API, render } from './utils.js';
import { list } from './list.js';
import { Add } from './add.js'



document.addEventListener('DOMContentLoaded', () => {
    fetch(API)
        .then(response => response.json())
        .then((data) => list(data));

        const btn = document.querySelector('#add');
        btn.addEventListener('click', Add);

});

