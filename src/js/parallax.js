  /* eslint-disable */
const man0 = document.getElementById('man-photo-0');
const header = document.querySelector('.header');

export const parallaxFunction = () => {
    // window.addEventListener('scroll', () => {
    //     let offset = window.pageYOffset;
    //     console.log(offset);
    //     man0.style.transform = `translateY(${Math.sqrt(offset)}px)`;
    // });
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        console.log(offset);
        if (offset < 500)
        header.style.transform = `translate(-50%, ${1*offset}px)`;
    });

}
