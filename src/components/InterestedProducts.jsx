import Product from "./Product";
const InterestedProducts = () => {
  return (
    <section className="bg-[#FBF9F899] py-4 mb-5">
      <div className="flex justify-between items-center px-8 ">
        <h2 className="text-[#393939] text-2xl">
          Ces produits pourraient vous intéresser
        </h2>
        <h5 className="underline text-[14px] text-[#393939] cursor-pointer">
          VOIR TOUTE LA COLLECTION
        </h5>
      </div>
      <ul className="flex flex-wrap px-8 gap-x-2">
        {/*Product Card*/}
        <Product />
        <Product />
        <Product />
      </ul>
    </section>
  );
};
export default InterestedProducts;
