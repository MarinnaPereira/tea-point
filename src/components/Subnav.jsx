import { NavLink } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import "../scss/Subnav.scss";

export const Subnav = () => {
  return (
    <div id="subnav" className="w-full hidden lg:block ">
      <div className="icons-container w-14 h-52 rounded-full flex-col text-3xl gap-10 flex items-center justify-center">
        <NavLink
          to="/products/tea-leaves"
          className="transition-all ease-in-out duration-300"
        >
          <FaLeaf title="tea leaves" />
        </NavLink>
        <NavLink
          to="/products/teaware"
          className="transition-all ease-in-out duration-300"
        >
          <FaCoffee title="teaware" />
        </NavLink>
        <NavLink
          to="/products/voucher"
          className="transition-all ease-in-out duration-300"
        >
          <FaGift title="gift vouchers" />
        </NavLink>
      </div>
    </div>
  );
};
