import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCartContext = () => {
  return useContext(CartContext);
};
