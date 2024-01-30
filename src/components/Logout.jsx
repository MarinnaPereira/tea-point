import { useNavigate } from "react-router-dom";
import { useUsersContext } from "../hooks/useUsersContext";
import "../scss/Logout.scss";

export const Logout = () => {
  const navigate = useNavigate();
  const { setFirstLetter, setLoggedInUser } = useUsersContext();

  const logoutHandler = () => {
    setLoggedInUser(null);
    setFirstLetter("");
    navigate("/login");
  };

  return (
    <div id="logout-container" className="flex justify-center">
      <div
        id="logout"
        className="py-12 px-5 md:px-8 md:mt-28 md:mb-32 text-center"
      >
        <h1 className="form-heading text-2xl text-left px-7 md:px-8 py-1 mb-3">
          Logout
        </h1>
        <p className="pt-2 pb-6 text-left pl-8 ">
          Are you sure you want to leave?
        </p>
        <button
          onClick={logoutHandler}
          className="rounded-xl px-6 py-2  text-slate-100 transition-all ease-in-out duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
