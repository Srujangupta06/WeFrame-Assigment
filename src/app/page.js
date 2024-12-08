import ProductItem from "@/components/ProductItem";
import SimilarProducts from "@/components/SimilarProducts";
export default function Home() {
  return (
    <div className="py-4">
      <ProductItem />
      <SimilarProducts />
    </div>
  );
}
