import { useEffect, useState } from "react";
import "../scss/Payment.scss";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

export const Payment = () => {
  const { sumOfPrices, shippingCosts, total, setHasCheckedOut, emptyCart } =
    useCartContext();

  const isShippingFree = sumOfPrices > 100;

  useEffect(() => {
    setHasCheckedOut((prev) => !prev);
  }, []);

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    emptyCart();
    alert("Payment successful! Thank you for your purchase. ");
  };

  const [addressState, setAddressState] = useState(false);

  return (
    <div>
      <div className="flex gap-10 flex-wrap address-forms">
        <div>
          <form className="billing-address-form w-96 ">
            <h1>Billing Address</h1>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="email"> Email</label>
            <input type="email" id="email" />

            <label htmlFor="county">Country</label>
            <select name="" id="county">
              <option value=""> Germany</option>
            </select>

            <label htmlFor="address-1">Address Line 1</label>
            <input type="text , number" id="address-1" />

            <label htmlFor="address-2">Address Line 2</label>
            <input type="text" id="address-2" />

            <label htmlFor="city">City</label>
            <input type="text" id="city" />

            <label htmlFor="postcode">Zip / Postcode</label>
            <input type="number" id="postcode" />

            <label htmlFor="mobile-phone"> Mobile Phone</label>
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
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="county">Country</label>
                <select name="" id="county">
                  <option value=""> Germany</option>
                </select>

                <label htmlFor="address-1">Address Line 1</label>
                <input type="text , number" id="address-1" />

                <label htmlFor="address-2">Address Line 2</label>
                <input type="text" id="address-2" />

                <label htmlFor="city">City</label>
                <input type="text" id="city" />

                <label htmlFor="postcode">Zip / Postcode</label>
                <input type="number" id="postcode" />

                <label htmlFor="mobile-phone"> Mobile Phone</label>
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
              <label className="mr-4 ">
                <input
                  className="m-1 "
                  type="checkbox"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={() => setPaymentMethod("creditCard")}
                />
                Credit Card
              </label>

              <label>
                <input
                  className="m-1 "
                  type="checkbox"
                  value="debitCard"
                  checked={paymentMethod === "debitCard"}
                  onChange={() => setPaymentMethod("debitCard")}
                />
                Debit Card
              </label>
            </div>

            <label htmlFor="card-number">Card Number:</label>
            <input
              type="text"
              id="card-number"
              placeholder="Enter card number"
            />

            <label htmlFor="expiry-date">Expiry Date:</label>
            <input type="date" id="expiry-date" placeholder="MM/YYYY" />

            <label htmlFor="cvv"> Security code:</label>
            <input
              type="text"
              id="cvv"
              placeholder="Enter 3 digit cvv number"
            />
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
