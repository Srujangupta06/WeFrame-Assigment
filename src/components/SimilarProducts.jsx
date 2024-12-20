"use client";
import CarouselItem from "./CarouselItem";
import { productList } from "@/constants";
import SectionTitle from "./SectionTitle";

const SimilarProducts = () => {
  return (
    <section className="bg-[#FBF9F899] py-4 mb-5">
      <SectionTitle
        mainHeading="Articles similaires"
        link="VOIR TOUTE LA COLLECTION"
      />
      <div className="flex items-center gap-x-2">
        <button className="bg-[#5CD2DD] px-2 py-2 rounded-sm border-none outline-none hover:bg-[#6ebcc3] hover:transition-all duration-300">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733670568/arrow-left-icon_j8cc0h.png"
            alt="prev-icon"
            className="w-[40px]"
          />
        </button>
        <ul className="flex gap-x-3 overflow-x-auto ">
          {/*Product Card*/}

          {productList.map((eachProduct, index) => (
            <CarouselItem productInfo={eachProduct} key={index} />
          ))}
        </ul>
        <button className="bg-[#5CD2DD] px-2 py-2 rounded-sm border-none outline-none hover:bg-[#6ebcc3] hover:transition-all duration-300">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733670568/arrow-right-icon_vl7no1.png"
            alt="next-icon"
            className="w-[40px]"
          />
        </button>
      </div>
    </section>
  );
};
export default SimilarProducts;
