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
  const THROTTLE_DELAY = 150;
  const SCROLL_THRESHOLD = 768;

  let lastScrollTop = 0;

  const handleScroll = () => {
    const header = document.getElementById("header");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > lastScrollTop;

    // Adjust header opacity based on scroll direction and window width
    if (isScrollingDown && window.innerWidth <= SCROLL_THRESHOLD) {
      header.style.opacity = 0;
    } else {
      // If scrolling up, set opacity to 1; if scrolling down, set opacity to 0.8
      header.style.opacity = isScrollingDown ? 0.8 : 1;
    }

    lastScrollTop = scrollTop;
  };

  // Create a throttled version of the handleScroll function
  const throttledHandleScroll = throttle(handleScroll, THROTTLE_DELAY);

  window.addEventListener("scroll", throttledHandleScroll);
};

export default scrollHandle;
