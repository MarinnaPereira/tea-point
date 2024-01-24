import { NavLink } from "react-router-dom";
import { UseCartContext } from "../contexts/CartContext";
import "../scss/Cart.scss";

export const Cart = () => {
  const { productState } = UseCartContext();
  const cart = productState;

  return (
    <div className="cart-container">
      {!cart.length === 0 ? (
        <div className="e-cart">
          <div>
            <p className="e-cart-massage">Your basket is empty.</p>
          </div>
          <NavLink to="/">
            <button className="e-cart-button">Start Shopping</button>
          </NavLink>
        </div>
      ) : (
        <div className="cart">
          <div className="product-cart">
            <h1>Your Cart</h1>
            <div className="product">
              <span>item1</span>
              <span>$</span>
            </div>
          </div>
          <div className="total-product">
            <div>
              <span className="cart-massage">Estimated Total </span>
              <span className="cart-total">$</span>
            </div>
            <button className="cart-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};
