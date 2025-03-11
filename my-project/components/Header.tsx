"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  // Access the cart items from context:
  const { cartItems } = useCart();

  // Sum the total quantity across all cart items
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gray-200 py-4 mb-6">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold">My Shop</div>
        <div className="flex gap-4">
          {/* Use <Link> for client-side navigation (to keep your cart state) */}
          <Link href="/cart" className="text-blue-600 hover:underline">
            Cart ({itemCount})
          </Link>
        </div>
      </nav>
    </header>
  );
}
