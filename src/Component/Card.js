import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Card = ({ todo, addTodo }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="leftBox">
      <div className="box">
        <div className="cart">
          <div className="productImage">
            <img src={todo.img} alt="" className="img" />
          </div>
          <div className="productInfoBox">
            <div className="productInfo">
              <div className="productName">{todo.title}</div>
              <div className="productPrice">₹{todo.price}</div>
              <button
                type="submit"
                className="addToCartBtn"
                onClick={addTodo}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

