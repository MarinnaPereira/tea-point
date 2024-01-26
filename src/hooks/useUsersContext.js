import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";

export const useUsersContext = () => {
  return useContext(UsersContext);
};
