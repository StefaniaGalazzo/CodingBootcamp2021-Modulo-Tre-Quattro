
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
    
    document.addEventListener('keyup', event => {
        const cacca = document.querySelector('.cacca');
        if (event.code === 'Space') {
            // cacca.style.display = "block";
            setTimeout(() => {
                cacca.style.zIndex = "1";
            }, 10)

            setTimeout(() => {
                cacca.style.top = "800px";
            }, 180)

            setTimeout(()=>{
                clearInterval();
                },1500);
        }
      })
});
























