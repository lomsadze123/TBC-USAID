import CommonModel from "../../js/models/commonModel.js";
import CardController from "../../js/controllers/cardController.js";
import cardData from "../../data/cardData.js";
import renderCard from "../../js/views/cardView.js";

/**
 * Renders course cards using data from cardData.
 * Each card is created using CommonModel, CardController, and renderCard function.
 */
const renderCoursesCards = () => {
  // Get the container where cards will be rendered
  const cardsContainer = document.getElementById("cards-container");

  // Loop through cardData to create and render each card
  for (const data of cardData) {
    // Create a new instance of CommonModel for each card
    const cardModel = new CommonModel(data.image, data.title);

    // Create a new instance of CardController for each card
    const cardController = new CardController(
      cardModel,
      { renderCard }, // Use an object for cardView
      cardsContainer
    );

    // Render the card using the CardController
    cardController.renderCard();
  }
};

export default renderCoursesCards;
