import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import "./Main.css";
import SearchForm from "./SearchForm";
import ResultsList from "./ResultsList";
import { getGifsBySearch, getTrendingGifs } from "../services/giphyApiService";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  // Hook to access search parameters from the URL
  const [searchParams] = useSearchParams();

  // Retrieve 'search-term' from URL, default to empty string if not present
  const search: string = searchParams.get("search-term") || "";

  useEffect(() => {
    search
      ? getGifsBySearch(search).then((res) => setGifs(res.data))
      : getTrendingGifs().then((res) => setGifs(res.data));
  }, [search]);

  return (
    <div className="Main">
      <SearchForm search={search} />
      <ResultsList gifs={gifs} />
    </div>
  );
};

export default Main;
