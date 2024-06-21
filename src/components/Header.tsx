import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

const Header = () => {
  const { darkMode, flipDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <header className="Header">
      <Link to="/">
        <h1>GIF App</h1>
      </Link>
      <button onClick={() => flipDarkMode()}>
        Switch to {darkMode ? "light" : "dark"} mode
      </button>
      <Link to="/favorites">See Favs</Link>
      <p>
        Powered by <span className="accent">GIPHY</span>
      </p>
    </header>
  );
};

export default Header;
