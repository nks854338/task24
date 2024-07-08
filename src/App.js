import React from "react";
import "./App.css";
import Header from "./Component/Header";
import MainBox from "./Component/MainBox";
import PaymentBox from "./Component/PaymentBox";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainBox />} />
        <Route path="/mainbox" element={<MainBox />} />
        <Route path="/paymentbox" element={<PaymentBox />} />
      </Routes>
    </div>
  );
}

export default App;
