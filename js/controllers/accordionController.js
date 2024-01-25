// AccordionController class handles the rendering and interactions of accordion items.
class AccordionController {
  constructor(model, view, container) {
    this.model = model;
    this.view = view;
    this.container = container;

    // Bind the toggleAccordion method to the current instance
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  // Renders the accordion item and attaches event listeners for accordion interactions.
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

  // Toggles the state of the accordion item and updates its content accordingly.
  toggleAccordion() {
    const accordionItem = this.container.querySelector(
      `[data-accordion-id="${this.model.id}"]`
    );

    const isOpen = accordionItem.classList.contains("active");

    this.closeAllAccordions();

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

  // Closes all accordion items and clears their content.
  closeAllAccordions() {
    const allAccordionItems =
      this.container.querySelectorAll(".accordion-item");

    allAccordionItems.forEach((item) => {
      item.classList.remove("active");

      // Clear both answer and stages content for the closed accordion
      const answerStagesContainer = item.querySelector(".accordion-answer");
      answerStagesContainer.innerHTML = "";
    });
  }
}

export default AccordionController;
