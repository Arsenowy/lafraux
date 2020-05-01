// npm polifils
import "core-js/stable";
import "regenerator-runtime/runtime";

// local
import "../sass/style.scss";

// import * as slider from './Slider';

// setTimeout(() => {
//     slider.showSlider();
// }, 1900)


import * as parallax from './parallax';

parallax.parallaxFunction();

// import axios from "axios";

// export default class Search {
//   async getResults() {
//     try {
//       const res = await axios(``);
//     }
//   }
// }
