class AccordionView {
  renderAccordionItem(accordion) {
    const { id, question, intro, isOpen, stages } = accordion;
    const activeClass = isOpen ? "active" : "";

    return `
      <li class="accordion-item" data-accordion-id="${id}">
        <div class="accordion-questions ${activeClass}">
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
    }
    return ""; // Return an empty string if stages is not an array or is empty
  }
}

export default AccordionView;
