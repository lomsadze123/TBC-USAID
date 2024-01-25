// Importing functions for rendering accordion, cards, and slider components
import renderAccordionQuestions from "../components/accordion/accordion.js";
import renderCoursesCards from "../components/cards/cards.js";
import renderSliderSubset from "../components/slider/slider.js";
import scrollHandle from "../js/scrollHandle.js";
import burgerMenuHandler from "../components/burgerMenu/burgerMenu.js";

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initial renders when the DOM is fully loaded

  renderCoursesCards();

  renderSliderSubset();

  renderAccordionQuestions();

  scrollHandle();

  burgerMenuHandler();
});
