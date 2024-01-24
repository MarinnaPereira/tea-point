import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { UseCartContext } from "../contexts/CartContext";
import "../scss/Cart.scss";

export const Cart = () => {
  const { productState, addProduct, removeProduct } = UseCartContext();
  const cart = productState;

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
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
            <div className="your-cart">
              <h1>Your Cart!</h1>
              {cart.length <= 1 ? (
                <span>{cart.length} product</span>
              ) : (
                <span>{cart.length} products</span>
              )}
            </div>

            {cart.map((product) => (
              <div className="main-container">
                <div className="product-container">
                  <img src={product.productImage} alt="" />
                  <div className="product" key={product.id}>
                    <span style={{ fontWeight: "bold" }}>
                      {product.productName}
                    </span>
                    <span>€{product.price}</span>
                    <span className="amount-button">
                      <button onClick={() => removeProduct(product.id)}>
                        -
                      </button>
                      <span className="amount">{product.amount}</span>
                      <button onClick={() => addProduct(product)}>+</button>
                    </span>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    onClick={() => removeProduct(product.id)}
                    icon={faTrashAlt}
                    className="delete-icon"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="total-product">
            <div>
              <span className="cart-massage">Estimated Total </span>
              <span className="cart-total">
                €{cart.reduce((total, product) => total + product.price, 0)}
              </span>
            </div>
            <NavLink to="/OrderConformation">
              {" "}
              <button className="cart-button">Checkout</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
