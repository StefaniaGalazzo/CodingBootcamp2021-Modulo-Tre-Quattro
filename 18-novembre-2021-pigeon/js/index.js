
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
                    hero.style.top = "50px";
                    break ;
    
                case "left":
                    hero.classList.remove('faceDX')
                    const walkSX = setInterval(()=>{
                    hero.classList.toggle("walk");
                    }, 200);
                
                    setTimeout(()=>{
                    clearInterval(walkSX);
                    },2000);

                    hero.style.left = "50px";
                    break;
    

                case "down":
                    hero.style.top = "350px";
                    break;


                case "right":
                    hero.classList.add('faceDX')
                    const walkDX = setInterval(()=>{
                    hero.classList.toggle("walkXD");
                    }, 300);
                
                    setTimeout(()=>{
                    clearInterval(walkDX);
                    },2000);

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