import renderCoursesCards from "./cards.js";
import renderSliderSubset from "./slider.js";

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navigation = document.getElementById("navigation");

  burgerMenu.addEventListener("click", () => {
    navigation.classList.toggle("hide");
  });

  // Initial renders

  renderCoursesCards();

  renderSliderSubset();
});
