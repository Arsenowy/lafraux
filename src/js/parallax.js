  /* eslint-disable */
// const man0 = document.getElementById('man-photo-0');
const header = document.querySelector('.header');
const man0 = document.querySelector('.mans__photo--0');
const man1 = document.querySelector('.mans__photo--1');
const man2 = document.querySelector('.mans__photo--2');
const man3 = document.querySelector('.mans__photo--3');

export const parallaxFunction = () => {
    // window.addEventListener('scroll', () => {
    //     let offset = window.pageYOffset;
    //     console.log(offset);
    //     man0.style.transform = `translateY(${Math.sqrt(offset)}px)`;
    // });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        console.log(offset);
        if (offset < 0)
        header.style.transform = `translate(-50%, ${1*offset}px)`;
    });

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        if (offset > 1050){
        man0.style.left = (`${-Math.pow(offset - 1050, 2)/200}px`);
        man0.style.transform = `translateY(${offset - 1050}px)`
        }
    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        let left = man1.style.left;

        if (offset > 1050 && offset < 1540){
        man1.style.left = (`${-Math.pow(offset - 1050, 2)/500 + 650}px`);
        man1.style.transform = `translateY(${offset - 1050}px)`;
        }
        if (offset >= 1540){
            man1.style.transform = `translate(${-Math.pow(offset - 1540, 2)*0.007}px, ${offset - 1050}px)`
                }


    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > 1050 && offset < 1540){
            man2.style.left = (`${-Math.pow(offset - 1050, 2)/800 + 1350}px`);
            man2.style.transform = `translateY(${offset - 1050}px)`;
            }
        if (offset >= 1540){
                man2.style.transform = `translate(${-Math.pow(offset - 1540, 2)*0.007}px, ${offset - 1050}px)`
                    }
    });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        if (offset > 1050 && offset < 1540){
            man3.style.left = (`${-Math.pow(offset - 1050, 2)/800 + 1350}px`);
            man3.style.transform = `translateY(${offset - 1050}px)`;
            }
        if (offset >= 1540){
            man3.style.transform = `translate(${-Math.pow(offset - 1540, 2)*0.008}px, ${offset - 1050}px)`
        }


    });


    // window.addEventListener('scroll', () => {
    //     let offset = window.pageYOffset;
    //     if (offset > 1050)
    //     man1.style.transform = `translateX(${1*offset}px)`;
    // });

    // window.addEventListener('scroll', () => {
    //     let offset = window.pageYOffset;
    //     if (offset > 1050)
    //     man2.style.transform = `translateX(${1.3*offset}px)`;
    // });

}
