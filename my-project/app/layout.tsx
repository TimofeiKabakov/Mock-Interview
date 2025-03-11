import "./globals.css";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My E-commerce App",
  description: "...",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap everything in CartProvider (client component) */}
        <CartProvider>
          {/* Our client-based Header */}
          <Header />

          {/* Page content */}
          <main className="container mx-auto px-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
