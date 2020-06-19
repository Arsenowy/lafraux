const man0 = document.querySelector('.mans__photo--0');
const man1 = document.querySelector('.mans__photo--1');
const man2 = document.querySelector('.mans__photo--2');
const man3 = document.querySelector('.mans__photo--3');
const card = document.querySelector('.mans__whiteCard');
const section1 = document.querySelector('#collection-1');
const section2 = document.querySelector('#collection-2');
const logo = document.querySelector('.logo');
let vh = window.innerHeight;
let vw = window.innerWidth;


//get viewport high when size is changing


window.addEventListener('resize', () => {
    vh = window.innerHeight;
    vw = window.innerWidth;
    console.log(vh);
    console.log(vw);
});

//parallax scroll

//when scroll > vh => move elements
//2x if => different speed of tranlation
//math.pow to achive fast increasing speed



export const parallaxFunction = () => {

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > vh && vw > 920){
            //logo in the left corner
            logo.classList.add('logo__active');
            man0.style.transform = `translate(${-Math.pow(vh-offset, 2)/175}px, ${offset - vh}px)`
            man1.style.transform = `translate(${-Math.pow(offset - vh, 2)/300}px, ${offset - vh}px)`;
        }

        if (offset > vh && offset < (vh+250)){
            man2.style.transform = `translate(0, ${offset - vh}px)`;
            man3.style.transform = `translate(0, ${offset - vh}px)`;
            card.style.transform = `translate(0, ${offset - vh}px)`;
            }

        if (offset >= (vh+250)){
            man2.style.fontSize = `${8 + Math.sqrt(offset - 1238)/85}rem`;
            man2.style.transform = `translate(${-Math.pow(offset - (vh+250), 2)/150}px, ${offset - vh}px)`;
            man3.style.transform = `translate(${-Math.pow(offset - (vh+250), 2)/170}px, ${offset - vh}px)`;
            card.style.transform = `translate(${-Math.pow(offset - (vh+250), 2)/170}px, ${offset - vh}px)`;
        }

        if (offset <= vh){
            //logo in the left corner
            logo.classList.remove('logo__active');
        }

        //////////////////////////////////////////////////
        //moving collections

        if (vh < 1000) {
            if (offset < 1330){
                section1.style.transform = `translate(0, ${offset - vh}px)`;

                if (vw > 1300) {
                    section2.style.transform = `translate(0, ${offset - 1.3*vh}px)`;
                }
                else {
                    section2.style.transform = `translate(0, ${offset - vh}px)`;
                }
            }

        }
        if (vh >= 1000) {
            if (offset < 1530) {
                section1.style.transform = `translate(0, ${offset - vh}px)`;

                if (vw > 1300)
                section2.style.transform = `translate(0, ${offset - 1.3*vh}px)`

                else section2.style.transform = `translate(0, ${offset - vh}px)`;
            }
        }

        /////////////////////////////////////////////

        // Changing size of images in collections
        let cords = section1.getBoundingClientRect();
        const collectionPhoto = document.querySelectorAll('.collection__photo');

        console.log(cords.top);

        if (vw > 2000) {
            Array.from(collectionPhoto).forEach(cur => {
                cords.top < 150 ? cur.style.minWidth = "32rem" : cur.style.minWidth = "40rem"
            })
        }
        if (vw > 1600 && vw <= 2000) {
            Array.from(collectionPhoto).forEach(cur => {
                cords.top < 150 ? cur.style.minWidth = "28rem" : cur.style.minWidth = "32rem"
            })
        }
        if (vw > 1300 && vw <= 1600) {
            Array.from(collectionPhoto).forEach(cur => {
                cords.top < 150 ? cur.style.minWidth = "24rem" : cur.style.minWidth = "26rem"
            })
        }
        if (vw <= 1300) {
            Array.from(collectionPhoto).forEach(cur => {
                cords.top < 150 ? cur.style.minWidth = "22vw" : cur.style.minWidth = "26vw"
            })
        }
    })

}
export const parallaxFunctionMobile = () => {

    //reset
    section1.style.transform = `translate(0, 0)`;
    section2.style.transform = `translate(0, 0)`;
    man0.style.transform = `translate(0, 0)`;
    man1.style.transform = `translate(0, 0)`;
    man2.style.transform = `translate(0, 50vh)`;
    man3.style.transform = `translate(0, 50vh)`;

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        let cords = man3.getBoundingClientRect();
        console.log(cords.top);

        if (cords.top > 0.7*vh) {
            section1.style.transform = `translate(0, ${offset - vh}px)`;
            section2.style.transform = `translate(0, ${offset - vh}px)`;
        }

        if (offset > vh && offset < (vh + 1.22*vw)){
            man0.style.transform = `translate(0, ${offset - vh}px)`;
        }

        // 2 images -> first img = 100vh, second 1.22*vw | 1.22 const | 0.6 - 60% of vw
        if (offset > (vh + 1.22*vw) && vw<765){
            man2.style.transform = `translate(0, ${0.5*vh - (offset -  (vh + vw)) < 0 ? 0 : 0.5*vh - (offset -  (vh + vw))}px)`;
            man3.style.transform = `translate(0, ${0.5*vh - (offset -  (vh + 1.55*vw)) < 0 ? 0 : 0.5*vh - (offset -  (vh + 1.55*vw))}px)`;

            if (vw < 600) {
                if (cords.top > vh) {
                    section1.style.transform = `translate(0, ${offset - vh}px)`;
                    section2.style.transform = `translate(0, ${offset - vh}px)`;
                }
            }
            if (vw >= 600) {
                if (cords.top > 0.4*vh) {
                    section1.style.transform = `translate(0, ${offset - vh}px)`;
                    section2.style.transform = `translate(0, ${offset - vh}px)`;
                }
            }


        }

        if (offset > (vh + 1.7*vw) && vw>=765 && vw<=920){
            man2.style.transform = `translate(0, ${0.5*vh - (offset -  (vh + 1.7*vw)) < 0 ? 0 : 0.5*vh - (offset -  (vh + 1.7*vw))}px)`;
            man3.style.transform = `translate(0, ${0.5*vh - (offset -  (vh + 2*vw)) < 0 ? 0 : 0.5*vh - (offset -  (vh + 2*vw))}px)`;

            if (cords.top > 0.2*vh) {
                section1.style.transform = `translate(0, ${offset - vh}px)`;
                section2.style.transform = `translate(0, ${offset - vh}px)`;
            }
        }
    })

}
