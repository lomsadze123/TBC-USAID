import { AccordionModel } from "../mvc/model.js";
import AccordionView from "../mvc/accordionView.js"; // Import the AccordionView class
import AccordionController from "../mvc/accordionController.js";
import accordionData from "../data/accordionData.js";

const renderAccordionQuestions = () => {
  // Assuming you have a container element where you want to append the accordion
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
    const accordionView = new AccordionView(); // Create an instance of AccordionView
    const accordionController = new AccordionController(
      accordionModel,
      accordionView,
      accordionContainer
    );

    // Render the accordion
    accordionController.renderAccordion();

    // Ensure the accordion is closed after rendering
    accordionController.closeAllAccordions();
  });
};

export default renderAccordionQuestions;
