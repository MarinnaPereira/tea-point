import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { Products } from "./components/Products";
import { TeaLeaves } from "./components/products/TeaLeaves";
import { Teaware } from "./components/products/Teaware";
import { Voucher } from "./components/products/Voucher";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { NotFound } from "./components/NotFound";
import { Social } from "./components/Social";
import { Footer } from "./components/Footer";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/tea-leaves" element={<TeaLeaves />} />
        <Route path="/products/teaware" element={<Teaware />} />
        <Route path="/products/voucher" element={<Voucher />} />

        {/* <Route path="/products" element={<Products />}>
          <Route path="tea-leaves" element={<TeaLeaves />} />
          <Route path="teaware" element={<Teaware />} />
          <Route path="voucher" element={<Voucher />} />
        </Route> */}

        <Route path="/payment" element={<Payment />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Social />
      <Footer />
    </>
  );
}

export default App;
