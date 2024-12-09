"use client";
import { wishlistedProductsDispatchContext } from "@/context/wishListContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
const ProductItem = ({ productInfo }) => {
  const dispatch = useContext(wishlistedProductsDispatchContext);
  const [product, setProduct] = useState(productInfo);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const {
    name,
    price,
    description,
    dimensions,
    productImages,
    currency,
    specifications,
    category,
  } = product;
  const { width, diameter, units } = dimensions;
  const [image, setImage] = useState(productImages[0]);

  return (
    <div className="mb-8 px-6 lg:px-8 ">
      <div className="flex gap-4 items-center">
        <h3 className="text-[#393939] font-medium text-sm">Home</h3>
        <li className="list-disc text-sm text-[#9C9C9C]">{category}</li>
      </div>
      <div className="flex flex-col gap-10">
        <div className="mt-5 rounded-md flex flex-col lg:flex-row gap-6">
          {/*Product Card */}
          {/*Product Image */}
          <div className="flex items-start gap-x-6 w-full lg:w-6/12 bg-[#F8F6F4] px-2 py-4">
            {/*Images */}
            <ul className="">
              {productImages.map((eachImage, index) => (
                <li
                  className={`bg-white rounded-md p-1 h-10 w-10 mb-2`}
                  key={index}
                  onClick={() => {
                    setImage(eachImage);
                  }}
                >
                  <img
                    src={eachImage}
                    alt={eachImage}
                    className="cursor-pointer"
                  />
                </li>
              ))}
            </ul>
            {/*Main Image */}
            <div>
              <img
                src={image}
                alt="main-product-image"
                className="w-full lg:w-[75%] h-full"
              />
            </div>
          </div>
          {/*Product Info */}
          <div className="w-full lg:w-6/12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h1 className="font-semibold text-lg md:text-2xl">{name}</h1>
                <img
                  src={
                    !favorite
                      ? "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649491/nav-heart_tgm9c6.png"
                      : "https://cdn.icon-icons.com/icons2/3553/PNG/512/wishlist_favorites_favorite_heart_like_ecommerce_icon_224938.png"
                  }
                  alt="favorite-icon"
                  className="w-[20px] h-full cursor-pointer"
                  onClick={() => {
                    setFavorite(!favorite);
                    !favorite
                      ? dispatch({
                          type: "ADD_TO_WISHLIST",
                          payload: productInfo,
                        })
                      : dispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: productInfo,
                        });
                  }}
                />
              </div>
              <p className="text-[#111928] text-md md:text-xl mb-3">
                {price}
                {currency}
                <span className="text-sm text-[#9C9C9C] ml-2">/pièce</span>
              </p>
              <hr className="text-[#9C9C9C] border-1 mb-5" />
              <div className="flex flex-wrap items-center justify-between mb-5">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-end gap-2">
                    <span>
                      <img
                        src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733655951/ruler_cnyvrv.png"
                        alt="ruler"
                        className="h-6 w-6"
                      />
                    </span>
                    <span>
                      {width}
                      <sup>{units}</sup>
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span>
                      <img
                        src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733655951/sizecm_tprbai.png"
                        alt="ruler-cm"
                        className="h-6 w-6"
                      />
                    </span>
                    <span>
                      {diameter}
                      <sup>{units}</sup>
                    </span>
                  </div>
                </div>
                <p className="text-[#9C9C9C] text-[14px] md:text-[16px]">RÉF : VABGN5</p>
              </div>
              <hr className="text-[#9C9C9C] border-1 mb-5" />
              <div className="flex flex-col gap-6 text-[18px] text-[#5D5D5D] mb-4">
                <ul className="list-none">
                  {specifications.map((eachSpecification, index) => (
                    <li key={index} className="text-sm mb-1">{eachSpecification}</li>
                  ))}
                </ul>
                <p>
                  220V <br />
                  900W
                </p>
              </div>
              <hr className="text-[#9C9C9C] border-1 mb-5" />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex gap-4 border border-[#9c9c9c] px-3 py-1 rounded-md w-6/12 md:w-3/12 md:2/12 justify-between items-center">
                <button
                  className="outline-none border-none text-xl md:text-2xl"
                  onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="outline-none border-none text-xl md:text-2xl"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-[#5CD2DD] px-6 py-2 flex-grow rounded-md text-sm text-white  hover:bg-[#6ebcc3] hover:transition-all duration-300"
                onClick={() => alert("Product Added To Cart")}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
        {/*Product Description */}
        <section className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-6/12">
            <h2 className="text-[#111928] text-md mb-2">Description produit</h2>
            <p className="text-[16px] text-[#9C9C9C]">{description}</p>
          </div>
          <ul className="w-full lg:w-6/12 text-[#393939] text-sm">
            <li className="flex items-center justify-between bg-[#FBF9F899] px-4 py-3 cursor-pointer hover:bg-[#edefef] hover:transition-all duration-300">
              <h3>Livraisons</h3>
              <span>+</span>
            </li>
            <li className="flex items-center justify-between bg-[#FBF9F899] px-4 py-3 cursor-pointer hover:bg-[#edefef] hover:transition-all duration-300">
              <h3>Questions</h3>
              <span>+</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export default ProductItem;
