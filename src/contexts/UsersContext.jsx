import { createContext, useReducer, useEffect, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import { fetchUsers } from "../data/fetchUsers.js";

export const UsersContext = createContext();

const initialState = [];

export const UsersProvider = ({ children }) => {
  const [usersState, dispatchUser] = useReducer(usersReducer, initialState);
  const [firstLetter, setFirstLetter] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addUser = (user) => {
    dispatchUser({ type: "ADD", payload: user });
  };

  useEffect(() => {
    const fetchData = async () => {
      const usersWithPass = await fetchUsers();
      usersWithPass.forEach((user) => addUser(user));
    };

    fetchData();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        usersState,
        addUser,
        firstLetter,
        setFirstLetter,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
