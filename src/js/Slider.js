let slideIndex = 0;
const slide0 = document.querySelector('.header__slider--0');
const slide1 = document.querySelector('.header__slider--1');
const slide2 = document.querySelector('.header__slider--2');

//aray with images
const slides = [slide0, slide1, slide2];

//slider
//photos are invisible -> display img-0 -> wait -> display img-1,
export const showSlider = () => {

    slides[slideIndex].style.display = 'block';
    slides[slideIndex].style.zIndex = '5';

    console.log(slideIndex);

    if (slideIndex == 0) {
        slides[2].style.zIndex = '0';
        setTimeout(() => {
            slides[2].style.display = 'none';
        }, 1000)
    }
    if (slideIndex == 1) {
        slides[0].style.zIndex = '0';
        setTimeout(() => {
            slides[0].style.display = 'none';
        }, 1000)
    }
    if (slideIndex == 2) {
        slides[1].style.zIndex = '0';
        setTimeout(() => {
            slides[1].style.display = 'none';
        }, 1000)
    }

    slideIndex ++;

    if (slideIndex == 3) {
        slideIndex = 0;
    }

    setTimeout(showSlider, 3000); // Change image every 4 seconds
}

    /* eslint-disable */
