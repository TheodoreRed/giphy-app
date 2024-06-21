import { useParams } from "react-router-dom";
import "./Details.css";
import Result from "./Result";
import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getGifById } from "../services/giphyApiService";

const Details = () => {
  const [gif, setGif] = useState<Gif | null>(null);
  const id: string | undefined = useParams().lobster;

  useEffect(() => {
    if (id) {
      getGifById(id).then((res) => setGif(res.data));
    }
  }, [id]);

  return (
    <div className="Details">
      <Result gif={gif} />
    </div>
  );
};

export default Details;
