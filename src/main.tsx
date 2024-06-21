import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DarkModeContextProvider from "./context/DarkModeContextProvider.tsx";
import FavoritesContextProvider from "./context/FavoritesContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
