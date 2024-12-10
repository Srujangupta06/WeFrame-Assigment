'use client'
import { productList } from "@/constants";
import Product from "./Product";
import SectionTitle from "./SectionTitle";
const InterestedProducts = () => {
  return (
    <section className="bg-[#FBF9F899] py-4 mb-5">
      <SectionTitle
        mainHeading="Ces produits pourraient vous intéresser"
        link="VOIR TOUTE LA COLLECTION"
      />
      <ul className="lg:px-8 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*Product Card*/}
        {productList.map((eachProduct) => (
          <Product productInfo={eachProduct} key={eachProduct.id} />
        ))}
      </ul>
    </section>
  );
};
export default InterestedProducts;
