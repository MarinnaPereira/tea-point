import "../scss/OrderConfirmation.scss";

export const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <h2>Order Successfully Registered! </h2>
      <p>
        Thank you for choosing <span>Tea Point</span>!
      </p>
      <p>A confirmation has been sent to your registered email address.</p>
      <p>In a few seconds, you will be redirected to our homepage.</p>
    </div>
  );
};
