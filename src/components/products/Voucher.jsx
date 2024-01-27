import {useEffect} from "react";
import {products} from "../../data/products";
import {useCartContext} from "../../hooks/useCartContext";

const voucher = products.filter((product) => product.type === "voucher");

const Voucher = () => {
  const {addProduct} = useCartContext();
  const handleAddToCart = (product) => {
    addProduct(product);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pb-5">
      <h2 className="text-[34px] text-center mt-10 font-cinzel">
        Gift Voucher
      </h2>
      <p className="text-center text-[#5f5f5f] italic px-4">
        Gift the joy of exquisite teas to your loved one with our TEA POINT Gift
        Voucher!
      </p>
      <p className="text-center text-[#5f5f5f] italic px-4">
        Redeem this voucher for a variety of teas and teawares in-store or
        online.
      </p>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 lg:px-32 md:px-24 px-12">
        {voucher.map((product) => (
          <div key={product.id} className="relative group">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-28 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="bg-[#c0d1bd] w-full px-10 py-6 opacity-90"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                <p className="text-white text-[23px]">Add to Cart</p>
              </button>
            </div>
            <h3 className="text-[25px] pt-5">{product.productName}</h3>
            <p className="text-[#6f6f6f] italic">{product.description}</p>
            <p className="text-[20px]">{product.price.toFixed(2)} Euro</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Voucher;
