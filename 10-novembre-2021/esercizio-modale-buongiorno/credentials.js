/*Sulla base della lezione di oggi, completare la modale 
(date un aspetto più carino anche), rispettando i seguenti punti: 
l'elemento <h1>Buongiorno [NOME]</h1> dovrà essere gestito totalemente
in Javascript quindi userPage.firstElementChild.textContent = 'Buongiorno ${username}'; 
non dovrà contenere la parola 'Buongiorno' (quindi il Buongiorno lo prende solo da HTML non va aggiunto in JS!)*/ 

function sendCredentials(username) {
    nameUser.textContent = `${username}`;
    // console.log(userPage.firstElementChild.textContent);
    // userPage.firstElementChild.textContent.replace("NOME", username);
  }
  
  function saveCredentials(user, pass) {
    window.localStorage.setItem("username", user);
    window.localStorage.setItem("password", pass);
  }
  
  function loadCredentials(key) {
    return window.localStorage.getItem(key);
  }
  
  const userPage = document.querySelector(".userPage");
  const modalEl = document.querySelector(".modal");
  const userInputEl = document.querySelector("#user");
  const passInputEl = document.querySelector("#pass");
  const btnSendEl = document.querySelector("#btnSend");
  const nameUser = document.querySelector(".nameUser");
  
  const user = {
    username: "",
    password: "",
  };

  btnSendEl.addEventListener("click", (evt) => {
  user.username = userInputEl.value;
  user.password = passInputEl.value;

  userPage.style.display = "block";
  document.body.removeChild(modalEl);

  // userPage.firstElementChild.textContent = "Test";
  // userPage.firstElementChild.textContent.replace("NOME", user.username);
  sendCredentials(user.username);
});

setTimeout(() => {
  modalEl.style.transform = "translateY(0px)";
}, 2000);


