"use client";

import React from "react";
import { CartItem, useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, addToCart } = useCart();

  // Basic sum of item.price * item.quantity
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  const updateQuantityHandler = (increase: boolean, item: CartItem) => {
    if(increase){
      addToCart(item)
    }else{
      removeFromCart(item.id)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-700">
                ${item.price} x {item.quantity}
              </p>
              <div className="flex flex-row">
                <button className="cursor-pointer" onClick={() => updateQuantityHandler(true, item)}>+</button>
                <button className="ml-2 cursor-pointer" onClick={() => updateQuantityHandler(false, item)}>-</button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 ml-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Remove ahh
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold text-xl">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
