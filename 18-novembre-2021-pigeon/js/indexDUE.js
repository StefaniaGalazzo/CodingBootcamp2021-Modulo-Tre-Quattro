
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const btns = [...document.querySelectorAll('button')];
    
    
    btns.forEach((button) => {
        
        button.addEventListener("click", (event) => {

            // const interval = setInterval(()=>{
            //         hero.classList.toggle("walk");
            // }, 300);
            
            const direction = event.target.classList[0];

            // setTimeout(()=>{
            //  clearInterval(interval);
            //  },2000);

            switch (direction) {
                case "up":
                    hero.classList.remove("flyDown");

                    hero.classList.add("faceTOP");       
                    const flytop = setInterval(() => {
                    hero.classList.toggle("flytop");
                    }, 250);
                
                    setTimeout(()=>{
                    clearInterval(flytop);
                    }, 1500);
                    hero.style.top = "50px";
                    break ;
    
                case "left":
                    hero.classList.remove("faceDX");
                    hero.classList.remove("flyDown");


                    hero.classList.add("faceSX");       
                    const walkLeft = setInterval(() => {
                    hero.classList.toggle("walkLeft");
                    }, 250);
                
                    setTimeout(()=>{
                    clearInterval(walkLeft);
                    }, 1500);

                    hero.style.left = "50px";
                    break;
    

                case "down":
                    hero.classList.remove("faceTOP")

                    hero.classList.add("flyDown");       

                    setTimeout(()=>{
                    clearInterval(flyDown);
                    }, 100);
                    hero.style.top = "350px";
                    break;


                case "right":
                    hero.classList.remove("faceSX");
                    hero.classList.remove("flyDown");

                    hero.classList.add("faceDX");
                    const walkDX = setInterval(()=>{
                    hero.classList.toggle("walkDX");
                    }, 250);
                
                    setTimeout(()=>{
                    clearInterval(walkDX);
                    },1500);

                    hero.style.left = "550px";
                    break;
            }
    
        });
    
    
    
    });
    
    });


























// const up = document.querySelector('#up');
// const dx = document.querySelector('#dx');
// const dwn = document.querySelector('#dwn');
// const sx = document.querySelector('#sx');

// const base = document.querySelector(".base");
// const floor = document.querySelector(".floor");
// const prot = document.querySelector(".prot");

// let backgroundBoard = 0;
// let backgroundFloor = 0;

// dx.addEventListener('click', () => {
//     prot.classList.remove('sx');
//     base.style.backgroundPositionX = `${backgroundBoard -= 3}px`;
//     floor.style.backgroundPositionX = `${backgroundFloor -= 20}px`;

//     prot.classList.toggle('move');
//     setTimeout(() => { prot.classList.toggle('move') }, 250)
// })

// sx.addEventListener('click', () => {
//     prot.classList.add('sx');
//     base.style.backgroundPositionX = `${backgroundBoard += 3}px`;
//     floor.style.backgroundPositionX = `${backgroundFloor += 20}px`;

//     prot.classList.toggle('move');
//     setTimeout(() => { prot.classList.toggle('move') }, 250)
// })


// up.addEventListener('click', () => {
//     prot.classList.toggle('animate__bounce');
//     setTimeout(() => { prot.classList.toggle('animate__bounce') }, 2000)
// })

// document.onkeydown = arrowPress;

// function arrowPress(event) {
//     switch (event.keyCode) {
//         case 39:
//             dxMove();
//             break;
//         case 37:
//             sxMove();
//             break;
//         case 38:
//             upMove()
//             break;
//     }}


//     const dxMove = () => {
//         prot.classList.remove('sx');
//         base.style.backgroundPositionX = `${backgroundBoard -= 3}px`;
//         floor.style.backgroundPositionX = `${backgroundFloor -= 20}px`;

//         prot.classList.toggle('move');
//         setTimeout(() => { prot.classList.toggle('move') }, 250)
//     }

//     const sxMove = () => {
//         prot.classList.add('sx');
//         base.style.backgroundPositionX = `${backgroundBoard += 3}px`;
//         floor.style.backgroundPositionX = `${backgroundFloor += 20}px`;

//         prot.classList.toggle('move');
//         setTimeout(() => { prot.classList.toggle('move') }, 250)
//     }

//     const upMove = () =>{
//         prot.classList.toggle('animate__bounce');
//         setTimeout(() => { prot.classList.toggle('animate__bounce') }, 1000)
//     }