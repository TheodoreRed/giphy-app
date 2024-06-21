import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifs: Gif[];
}

const ResultsList = ({ gifs }: Props) => {
  return (
    <ul className="ResultsList">
      <h2>Results</h2>
      {gifs.map((gif) => {
        return <Result key={gif.id} gif={gif} />;
      })}
    </ul>
  );
};

export default ResultsList;
