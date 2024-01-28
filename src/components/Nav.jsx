import { NavLink } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { useUsersContext } from "../hooks/useUsersContext";
// import { FaLeaf } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "../scss/Nav.scss";

export const Nav = () => {
  const { amountOfProducts } = useCartContext();
  const { firstLetter } = useUsersContext();

  const emailClickHandler = () => {
    const recipient = "contact@teapoint.com";
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  };

  const handleTeaPointClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="p-4 text-3xl">
      <div className="container mx-auto grid grid-cols-3 items-center gap-4">
        <div></div>
        <div className="text-center">
          <NavLink to={"/"} exact="true" onClick={handleTeaPointClick}>
            <span className="tracking-tight brand transition-all ease-in-out duration-300">
              TEA POINT
            </span>
          </NavLink>
        </div>
        <div
          id="icons-div"
          className="flex gap-5 md:gap-10 text-xl md:text-2xl"
        >
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
