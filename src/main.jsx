import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.jsx";
import "./assets/styles/reset.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
