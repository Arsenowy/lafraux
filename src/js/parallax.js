const man0 = document.querySelector('.mans__photo--0');
const man1 = document.querySelector('.mans__photo--1');
const man2 = document.querySelector('.mans__photo--2');
const man3 = document.querySelector('.mans__photo--3');
let vh = window.innerHeight;

//get viewport high when size is changing
window.addEventListener('resize', () => {
    vh = window.innerHeight;
    console.log(vh)
});

//parallax scroll

//when scroll > vh => move elements
//2x if => different speed of tranlation
//math.pow to achive fast increasing speed
export const parallaxFunction = () => {
    window.addEventListener('scroll', () => {
        //development
        let offset = window.pageYOffset;
        console.log(offset);
        console.log(vh);
    });

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        if (offset > vh){
        man0.style.left = (`${-Math.pow(offset - vh, 2)/200}px`);
        man0.style.transform = `translateY(${offset - vh}px)`
        }
    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > vh && offset < 1540){
        man1.style.left = (`${-Math.pow(offset - vh, 2)/500 + 650}px`);
        man1.style.transform = `translateY(${offset - vh}px)`;
        }
        if (offset >= 1540){
            man1.style.transform = `translate(${-Math.pow(offset - 1540, 2)*0.007}px, ${offset - vh}px)`
                }


    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > vh && offset < 1540){
            man2.style.left = (`${-Math.pow(offset - vh, 2)/800 + 1350}px`);
            man2.style.transform = `translateY(${offset - vh}px)`;
            }
        if (offset >= 1540){
                man2.style.transform = `translate(${-Math.pow(offset - 1540, 2)*0.007}px, ${offset - vh}px)`
                    }
    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > vh && offset < 1540){
            man3.style.left = (`${-Math.pow(offset - vh, 2)/800 + 1350}px`);
            man3.style.transform = `translateY(${offset - vh}px)`;
            }
        if (offset >= 1540){
            man3.style.transform = `translate(${-Math.pow(offset - 1540, 2)*0.008}px, ${offset - vh}px)`
        }


    });

}
