# Assignment: Dynamic Product Cards

The project created for this assignment is a simple listings page with product cards built as `React` components. It demonstrates core `React` fundamentals, including:
* **Prop Passing:** Components receive and utilize data through props.
* **Component Mapping:** Lists of items are rendered dynamically using array mapping.
* **State Management:** `React` state is used to manage and update UI elements.

## Technologies used
* `HTML5`
* `CSS3`
* `JavaScript` (ES6)
* `React`

## Features
The current project features...
* A list of products with dynamic data
* Individual product cards with customizable content
* Interactive UI elements like buttons managed by `React` state
* Responsive layout for different screen sizes
* Clean and modular component structure for easy maintenance
* Simple styling for clear visual presentation

## Raeact Components
This project is made up of two types of components:

### `App`
The main component rendered by `React`. It acts as the page's main saction. It...
* Maintains a static array of sneaker product objects, each with name, description, price, discounted price, and image URL.
* Uses React's `map()` function to render a `ProductCard` component for each product, passing product details as props.

### `ProductCard`
A reusable component featuring an individual product's details. It...
* Displays the product image, name (in uppercase), price, and description.
* Shows the original price and, optionally, the discounted price.
* Includes a button to toggle the visibility of the discounted price.
* Applies a visual style to the original price when the discount is shown.

## Getting Started
To run this project locally...

1. **Clone the repository:**
  ```bash
  git clone React-Dynamic-Product-Card
  cd React-Dynamic-Product-Card
  ```

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Start the development server:**
  ```bash
  npm run start
  ```
  The app will open at [http://localhost:3000](http://localhost:3000).


**Requirements:**
- `Node.js` (v14 or higher)
- `npm` (v6 or higher)
