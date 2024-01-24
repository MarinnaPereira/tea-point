import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./contexts/UsersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UsersProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UsersProvider>
  </BrowserRouter>
);
