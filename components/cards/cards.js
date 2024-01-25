import CommonModel from "../../js/models/commonModel.js";
import CardController from "../../js/controllers/cardController.js";
import cardData from "../../data/cardData.js";
import renderCard from "../../js/views/cardView.js";

const renderCoursesCards = () => {
  const cardsContainer = document.getElementById("cards-container");

  // Iterate over cardData and create Card, cardView, and CardController instances
  cardData.forEach((data) => {
    // Create Card instance
    const cardModel = new CommonModel(data.image, data.title);

    // Create cardView
    const cardView = { renderCard };

    // Create CardController
    const cardController = new CardController(
      cardModel,
      cardView,
      cardsContainer
    );

    // Render the card
    cardController.renderCard();
  });
};

export default renderCoursesCards;
