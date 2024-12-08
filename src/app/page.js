import ProductItem from "@/components/ProductItem";
import SimilarProducts from "@/components/SimilarProducts";
import InterestedProducts from "@/components/InterestedProducts";
import SubscriberBox from "@/components/SubscriberBox";
import ServicesOverview from "@/components/ServicesOverview";
export default function Home() {
  return (
    <div className="py-4">
      <ProductItem />
      <SimilarProducts />
      <InterestedProducts />
      <ServicesOverview />
      {/* <SubscriberBox /> */}
    </div>
  );
}
