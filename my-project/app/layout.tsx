import "./globals.css";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My E-commerce App",
  description: "A sample Next.js + Tailwind + TypeScript application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-200 py-4 mb-6">
          <nav className="container mx-auto flex items-center justify-between px-4">
            <div className="text-xl font-bold">My Shop</div>
            <div> {/* Could add nav links here later */}</div>
          </nav>
        </header>
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
