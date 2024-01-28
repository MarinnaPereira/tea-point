import { useEffect, useState } from "react";
import "../scss/Payment.scss";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import cardPayment from "../assets/cardPayment.jpg";
import paypalImg from "../assets/paypal.png";
// import { FaPaypal } from "react-icons/fa";

export const Payment = () => {
  const { sumOfPrices, shippingCosts, total, setHasCheckedOut, emptyCart } =
    useCartContext();

  const isShippingFree = sumOfPrices > 100;

  useEffect(() => {
    setHasCheckedOut((prev) => !prev);
  }, []);

  const handlePayment = () => {
    emptyCart();
    alert("Payment successful! Thank you for your purchase. ");
  };

  const [addressState, setAddressState] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div>
      <div className="flex gap-10 flex-wrap address-forms">
        <div>
          <form className="billing-address-form w-96 ">
            <h1>Billing Address</h1>
            <label
              htmlFor="first-name"
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              First Name
            </label>
            <input type="text" id="first-name" />

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input type="text" id="last-name" />

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="email"
            >
              {" "}
              Email
            </label>
            <input type="email" id="email" />

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="county"
            >
              Country
            </label>
            <select name="" id="county">
              <option value=""> Germany</option>
            </select>

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="address-1"
            >
              Address Line 1
            </label>
            <input type="text , number" id="address-1" />

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="address-2"
            >
              Address Line 2
            </label>
            <input type="text" id="address-2" />

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="city"
            >
              City
            </label>
            <input type="text" id="city" />

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="postcode"
            >
              Zip / Postcode
            </label>
            <input type="number" id="postcode" />

            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
              htmlFor="mobile-phone"
            >
              {" "}
              Mobile Phone
            </label>
            <input type="number" id="mobile-phone" />
          </form>
        </div>

        <div>
          <form className="billing-address-form delivery-address-form w-96 ">
            <h1>Delivery Address</h1>

            <select
              name=""
              id=""
              className="option-delivery"
              onChange={(e) => {
                setAddressState(e.target.value === "alternative");
              }}
            >
              <option value="default">Default (same as billing address)</option>
              <option value="alternative">
                Add an alternative delivery address
              </option>
            </select>
            {addressState && (
              <>
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input type="text" id="first-name" />

                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input type="text" id="last-name" />

                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="county"
                >
                  Country
                </label>
                <select name="" id="county">
                  <option value=""> Germany</option>
                </select>

                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="address-1"
                >
                  Address Line 1
                </label>
                <input type="text , number" id="address-1" />

                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="address-2"
                >
                  Address Line 2
                </label>
                <input type="text" id="address-2" />

                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="city"
                >
                  City
                </label>
                <input type="text" id="city" />

                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="postcode"
                >
                  Zip / Postcode
                </label>
                <input type="number" id="postcode" />

                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500"
                  htmlFor="mobile-phone"
                >
                  {" "}
                  Mobile Phone
                </label>
                <input type="number" id="mobile-phone" />
              </>
            )}
          </form>
        </div>
      </div>
      <div className="flex justify-center mb-2  text-xl mr-18 ">
        <label className="sign-up w-1/2 md:w-3/4 lg:w-auto items-center">
          <input type="checkbox" name="signUp" id="signUp" /> I agree to receive
          information , special offers and promotion from TEA POINT!
        </label>
      </div>
      <div className="payment-container flex flex-row-reverse gap-20 flex-wrap justify-center ml-16">
        <div className="billing-summary w-96">
          <h1>Billing Summary</h1>
          <div className="flex justify-between px-4 mb-4 ">
            <p>Items total</p>
            <span>€ {sumOfPrices}</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between px-4 mb-4  ">
            <p>Shipping</p>
            {isShippingFree ? <p>Free shipping</p> : <p>€ {shippingCosts}</p>}
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between px-4 mb-4 font-bold text-lg">
            <h2>Total For Your Order</h2>
            <span> €{isShippingFree ? sumOfPrices : total}</span>
          </div>
          <p>
            The total amount you pay includes all applicable customs duties &
            taxes. We guarantee no additional charges on delivery.
          </p>
        </div>
        <div className="payment-form-container w-96">
          <form className="payment-form flex flex-col">
            <h1>Payment</h1>
            <div className="flex justify-between font-bold">
              <label className="border-b-4 ">
                <input
                  className="m-1 "
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
                <label htmlFor="">
                  <img
                    className="w-32 object-contain"
                    src={cardPayment}
                    alt=""
                  />
                </label>

                <label htmlFor="card-holder">Card Holder:</label>
                <input type="text" id="card-holder" />

                <label htmlFor="card-number">Card Number:</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="Enter card number"
                />

                <label htmlFor="expiry-date">Expiry Date:</label>
                <input
                  type="text"
                  id="expiry-date"
                  pattern="(0[1-9]|1[0-2])\/\d{2}"
                  placeholder="MM/YY"
                  className="w-1/2"
                />

                <label htmlFor="cvv"> Security code:</label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="CVV"
                  className="w-1/2"
                />
              </>
            )}
            <div className="flex justify-between mt-4">
              <label>
                <input
                  className="m-1 "
                  type="checkbox"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                PayPal
              </label>
              {/* <FaPaypal className="text-2xl text-blue-600" /> */}
            </div>

            {paymentMethod === "paypal" && (
              <div className="border-2">
                <div>
                  <img src={paypalImg} className="w-24 ml-8" alt="" />
                </div>
                <p className="ml-8 my-4 text-xl">Log In To PayPal</p>
                <label htmlFor="paypal-email">
                  <input
                    className="paypal-input p-1.5 "
                    type="email"
                    id="paypal-email"
                    placeholder="Email address"
                  />
                </label>
                <label htmlFor="paypal-password">
                  <input
                    className="paypal-input p-1.5 "
                    type="password"
                    id="paypal-password"
                    placeholder="Password"
                  />
                </label>
                <button className="paypal-button w-80">Log In</button>
              </div>
            )}

            <NavLink to="/order-confirmation">
              {" "}
              <button onClick={handlePayment}>Pay and place order</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};
