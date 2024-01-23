class AccordionView {
  renderAccordionItem(accordion) {
    const { id, question, intro, isOpen, stages } = accordion;
    const activeClass = isOpen ? "active" : "";

    return `
      <li class="accordion-item" data-accordion-id="${id}">
        <div class="accordion-questions flex justify-between ${activeClass}">
          <p class="accordion-question">${question}</p>
          <img src="assets/images/other/accordionArrow.svg" alt="arrow down icon">
        </div>
        <div class="accordion-answer ${activeClass}">
          ${intro ? `<p >${intro}</p>` : ""}
          ${
            stages
              ? `<p class="stages-container">${this.renderStages(stages)}</p>`
              : ""
          }
          <p class="answer-content">${accordion.answer}</p>
        </div>
      </li>
    `;
  }

  renderStages(stages) {
    // Check if stages is an array and not empty before using map
    if (Array.isArray(stages) && stages.length > 0) {
      return stages.map((stage) => `<p>${stage}</p>`).join("");
    } else {
      return ""; // Return an empty string if stages is not an array or is empty
    }
  }

  toggleAccordion(accordionId, answer, intro) {
    const accordionItem = document.querySelector(
      `[data-accordion-id="${accordionId}"]`
    );

    // Toggle the 'active' class for accordion-questions
    const accordionQuestions = accordionItem.querySelector(
      ".accordion-questions"
    );
    accordionQuestions.classList.toggle("active");

    // Check if the accordion is now open or closed
    const isOpen = accordionQuestions.classList.contains("active");

    // Get the content container
    const contentContainer = accordionItem.querySelector(".accordion-answer");

    if (isOpen) {
      // If open, show the content
      contentContainer.innerHTML = `
      ${intro ? `<p >${intro}</p>` : ""}
      ${
        this.model.stages
          ? `<p class="stages-container">${this.renderStages(
              this.model.stages
            )}</p>`
          : ""
      }
      <p class="answer-content">${answer}</p>
      `;
    } else {
      // If closed, hide the content
      contentContainer.innerHTML = "";
    }
  }
}

export default AccordionView;
