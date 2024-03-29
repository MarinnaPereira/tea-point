import { NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { useUsersContext } from "../hooks/useUsersContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "../scss/Cart.scss";

export const Cart = () => {
  const navigate = useNavigate();

  const {
    productState,
    addProduct,
    removeProduct,
    deleteProduct,
    amountOfProducts,
    sumOfPrices,
    shippingCosts,
    total,
    setHasCheckedOut,
  } = useCartContext();

  const { loggedInUser } = useUsersContext();

  const cart = productState;

  const isShippingFree = sumOfPrices > 100;

  const clickHandler = () => {
    setHasCheckedOut((prev) => !prev);
    if (loggedInUser) {
      navigate("/payment");
    } else {
      alert("Please, login before proceed.");
      navigate("/login");
    }
  };

  return (
    <div id="cart-container" className="flex justify-center">
      {cart.length === 0 ? (
        <div id="empty-cart" className="pt-40 md:pt-52 pb-40 text-center">
          <p className="pb-6 text-xl">Your basket is empty.</p>
          <NavLink to="/products">
            <button className="rounded-xl text-xl px-6 py-2 text-slate-100 transition-all ease-in-out duration-300">
              Start Shopping
            </button>
          </NavLink>
        </div>
      ) : (
        <div
          id="product-cart"
          className="px-5 md:px-8 pt-3 md:pt-6 pb-3 md:pb-8 mt-6 mb-12"
        >
          <div className="cart-header flex justify-between my-3 rounded-r-2xl">
            <h1 className="text-2xl pl-6 md:pl-8 py-1">Your Cart</h1>
            <span className="rounded-xl inline-flex items-center px-3 text-slate-100">
              {amountOfProducts}
              {amountOfProducts === 1 ? " product" : " products"}
            </span>
          </div>
          <div className="card-body">
            <div className="products">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="single-product flex justify-between m-8 ml-0 md:ml-8"
                >
                  <div className="product-container flex justify-between gap-2">
                    <img
                      src={product.productImage}
                      alt="product"
                      className="hidden md:block"
                    />
                    <div className="flex-col space-y-4 mx-6 md:pt-3">
                      <h3 className="font-bold">{product.productName}</h3>
                      <p>€{product.price}</p>
                      <div className="amount-info flex-col">
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="px-2 hover:text-slate-100 transition-all ease-in-out duration-300"
                        >
                          -
                        </button>
                        {/* <input type="number" value={product.amount} /> */}
                        <span className="amount px-4 border border-teal-950 ">
                          {product.amount}
                        </span>
                        <button
                          onClick={() => addProduct(product)}
                          className="px-2 hover:text-slate-100 transition-all ease-in-out duration-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="delete-product w-4 pt-1 md:pt-4 cursor-pointer text-xl">
                    <FaRegTrashAlt
                      onClick={() => deleteProduct(product.id)}
                      className="delete-icon transition-all ease-in-out duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="total">
              <div className="ml-6 md:ml-8 m-8 flex justify-between">
                <p>Subtotal</p>
                <p>€{sumOfPrices}</p>
              </div>
              <div className="ml-6 md:ml-8 m-8 flex justify-between">
                <p>{isShippingFree ? "Free shipping" : "Shipping costs"}</p>
                <p>€{isShippingFree ? "0" : shippingCosts}</p>
              </div>
              <div className="ml-6 md:ml-8 m-8 flex justify-between">
                <h3 className="font-semibold">Total</h3>
                <p className="font-semibold">
                  €{isShippingFree ? sumOfPrices : total}
                </p>
              </div>
            </div>
            <div className="flex-col-reverse md:flex-row action ml-8 mr-4 flex justify-between items-center">
              <NavLink to={"/products"} className="underline">
                Continue shopping
              </NavLink>
              <button
                onClick={clickHandler}
                className="rounded-xl px-7 py-2 text-slate-100 transition-all ease-in-out duration-300 mb-5 md:mb-0"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
