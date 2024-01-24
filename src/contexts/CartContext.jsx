/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const productReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD":
      const checkProductExists = state.find(
        (product) => product.id === action.payload.id
      );
      if (checkProductExists) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, amount: (product.amount += 1) }
            : product
        );
      } else {
        return [...state, { ...action.payload, amount: 1 }];
      }
    case "REMOVE":
      const itemRemoved = state.find(
        (product) => product.id === action.payload
      );
      if (itemRemoved && itemRemoved.amount > 1) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, amount: (product.amount -= 1) }
            : product
        );
      } else {
        return state;
      }

    case "DELETE":
      const itemDeleted = state.find(
        (product) => product.id === action.payload
      );
      if (itemDeleted) {
        return state.filter((product) => product.id !== action.payload);
      }
      break;
    default:
      throw new Error("No action of:", action.type);
  }
};

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

  return (
    <CartContext.Provider
      value={{
        productState,
        addProduct,
        removeProduct,
        deleteProduct,
        amountOfProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
