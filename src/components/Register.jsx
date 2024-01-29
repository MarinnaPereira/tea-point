import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUsersContext } from "../hooks/useUsersContext";
import "../scss/LoginRegister.scss";

export const Register = () => {
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);
  const [error, setError] = useState(null);
  const [successfullyRegistered, setSuccessfullyRegistered] = useState("");
  const { usersState, addUser } = useUsersContext();

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);
    setSuccessfullyRegistered("");
    // console.log(usersState);

    const currentData = {
      firstName: firstNameInput.current.value.trim(),
      lastName: lastNameInput.current.value.trim(),
      name: `${
        firstNameInput.current.value.trim() +
        " " +
        lastNameInput.current.value.trim()
      }`,
      email: emailInput.current.value.trim(),
      password: passwordInput.current.value.trim(),
    };

    const registeredUser = usersState.find(
      (user) => user.email === currentData.email
    );

    if (!currentData.firstName) {
      setError("Please enter your first name.");
      firstNameInput.current.focus();
      firstNameInput.current.value = "";
    } else if (!currentData.lastName) {
      setError("Please enter your last name.");
      lastNameInput.current.focus();
      lastNameInput.current.value = "";
    } else if (registeredUser) {
      setError(
        "An account with the entered email already exists. Please enter a different email address or log in if you have an existing account."
      );
      emailInput.current.focus();
      emailInput.current.value = "";
    } else if (
      currentData.password !== confirmPasswordInput.current.value.trim()
    ) {
      setError("Passwords don't match.");
      passwordInput.current.focus();
      passwordInput.current.value = "";
      confirmPasswordInput.current.value = "";
    } else {
      addUser(currentData);
      setSuccessfullyRegistered(true);
      firstNameInput.current.value = "";
      lastNameInput.current.value = "";
      emailInput.current.value = "";
      passwordInput.current.value = "";
      confirmPasswordInput.current.value = "";
    }
  };

  return (
    <div id="form-container" className="flex justify-center">
      <div id="form-div" className="px-8 pt-6 pb-8 mt-6 mb-12">
        <h1 className="form-heading text-2xl my-3 px-8 py-1">Register</h1>
        <p className="text-form px-8 py-3">
          For an even better experience, create your account and enjoy our
          benefits.
        </p>
        <form onSubmit={submitHandler} className="px-8">
          {error && <p className="error-msg text-red-600">{error}</p>}
          <input
            type="text"
            placeholder="First Name*"
            ref={firstNameInput}
            required
            className="input-div shadow border w-full my-3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Last Name*"
            ref={lastNameInput}
            required
            className="input-div shadow border w-full my-3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="email"
            ref={emailInput}
            placeholder="youremail@email.com*"
            required
            className="input-div shadow border w-full my-3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="password"
            placeholder="Password*"
            ref={passwordInput}
            required
            className="input-div shadow border w-full my-3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="password"
            placeholder="Confirm password*"
            ref={confirmPasswordInput}
            required
            className="input-div shadow border w-full my-3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label>
            <input type="checkbox" name="signUp" id="signUp" /> I want to sign
            up to receive exclusive promotions and benefits from Tea Point!
          </label>
          <div className="flex flex-col md:flex-row justify-between items-center py-5">
            <button className="rounded-xl px-6 py-2 text-slate-100 transition-all ease-in-out duration-300 mb-5 md:mb-0">
              Create account
            </button>
            <NavLink to={"/login"} className="text-form underline">
              Go back to login
            </NavLink>
          </div>
          {successfullyRegistered && (
            <p className="success-msg text-center md:text-left">
              Successfully registered!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
