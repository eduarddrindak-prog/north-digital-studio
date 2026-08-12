import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ScrollTop from "./components/common/scrollTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
     <ScrollTop/>
      <App />

    </BrowserRouter>
  </StrictMode>
);
