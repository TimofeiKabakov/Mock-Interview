"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

/** Each review has an ID, rating, text, and a productId it belongs to */
interface Review {
  id: string;
  productId: number;
  rating: number;
  text: string;
}

/** The shape of our context store */
interface ReviewContextValue {
  reviews: Review[];
  addReview: (productId: number, rating: number, text: string) => void;
  getReviewsByProduct: (productId: number) => Review[];
  getAverageRating: (productId: number) => number;
}

const ReviewContext = createContext<ReviewContextValue>({
  reviews: [],
  addReview: () => {},
  getReviewsByProduct: () => [],
  getAverageRating: () => 0,
});

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  /** Add a new review to state */
  const addReview = useCallback(
    (productId: number, rating: number, text: string) => {
      setReviews((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          productId,
          rating,
          text,
        },
      ]);
    },
    []
  );

  /** Filter reviews for a specific product */
  const getReviewsByProduct = useCallback(
    (productId: number) =>
      reviews.filter((review) => review.productId === productId),
    [reviews]
  );

  /** Compute average rating for a specific product */
  const getAverageRating = useCallback(
    (productId: number) => {
      const productReviews = getReviewsByProduct(productId);
      if (productReviews.length === 0) return 0;
      const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
      return sum / productReviews.length;
    },
    [getReviewsByProduct]
  );

  return (
    <ReviewContext.Provider
      value={{ reviews, addReview, getReviewsByProduct, getAverageRating }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  return useContext(ReviewContext);
}
