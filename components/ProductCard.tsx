"use client";

import React from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext"; // TODO: change to @/data/CartContext

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-bold text-green-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
