class AccordionController {
  constructor(model, view, container) {
    this.model = model;
    this.view = view;
    this.container = container;

    // Bind the toggleAccordion method to the current instance
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  renderAccordion() {
    if (typeof this.view.renderAccordionItem === "function") {
      const html = this.view.renderAccordionItem(this.model);
      this.container.insertAdjacentHTML("beforeend", html);

      // Attach event listeners for accordion interactions
      const accordionItem = this.container.querySelector(
        `[data-accordion-id="${this.model.id}"]`
      );
      accordionItem.addEventListener("click", this.toggleAccordion);
    } else {
      console.error(
        "Unsupported view type: renderAccordionItem method not found"
      );
    }
  }

  toggleAccordion() {
    const accordionItem = this.container.querySelector(
      `[data-accordion-id="${this.model.id}"]`
    );

    // Check if the clicked accordion is currently open
    const isOpen = accordionItem.classList.contains("active");

    // Close all accordion items
    this.closeAllAccordions();

    // If the clicked accordion was not the currently open one, open it
    if (!isOpen) {
      accordionItem.classList.add("active");

      // Set the answer and stages content for the opened accordion
      const answerStagesContainer =
        accordionItem.querySelector(".accordion-answer");
      answerStagesContainer.innerHTML = `
        ${this.model.intro ? `<p class="intro">${this.model.intro}</p>` : ""}
       ${
         this.model.stages
           ? `<div class="stages-container">${this.view.renderStages(
               this.model.stages
             )}</div>`
           : ""
       }
          <p class="answer-content">${this.model.answer}</p>
      `;
    } else {
      // If the clicked accordion was the currently open one, close it
      accordionItem.classList.remove("active");

      // Clear both answer and stages content for the closed accordion
      const answerStagesContainer =
        accordionItem.querySelector(".accordion-answer");
      answerStagesContainer.innerHTML = "";
    }
  }

  closeAllAccordions() {
    // Close all accordion items
    const allAccordionItems =
      this.container.querySelectorAll(".accordion-item");
    allAccordionItems.forEach((item) => {
      item.classList.remove("active");

      // Clear both answer and stages content for the closed accordion
      const answerStagesContainer = item.querySelector(".accordion-answer");
      answerStagesContainer.innerHTML = "";
    });
  }

  // other methods...
}

export default AccordionController;
