# <img src="https://static.wixstatic.com/media/93e8a3_03d83d668a5f417ca646a5e511f8c02a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/93e8a3_03d83d668a5f417ca646a5e511f8c02a%7Emv2.png TBC-USAID" width="16" height="16" alt="TBC icon"> TBCxUSAID Academy

TBC-USAID Academy is a web application designed to showcase courses and information related to the TBC IT and TBC x USAID programs. The platform provides an interactive interface for users to explore courses, view program details, and stay informed about the latest updates.

## 🌈 Color Reference

| Color                     | Hex                                                              |
| ------------------------- | ---------------------------------------------------------------- |
| primary-color-almostBlack | ![#161616](https://via.placeholder.com/10/161616?text=+) #161616 |
| secondary-color-grey      | ![#2b2b2b](https://via.placeholder.com/10/2b2b2b?text=+) #2b2b2b |
| main-text-color           | ![#00a3e0](https://via.placeholder.com/10/00a3e0?text=+) #00a3e0 |
| routing-text-color-blue   | ![#00d1a0](https://via.placeholder.com/10/00d1a0?text=+) #00d1a0 |
| border-color-silver       | ![#353131](https://via.placeholder.com/10/353131?text=+) #353131 |
| burger-menu-color-grey    | ![#dbdbdb](https://via.placeholder.com/10/dbdbdb?text=+) #dbdbdb |

## 🖼️ Screenshots

<p align="center">
  <img src="https://github.com/lomsadze123/TBC-USAID/assets/91826108/1ae22938-7239-4986-8af0-3f266c09f31d" alt="Image 1">
  <img src="https://github.com/lomsadze123/TBC-USAID/assets/91826108/987126e3-8666-470b-9058-f005e1a167be" alt="Image 2">
  <img src="https://github.com/lomsadze123/TBC-USAID/assets/91826108/2ccbc353-cde5-4847-ad2f-4eeaf5f41bcd" alt="Image 3">
</p>

## 🚀 Technologies Used

- [![HTML](https://img.shields.io/badge/HTML-informational?style=flat&logo=html5&logoColor=white&color=E34F26)](https://developer.mozilla.org/en-US/docs/Web/HTML), [![CSS](https://img.shields.io/badge/CSS-informational?style=flat&logo=css3&logoColor=white&color=1572B6)](https://developer.mozilla.org/en-US/docs/Web/CSS), [![JavaScript](https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) The core web technologies for building the front-end user interface.
- **ES6 Modules:** Modular JavaScript for maintaining code organization and reusability.
- **MVC Architecture:** Adopted a Model-View-Controller architecture for better organization and maintainability of the code.
- **Intersection Observer API:** Utilized to implement scroll-based interactions and optimize performance.
- **Responsive Design:** Ensures a seamless user experience across various devices and screen sizes.
- **Lazy Loading:** Implemented for optimizing image loading and improving page load times.
- **Throttling:** Incorporated throttling techniques to control the rate of execution of certain functions, preventing performance bottlenecks and improving overall responsiveness.

### 🔄 Scroll Handling

- **ScrollHandle Functionality:** Implemented a `scrollHandle` function that efficiently manages scroll events, adjusting the appearance and behavior of the header based on the user's scrolling actions.

```javascript
const scrollHandle = () => {
  window.addEventListener("scroll", throttledHandleScroll);
};
```

## 🛠️ Tools & Platforms

- **:octocat: GitHub:** Version control and collaboration platform for managing project source code.
- **:shell: Git Bash:** Command-line interface for Git on Windows, used for version control and repository management.

## 📂 Project Structure

```plaintext
project-root
├───assets
│   └───images
│       ├───courses
│       ├───icons
│       ├───other
│       └───partners
├───components
│   ├───accordion
|   |───burgerMenu
│   ├───cards
│   └───slider
├───css
├───data
└───js
    ├───controllers
    ├───models
    └───views
```

The project follows a structured organization to maintain clarity and modularity:

- **`assets/:`** Contains images, icons, and other static assets.
- **`components/:`** Modular components such as cards, sliders, and accordions.
- **`data/:`** JSON files storing data for cards, sliders, and accordion items.
- **`js/:`** JavaScript files organized by functionality, including models, views, and controllers.
- **`styles/:`** CSS files for styling components and layout.
- **`index.html:`** The main HTML file serving as the entry point for the application.

## ✔️ Check

Before running or contributing to the TBC-USAID Academy project, make sure to check the following:

### 🌐 Browser Compatibility

The TBC-USAID Academy web application has been designed and tested to work seamlessly on various web browsers without the need for CSS prefixes. Ensure that you are using a modern web browser, and the application should perform optimally. We recommend the following browsers:

- 🌎 Google Chrome
- 🦊 Mozilla Firefox
- 🌐 Microsoft Edge
- 🧭 Safari

### 🖥️ System Requirements

Ensure that your development environment meets the following requirements:

- [![Node.js](https://img.shields.io/badge/Node.js-informational?style=flat&logo=node.js&logoColor=white&color=339933)](https://nodejs.org/) **Node.js:** The project may use Node.js for certain functionalities. Install Node.js by following the instructions on the [official website](https://nodejs.org/).

- [![Git](https://img.shields.io/badge/Git-informational?style=flat&logo=git&logoColor=white&color=F05032)](https://git-scm.com/) **Git:** Make sure Git is installed on your system. You can download it from [git-scm.com](https://git-scm.com/).

## ⚙️ Installation

Follow these steps to set up the TBC-USAID Academy locally:

**1. Clone the Repository:**

```bash
git clone https://github.com/your-username/tbc-usaid-academy.git
```

**2. Navigate to the Project Directory:**

```bash
cd TBC
```

**3. Open index.html in a Browser:**

Open the **index.html** file in your preferred web browser.

**4. Explore the Academy:**

Explore the courses and programs available on the TBC-USAID Academy platform.

## 🚀 View Live Demo

Visit the live demo: [TBC USAID](https://main--tbc-usaid-marteli.netlify.app/)

## 🌟 Features

- :iphone: Responsive Navigation (Flex, Grid)
- :art: Dynamic Rendering
- :flower_playing_cards: Card Components
- :carousel_horse: Slider
- :accordion: Accordion
- :building_construction: Model-View-Controller (MVC) Architecture
- :gear: Throttling

## 🌐 Usage

- :desktop_computer: **Responsive Design:**

  The platform is designed to adapt to various screen sizes. Test on different devices for the best user experience.

- :scroll: **Scroll Events:**

  Observe scroll-based events, such as the appearance and disappearance of the fixed header. The `scrollHandle` function optimizes the handling of scroll events, ensuring a smooth and responsive scrolling experience.

- :zap: **Lazy Loading:**
  Experience optimized image loading with lazy loading.

## 💡 Usage/Examples

```javascript
// Create an Intersection Observer to track when the slider container is in vie
const observer = new IntersectionObserver(w
  (entries) => {
    if (entries[0].isIntersecting) {
      // Additional actions to take when the slider is in view
      console.log("Slider is in view!");
      // You can trigger functions like autoMove or startAutoMove here
    }
  },
  { threshold: 0.5 }
);

// Observe the slider container
observer.observe(document.getElementById("slider-container")); // Replace with your container's actual ID

```

## Authors

- [@lomsadze123](https://github.com/lomsadze123)

## Feedback

If you have any feedback, please reach out to us at beka.lomsadze.1@btu.edu.ge
