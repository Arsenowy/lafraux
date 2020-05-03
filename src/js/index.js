// npm polifils
import "core-js/stable";
import "regenerator-runtime/runtime";

// local
import "../sass/style.scss";

// import * as slider from './Slider';

// setTimeout(() => {
//     slider.showSlider();
// }, 1900)

//import parallax scrolling
import * as parallax from './parallax';



parallax.parallaxFunction();

////////////////////////////////////////////////////////////////

window.addEventListener('reload', () => {
    window.pageYOffset = 0;
    window.pageXOffset = 0;
});
