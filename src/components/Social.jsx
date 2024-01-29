import { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import "../scss/Social.scss";

export const Social = () => {
  const emailInput = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    emailInput.current.value = "";
    alert("Email successfully registered!");
  };

  return (
    <section className="social p-8">
      <div className="flex justify-center gap-6 text-2xl mb-7">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="transition-all ease-in-out duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="transition-all ease-in-out duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.tiktok.com/en/"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="transition-all ease-in-out duration-300"
        >
          <FaTiktok />
        </a>
      </div>
      <div className="newsletter text-center">
        <label htmlFor="email" className="block text-lg font-medium mb-2">
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
            className="text-white py-2 px-4 rounded-full block mx-auto transition-all ease-in-out duration-300"
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
