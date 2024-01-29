import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { useUsersContext } from "../hooks/useUsersContext";
import { FaStore } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "../scss/Nav.scss";

export const Nav = () => {
  const [showIcons, setShowIcons] = useState(false);
  const { firstLetter } = useUsersContext();
  const { amountOfProducts } = useCartContext();

  const toggleHandler = () => {
    setShowIcons((prev) => !prev);
  };

  const emailClickHandler = () => {
    const recipient = "contact@teapoint.com";
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  };

  return (
    <nav className="p-4 text-3xl">
      <div className="container mx-auto grid grid-cols-3 items-center gap-4">
        <div className="text-center col-start-2">
          <NavLink to={"/"} exact="true">
            <span className="tracking-tight brand transition-all ease-in-out duration-300">
              TEA POINT
            </span>
          </NavLink>
        </div>{" "}
        <div className=" flex justify-end pr-2 md:pr-1 lg:hidden">
          <button
            onClick={toggleHandler}
            className="toggle flex rounded px-3 py-2"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>{" "}
        </div>
        <div
          className={`icons-div row-start-2 col-start-2 lg:row-start-1 lg:col-start-3 flex justify-center gap-5 md:gap-10 text-xl md:text-2xl ${
            !showIcons && "hidden lg:flex"
          }`}
        >
          <NavLink
            to="/products"
            className="transition-all ease-in-out duration-300"
          >
            <FaStore title="store" />
          </NavLink>
          <a
            onClick={emailClickHandler}
            className="transition-all ease-in-out duration-300"
          >
            <FaEnvelope />
          </a>
          {firstLetter ? (
            <NavLink
              to="/logout"
              className="transition-all ease-in-out duration-300"
            >
              <span id="first-letter" className="rounded-full">
                {firstLetter}
              </span>
            </NavLink>
          ) : (
            <NavLink
              to={"/login"}
              className="transition-all ease-in-out duration-300"
            >
              <FaRegUser />
            </NavLink>
          )}

          <NavLink
            to={"/cart"}
            className="transition-all ease-in-out duration-300"
          >
            <div>
              <FaShoppingBasket />
            </div>
          </NavLink>
          {amountOfProducts > 0 && (
            <span
              id="amountSpan"
              className="flex justify-center relative -top-2 right-6 md:right-11 p-2 text-xs"
            >
              {amountOfProducts}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};
