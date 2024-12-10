import ProductItem from "@/components/ProductItem";
import { productItemInfo } from "@/constants";
import SimilarProducts from "@/components/SimilarProducts";
import InterestedProducts from "@/components/InterestedProducts";
const SingleProductPage = ({ params }) => {
  const { category } = params;
  return (
    <>
      <ProductItem productInfo={productItemInfo} category={category} />
      <SimilarProducts />
      <InterestedProducts/>
    </>
  );
};
export default SingleProductPage;
