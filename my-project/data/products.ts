export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product A",
    description: "Description for product A",
    price: 10,
  },
  {
    id: 2,
    name: "Product B",
    description: "Description for product B",
    price: 20,
  },
  {
    id: 3,
    name: "Product C",
    description: "Description for product C",
    price: 30,
  },
];

export function getProducts(): Product[] {
  return products;
}
