# E-Commerce Starter (Next.js + TypeScript + Tailwind)

A minimal **Next.js 13** (App Router) + **React** + **TypeScript** + **Tailwind** setup for a small e-commerce demo.

Features:

- **Product List** from `data/products.ts`.
- **Add to Cart** using a global React **CartContext**.
- **Cart Page** to remove items and see totals.

## Setup

1. **Install**:
   ```bash
   npm install
   ```
2. **Run**:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000).

## Usage

- **Home** shows a product list (Add to Cart button).
- **Cart** (`/cart`) displays items in the cart, with remove functionality.
- State is kept in memory (React Context).
