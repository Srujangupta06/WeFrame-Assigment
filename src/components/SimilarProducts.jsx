import Product from "./Product";
const SimilarProducts = () => {
  return (
    <section className="bg-[#FBF9F899] py-4 px-8 ">
      <div className="flex justify-between items-center">
        <h2 className="text-[#393939] text-2xl">Articles similaires</h2>
        <h5 className="underline text-[14px] text-[#393939] cursor-pointer">
          Voir toute la collection
        </h5>
      </div>
      <div className="flex items-center gap-x-2">
        <button className="bg-[#5CD2DD] px-1 py-1 rounded-sm border-none outline-none hover:bg-[#6ebcc3] hover:transition-all duration-300">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733670568/arrow-left-icon_j8cc0h.png"
            alt="prev-icon"
          />
        </button>
        <ul className="flex gap-x-3 overflow-x-auto">
          {/*Product Card*/}
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
        <button className="bg-[#5CD2DD] px-1 py-1 rounded-sm border-none outline-none hover:bg-[#6ebcc3] hover:transition-all duration-300">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733670568/arrow-right-icon_vl7no1.png"
            alt="next-icon"
          />
        </button>
      </div>
    </section>
  );
};
export default SimilarProducts;
