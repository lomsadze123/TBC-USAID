# TBC-USAID Academy

TBC-USAID Academy is a web application designed to showcase courses and information related to the TBC IT and TBC x USAID programs. The platform provides an interactive interface for users to explore courses, view program details, and stay informed about the latest updates.

## Color Reference

| Color                     | Hex                                                              |
| ------------------------- | ---------------------------------------------------------------- |
| primary-color-almostBlack | ![#161616](https://via.placeholder.com/10/161616?text=+) #161616 |
| secondary-color-grey      | ![#2b2b2b](https://via.placeholder.com/10/2b2b2b?text=+) #2b2b2b |
| main-text-color           | ![#00a3e0](https://via.placeholder.com/10/00a3e0?text=+) #00a3e0 |
| routing-text-color-blue   | ![#00d1a0](https://via.placeholder.com/10/00d1a0?text=+) #00d1a0 |
| border-color-silver       | ![#353131](https://via.placeholder.com/10/353131?text=+) #353131 |
| burger-menu-color-grey    | ![#dbdbdb](https://via.placeholder.com/10/dbdbdb?text=+) #dbdbdb |

## Screenshots

| Mobile Screenshots                              | Screenshot 2                              |
| ----------------------------------------- | ----------------------------------------- |
| (![image](https://github.com/lomsadze123/TBC-USAID/assets/91826108/987126e3-8666-470b-9058-f005e1a167be)) ![image](https://github.com/lomsadze123/TBC-USAID/assets/91826108/1ae22938-7239-4986-8af0-3f266c09f31d) | ![image](https://github.com/lomsadze123/TBC-USAID/assets/91826108/2ccbc353-cde5-4847-ad2f-4eeaf5f41bcd) 
![image](https://github.com/lomsadze123/TBC-USAID/assets/91826108/8797f126-079e-4e66-b862-90c70722cc9b)


## Technologies Used

- **HTML**, **CSS**, **JavaScript:** The core web technologies for building the front-end user interface.
- **ES6 Modules:** Modular JavaScript for maintaining code organization and reusability.
  **MVC Architecture:** Adopted a Model-View-Controller architecture for better organization and maintainability of the code.
- **Intersection Observer API:** Utilized to implement scroll-based interactions and optimize performance.
- **Responsive Design:** Ensures a seamless user experience across various devices and screen sizes.
- **Lazy Loading:** Implemented for optimizing image loading and improving page load times.

## Tools & Platforms

- **GitHub:** Version control and collaboration platform for managing project source code.
- **Git Bash:** Command-line interface for Git on Windows, used for version control and repository management.

## Project Structure

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

- **assets/:** Contains images, icons, and other static assets.
- **components/:** Modular components such as cards, sliders, and accordions.
- **data/:** JSON files storing data for cards, sliders, and accordion items.
- **js/:** JavaScript files organized by functionality, including models, views, and controllers.
- **styles/:** CSS files for styling components and layout.
- **index.html:** The main HTML file serving as the entry point for the application.

## Installation

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

## Features

- Responsive Navigation (Flex, Grid)
- Dynamic Rendering
- Card Components
- Slider
- Accordion
- Model-View-Controller (MVC) Architecture

## Usage

- **Responsive Design:**

  The platform is designed to adapt to various screen sizes. Test on different devices for the best user experience.

- **Scroll Events:**

  Observe scroll-based events, such as the appearance and disappearance of the fixed header.

- **Lazy Loading:**
  Experience optimized image loading with lazy loading.

## Usage/Examples

```javascript
// model
class CommonModel {
  constructor(image, title) {
    this.image = image;
    this.title = title;
  }
}

// view
const renderSlider = (slider, isActive) => {
  const activeClass = isActive ? "slider-active" : "";
  return `
    <img loading="lazy" src="${slider.image}" alt="${slider.title}" class="${activeClass}">
  `;
};

// controller
class SliderController {
  constructor(model, view, container) {
    this.model = model;
    this.view = view;
    this.container = container;
  }

  // Renders the slider item and appends it to the specified container.
  renderSlider(isActive) {
    if (typeof this.view.renderSlider === "function") {
      const html = this.view.renderSlider(this.model, isActive);
      this.container.insertAdjacentHTML("beforeend", html);
    } else {
      console.error("Unsupported view type: renderSlider method not found");
    }
  }
}
```

## Authors

- [@lomsadze123](https://github.com/lomsadze123)

## Feedback

If you have any feedback, please reach out to us at beka.lomsadze.1@btu.edu.ge
