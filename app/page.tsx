import ProductList from "@/components/ProductList";
import { getProducts } from "@/data/products";

export default function HomePage() {
  const products = getProducts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Welcome to My E-commerce!</h1>
      <ProductList products={products} />
    </>
  );
}
