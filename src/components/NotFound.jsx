import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import goToHomeImg from "../assets/back-to-home.jpg";
import productImg from "../assets/back-to-product-2.jpg";
import "../scss/NotFound.scss";
export const NotFound = () => {
  return (
    <div className="notfound-container">
      <div>
        <h1>Sorry we can't find that page</h1>
        <p>
          Our search can help you discover available products or use the link
          below
        </p>
        <div className="flex flex-wrap gap-10 ">
          <NavLink to="/">
            <img src={goToHomeImg} alt="" />

            <span className="flex gap-1">
              <h2>Home</h2>
              <FaArrowRight className="mt-2" />
            </span>
          </NavLink>

          <NavLink to="/products">
            <img src={productImg} alt="" />

            <span className="flex gap-1">
              <h2>Tea Assortment</h2>
              <FaArrowRight className="mt-2" />
            </span>
          </NavLink>
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
};
