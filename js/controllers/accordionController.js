// AccordionController class handles the rendering and interactions of accordion items.
class AccordionController {
  constructor(model, view, container) {
    this.model = model;
    this.view = view;
    this.container = container;

    // Keep track of the currently opened accordion
    this.isOpen = null;

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
  toggleAccordion(e) {
    if (
      !e.target.classList.contains("accordion-questions") &&
      !e.target.classList.contains("accordion-question")
    )
      return;

    const accordionItem = e.currentTarget;
    const isOpen = accordionItem.classList.contains("active");

    if (isOpen) {
      // If the accordion is closing, remove the content after a delay
      this.closeAccordion(accordionItem);
    } else {
      // If the accordion is opening, close others and set the content
      this.closeAllAccordions(accordionItem);

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

      // Update the openAccordion reference
      this.isOpen = accordionItem;
    }
  }

  // Closes all accordions except the one being opened
  closeAllAccordions(isOpen) {
    const allAccordionItems =
      this.container.querySelectorAll(".accordion-item");

    allAccordionItems.forEach((item) => {
      if (item !== isOpen) {
        // Close others immediately
        item.classList.remove("active");

        // Clear content after a delay
        this.closeAccordion(item);
      }
    });
  }

  // Closes an accordion and clears its content after a delay
  closeAccordion(accordionItem) {
    const answerStagesContainer =
      accordionItem.querySelector(".accordion-answer");

    accordionItem.classList.remove("active");
    setTimeout(() => {
      answerStagesContainer.innerHTML = "";
    }, 400); // delay for closing accordion
  }
}

export default AccordionController;
