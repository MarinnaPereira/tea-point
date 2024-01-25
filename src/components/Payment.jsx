import React from "react";

const Payment = () => {
  const handlePayment = () => {
    alert("Payment successful! Thank you for your purchase. ");
  };
  return (
    <div>
      <form className="billing-adress-form">
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
        <input type="text number" id="address-2" />

        <lable htmlFor="city">City</lable>
        <input type="text" id="city" />

        <lable htmlFor="postcode">Zip / Postcode</lable>
        <input type="number" id="postcode" />

        <lable htmlFor="mobile-phone"> Mobile Phone</lable>
        <input type="number" id="mobile-phone" />

        <input type="checkbox" id="" />
        <label>
          I agree to receive information , special offers and promotion from TEA
          POINT
        </label>
      </form>
      <form className="payment-form">
        <lable htmlFor="card-number">Card Number:</lable>
        <input type="number" id="card-number" placeholder="Enter card number" />

        <lable htmlFor="expiry-date">Expiry Date:</lable>
        <input type="date" id="expiry-date" placeholder="MM/YYYY" />

        <lable htmlFor="cvv"> CVV:</lable>
        <input type="number" id="cvv" placeholder="Enter 3 digit cvv number" />

        <button onClick={handlePayment}>Pay and place order</button>
      </form>
    </div>
  );
};

export default Payment;
