import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";
import { Cart } from "./components/Cart";
import { OrderConformation } from "./components/OrderConformation";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/OrderConformation" element={<OrderConformation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
