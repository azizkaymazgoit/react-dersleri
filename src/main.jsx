import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { DilProvider } from "./hooks/DilContext.jsx";

createRoot(document.getElementById("root")).render(
  <DilProvider>
    <App />
  </DilProvider>
);
