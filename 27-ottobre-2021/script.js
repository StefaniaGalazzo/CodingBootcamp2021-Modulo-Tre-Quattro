//darkmode
const darkButton = document.querySelector(".darkSwitch");

darkButton.addEventListener(
    "click", () => {
      document.body.classList.toggle("darkMode");
    }
  );



// light hobby section
const lightDiv = document.querySelector("#hobby");
const lightButton = document.querySelector(".lightSwitch");

lightButton.addEventListener(
      "click", () => {
        lightDiv.classList.toggle("lightMode");
        },
    );



// seleziona tutti i paragrafi INSERIRE AL CLICK
document.addEventListener("mousemove", countParagraph);
function countParagraph() {
    let paragraph = document.getElementsByTagName('p');
    console.log(paragraph)}
    


// Animated bar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


