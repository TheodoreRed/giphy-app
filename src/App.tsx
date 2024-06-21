import "./App.css";

// Import necessary components from react-router-dom for routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import { useContext } from "react";
import DarkModeContext from "./context/DarkModeContext";
import Favorites from "./components/Favorites";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  if (darkMode) {
    document.body.classList.add("dark-mode");
    /* document.body.style.backgroundColor = "black";
    document.body.style.color = "#d9d9d9"; */
  } else {
    /* document.body.style.backgroundColor = "#d9d9d9";
    document.body.style.color = "black"; */
    document.body.classList.remove("dark-mode");
  }
  return (
    // Always set up in App.tsx
    // Using BrowserRouter (aliased as Router) to enable routing in the app
    <Router>
      <Header />

      {/* Define application routes */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Main />} />

        {/* Route for the details page, using a dynamic segment (':lobster') */}
        <Route path="/details/:lobster" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* Wildcard route: redirects any unknown paths to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
