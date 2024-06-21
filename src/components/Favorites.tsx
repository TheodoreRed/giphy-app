import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import Result from "./Result";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      {favorites.map((fav) => (
        <Result gif={fav} />
      ))}
    </div>
  );
};

export default Favorites;
