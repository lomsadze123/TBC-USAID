import AccordionModel from "../../js/models/accordionModel.js";
import AccordionView from "../../js/views/accordionView.js";
import AccordionController from "../../js/controllers/accordionController.js";
import accordionData from "../../data/accordionData.js";

// Renders accordion questions based on data from accordionData.
const renderAccordionQuestions = () => {
  const accordionContainer = document.getElementById("accordion-container");

  accordionData.forEach((data) => {
    // Create an instance of the model, view, and controller
    const accordionModel = new AccordionModel(
      data.id,
      data.question,
      data.intro,
      data.answer,
      data.stages,
      false
    );
    const accordionView = new AccordionView();
    const accordionController = new AccordionController(
      accordionModel,
      accordionView,
      accordionContainer
    );

    // Render the accordion
    accordionController.renderAccordion();

    // The accordion is closed after rendering
    accordionController.closeAllAccordions();
  });
};

export default renderAccordionQuestions;
