import { Nav } from "./Nav";
import "../scss/Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="shipping-campaign p-3 text-sm text-center">
        <p>Free shipping on all orders over €100.</p>
      </div>
      <Nav />
    </header>
  );
};
