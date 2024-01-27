import {products} from "../../data";
import {useCartContext} from "../../hooks/useCartContext";

const teaLeaves = products.filter((product) => product.type === "teaLeaves");

const TeaLeaves = () => {
  const {addProduct} = useCartContext();
  const handleAddToCart = (product) => {
    addProduct(product);
  };

  return (
    <div className="pb-5">
      <h2 className="text-[34px] text-center mt-10 font-cinzel">Tea</h2>
      <p className="text-center text-[#5f5f5f] italic px-4">
        Savor the essence of Asia with our exclusive single-origin teas.
      </p>
      <p className="text-center text-[#5f5f5f] italic px-4">
        {`Expertly crafted to capture each region's unique character, our
      collection reflects the artistry of skilled tea makers.`}
      </p>
      <div className="flex justify-center">
        <img className="w-[75%]" src="../src/assets/tea-leaves.png" />
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5 lg:px-32 md:px-24 px-12">
        {teaLeaves.map((product) => (
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
            <p className="text-[20px]">
              {product.price.toFixed(2)} Euro / 100g
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaLeaves;
