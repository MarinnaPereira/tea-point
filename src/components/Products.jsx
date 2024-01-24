import {products} from "../data";
import {UseCartContext} from "../contexts/CartContext";

const teaLeaves = products.filter((product) => product.type === "teaLeaves");
const teaWare = products.filter((product) => product.type === "teaWare");

export const Products = () => {
  const {addProduct} = UseCartContext();
  return (
    <>
      <section>
        <h2 className="text-[30px] text-center mt-10">Tea</h2>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 lg:px-32 md:px-24 px-12">
          {teaLeaves.map((product) => (
            <div key={product.id} className="relative group">
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="bg-[#c0d1bd]  w-full px-10 py-6 opacity-90"
                  onClick={() => {
                    addProduct(product.id);
                    console.log("Button clicked. Product ID:", product.id);
                  }}
                >
                  <p className="text-white text-[23px]">Add to Cart</p>
                </button>
              </div>
              <h3 className="text-[25px] text-[#444444] pt-5">
                {product.productName}
              </h3>
              <p className="text-[20px] text-[#444444]">
                {product.price.toFixed(2)} Euro / 100g
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[30px] text-center mt-28">Tea Ware</h2>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 lg:px-32 md:px-24 px-12">
          {teaWare.map((product) => (
            <div key={product.id} className="relative group">
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="bg-[#c0d1bd]  w-full px-10 py-6 opacity-90"
                  onClick={() => {
                    addProduct(product.id);
                    console.log("Button clicked. Product ID:", product.id);
                  }}
                >
                  <p className="text-white text-[23px]">Add to Cart</p>
                </button>
              </div>
              <h3 className="text-[25px] text-[#444444] pt-5">
                {product.productName}
              </h3>
              <p className="text-[20px] text-[#444444]">
                {product.price.toFixed(2)} Euro / 1pc
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
