// Import Link from react-router-dom for internal navigation
import { Link } from "react-router-dom";
import Gif from "../models/Gif";
import "./Result.css";
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

interface Props {
  gif: Gif | null;
}

const Result = ({ gif }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);
  return (
    <li className="Result">
      {gif ? (
        <>
          {/* Link to the details page of the gif, using the gif's id */}
          <Link to={`/details/${encodeURIComponent(gif.id)}`}>
            <h3>{gif.title}</h3>
            <img src={gif.images.original.url} alt={gif.title} />
          </Link>
          {/* External link to the original Giphy page */}
          <a href={gif.url} className="bottomLink">
            <p>Link to Giphy</p>
          </a>
          {!isFav(gif.id) ? (
            <button onClick={() => addFavorite(gif)}>Add to favs</button>
          ) : (
            <button onClick={() => removeFavorite(gif.id)}>
              Remove from favs
            </button>
          )}
        </>
      ) : (
        <p>...loading</p>
      )}
    </li>
  );
};

export default Result;
