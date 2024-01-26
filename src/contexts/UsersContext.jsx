import { createContext, useReducer } from "react";
import { usersReducer } from "../reducers/usersReducer";

export const UsersContext = createContext();

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
