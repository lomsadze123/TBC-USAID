class SliderController {
  constructor(model, view, container) {
    this.model = model;
    this.view = view;
    this.container = container;
  }

  renderSlider(isActive) {
    if (typeof this.view.renderSlider === "function") {
      const html = this.view.renderSlider(this.model, isActive);
      this.container.insertAdjacentHTML("beforeend", html);
    } else {
      console.error("Unsupported view type: renderSlider method not found");
    }
  }
}

export default SliderController;
