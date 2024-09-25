import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Checkout from "./Components/Checkout.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JavaScript

const contactInfo = {
  email: "JpDotFranca@gmail.com",
  completeAddress: "Brazil | Porto Alegre - RS",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Checkout />
  </StrictMode>
);
