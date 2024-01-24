import { FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { UseCartContext } from "../contexts/CartContext";
import "../scss/Cart.scss";

export const Cart = () => {
  const {
    productState,
    addProduct,
    removeProduct,
    deleteProduct,
    amountOfProducts,
  } = UseCartContext();
  const cart = productState;

  const sumOfPrices = cart
    .reduce((acc, curr) => {
      return acc + parseFloat(curr.price) * curr.amount;
    }, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="e-cart">
          <div>
            <p className="e-cart-message">Your basket is empty.</p>
          </div>
          <NavLink to="/">
            <button className="e-cart-button">Start Shopping</button>
          </NavLink>
        </div>
      ) : (
        <div className="cart">
          <div className="product-cart">
            <div className="your-cart">
              <h1>Your Cart</h1>
              {cart.length <= 1 ? (
                <span>{amountOfProducts} product</span>
              ) : (
                <span>{amountOfProducts} products</span>
              )}
            </div>

            {cart.map((product) => (
              <div key={product.id} className="main-container">
                <div className="product-container">
                  <img src={product.productImage} alt="" />
                  <div className="product">
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
                <div className="pt-4">
                  <FaRegTrashAlt
                    onClick={() => deleteProduct(product.id)}
                    className="delete-icon"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="total-product">
            <div>
              <span className="cart-massage">Estimated Total </span>
              <span className="cart-total">€{sumOfPrices}</span>
            </div>
            <div className="flex justify-between items-center">
              {" "}
              <NavLink to={"/"} className="underline ml-8">
                Continue shopping
              </NavLink>
              <NavLink to="/OrderConformation">
                {" "}
                <button className="cart-button">Checkout</button>
              </NavLink>
              {/* <NavLink to={"/"} className="underline mr-8">
                Continue shopping
              </NavLink> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
