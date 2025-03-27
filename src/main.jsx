import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/custom-bootstrap.scss";

import { store } from "./store.js";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   <ThemeProvider>
      <App />
      </ThemeProvider>
  </Provider>
);
