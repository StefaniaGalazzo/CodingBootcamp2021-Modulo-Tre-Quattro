const modal = document.querySelector(".modal");
const body = document.querySelector("body");


// show modal after 10sec

setTimeout (() => {
    // modal.style.zIndex = 1;
    modal.style.opacity = 1;
    }, 3000);


// hide modal with deny or accept btn

function hideModal() {
    modal.style.opacity = 0;
  
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 350);
  }

const acceptBtn = document.querySelector("#acceptBtn");
const denyBtn = document.querySelector("#denyBtn");
acceptBtn.addEventListener("click", hideModal, {once:true});
denyBtn.addEventListener("click", hideModal, {once:true});
