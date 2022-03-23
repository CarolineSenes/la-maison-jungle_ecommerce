import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import React from "react";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import "../src/styles/Layout.css";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  return (
    <React.Fragment>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
