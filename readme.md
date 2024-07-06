# Build and Deploy Your Own ChatGPT AI SaaS Business with React
If you're a solo developer, you have the power to build robust AI software startups! Make an Article Summarizer Application using OpenAI's GPT model.

# Project Title: Article Summarizer

Welcome to the **Article Summarizer** project! This project is a React-based web application that allows users to input URLs of articles and receive concise summaries of those articles using the OpenAI GPT-4 API. The application leverages Redux Toolkit for state management and handles API requests efficiently with Redux Toolkit Query.

<br>

## `Takeaways from the project:`
- setup a ReactJS project using Vite
- created a responsive, beautiful UI/UX with a nice touch of glass morphism using Tailwind CSS
- made advanced RTK query API requests that fire on condition
- saved history using the local storage
- handled form events and catch errors
- implemented copy to clipboard
- wrote clean code

## `Table of Contents`
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)
- [Components](#components-folder)
- [Services](#services-folder)
- [License](#license)

## `Getting Started`
To get a local copy up and running, follow these simple steps.

### `Prerequisites`
Make sure you have Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).

### `Installation`
1. Clone the repo
   ```sh
   git clone https://github.com/your_username/your_repository.git
   ```
2. Navigate to the project directory
   ```sh
   cd your_repository
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

### `Running the Application`
To start the application, run:
```sh
npm run dev
```

This will start the Vite development server, and you can view the application in your browser at `http://localhost:3000`.

## `Folder Structure`
The project directory structure is organized as follows:

```

├── index.html              # Main HTML file
├── public
│   └── favicon.svg         # Favicon image
├── src
│   ├── assets
│   │   ├── index.js        # Exports SVG assets
│   │   └── (other SVG files)
│   ├── components
│   │   ├── Demo.jsx        # Demo component for handling user input and displaying summaries
│   │   └── Hero.jsx        # Hero component for the application header
│   ├── services
│   │   ├── article.js      # Configures Redux Toolkit Query service
│   │   └── store.js        # Configures Redux store
│   ├── App.css             # Global styles
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point for React application
├── .gitignore
├── package.json            # Project metadata and dependencies
└── README.md

```

### `Explanation of Folder and File Contents`

- **index.html**: The main HTML file that serves as the entry point for the web application.
- **public**: Contains static assets. Here, it includes only the favicon.svg file.
- **src**: Contains the source code for the React application.
  - **assets**: Contains SVG files and an `index.js` file that exports these SVGs for use in other parts of the application.
  - **components**: Contains React components.
    - `Hero.jsx`: Renders the header of the application, including the logo and a GitHub link.
    - `Demo.jsx`: Handles user input for article URLs, fetches article summaries, and displays them. Also manages state and local storage.
  - **services**: Contains service files for managing state and API interactions.
    - `article.js`: Configures the Redux Toolkit Query service to interact with the RapidAPI article summarizer API.
    - `store.js`: Configures the Redux store, integrating the article API reducer and middleware.
  - **App.css**: Contains global CSS styles for the application.
  - **App.jsx**: The root component that includes the main structure and layout of the application, incorporating the `Hero` and `Demo` components.
  - **main.jsx**: The entry point for the React application, rendering the `App` component and wrapping it with the Redux store provider.

## `Dependencies`
This project uses the following dependencies:

- `@reduxjs/toolkit`: The official, recommended way to write Redux logic and manage state.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: This package serves as the entry point to the DOM and server renderers for React.
- `react-redux`: Official React bindings for Redux.

## `Available Scripts`

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode using Vite. Open `http://localhost:3000` to view it in your browser.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run preview`: Serves the production build locally for previewing.

<br>


## `Components Folder`
### Hero Component
The `Hero` component renders the header of the application, including the logo and a button that links to the GitHub repository. It is located in `src/components/Hero.jsx`.

### Demo Component
The `Demo` component allows users to input article URLs and displays the summarized content. It handles user input, API calls, and local storage. It is located in `src/components/Demo.jsx`.

<br>

## `Services Folder`
### Article Service
The `article.js` file configures the Redux Toolkit Query service to interact with the RapidAPI article summarizer API. It defines the API endpoints and manages the API key. It is located in `src/services/article.js`.
### Store Configuration
The `store.js` file configures the Redux store, incorporating the article API reducer and middleware. It is located in `src/services/store.js`.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
