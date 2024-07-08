import React from "react";
import ProductCart from "./ProductCart";
import CartRender from "./CartRender";

const MainBox = () => {
  return (
    <div className="mainBox">
      <ProductCart />
      <CartRender currentPage="MainBox" />
    </div>
  );
};

export default MainBox;
