const modal = document.querySelector(".modal");
const body = document.querySelector("body");


// show modal after 10sec

setTimeout (() => {
    // modal.style.zIndex = 1;
    modal.style.opacity = 1;
    }, 3000);


// hide modal with accept btn

function hideModal() {
    modal.style.opacity = 0;
  
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 350);
  }

const acceptBtn = document.querySelector("#acceptBtn");
acceptBtn.addEventListener("click", hideModal, {once:true});

const denyBtn = document.querySelector("#denyBtn");
 
denyBtn.addEventListener("click", hideModal, {once:true});


// funzione nascondi tutto 
function hideAll() {
  allTheContent.style.opacity = 0;
  modal.style.display = "none";
}
function showPanicModal() {
  setTimeout(() => {
      panicModal.style.display = "block";
   }, 5000);
}
function hidePanicModal() {
  panicModal.style.display = "none";
}

const printMonkeys = ((container, items) => {
  const elements = items.map((element) => `<h3>${element.name} ${element.surname} aka ${element.aka}</h3>`);
  const content = elements.join('');
  container.innerHTML = content;
});

function panicOnPage() {
  hideAll();
  showPanicModal();
  setTimeout(() => {
      hidePanicModal()
  }, 10000);
  setTimeout(() => {
      printMonkeys(showMonkeys,monkeysEquipe);
  }, 15000);
}


const panicBtn = document.querySelector('#btn-deny');
const allTheContent = document.querySelector('main');
const panicModal = document.querySelector("#modal-panic");
const showMonkeys = document.querySelector('#monkey')


panicBtn.addEventListener('click', panicOnPage);