const renderSlider = (slider, isActive) => {
  // Apply the 'slider-active' class if the slider is active
  const activeClass = isActive ? "slider-active" : "";
  return `
    <img loading="lazy" src="${slider.image}" alt="${slider.title}" class="${activeClass}">
  `;
};

// Export the renderSlider function for use in other modules
export default renderSlider;
