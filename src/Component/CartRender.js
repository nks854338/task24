import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

const CartRender = ({ currentPage }) => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const totalAmount = cart.reduce((acc, item) => acc + Number(item.price) * item.count, 0);

  const proceedToPayment = () => {
    navigate("/paymentbox");
  };

  const continueShopping = () => {
    navigate("/mainbox");
  };

  const incrementItem = (sno) => {
    dispatch({ type: "INCREMENT_ITEM", payload: sno });
  };

  const decrementItem = (sno) => {
    dispatch({ type: "DECREMENT_ITEM", payload: sno });
  };

  return (
    <div className="rightBox">
      <div className="addedItemHeading">Shopping Cart</div>
      <div className="addedItemList">
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div className="table">
            <table id="addedItemTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.sno}>
                    <td>
                      <div className="cartImage">
                        <img src={item.img} alt="" className="img" height="40px" />
                      </div>
                    </td>
                    <td>
                      <div className="productName">{item.title}</div>
                      <div className="productPrice">₹{item.price}</div>
                    </td>
                    <td style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <button className="countBtn" onClick={() => decrementItem(item.sno)}><i className="fa-solid fa-minus"></i></button>
                      <p className="count">{item.count}</p>
                      <button className="countBtn" onClick={() => incrementItem(item.sno)}><i className="fa-solid fa-plus"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="amountInfo">
          <div className="totalAmountName">Total Amount:</div>
          <div id="totalAmountValue">₹{totalAmount}</div>
        </div>
        <div className="proceedPaymentBox">
          {currentPage === "MainBox" ? (
            <button className="proceedPayment" onClick={proceedToPayment}>Proceed to Payment</button>
          ) : (
            <button className="proceedPayment" onClick={continueShopping}>Continue Shopping</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartRender;
