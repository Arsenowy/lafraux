const man0 = document.querySelector('.mans__photo--0');
const man1 = document.querySelector('.mans__photo--1');
const man2 = document.querySelector('.mans__photo--2');
const man3 = document.querySelector('.mans__photo--3');
let vh = window.innerHeight;
const section1 = document.querySelector('.collection-1');

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
        man0.style.transform = `translate(${-Math.pow(vh-offset, 2)/175}px, ${offset - vh}px)`
        }
    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > vh){
        man1.style.transform = `translate(${-Math.pow(offset - vh, 2)/300}px, ${offset - vh}px)`;
        }



    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > vh && offset < (vh+250)){
            man2.style.transform = `translate(0, ${offset - vh}px)`;
            }
        if (offset >= (vh+250)){
            man2.style.fontSize = `${8 + Math.sqrt(offset - 1238)/85}rem`;
            man2.style.transform = `translate(${-Math.pow(offset - (vh+250), 2)/150}px, ${offset - vh}px)`;

            }
    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > vh && offset < (vh+250)){
            man3.style.transform = `translate(0, ${offset - vh}px)`;
            }
        if (offset >= (vh+250)){
            man3.style.transform = `translate(${-Math.pow(offset - (vh+250), 2)/170}px, ${offset - vh}px)`;
        }
    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (vh < 1000) {
            if (offset < 1530){
                section1.style.transform = `translate(0, ${offset - vh}px)`;
            if (offset >= 1530 && offset < 1800){
                section1.style.transform = `translate(0, ${2*vh-0.9*offset}px)`;
                }
            }
        }
        /////// TESTING responsivnessgit
        // if (vh >= 1000) {
        //     if (offset < 1530){
        //         section1.style.transform = `translate(0, ${offset - vh}px)`;
        //     if (offset >= 1530 && offset < 2400){
        //         section1.style.transform = `translate(0, ${2*vh-0.9*offset}px)`;
        //         }
        //     }
        // }

    });

}
