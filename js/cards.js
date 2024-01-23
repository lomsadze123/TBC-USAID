import { ItemModel } from "../mvc/model.js";
import ItemController from "../mvc/controller.js";
import cardData from "../data/cardData.js";
import { renderCard } from "../mvc/view.js";

const cardsContainer = document.getElementById("cards-container");

const renderCoursesCards = () => {
  // Iterate over cardData and create Card, cardView, and CardController instances
  cardData.forEach((data) => {
    // Create Card instance
    const cardModel = new ItemModel(data.image, data.title);

    // Create cardView
    const cardView = { renderCard };

    // Create CardController
    const cardController = new ItemController(
      cardModel,
      cardView,
      cardsContainer
    );

    // Render the card
    cardController.renderCard();
  });
};

export default renderCoursesCards;
