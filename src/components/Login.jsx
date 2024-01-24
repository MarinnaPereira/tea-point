import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUsersContext } from "../contexts/UsersContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "../scss/Login.scss";

export const Login = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { usersState } = useUsersContext();
  console.log(usersState);

  const clickHandler = () => {
    setShowPassword((prev) => !prev);
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

    if (loginInfo.email === "") {
      setError("Please enter your email.");
      emailInput.current.focus();
      emailInput.current.value = "";
    } else if (!registeredUser) {
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
      navigate("/cart");
    }
  };

  return (
    <div className="register-container">
      <h1>Login</h1>
      <p>Great that you're back! Please log in with your email and password.</p>
      <form onSubmit={submitHandler}>
        {error && <p>{error}</p>}
        <input
          type="email"
          ref={emailInput}
          placeholder="youremail@email.com*"
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password*"
          ref={passwordInput}
          required
        />
        <div onClick={clickHandler}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
        <button>Login</button>
      </form>
      <NavLink to={"/register"}>Create an account</NavLink>
    </div>
  );
};
