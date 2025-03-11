import React from "react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-bold text-green-600">${product.price}</p>
    </div>
  );
}
