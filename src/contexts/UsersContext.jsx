import { createContext, useContext, useReducer } from "react";

export const UsersContext = createContext();

const usersReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      throw new Error("No action of:", action.type);
  }
};

const initialState = [{ email: "marinna.dos.anjos@gmail.com" }];

export const UsersProvider = ({ children }) => {
  const [usersState, dispatchUser] = useReducer(usersReducer, initialState);

  const addUser = (user) => {
    dispatchUser({ type: "ADD", payload: user });
  };

  return (
    <UsersContext.Provider value={{ usersState, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  return useContext(UsersContext);
};
