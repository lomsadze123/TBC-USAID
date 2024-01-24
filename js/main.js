import renderAccordionQuestions from "../components/accordion/accordion.js";
import renderCoursesCards from "../components/cards/cards.js";
import renderSliderSubset from "../components/slider/slider.js";

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navigation = document.getElementById("navigation");

  burgerMenu.addEventListener("click", () => {
    navigation.classList.toggle("hide");
  });

  // Initial renders

  renderCoursesCards();

  renderSliderSubset();

  renderAccordionQuestions();
});
