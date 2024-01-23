import { NavLink } from "react-router-dom";
// import { FaLeaf } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "../scss/Nav.scss";

export const Nav = () => {
  return (
    <nav className="p-4 text-gray-700 text-2xl">
      <div className="container mx-auto grid grid-cols-3 items-center gap-4">
        <div></div>
        <div className="text-center">
          <NavLink to={"/"}>
            <span className="tracking-tight hover-nl">TEA POINT</span>
          </NavLink>
        </div>
        <div className="flex gap-5 md:gap-10 text-xl md:text-2xl">
          <NavLink to={"/"} className="hover-nl">
            <FaEnvelope />
          </NavLink>
          <NavLink to={"/login"} className="hover-nl">
            <FaRegUser />
          </NavLink>
          <NavLink to={"/cart"} className="hover-nl">
            <FaShoppingBasket />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
