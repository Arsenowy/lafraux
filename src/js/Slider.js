let slideIndex = 0;
const slide0 = document.querySelector('.header__slider--img-0');
const slide1 = document.querySelector('.header__slider--img-1');
const slide2 = document.querySelector('.header__slider--img-2');

//aray with images
const slides = [slide0, slide1, slide2];

//slider
//photos are invisible -> display img-0 -> wait -> display img-1,
export const showSlider = () => {

    slides[slideIndex].style.display = 'block';
    console.log(slideIndex);

    if (slideIndex == 0) {
        setTimeout(() => {
            slides[2].style.display = 'none';
        }, 2200)
    }
    if (slideIndex == 1) {
        setTimeout(() => {
            slides[0].style.display = 'none';
        }, 2200)
    }
    if (slideIndex == 2) {
        setTimeout(() => {
            slides[1].style.display = 'none';
        }, 2200)
    }

    slideIndex ++;

    if (slideIndex == 3) {
        slideIndex = 0;
    }

    setTimeout(showSlider, 4000); // Change image every 4 seconds
}

    /* eslint-disable */
