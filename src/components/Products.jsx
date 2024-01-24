import React from "react";
import { products } from "../data";
import { UseCartContext } from "../contexts/CartContext";

export const Products = () => {
  const { addProduct } = UseCartContext();
  const handleAddToCart = (product) => {
    addProduct(product);
  };
  return (
    <>
      <h2 className="text-[30px] text-center">Tea</h2>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 lg:px-32 md:px-24 px-12">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="bg-[#c0d1bd] text-white text-[23px] w-full px-10 py-6"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
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
    </>
  );
};
