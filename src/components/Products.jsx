import {NavLink} from "react-router-dom";

export const Products = () => {
  return (
    <div className="pb-5">
      <h2 className="text-[34px] text-center mt-10 font-cinzel">
        Explore Our Collection
      </h2>
      <p className="text-xl text-center text-[#5f5f5f] italic px-4">
        Enhance your tea rituals and discover the perfect tea time for every
        moment.
      </p>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 lg:px-32 md:px-24 px-12">
        <div className="relative overflow-hidden">
          <img
            src="./src/assets/section1.png"
            alt="Tea Leaves"
            className="w-full h-auto transition-transform duration-500 transform hover:scale-110 hover:z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-[#c0d1bd] bg-opacity-50 transition-opacity">
            <NavLink to="/products/tea-leaves">
              <button className="bg-[#41523fc0] px-10 py-10 transition-transform duration-300 transform hover:scale-110">
                <p className="text-white text-[23px]">See more</p>
              </button>
            </NavLink>
          </div>
          <p className="absolute bottom-0 text-2xl pb-5 left-1/2 transform -translate-x-1/2">
            Tea Leaves
          </p>
        </div>

        <div className="relative overflow-hidden">
          <img
            src="./src/assets/section2.png"
            alt="Tea Leaves"
            className="w-full h-auto transition-transform duration-500 transform hover:scale-110 hover:z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-[#c0d1bd] bg-opacity-50 transition-opacity">
            <NavLink to="/products/teaware">
              <button className="bg-[#41523fc0] px-10 py-10 transition-transform duration-300 transform hover:scale-110">
                <p className="text-white text-[23px]">See more</p>
              </button>
            </NavLink>
          </div>
          <p className="absolute bottom-0 text-2xl pb-5 left-1/2 transform -translate-x-1/2">
            Teaware
          </p>
        </div>

        <div className="relative overflow-hidden">
          <img
            src="./src/assets/section3.png"
            alt="Gift Voucher"
            className="w-full h-auto transition-transform duration-500 transform hover:scale-110 hover:z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-[#c0d1bd] bg-opacity-50 transition-opacity">
            <NavLink to="/products/voucher">
              <button className="bg-[#41523fc0] px-10 py-10 transition-transform duration-300 transform hover:scale-110">
                <p className="text-white text-[23px]">See more</p>
              </button>
            </NavLink>
          </div>
          <p className="absolute bottom-0 text-2xl pb-5 left-1/2 transform -translate-x-1/2">
            Gift Voucher
          </p>
        </div>
      </div>
    </div>
  );
};
