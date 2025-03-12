"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useReviews } from "@/contexts/ReviewContext";
import { getProducts } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = getProducts().find((p) => p.id === productId);

  const { addReview, getReviewsByProduct, getAverageRating } = useReviews();

  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  if (!product) {
    return <div>Product not found.</div>;
  }

  const reviews = getReviewsByProduct(product.id);
  const avgRating = getAverageRating(product.id).toFixed(1);

  const handleAddReview = () => {
    // Basic validation
    if (!text.trim()) return;
    addReview(product.id, rating, text.trim());

    // Reset form
    setRating(5);
    setText("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2 text-gray-600">{product.description}</p>
      <p className="font-bold text-green-600">${product.price}</p>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Average Rating: {avgRating} / 5
        </h2>
      </div>

      {/* Review List */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Reviews:</h3>
        {reviews.length === 0 && <p>No reviews yet. Be the first!</p>}
        <ul className="space-y-2">
          {reviews.map((review) => (
            <li key={review.id} className="border p-2 rounded">
              <p>
                <strong>Rating:</strong> {review.rating} / 5
              </p>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Form to add a review */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
        <div className="flex flex-col max-w-sm space-y-2">
          <label htmlFor="rating-select">Rating (1-5):</label>
          <select
            id="rating-select"
            className="border p-1 rounded"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <label htmlFor="review-text">Review text:</label>
          <textarea
            id="review-text"
            className="border p-1 rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handleAddReview}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
