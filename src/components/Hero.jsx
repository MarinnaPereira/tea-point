import "../scss/Hero.scss";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="absolute top-[45%] md:top-[55%] left-5 md:left-12 lg:left-[21%]">
        <p className="text text-4xl md:text-5xl text-white font-cinzel">
          Find your perfect tea
        </p>
        <a href="/products" className="link text-[23px] text-white ml-1">
          Explore a Symphony of Tea Flavors
        </a>
      </div>
    </div>
  );
};
