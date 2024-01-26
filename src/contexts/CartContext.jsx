/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

export const CartContext = createContext();

const initialState = [];

export const CartProvider = ({ children }) => {
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
        amountOfProducts,
        sumOfPrices,
        shippingCosts,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
