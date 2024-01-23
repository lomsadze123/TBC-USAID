import { ItemModel } from "../mvc/model.js";
import ItemController from "../mvc/controller.js";
import sliderData from "../data/sliderData.js";
import { renderSlider } from "../mvc/view.js";

// Constants
const slidersPerPage = 3;
const AUTOMATIC_MOVE_INTERVAL = 2000;

// Elements
const sliderContainer = document.getElementById("slider-container");
const sliderButtons = document.getElementById("slider-buttons-container");
const sliderButtonLeft = document.getElementById("left-button");
const sliderButtonRight = document.getElementById("right-button");

// State
let currentPage = 0;
let autoMove = true;
let intervalId;

// Functions
const renderSliderSubset = () => {
  const startIndex = currentPage * slidersPerPage;
  const endIndex = startIndex + slidersPerPage;

  sliderContainer.innerHTML = "";

  sliderData.slice(startIndex, endIndex).forEach((data, index) => {
    const sliderModel = new ItemModel(data.image, data.title);
    const sliderView = { renderSlider };
    const sliderController = new ItemController(
      sliderModel,
      sliderView,
      sliderContainer
    );

    const isActive = index >= 0 && index < slidersPerPage;
    try {
      sliderController.renderSlider(isActive);
    } catch (error) {
      console.error(`Error rendering slider: ${error.message}`);
    }
  });
};

const sliderNavigation = document.getElementById("slider-navigation");

// Dynamically create navigation buttons based on the number of sets
const createNavigationButtons = () => {
  for (let i = 0; i < Math.ceil(sliderData.length / slidersPerPage); i++) {
    const navButton = document.createElement("button");
    navButton.addEventListener("click", () => {
      currentPage = i;
      renderSliderSubset();
    });
    sliderNavigation.appendChild(navButton);
  }
};

createNavigationButtons();

const moveRight = () => {
  currentPage =
    (currentPage + 1) % Math.ceil(sliderData.length / slidersPerPage);
};

const moveLeft = () => {
  currentPage =
    (currentPage - 1 + Math.ceil(sliderData.length / slidersPerPage)) %
    Math.ceil(sliderData.length / slidersPerPage);
};

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

// Event listeners
sliderButtonRight.addEventListener("click", () => {
  moveRight();
  renderSliderSubset();
});

sliderButtonLeft.addEventListener("click", () => {
  moveLeft();
  renderSliderSubset();
});

// Pause automatic movement when cursor is over the slider
sliderButtons.addEventListener("mouseenter", () => {
  autoMove = false;
});

// Resume automatic movement when cursor leaves the slider
sliderButtons.addEventListener("mouseleave", () => {
  autoMove = true;
});

const observer = new IntersectionObserver(
  (entries) => {
    autoMove = entries[0].isIntersecting;
    startAutoMove();
  },
  { threshold: 0.5 }
);

observer.observe(sliderContainer);

let startX;
let threshold = 50;

const _handleTouchStart = (e) => {
  startX = e.touches[0].clientX;
};
const _handleTouchMove = (e) => {
  if (!startX) return;

  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;

  if (Math.abs(deltaX) >= threshold) {
    if (deltaX > 0) {
      console.log("2"); // Dragging to the right
      moveLeft();
    } else {
      console.log("1"); // Dragging to the left
      moveRight();
    }

    // Reset the start position to prevent continuous logging
    startX = null;
  }
};

sliderContainer.addEventListener("touchstart", _handleTouchStart);
sliderContainer.addEventListener("touchmove", _handleTouchMove);

export default renderSliderSubset;
