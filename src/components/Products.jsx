import {NavLink} from "react-router-dom";
import section1 from "../assets/section1.png";
import section2 from "../assets/section2.png";
import section3 from "../assets/section3.png";

export const Products = () => {
  const buttonStyling =
    "bg-[#41523fc0] w-[300px] lg:w-auto px-5 py-4 lg:px-10 lg:py-10 lg:transition-transform lg:duration-300 lg:transform lg:hover:scale-110 mt-52 lg:mt-auto lg:flex lg:flex-col lg:items-center lg:justify-center";
  const textStyling =
    "absolute bottom-0 text-2xl pb-5 left-1/2 transform -translate-x-1/2 hidden lg:inline";
  const sectionStyling =
    "w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 lg:px-32 md:px-24 px-12";
  const containerStyling =
    "absolute inset-0 flex items-center justify-center lg:opacity-0 lg:hover:opacity-100 lg:bg-[#c0d1bd] lg:bg-opacity-50 lg:transition-opacity";

  return (
    <div className="pb-5">
      <h2 className="text-[34px] text-center mt-10 font-cinzel">
        Explore Our Collection
      </h2>
      <p className="text-xl text-center text-[#5f5f5f] italic px-4">
        Enhance your tea rituals and discover the perfect tea time for every
        moment.
      </p>

      <section className={sectionStyling}>
        <div className="relative overflow-hidden">
          <img src={section1} alt="Tea Leaves" className="w-full h-auto" />
          <div className={containerStyling}>
            <NavLink to="/products/tea-leaves">
              <button className={buttonStyling}>
                <p className="text-white hidden lg:inline lg:text-[23px]">
                  See more
                </p>
                <p className="text-white inline text-2xl lg:hidden">
                  Tea Leaves
                </p>
              </button>
            </NavLink>
          </div>
          <p className={textStyling}>Tea Leaves</p>
        </div>

        <div className="relative overflow-hidden">
          <img src={section2} alt="Teaware" className="w-full h-auto" />
          <div className={containerStyling}>
            <NavLink to="/products/teaware">
              <button className={buttonStyling}>
                <p className="text-white hidden lg:inline lg:text-[23px]">
                  See more
                </p>
                <p className="text-white inline text-2xl lg:hidden">Teaware</p>
              </button>
            </NavLink>
          </div>
          <p className={textStyling}>Teaware</p>
        </div>

        <div className="relative overflow-hidden">
          <img src={section3} alt="Gift Voucher" className="w-full h-auto" />
          <div className={containerStyling}>
            <NavLink to="/products/voucher">
              <button className={buttonStyling}>
                <p className="text-white hidden lg:inline lg:text-[23px]">
                  See more
                </p>
                <p className="text-white inline text-2xl lg:hidden">
                  Gift Voucher
                </p>
              </button>
            </NavLink>
          </div>
          <p className={textStyling}>Gift Voucher</p>
        </div>
      </section>
    </div>
  );
};
