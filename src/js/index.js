// npm polifils
import "core-js/stable";
import "regenerator-runtime/runtime";

// local
import "../sass/style.scss";
import '../home-office.html';
import '../elegance.html';

// import * as slider from './Slider';

// setTimeout(() => {
//     slider.showSlider();
// }, 1900)

//import parallax scrolling
import * as parallax from './parallax';
import * as rightClick from './rightClick';



parallax.parallaxFunction();

////////////////////////////////////////////////////////////////

window.addEventListener('reload', () => {
    window.pageYOffset = 0;
    window.pageXOffset = 0;
});

////////////////////////////////////////////////
// right click function
window.addEventListener('click', () => {
    if (rightClick.fn.visibility == true) {
        rightClick.fn.toggleMenu("hide");
    }
})

window.addEventListener("contextmenu", e => {
        e.preventDefault();
        const origin = {
            left: e.pageX,
            top: e.pageY
        };

    rightClick.fn.position(origin.left, origin.top);
    return false;
})

