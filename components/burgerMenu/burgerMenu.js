const burgerMenuHandle = () => {
  const burgerMenu = document.getElementById("burger-menu");
  const navigation = document.getElementById("navigation");
  const body = document.body;

  burgerMenu.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden");
    navigation.classList.toggle("hide");
  });
};

export default burgerMenuHandle;
