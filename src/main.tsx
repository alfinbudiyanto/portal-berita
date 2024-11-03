/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Nav from "./components/navbar.jsx";
import ShowContent from "./components/content.jsx";
import Footers from "./components/footer.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <App />
    <ShowContent />
    <Footers />
  </React.StrictMode>,
);
