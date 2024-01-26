// Function to handle the burger menu interactions
const burgerMenuHandle = () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navigation = document.getElementById("navigation");
  const burgerCheckbox = document.getElementById("burger-checkbox");
  const body = document.body;

  // Toggle CSS classes on body and navigation when burger menu is clicked
  const toggleClasses = () => {
    body.classList.toggle("overflow-hidden");
    navigation.classList.toggle("hide");
  };

  // Close the navigation menu if a click occurs on the navigation element itself
  const closeNavigation = (e) => {
    if (e.target === navigation) {
      toggleClasses();
      burgerCheckbox.checked = false;
    }
  };

  navigation.addEventListener("click", closeNavigation);

  burgerMenu.addEventListener("click", toggleClasses);
};

export default burgerMenuHandle;
