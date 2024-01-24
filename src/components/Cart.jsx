import { UseCartContext } from "../contexts/CartContext";

export const Cart = () => {
  const { productState } = UseCartContext();
  const cart = productState;

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <div>
            <p>Your basket is empty.</p>
          </div>
          <button>Start Shopping</button>
        </div>
      ) : (
        <div>
          <p>Estimated Total : </p>
          <button>Checkout</button>
        </div>
      )}
    </>
  );
};
