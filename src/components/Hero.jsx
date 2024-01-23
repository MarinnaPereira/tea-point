import teaImg from "../image/6.jpeg";
// import logo from "../image/logo.png";
const Hero = () => {
  return (
    <div>
      <img style={{ width: "100vw", height: "100vh" }} src={teaImg} alt="tea" />
      {/* <div>
        <p>Find your perfact tea</p>
        <input type="text" />
      </div> */}
    </div>
  );
};

export default Hero;
