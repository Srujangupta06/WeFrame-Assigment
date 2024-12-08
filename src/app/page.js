import { ProductImages } from "@/constants";
export default function Home() {
  return (
    <div className="px-8 py-4">
      <div className="flex gap-4 items-center">
        <h3 className="text-[#393939] font-medium text-sm">Home</h3>
        <li className="list-disc text-sm text-[#9C9C9C]">Product Name</li>
      </div>

      {/*Product Card */}
      <section className="mt-4 rounded-md flex gap-6">
        {/*Product Image */}
        <div className="flex items-start gap-2 w-5/12 bg-[#F8F6F4] px-2 py-4">
          {/*Images */}
          <ul>
            {ProductImages.map((eachImage) => (
              <li className="bg-white rounded-md p-1 h-10 w-10 mb-2">
                <img src={eachImage.imageUrl} alt={eachImage.id} className="" />
              </li>
            ))}
          </ul>
          {/*Main Image */}
          <div>
            <img
              src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733654322/main-product-image_syk8xf.png"
              alt="main-product-image"
              className="w-[100%]"
            />
          </div>
        </div>
        {/*Product Info */}
        <div className="w-7/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h1 className="font-semibold text-3xl">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649491/nav-heart_tgm9c6.png"
                alt="favorite-icon"
              />
            </div>
            <p className="text-[#111928] text-2xl mb-3">
              39,50€ <span className="text-lg text-[#9C9C9C] ml-2">/pièce</span>
            </p>
            <hr className="text-[#9C9C9C] border-1 mb-5" />
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-6">
                <div className="flex items-end gap-2">
                  <span>
                    <img
                      src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733655951/ruler_cnyvrv.png"
                      alt="ruler"
                      className="h-6 w-6"
                    />
                  </span>
                  <span>
                    20<sup>cm</sup>
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
                    50<sup>cm</sup>
                  </span>
                </div>
              </div>
              <p className="text-[#9C9C9C] text-sm">RÉF : VABGN5</p>
            </div>
            <hr className="text-[#9C9C9C] border-1 mb-5" />
            <div className="flex flex-col gap-6 text-sm text-[#5D5D5D] mb-4">
              <ul className="list-none">
                <li className="mb-1">
                  Location appareil à raclette - Raclette traditionnelle 1/2
                  roue
                </li>
                <li className="mb-1">Réglable en hauteur</li>
                <li className="mb-1">Appareil à raclette professionnel</li>
                <li className="mb-1">
                  Boîtier de chauffe horizontal réglable en hauteur
                </li>
              </ul>
              <p>
                220V <br />
                900W
              </p>
            </div>
            <hr className="text-[#9C9C9C] border-1 mb-5" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-4 border border-[#9c9c9c] px-3 py-1 rounded-md w-2/12 justify-between">
              <button className="outline-none border-none">-</button>
              <span>1</span>
              <button className="outline-none border-none">+</button>
            </div>
            <button className="bg-[#5CD2DD] px-6 py-2 flex-grow rounded-md text-sm text-white">
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
