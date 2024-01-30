import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import goHomeImg from "../assets/goHome.jpg";
import goStoreImg from "../assets/goStore.jpg";
import "../scss/NotFound.scss";

export const NotFound = () => {
  return (
    <div className="not-found-container flex items-center justify-center pb-10">
      <div className="pt-10 pl-1 md:pl:0 md:pt-20 flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold md:font-bold mb-8">
          {`Sorry! It seems that the page you're looking for cannot be found.`}
        </h1>
        <p className="text-lg mb-8">
          Feel free to use the links below to either return to our homepage or
          explore our store:
        </p>
        <div className="flex flex-wrap gap-10 md:items-stretch m-auto">
          <NavLink to="/">
            <img src={goHomeImg} alt="tea-cup" />

            <span className="flex gap-1 pt-1">
              <h2 className="text-xl ">Home</h2>
              <FaArrowRight className="arrow mt-2" />
            </span>
          </NavLink>

          <NavLink to="/products">
            <img src={goStoreImg} alt="tea-cup-with-tea-leaves" />

            <span className="flex gap-1 pt-1">
              <h2 className="text-xl">Store</h2>
              <FaArrowRight className="arrow mt-2" />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
