
const wrapper = document.querySelector(".header");
const wrapperTwo = document.querySelector(".ulGen");

const h1Element = document.querySelector("h1");
const h1RenameBtn = document.querySelector(".button-name");
const h1RemoveBtn = document.querySelector(".button-remove");
const addChild = document.querySelector(".childBtn");
const addBtn = document.querySelector(".addBtn");
  

// MODIFICHE TITOLO LISTA

  h1RemoveBtn.addEventListener(
    "click",
    () => {
      wrapper.removeChild(h1Element); // rimuove l'elemento h1
    },
    { once: true }
  );
  
  h1RenameBtn.addEventListener(
    "click",
    () => {
        h1Element.textContent = prompt("La mia lista di/per:");
    },
   // { once: true }
  );
  




// AGGIUNGI CHILD ALLA LISTA



addChild.addEventListener(
    "click", () => {
        const newLi = document.createElement("li");
        newLi.className = "Child 1"
        newLi.textContent = "Sei bellissimə!"
        wrapperTwo.appendChild(newLi); 
    },
);


// AGGIUNGI INPUT ALLA LISTA
const addEl = document.querySelector(".addBtn");
const list = document.querySelector("ul");
const input = document.querySelector(".addYourLi");

const addList = () => {
    const liAdd = document.createElement("li");
    list.appendChild(liAdd);
    liAdd.textContent = input.value;
};

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addList()
    }
});

addEl.addEventListener("click", addList);