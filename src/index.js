import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import { ItemsContextProvider } from "./context/ItemContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <AuthContextProvider>
      <ItemsContextProvider>
        <App />
      </ItemsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);