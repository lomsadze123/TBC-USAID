import CommonModel from "../../js/models/commonModel.js";
import SliderController from "../../js/controllers/sliderController.js";
import sliderData from "../../data/sliderData.js";
import renderSlider from "../../js/views/sliderView.js";

// Constants
const slidersPerPage = 3;
const AUTOMATIC_MOVE_INTERVAL = 2000;

// Elements
const elements = {
  sliderContainer: document.getElementById("slider-container"),
  buttons: document.getElementById("slider-buttons-container"),
  buttonLeft: document.getElementById("left-button"),
  buttonRight: document.getElementById("right-button"),
  navigation: document.getElementById("slider-navigation"),
};

// State
let currentPage = 0;
let autoMove = true;
let intervalId;

const renderSliderSubset = () => {
  const startIndex = currentPage * slidersPerPage;
  const endIndex = startIndex + slidersPerPage;

  elements.sliderContainer.innerHTML = "";

  sliderData.slice(startIndex, endIndex).forEach((data, index) => {
    const sliderModel = new CommonModel(data.image, data.title);
    const sliderView = { renderSlider };
    const sliderController = new SliderController(
      sliderModel,
      sliderView,
      elements.sliderContainer
    );

    const isActive = index >= 0 && index < slidersPerPage;
    try {
      sliderController.renderSlider(isActive);
    } catch (error) {
      console.error(`Error rendering slider: ${error.message}`);
    }
  });
};

// Dynamically create navigation buttons based on the number of sets
const createNavigationButtons = () => {
  for (let i = 0; i < Math.ceil(sliderData.length / slidersPerPage); i++) {
    const navButton = document.createElement("button");
    navButton.addEventListener("click", () => {
      currentPage = i;
      renderSliderSubset();
    });
    elements.navigation.appendChild(navButton);
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

// Attach event listeners for button clicks and mouse events
const slidersMovement = () => {
  elements.buttonRight.addEventListener("click", () => {
    moveRight();
    renderSliderSubset();
  });

  elements.buttonLeft.addEventListener("click", () => {
    moveLeft();
    renderSliderSubset();
  });
};

slidersMovement();

const handleSlider = () => {
  // Pause automatic movement when cursor is over the slider
  elements.buttons.addEventListener("mouseenter", () => {
    autoMove = false;
  });

  // Resume automatic movement when cursor leaves the slider
  elements.buttons.addEventListener("mouseleave", () => {
    autoMove = true;
  });
};

handleSlider();

// Handle touch events for swipe gestures
const handleTouch = () => {
  let touchStartX = 0;
  let touchEndX = 0;

  elements.sliderContainer.addEventListener("touchstart", (e) => {
    const { clientX } = e.touches[0];
    touchStartX = clientX;
  });

  elements.sliderContainer.addEventListener("touchmove", (e) => {
    touchEndX = e.touches[0].clientX;
    startAutoMove();
  });

  elements.sliderContainer.addEventListener("touchend", () => {
    // Calculate the difference between touch start and touch end positions
    const touchDiff = touchEndX - touchStartX;

    // Define a threshold for considering it as a swipe
    const swipeThreshold = 50;

    if (touchDiff > swipeThreshold) {
      moveLeft();
      renderSliderSubset();
    } else if (touchDiff < -swipeThreshold) {
      moveRight();
      renderSliderSubset();
    }
  });
};

handleTouch();

// Handle slider visibility using Intersection Observer
const observerFunction = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      autoMove = entries[0].isIntersecting;
      startAutoMove();
    },
    { threshold: 0.5 }
  );

  observer.observe(elements.sliderContainer);
};

observerFunction();

export default renderSliderSubset;
