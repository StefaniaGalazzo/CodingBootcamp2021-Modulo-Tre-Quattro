
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
























