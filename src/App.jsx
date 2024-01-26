import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Cart } from "./components/Cart";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { NotFound } from "./components/NotFound";
import { Social } from "./components/Social";
import { Footer } from "./components/Footer";
import "./App.css";
import { Products } from "./components/Products";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Social />

      <Footer />
    </>
  );
}

export default App;
