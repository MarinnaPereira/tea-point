import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Register } from "./components/Register";
import { Cart } from "./components/Cart";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { NotFound } from "./components/NotFound";
import { Social } from "./components/Social";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Payment } from "./components/Payment";
import "./App.css";
import TeaLeaves from "./components/products/TeaLeaves";
import Teaware from "./components/products/Teaware";
import Voucher from "./components/products/Voucher";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/tea-leaves" element={<TeaLeaves />} />
        <Route path="/products/teaware" element={<Teaware />} />
        <Route path="/products/voucher" element={<Voucher />} />
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
