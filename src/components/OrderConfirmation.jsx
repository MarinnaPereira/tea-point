import logo from "../assets/logo.png";
import "../scss/OrderConfirmation.scss";

export const OrderConfirmation = () => {
  return (
    <div className="confirmation-container flex justify-center items-center md:py-10 ">
      <div className="message rounded overflow-hidden pb-10 md:mb-0 md:w-full">
        <div className="text pb-4">
          <h1 className="heading pt-5 md:pt-0 pl-2 md:pl-4 heading font-semibold md:font-bold text-xl mb-3">
            Thank you for choosing TEA POINT!
          </h1>
          <p className="pl-2 md:pl-4 pb-2 font-medium text-base">
            It was truly a pleasure having you as our customer!
          </p>
          <p className="pl-2 md:pl-4 pb-2 font-medium text-base">
            Your order is confirmed and a detailed receipt has been sent to your
            email address.
          </p>
          <p className="pl-2 md:pl-4 pb-2 font-medium text-base">
            If you have any questions or need assistance, don't hesitate to send
            us a message at{" "}
            <span className="font-mono"> contact@teapoint.com.</span>
          </p>
          <p className="pl-2 md:pl-4 font-medium text-base  mb-3">
            We can't wait to welcome you back soon for another delightful
            experience at TEA POINT!
          </p>
        </div>
        <div className="pb-5">
          <img className="img w-48 m-auto" src={logo} alt="tea-point-logo" />
        </div>
      </div>
    </div>
  );
};
