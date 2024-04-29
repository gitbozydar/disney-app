import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DisneyApp from "./DisneyApp.jsx";
import PageProvider from "./context/PageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageProvider>
      <DisneyApp />
    </PageProvider>
  </React.StrictMode>
);
