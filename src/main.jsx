import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import LandingPage from "./component/landingPage/LandingPage";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />

    <LandingPage />
  </React.StrictMode>
);
