export const usersReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      throw new Error("No action of:", action.type);
  }
};
