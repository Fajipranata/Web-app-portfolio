import "./styles/base.css"
import "./styles/layout.css"
import "./styles/navbar.css"
import "./styles/animation.css"
import "./styles/responsive.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);