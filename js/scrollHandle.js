// Throttle function to limit the frequency of scroll event handling
const throttle = (func, delay) => {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func.apply(this, arguments);
      lastCall = now;
    }
  };
};

const scrollHandle = () => {
  // magic numbers
  const THROTTLE_DELAY = 80;
  const SCROLL_THRESHOLD = 768;

  let lastScrollTop = 0;

  const handleScroll = () => {
    const header = document.getElementById("header");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > lastScrollTop;

    // Adjust header opacity based on scroll direction and window width
    if (isScrollingDown && window.innerWidth <= SCROLL_THRESHOLD) {
      header.style.top = scrollY < 90 ? "0" : "-9rem";
    } else {
      // If scrolling down, set opacity to 0.8
      header.style.backgroundColor = "rgba(22, 22, 22, .8)";
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;
  };

  // Create a throttled version of the handleScroll function
  const throttledHandleScroll = throttle(handleScroll, THROTTLE_DELAY);

  window.addEventListener("scroll", throttledHandleScroll);
};

export default scrollHandle;
