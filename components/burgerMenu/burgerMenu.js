const burgerMenuHandle = () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navigation = document.getElementById("navigation");
  const body = document.body;

  // Toggle CSS classes on body and navigation when burger menu is clicked
  const toggleClasses = () => {
    body.classList.toggle("overflow-hidden");
    navigation.classList.toggle("hide");
  };

  burgerMenu.addEventListener("click", toggleClasses);
};

export default burgerMenuHandle;
