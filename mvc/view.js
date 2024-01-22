export const renderCard = (card) => {
  return `
    <div class="card">
      <img loading="lazy" src="${card.image}" alt="${card.title}">
      <div class="card-description">
        <h2>${card.title}</h2>
        <p>რეგისტრაცია დასრულებულია</p>
      </div>
      <a class="details flex">
        <span>
          <img class="arrow-right" src="assets/images/other/arrowRight.svg" alt="right arrow icon">
        </span>
        <span>კურსის დეტალები</span>
      </a>
    </div>
  `;
};

export const renderSlider = (slider, isActive) => {
  const activeClass = isActive ? "slider-active" : "";
  return `
    <img loading="lazy" src="${slider.image}" alt="${slider.title}" class="${activeClass}">
  `;
};
