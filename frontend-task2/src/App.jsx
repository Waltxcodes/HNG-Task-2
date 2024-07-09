import React from "react";
import "./index.css";
import Products from "./Pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
