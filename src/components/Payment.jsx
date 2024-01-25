import React, { useState } from "react";
import "../scss/Payment.scss";
import { NavLink, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const sumOfPrices = location.state ? location.state.sumOfPrices : 0;
  //   console.log("sumofprice:", sumOfPrices);

  const handlePayment = () => {
    alert("Payment successful! Thank you for your purchase. ");
  };

  const [adressState, setAdressState] = useState(false);

  return (
    <div>
      <div className="flex gap-10 flex-wrap adress-forms">
        <div>
          <form className="billing-adress-form w-96 ">
            <h1>Billing Adress</h1>
            <lable htmlFor="first-name">First Name</lable>
            <input type="text" id="first-name" />

            <lable htmlFor="last-name">Last Name</lable>
            <input type="text" id="last-name" />

            <lable htmlFor="email"> Email</lable>
            <input type="email" id="email" />

            <lable htmlFor="county">Country</lable>
            <select name="" id="county">
              <option value=""> Germany</option>
            </select>

            <lable htmlFor="address-1">Adress Line 1</lable>
            <input type="text , number" id="address-1" />

            <lable htmlFor="address-2">Adress Line 2</lable>
            <input type="text" id="address-2" />

            <lable htmlFor="city">City</lable>
            <input type="text" id="city" />

            <lable htmlFor="postcode">Zip / Postcode</lable>
            <input type="number" id="postcode" />

            <lable htmlFor="mobile-phone"> Mobile Phone</lable>
            <input type="number" id="mobile-phone" />
          </form>
        </div>

        <div>
          <form className="billing-adress-form delivery-adress-form w-96 ">
            <h1>Delivery Adress</h1>

            <select
              name=""
              id=""
              className="option-delivery"
              onChange={(e) => {
                setAdressState(e.target.value === "alternative");
              }}
            >
              <option value="default">Default (same as billing adress)</option>
              <option value="alternative">
                Add an alternative delivery address
              </option>
            </select>
            {adressState && (
              <>
                <lable htmlFor="first-name">First Name</lable>
                <input type="text" id="first-name" />

                <lable htmlFor="last-name">Last Name</lable>
                <input type="text" id="last-name" />

                <lable htmlFor="county">Country</lable>
                <select name="" id="county">
                  <option value=""> Germany</option>
                </select>

                <lable htmlFor="address-1">Adress Line 1</lable>
                <input type="text , number" id="address-1" />

                <lable htmlFor="address-2">Adress Line 2</lable>
                <input type="text" id="address-2" />

                <lable htmlFor="city">City</lable>
                <input type="text" id="city" />

                <lable htmlFor="postcode">Zip / Postcode</lable>
                <input type="number" id="postcode" />

                <lable htmlFor="mobile-phone"> Mobile Phone</lable>
                <input type="number" id="mobile-phone" />
              </>
            )}
          </form>
        </div>
      </div>
      <div className="flex justify-center mb-2  text-xl mr-18">
        <label className="sign-up">
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
            {sumOfPrices < 100 ? <span>€ 15</span> : <span>-</span>}
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between px-4 mb-4 font-bold text-lg">
            <h2>Total For Your Order</h2>
            <span>€ {sumOfPrices + 15}</span>
          </div>
          <p>
            The total amount you pay includes all applicable customs duties &
            taxes. We guarantee no additional charges on delivery.
          </p>
        </div>
        <div className="payment-form-container w-96">
          <form className="payment-form flex flex-col">
            <h1>Payment</h1>
            <lable htmlFor="card-number">Card Number:</lable>
            <input
              type="text"
              id="card-number"
              placeholder="Enter card number"
            />

            <lable htmlFor="expiry-date">Expiry Date:</lable>
            <input type="date" id="expiry-date" placeholder="MM/YYYY" />

            <lable htmlFor="cvv"> Security code:</lable>
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

export default Payment;
