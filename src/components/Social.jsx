import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import "../scss/Social.scss";
import { useRef } from "react";

export const Social = () => {
  const emailInput = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    emailInput.current.value = "";
    alert("Email successfully registered!");
  };
  return (
    <section className="social p-6">
      <div className="flex justify-center gap-6 text-2xl mb-8">
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTiktok />
        </a>
      </div>
      <div className="newsletter text-center">
        <label htmlFor="email" className="block font-medium mb-2">
          Subscribe to our newsletter
        </label>
        <form onSubmit={clickHandler}>
          <input
            className="border border-grey-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-center"
            id="email"
            type="email"
            placeholder="your email"
            required
            ref={emailInput}
          />
          <button
            className="text-white py-2 px-4 rounded-full block mx-auto"
            id="btn-subscribe"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
