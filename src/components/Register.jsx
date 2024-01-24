import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUsersContext } from "../contexts/UsersContext";
import "../scss/Register.scss";

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

    const currentData = {
      firstName: firstNameInput.current.value.trim(),
      lastName: lastNameInput.current.value.trim(),
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
    <div className="register-container">
      <h1>Register</h1>
      <p>
        For an even better experience, create your account and enjoy our
        benefits.
      </p>
      <form onSubmit={submitHandler}>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="First Name*"
          ref={firstNameInput}
          required
        />
        <input
          type="text"
          placeholder="Last Name*"
          ref={lastNameInput}
          required
        />
        <input
          type="email"
          ref={emailInput}
          placeholder="youremail@email.com*"
          required
        />
        <input
          type="password"
          placeholder="Password*"
          ref={passwordInput}
          required
        />
        <input
          type="password"
          placeholder="Confirm password*"
          ref={confirmPasswordInput}
          required
        />
        <label>
          <input type="checkbox" name="signUp" id="signUp" />I want to sign up
          to receive exclusive promotions and benefits from Tea Point!
        </label>
        <button>Create account</button>
      </form>
      {successfullyRegistered && (
        <p>Registration completed successfully! You can now log in.</p>
      )}
      <NavLink to={"/login"}>Go back to login</NavLink>
    </div>
  );
};
