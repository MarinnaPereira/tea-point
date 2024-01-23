

import { UseCartContext } from "../context/CartContext";

const Cart = () => {
  const { productState } = UseCartContext();
  const { cart } = productState;

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <div>
            <p>your basket is empty</p>
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
