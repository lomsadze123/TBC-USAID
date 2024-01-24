class CardController {
  constructor(model, view, container) {
    this.model = model;
    this.view = view;
    this.container = container;
  }

  renderCard() {
    if (typeof this.view.renderCard === "function") {
      const html = this.view.renderCard(this.model);
      this.container.insertAdjacentHTML("beforeend", html);
    } else {
      console.error("Unsupported view type: renderCard method not found");
    }
  }
}

export default CardController;
