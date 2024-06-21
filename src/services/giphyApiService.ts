import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";
import SingleGifResponse from "../models/SingleGifResponse";

const baseUrl: string =
  import.meta.env.VITE_API_BASE_URL ?? "BASE URL NOT PRESENT";
const apiKey: string = import.meta.env.VITE_API_KEY ?? "API KEY NOT PRESENT";

export const getTrendingGifs = (): Promise<GiphyResponse> => {
  // Making a GET request to the /trending endpoint of the Giphy API
  return axios
    .get(`${baseUrl}/trending`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data);
};

export const getGifsBySearch = (search: string): Promise<GiphyResponse> => {
  // Making a GET request to the /search endpoint of the Giphy API
  return axios
    .get(`${baseUrl}/search`, {
      params: {
        api_key: apiKey,
        q: search, // Pass search term as query parameter
      },
    })
    .then((res) => res.data);
};

export const getGifById = (id: string): Promise<SingleGifResponse> => {
  // Making a GET request to the Giphy API with the GIF ID
  return axios
    .get(`${baseUrl}/${encodeURIComponent(id)}`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data);
};
