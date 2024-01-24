const renderSlider = (slider, isActive) => {
  const activeClass = isActive ? "slider-active" : "";
  return `
    <img loading="lazy" src="${slider.image}" alt="${slider.title}" class="${activeClass}">
  `;
};

export default renderSlider;
