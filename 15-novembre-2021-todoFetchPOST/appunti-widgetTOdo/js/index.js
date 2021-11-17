import { API } from "./utils.js"
import { list } from "./list.js"
import { add } from "./add.js"

document.addEventListener('DOMContentLoaded', () =>{
    fetch(API)
    .then((response) => response.json())
    .then((data) => list(data));
    
    const addNew = document.querySelector('#addNew');
    addNew.addEventListener('click', add)
})



