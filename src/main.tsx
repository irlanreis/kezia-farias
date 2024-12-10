// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

// Inicialize o Pixel do Facebook
const options = {
  autoConfig: true,
  debug: false,
};

const keyPixel = import.meta.env.VITE_REACT_APP_PIXEL;

ReactPixel.init(
  keyPixel,
  {
    em: import.meta.env.EMAIL,
    fn: import.meta.env.FIRST_NAME,
    ln: import.meta.env.LAST_NAME,
    ph: import.meta.env.PHONE,
    ge: import.meta.env.GENDER,
    db: import.meta.env.DATE_OF_B,
    ct: import.meta.env.CITY,
    st: import.meta.env.STATE,
    zp: import.meta.env.ZIP_CODE,
    country: import.meta.env.COUNTRY,
  },
  options
);
ReactPixel.pageView();

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>
);
