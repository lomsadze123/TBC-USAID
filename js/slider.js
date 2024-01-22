import Item from "../mvc/model.js";
import ItemController from "../mvc/controller.js";
import { sliderData } from "../mvc/data.js";
import { renderSlider } from "../mvc/view.js";

// Constants
const slidersPerPage = 3;
const AUTOMATIC_MOVE_INTERVAL = 2000;

// Elements
const sliderContainer = document.getElementById("slider-container");
const sliderButtons = document.getElementById("slider-buttons");
const sliderButtonLeft = document.getElementById("left-button");
const sliderButtonRight = document.getElementById("right-button");

// State
let currentPage = 0;
let autoMove = true;
let intervalId;

const renderSliderSubset = () => {
  const startIndex = currentPage * slidersPerPage;
  const endIndex = startIndex + slidersPerPage;

  sliderContainer.innerHTML = "";

  sliderData.slice(startIndex, endIndex).forEach((data, index) => {
    const sliderModel = new Item(data.image, data.title);
    const isActive = index >= 0 && index < slidersPerPage;

    const sliderView = { renderSlider };

    const sliderController = new ItemController(
      sliderModel,
      sliderView,
      sliderContainer
    );

    try {
      sliderController.renderSlider(isActive);
    } catch (error) {
      console.error(`Error rendering slider: ${error.message}`);
    }
  });
};

const moveRight = () => {
  currentPage =
    (currentPage + 1) % Math.ceil(sliderData.length / slidersPerPage);
};

const moveLeft = () => {
  currentPage =
    (currentPage - 1 + Math.ceil(sliderData.length / slidersPerPage)) %
    Math.ceil(sliderData.length / slidersPerPage);
};

sliderButtonRight.addEventListener("click", () => {
  moveRight();
  renderSliderSubset();
});

sliderButtonLeft.addEventListener("click", () => {
  moveLeft();
  renderSliderSubset();
});

const startAutoMove = () => {
  clearInterval(intervalId); // Clear the interval at the beginning

  intervalId = setInterval(() => {
    if (autoMove) {
      moveRight();
      renderSliderSubset();
    }
  }, AUTOMATIC_MOVE_INTERVAL);
};

startAutoMove();

// Pause automatic movement when cursor is over the slider
sliderButtons.addEventListener("mouseenter", () => {
  autoMove = false;
});

// Resume automatic movement when cursor leaves the slider
sliderButtons.addEventListener("mouseleave", () => {
  startAutoMove();
  autoMove = true;
});

const observer = new IntersectionObserver(
  (entries) => {
    autoMove = entries[0].isIntersecting;
    startAutoMove();
  },
  { threshold: 0.5 } // Adjust the threshold as needed
);

observer.observe(sliderContainer);

export default renderSliderSubset;
