
import { render } from "./utils.js"

const list = (data) => {
    const contents = data
        .map(item => 
            `<form>
            <li>
            <input type="checkbox" name="${item.id}" 
            id="${item.id}"${item.completed ? "checked" : ""}>
            <label for="${item.id}">${item.title}</label>
            </li>
            </form>` 
        ).join('');
    const container = document.querySelector('#container');
    render(container, 
        `${contents}`)
};

export {list}

