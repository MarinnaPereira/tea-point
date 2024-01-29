import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUsersContext } from "../hooks/useUsersContext";
import { useCartContext } from "../hooks/useCartContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "../scss/LoginRegister.scss";

export const Login = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { usersState, setFirstLetter, setLoggedInUser } = useUsersContext();
  const { hasCheckedOut } = useCartContext();
  const navigate = useNavigate();
  // console.log(usersState);

  const clickHandler = () => {
    setShowPassword((prev) => !prev);
    passwordInput.current.focus();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);

    const loginInfo = {
      email: emailInput.current.value.trim(),
      password: passwordInput.current.value.trim(),
    };

    const registeredUser = usersState.find(
      (user) => user.email === loginInfo.email
    );

    if (!registeredUser) {
      setError("Email not found.");
      emailInput.current.focus();
      emailInput.current.value = "";
    } else if (loginInfo.password === "") {
      setError("Please enter your password.");
      passwordInput.current.focus();
      passwordInput.current.value = "";
    } else if (loginInfo.password !== registeredUser.password) {
      setError("Wrong password.");
      passwordInput.current.focus();
      passwordInput.current.value = "";
    } else {
      setLoggedInUser(registeredUser);
      setFirstLetter(registeredUser.name[0].toUpperCase());
      hasCheckedOut ? navigate("/payment") : navigate("/cart");
    }
  };

  return (
    <div id="form-container" className="flex justify-center">
      <div id="form-div" className="px-8 pt-6 pb-8 mt-6 mb-12">
        <h1 className="form-heading text-2xl my-3 px-8 py-1">Login</h1>
        <p className="text-form px-8 py-3">
          Great that you are back! Please log in with your email and password.
        </p>
        <form onSubmit={submitHandler} className="px-8">
          {error && <p className="error-msg text-red-600">{error}</p>}
          <div className="input-div flex align-middle shadow border w-full my-4">
            <input
              type="email"
              ref={emailInput}
              placeholder="youremail@email.com*"
              required
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="input-div flex items-center shadow border w-full mt-6 mb-4 ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password*"
              ref={passwordInput}
              required
              className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span
              onClick={clickHandler}
              className="text-xl w-10 flex justify-center"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center py-5">
            <button
              type="submit"
              className="rounded-xl px-6 py-2 text-slate-100 transition-all ease-in-out duration-300 mb-5"
            >
              Login
            </button>
            <NavLink to={"/register"} className="text-form underline">
              Create an account
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
