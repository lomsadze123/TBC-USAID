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
let lastScrollTop = 0;

const isMobile = () => window.innerWidth <= 768;

const handleMobileScroll = (header, scrollTop) => {
  header.style.opacity = 1;
  header.classList.toggle("hidden", scrollTop !== 0);
};

const handleDesktopScroll = (header, scrollTop) => {
  const opacity = scrollTop > 50 ? 0.9 : 1;
  header.style.opacity = opacity;
};

console.log(isMobile());

const scrollingUp = (header, scrollTop) => {
  if (isMobile()) {
    header.style.opacity = 1;
    // Adjusted the condition to check if scrolling to the top
    if (scrollTop === 0 || (scrollTop < lastScrollTop && scrollTop !== 0)) {
      header.classList.remove("hidden");
    }
  }
  return scrollTop;
};

const throttledHandleScroll = throttle(() => {
  const header = document.getElementById("header");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (isMobile()) {
    handleMobileScroll(header, scrollTop);
  } else {
    handleDesktopScroll(header, scrollTop);
  }

  lastScrollTop = scrollingUp(header, scrollTop);
}, 150); // Adjust the delay as needed

const scrollHandle = () => {
  window.addEventListener("scroll", throttledHandleScroll);
};

export default scrollHandle;
