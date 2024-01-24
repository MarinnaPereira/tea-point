import { NavLink } from "react-router-dom";
// import { FaLeaf } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "../scss/Nav.scss";

export const Nav = () => {
  const handleEmailClick = () => {
    const recipient = "contact@teapoint.com";
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  };

  return (
    <nav className="p-4 text-2xl">
      <div className="container mx-auto grid grid-cols-3 items-center gap-4">
        <div></div>
        <div className="text-center">
          <NavLink to={"/"}>
            <span className="tracking-tight brand">TEA POINT</span>
          </NavLink>
        </div>
        <div
          id="icons-div"
          className="flex gap-5 md:gap-10 text-xl md:text-2xl"
        >
          <a onClick={handleEmailClick}>
            <FaEnvelope />
          </a>
          <NavLink to={"/login"}>
            <FaRegUser />
          </NavLink>
          <NavLink to={"/cart"}>
            <FaShoppingBasket />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
