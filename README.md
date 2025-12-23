# My App - Pizza Ordering Application

A modern React application for ordering pizzas online, using Vite for fast development and React Router for navigation.

## Features

- **Pizza List** : Displays a list of available pizzas with their details.
- **Shopping Cart** : Add pizzas to the cart and manage your orders.
- **Navigation** : Smooth navigation between Home, Contact, and Cart pages.
- **React Context** : Uses CartContext to manage cart state globally.

## Technologies Used

- **React** : Library for building the user interface.
- **React Router DOM** : For route management and navigation.
- **Vite** : Fast build tool for development.
- **ESLint** : For linting JavaScript/React code.

## Installation

1. Clone this repository:

   ```
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

### Start in development mode

```
npm run dev
```

Opens the application in your browser at `http://localhost:5173`.

### Build for production

```
npm run build
```

Generates optimized files in the `dist` folder.

### Preview the build

```
npm run preview
```

Previews the production version locally.

### Linting

```
npm run lint
```

Checks and fixes code errors with ESLint.

## Project Structure

```
src/
├── main.jsx          # Application entry point
├── index.css         # Global styles
├── Home.jsx          # Home page
├── contact.jsx       # Contact page
├── Cart.jsx          # Cart page
├── CartContext.jsx   # Context for managing cart
├── Navbar.jsx        # Navigation bar
├── SeriesList.jsx    # Pizza list (PizzaList)
└── CommandButton.jsx # Order button
public/
├── ...               # Static assets
```

## Routes

- `/` : Home page
- `/contact` : Contact page
- `/cart` : Shopping cart

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
