export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // TODO: rename to cost
}

const products: Product[] = [
  {
    id: 1,
    name: "ROBLOX Button SFX",
    description: "Description for product A",
    price: 10,
  },
  {
    id: 2,
    name: "KSI new song ahh",
    description: "Description for product B",
    price: 20,
  },
  {
    id: 3,
    name: "Ohio Goofy Ahh",
    description: "Description for product C",
    price: 30,
  },
];

export function getProducts(): Product[] {
  return products;
}
