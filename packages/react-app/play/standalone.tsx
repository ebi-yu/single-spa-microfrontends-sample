import { createRoot } from "react-dom/client";
import App from "../src/App";
import "../src/index.css";

const start = async () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<App message="Hello from standalone React app!" />);
  }
};

start();
