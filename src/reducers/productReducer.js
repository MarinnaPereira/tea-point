/* eslint-disable no-case-declarations */
export const productReducer = (state, action) => {
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
    case "EMPTY":
      return [];
    default:
      throw new Error("No action of:", action.type);
  }
};
