import React from "react";

const Header = () => {
  return (
    <div className="navBar">
      <div className="logo">Sneaker Store</div>
      <ul className="navbar-list">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <div className="menu"><i class="fa-solid fa-bars"></i></div>
    </div>
  );
};

export default Header;
