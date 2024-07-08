import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalAmount = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    alert("Payment Successful!");
    navigate("/");
  };

  return (
    <>
    <div className="container">
    <div class="PaymentDetails">
              <h2 class="paymentInfoh2">Payment</h2>
              <div className="amonut">Total Amount: ₹{totalAmount}</div>
              <div class="paymentBox">
                <div class="paymentTypeBox">
                  <div class="paymentType">
                    <i class="fa-solid fa-bag-shopping"></i>Cart
                  </div>
                  <div class="paymentType">
                    <i class="fa-solid fa-bag-shopping"></i>Crypto
                  </div>
                  <div class="paymentType">
                    <i class="fa-solid fa-bag-shopping"></i>Bank
                  </div>
                  <div class="paymentMoreType">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>

                <form onSubmit={handlePayment}>
                <div class="cardBox userInfo">
                  <p>Card Number:</p>
                  <input type="text" class="card input50" />
                </div>

                <div class="cardTimeBox">
                  <div class="expirytime box50 userInfo">
                    <p>Expiry:</p>
                    <input type="email" class="input50" placeholder="MM/YY" />
                  </div>
                  <div class="cvcBox box50 userInfo">
                    <p class="cvcP">CVC:</p>
                    <input type="text" class="input50" placeholder="value" />
                  </div>
                </div>

                <div class="countryInfoBox userInfo">
                  <div class="cvcBox box50">
                    <p class="cvcP">ZIP:</p>
                    <input type="text" class="input50" placeholder="XXX-XXXX" />
                  </div>
                </div>
                </form>
                <button className="continueBtn">Confirm payment</button>
              </div>
            </div>
            </div>
    </>
  );
};

export default PaymentPage;

