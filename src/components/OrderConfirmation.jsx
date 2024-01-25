import "../scss/OrderConfirmation.scss";

import logo from "../assets/logo.png";
export const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <div>
        <p>
          Thank You for Choosing <span>TEA POINT!</span>
        </p>
        <p>It was truly a pleasure having you as our customer</p>
        <p style={{ marginBottom: "2rem" }}>
          An order confirmation has been sent to your registered email address.
        </p>
        <h2>Thank you!</h2>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
