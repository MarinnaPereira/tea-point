import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import cardPayment from "../assets/cardPayment.png";
import paypalImg from "../assets/paypal.png";
import { FaShoppingCart } from "react-icons/fa";
import "../scss/Payment.scss";

export const Payment = () => {
  const [addressState, setAddressState] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const { sumOfPrices, shippingCosts, total, setHasCheckedOut, emptyCart } =
    useCartContext();

  const isShippingFree = sumOfPrices > 100;

  useEffect(() => {
    setHasCheckedOut((prev) => !prev);
  }, []);

  const handlePayment = () => {
    emptyCart();
    alert("Payment successful! Thank you for your purchase.");
  };

  return (
    <section id="payment-section" className="flex justify-center px-12">
      <div className="payment-container justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 mt-14">
          <div>
            <form className="billing-address-form flex flex-col gap-2 w-96">
              <h1 className="text-xl px-2 py-2 mb-4 ">Billing Address</h1>
              <label
                htmlFor="first-name"
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="mx-4 mb-4 h-8 py-2 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="county"
              >
                Country
              </label>
              <select
                id="county"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="DE"> Germany</option>
                <option value="JP">Japan</option>
                <option value="IN">India</option>
                <option value="PT"> Portugal</option>
                <option value="PT"> Greece</option>
                <option value="EN">England</option>
                <option value="IR">Persia</option>
                <option value="AF">Afghanistan</option>
                <option value="PK">Pakistan</option>
                <option value="UA">Ukraine</option>
                <option value="PH">Philippines</option>
                <option value="TR">Turkey</option>
              </select>

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="address-1"
              >
                Address Line 1
              </label>
              <input
                type="text"
                id="address-1"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="address-2"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="address-2"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="postcode"
              >
                Zip / Postcode
              </label>
              <input
                type="number"
                id="postcode"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />

              <label
                className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                htmlFor="mobile-phone"
              >
                {" "}
                Mobile Phone
              </label>
              <input
                type="number"
                id="mobile-phone"
                className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
              />
            </form>
          </div>

          <div>
            <form className="delivery-address-form flex flex-col gap-2 w-96">
              <h1 className="text-xl px-2 py-2 mb-4 ">Delivery Address</h1>

              <select
                className="mx-4 mt-8 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                  setAddressState(e.target.value === "alternative");
                }}
              >
                <option value="default">Use billing address</option>
                <option value="alternative">Add delivery address</option>
              </select>
              {addressState && (
                <>
                  <label
                    htmlFor="first-name"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                    htmlFor="county"
                  >
                    Country
                  </label>
                  <select
                    id="county"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="DE"> Germany</option>
                    <option value="JP">Japan</option>
                    <option value="IN">India</option>
                    <option value="PT"> Portugal</option>
                    <option value="PT"> Greece</option>
                    <option value="EN">England</option>
                    <option value="IR">Persia</option>
                    <option value="AF">Afghanistan</option>
                    <option value="PK">Pakistan</option>
                    <option value="UA">Ukraine</option>
                    <option value="PH">Philippines</option>
                    <option value="TR">Turkey</option>
                  </select>

                  <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                    htmlFor="address-1"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="address-1"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                    htmlFor="address-2"
                  >
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    id="address-2"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                    htmlFor="postcode"
                  >
                    Zip / Postcode
                  </label>
                  <input
                    type="number"
                    id="postcode"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                    htmlFor="mobile-phone"
                  >
                    {" "}
                    Mobile Phone
                  </label>
                  <input
                    type="number"
                    id="mobile-phone"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />
                </>
              )}
            </form>
          </div>
        </div>

        <div className="text-center text-lg my-3 md:px-64 lg:px-0">
          <label>
            <input type="checkbox" name="signUp" id="signUp" /> I agree to
            receive information, special offers and promotions from TEA POINT!
          </label>
        </div>

        <div className="method-container flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-16 mt-8 mb-12">
          <div className="payment-form-container flex flex-col gap-2 w-96">
            <form className="payment-form flex flex-col gap-2 w-96">
              <h1 className="text-xl px-2 py-2 mb-4 ">Payment</h1>
              <div className="font-bold pl-4">
                <label className="font-bold pb-4 border-b-4">
                  <input
                    className="mb-6 mr-2"
                    type="checkbox"
                    value="cardPayment"
                    checked={paymentMethod === "cardPayment"}
                    onChange={() => setPaymentMethod("cardPayment")}
                  />
                  Credit / Debit Card
                </label>
              </div>

              {paymentMethod === "cardPayment" && (
                <>
                  <img
                    className="pl-4 w-48
                     object-cover"
                    src={cardPayment}
                    alt="visa-master-american-express-cards"
                  />

                  <label
                    htmlFor="card-holder"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                  >
                    Card Holder:
                  </label>
                  <input
                    type="text"
                    id="card-holder"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    htmlFor="card-number"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                  >
                    Card Number:
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="Enter card number"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                  />

                  <label
                    htmlFor="expiry-date"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                  >
                    Expiry Date:
                  </label>
                  <input
                    type="text"
                    id="expiry-date"
                    pattern="(0[1-9]|1[0-2])\/\d{2}"
                    placeholder="MM/YY"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline w-1/2"
                  />

                  <label
                    htmlFor="cvv"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500 font-bold mx-4"
                  >
                    {" "}
                    Security code:
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="CVV"
                    className="mx-4 mb-4 h-8 px-3 shadow leading-tight focus:outline-none focus:shadow-outline w-1/2"
                  />
                </>
              )}

              <div className="font-bold pl-4 mt-3">
                <label>
                  <input
                    className="mb-6 mr-2"
                    type="checkbox"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  PayPal
                </label>
              </div>

              {paymentMethod === "paypal" && (
                <div className="flex flex-col w-11/12 m-auto mb-4 border-2 px-4 text-gray-600">
                  <div className="flex items-center justify-between w-full">
                    <img src={paypalImg} className="w-28 " alt="paypal-logo" />{" "}
                    <div className="flex gap-2 items-center ">
                      <FaShoppingCart className="text-gray-500" />
                      <p className="text-gray-500">
                        €{isShippingFree ? sumOfPrices : total}
                      </p>
                    </div>
                  </div>
                  <p className=" my-4 text-xl">Log In To PayPal</p>
                  <label htmlFor="paypal-email">
                    <input
                      className="rounded-md mb-2 py-2 leading-tight border border-gray-400 focus:outline-none"
                      type="email"
                      id="paypal-email"
                      placeholder="  Email address"
                    />
                  </label>
                  <label htmlFor="paypal-password">
                    <input
                      className="rounded-md mb-2 py-2 leading-tight border border-gray-400 focus:outline-none"
                      type="password"
                      id="paypal-password"
                      placeholder="  Password"
                    />
                  </label>
                  <button className="paypal-button w-full rounded-md p-1.5 font-semibold mt-2">
                    Log In
                  </button>
                  <p className="border-b-2 w-full pb-2 mt-4 text-center text-blue-400">
                    Having trouble logging in?
                  </p>

                  <button className="bg-gray-200 w-full rounded-md p-1.5 font-semibold my-6">
                    Check Out as a Guest
                  </button>
                </div>
              )}

              <NavLink to="/order-confirmation" className="flex justify-center">
                {" "}
                <button
                  onClick={handlePayment}
                  className="payment-button w-56 rounded-xl mt-2 px-6 py-2 text-slate-100 transition-all ease-in-out duration-300"
                >
                  Pay and place order
                </button>
              </NavLink>
            </form>
          </div>
          <div className="billing-summary w-96 flex flex-col gap-2">
            <h1 className="text-xl px-2 py-2 mb-4 ">Billing Summary</h1>
            <div className="flex justify-between px-4 mb-4">
              <p>Subtotal</p>
              <span>€{sumOfPrices}</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between px-4 mb-4">
              <p>Shipping costs</p>
              {isShippingFree ? <p>Free shipping</p> : <p>€{shippingCosts}</p>}
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between px-4 mb-4 font-bold text-lg">
              <h2>Total</h2>
              <span>€{isShippingFree ? sumOfPrices : total}</span>
            </div>
            <p className="pl-4">
              The total amount you pay includes all applicable customs duties &
              taxes. We guarantee no additional charges on delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
