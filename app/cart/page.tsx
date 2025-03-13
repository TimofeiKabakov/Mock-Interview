"use client";

import React, { useState } from "react";
import { CartItem, useCart } from "@/contexts/CartContext";
import { getCoupons } from "@/data/coupons";

export default function CartPage() {
  const { cartItems, removeFromCart, addToCart } = useCart();
  const coupons = getCoupons();

  // Basic sum of item.price * item.quantity
  const totalPrice: number = cartItems.reduce(
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

  const [discountCode, setDiscountCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  
  const applyDiscount = () => {
    const coupon = coupons.find(coupon => coupon.name == discountCode);
    if(coupon){
      alert("Discount Successful!");
      setDiscountPercentage(coupon.discountPecentage / 100)
    }else{
      alert("Invalid Coupon!");
      setDiscountPercentage(0);
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
              <div className="flex flex-row mt-1">
                <button className="cursor-pointer border rounded-sm border-1 w-7 h-5 pb-6 hover:bg-green-100" onClick={() => updateQuantityHandler(true, item)}>+</button>
                <button className="ml-2 cursor-pointer border rounded-sm border-1 w-7 h-5 pb-6 hover:bg-red-100" onClick={() => updateQuantityHandler(false, item)}>-</button>
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
      <div className="flex flex-col mt-4 font-bold text-xl">
        <div className="flex flex-row mb-5">
          <h2 className="text-lg font-light">Enter Discount:</h2>
          <input className="w-30 ml-1 mr-2 border rounded-sm font-light text-sm text-green-800" onChange={e => setDiscountCode(e.target.value)}/>
          <button className="font-light border p-1 rounded-sm text-sm cursor-pointer bg-blue-300" onClick={() => applyDiscount()}>Apply</button>
        </div>
        {discountPercentage > 0 && 
          <div className="flex flex-col">
            <h1 className="font-light text-sm">Original Total: ${totalPrice.toFixed(2)}</h1>
            <h1 className="font-light text-sm mt-2">Discount Applied: {(discountPercentage * 100).toFixed(0)}%</h1>
          </div>
        }
        <h1 className="mt-2">Total: ${(totalPrice * (1 - discountPercentage)).toFixed(2)}</h1>
      </div>
    </div>
  );
}
