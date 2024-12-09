const CarouselItem = ({ productInfo }) => {
  const {
    name,
    price,
    description,
    dimensions,
    images,
    currency,
    specifications,
    category,
    availableStock,
    pricePerPiece,
  } = productInfo;

  return (
    <li
      className={`my-6 flex-shrink-0 cursor-pointer shadow-xl rounded-md md:w-3/12 w-full`}
    >
      {/*Image Container */}
      <div className="bg-[#F9F7F5] py-2 px-4 rounded-md">
        <div className="flex items-center justify-between">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649491/nav-heart_tgm9c6.png"
            alt="wishlist-icon"
            className="w-[18px] cursor-pointer"
          />
          <div className="bg-[#FFFFFF] px-2 py-1 rounded-md">
            <p className="font-medium text-[#111928] text-[10px]">{category}</p>
          </div>
        </div>
        <div className="w-full  flex flex-col items-center my-2">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679374/product-table_kau38i.png"
            alt="productName"
            className="w-[75%] hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      {/*Product Info Container */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[#393939] text-[24px]">{name}</h2>
          <span className="text-[#393939] text-[24px]">
            0<sup>{currency}</sup>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex  gap-1  items-center">
            <p className="text-[#9C9C9C] text-sm">
              {pricePerPiece}
              {currency}/Pièce
            </p>
            <span className="text-[#9C9C9C] text-[12px] font-semibold">
              · RÉF : VABGN5
            </span>
          </div>
          <div
            className={
              availableStock >= 15
                ? `bg-[#F1F4F6] px-1 rounded-sm flex items-center py-1 text-[#546A7D] `
                : `bg-[#fcd0d0] px-1 rounded-sm flex items-center py-1 text-[#ee5252] `
            }
          >
            <span className="text-[12px]">{availableStock} pièces</span>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CarouselItem;
