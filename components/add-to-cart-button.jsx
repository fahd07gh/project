"use client";
import React, { useEffect, useState } from "react";

export default function addToCartButton({ id }) {
  console.log("ididididididididididididididididvv", id);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  // Load items from localStorage on component mount
  //   useEffect(() => {
  //     async function getLo(params) {
  //       const cart = (await JSON.parse(localStorage.getItem("cart"))) || [];
  //       setCart(cart);
  //     }
  //     getLo();
  //   }, []);

  // Save items to localStorage whenever the items state changes
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const addItem = () => {
    if (id) {
      setCart((prevItems) => [...prevItems, id]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const removeItem = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item !== id));
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <button
      onClick={cart.includes(id) ? removeItem : addItem}
      className="bg-accent text-foreground p-2 rounded-md mt-2"
    >
      {cart.includes(id) ? "Remove from cart" : "Add to cart"}
    </button>
  );
}
