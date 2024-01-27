/* eslint-disable no-case-declarations */
import { createContext, useReducer, useState } from "react";
import { productReducer } from "../reducers/productReducer";

export const CartContext = createContext();

const initialState = [];

export const CartProvider = ({ children }) => {
  const [hasCheckedOut, setHasCheckedOut] = useState(false);

  const [productState, dispatchProduct] = useReducer(
    productReducer,
    initialState
  );

  const addProduct = (product) => {
    dispatchProduct({ type: "ADD", payload: product });
  };
  const removeProduct = (id) => {
    dispatchProduct({ type: "REMOVE", payload: id });
  };
  const deleteProduct = (id) => {
    dispatchProduct({ type: "DELETE", payload: id });
  };
  const emptyCart = () => {
    dispatchProduct({ type: "EMPTY" });
  };

  const amountOfProducts = productState.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const sumOfPrices = parseFloat(
    productState
      .reduce((acc, curr) => {
        return acc + parseFloat(curr.price) * curr.amount;
      }, 0)
      .toFixed(2)
  );

  const shippingCosts = parseFloat(
    Math.max(12.8, (sumOfPrices * 0.12).toFixed(2))
  );

  const total = sumOfPrices + shippingCosts;

  return (
    <CartContext.Provider
      value={{
        productState,
        addProduct,
        removeProduct,
        deleteProduct,
        emptyCart,
        amountOfProducts,
        sumOfPrices,
        shippingCosts,
        total,
        hasCheckedOut,
        setHasCheckedOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
