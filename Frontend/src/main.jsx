import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext  from "./contexts/userContext.jsx";
import { CaptainContext } from "./contexts/CaptainContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContext>
        <CaptainContext>
        <App />
        </CaptainContext>
      </UserContext>
    </BrowserRouter>
  </StrictMode>
);
