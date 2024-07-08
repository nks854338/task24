import React from "react";
import PaymentPage from "./PaymentPage";
import CartRender from "./CartRender";

const PaymentBox = () => {
  return (
    <div className="mainBox">
      <PaymentPage />
      <CartRender currentPage="PaymentBox" />
    </div>
  );
};

export default PaymentBox;
