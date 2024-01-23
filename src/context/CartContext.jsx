import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((product) => product.id !== action.payload);
    default:
      throw new Error("No action of:", action.type);
  }
};

export const CartProvider = ({ children }) => {
  const initialState = { cart: [] };
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
  return (
    <CartContext.Provider value={{ productState, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
