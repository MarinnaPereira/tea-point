import {useCartContext} from "../../hooks/useCartContext";
import {products} from "../../data/products";
import {Subnav} from "../Subnav";

const teaWare = products.filter((product) => product.type === "teaware");

export const Teaware = () => {
  const {addProduct} = useCartContext();
  const handleAddToCart = (product) => {
    addProduct(product);
  };

  return (
    <section>
      <Subnav />
      <section className="pb-5">
        <h2 className="text-[34px] text-center mt-10 font-cinzel">Teaware</h2>
        <p className="text-center text-[#5f5f5f] italic px-4">
          Elevate your tea experience with our meticulously crafted teaware.
        </p>
        <p className="text-center text-[#5f5f5f] italic px-4">
          Indulge in a simple and mindful brewing ritual that enhances the
          essence of each cup.
        </p>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 lg:px-32 md:px-24 px-12">
          {teaWare.map((product) => (
            <div key={product.id} className="relative group">
              <div className="relative">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-auto lg:transition-transform lg:duration-300 lg:transform lg:group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <button
                    className="bg-[#c0d1bd] w-full m-2 lg:m-0 px-10 py-6 opacity-90"
                    onClick={() => {
                      handleAddToCart(product);
                    }}
                  >
                    <p className="text-white text-[23px]">Add to Cart</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[25px] pt-5">{product.productName}</h3>
                <p className="text-[#6f6f6f] italic">{product.description}</p>
                {product.id.startsWith("tc") ? (
                  <p className="text-[20px]">
                    {product.price.toFixed(2)} Euro / 1 pc
                  </p>
                ) : product.id.startsWith("ts") ? (
                  <p className="text-[20px]">
                    {product.price.toFixed(2)} Euro / 1 pot & 2 cups
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
