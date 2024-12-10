"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { wishlistedProductsContext } from "@/context/wishListContext";

const Header = () => {
  const [lang, setLang] = useState("FR");
  const { wishlistedItems } = useContext(wishlistedProductsContext);
  const [active, setActive] = useState("");

  const onChangeLanguage = (event) => {
    setLang(event.target.value);
  };
  return (
    <header className=" border py-3">
      <div className="flex items-center justify-between mb-6 px-4 md:px-8">
        {/* Nav Logo */}
        <div>
          <Link href="/">
            <img
              src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649148/nav-logo_mzbjy5.png"
              className="w-[90px] h-[45px] md:w-[130px] md:h-[65px]"
              alt="nav-logo"
            />
          </Link>
        </div>

        {/* Nav Search Bar */}
        <img
          src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733648880/search-icon_v4wpdq.png"
          alt="search-icon"
          className="w-[18px] h-[18px] md:hidden"
        />
        <div className="bg-[#F9FAFB] rounded-[4px] md:flex md:items-center md:w-8/12 px-3 hidden md:block lg:w-4/12 xl:w-3/12">
          <input
            type="search"
            className="border-none bg-transparent outline-none text-sm text-[#667482] px-2 py-2 flex-grow"
            placeholder="Rechercher un produit"
          />
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733648880/search-icon_v4wpdq.png"
            alt="search-icon"
            className="w-[18px] h-[18px]"
          />
        </div>

        {/* Nav Links */}
        <ul className="list-none flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          <Link href="">
            <li className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649492/nav-lightbulb_ue5bkl.png"
                alt="inspirations-logo"
                className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
              />
              <span className="text-sm hidden md:block  font-poppins">
                Inspirations
              </span>
            </li>
          </Link>
          <Link href="/wishlist">
            <li className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649491/nav-heart_tgm9c6.png"
                alt="favorites-logo"
                className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]"
              />

              <span className="text-sm hidden md:block  font-poppins">
                Mes favoris
              </span>

              <div className="bg-[#CAD2D566] rounded-full text-[#242D30] text-[12px] w-[18px] h-[18px] flex items-center justify-center ml-1">
                <span>{wishlistedItems.length}</span>
              </div>
            </li>
          </Link>
        </ul>

        {/* Nav Profile and Cart */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <button className="outline-none border-none bg-[#0093D0] hover:bg-[#40768e] transition-all duration-300 px-2 py-1 rounded-[4px] flex items-center text-xs text-white md:px-4 md:py-2 md:text-sm lg:px-6 lg:py-3 lg:text-base hidden md:flex">
            <img
              src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649491/nav-cart_gao3da.png"
              alt="cart-button"
              className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
            />
            <span className="ml-1 font-poppins text-sm">Panier (0)</span>
          </button>
          <div className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 bg-[#EAEDEE] rounded-full"></div>
          <select
            className="outline-none border-none text-xs md:text-sm lg:text-base font-monsterrat"
            onChange={(event) => onChangeLanguage}
            value={lang}
          >
            <option value="FR">FR</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </div>

      <nav className="px-8 mt-2">
        <ul className="flex items-center gap-8 lg:text-[16px] text-[14px] text-nowrap font-normal text-[#6B7280] leading-3 overflow-x-auto">
          <Link
            href="/products/Art de la table"
            onClick={() => setActive("Art de la table")}
            className={
              active === "Art de la table"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Art de la table</li>
          </Link>
          <Link
            href="/products/Mobilier"
            onClick={() => setActive("Mobilier")}
            className={
              active === "Mobilier"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Mobilier</li>
          </Link>

          <Link
            href="/products/Nappage"
            onClick={() => setActive("Nappage")}
            className={
              active === "Nappage"
                ? `text-[#0093D0] border-b-2 border-[#0093D0]`
                : `text-[#6B7280]`
            }
          >
            <li className="">Nappage</li>
          </Link>
          <Link
            href="/products/Matériel de salle"
            onClick={() => setActive("Matériel de salle")}
            className={
              active === "Matériel de salle"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Matériel de salle</li>
          </Link>
          <Link
            href="/products/Cuisine"
            onClick={() => setActive("Cuisine")}
            className={
              active === "Cuisine"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Cuisine</li>
          </Link>
          <Link
            href="/products/Barbecue"
            onClick={() => setActive("Barbecue")}
            className={
              active === "Barbecue"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Barbecue</li>
          </Link>
          <Link
            href="/products/Tente"
            onClick={() => setActive("Tente")}
            className={
              active === "Tente"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Tente</li>
          </Link>
          <Link
            href="/products/Chauffage"
            onClick={() => setActive("Chauffage")}
            className={
              active === "Chauffage"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Chauffage</li>
          </Link>
          <Link
            href="/products/Prodium - Piste de danse"
            onClick={() => setActive("Podium - Piste de danse")}
            className={
              active === "Podium - Piste de danse"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Podium - Piste de danse</li>
          </Link>
          <Link
            href="/products/Son et lumière"
            onClick={() => setActive("Son et lumière")}
            className={
              active === "Son et lumière"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Son et lumière</li>
          </Link>
          <Link
            href="/products/Packs"
            onClick={() => setActive("Packs")}
            className={
              active === "Packs"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Packs</li>
          </Link>
          <Link
            href="/products/Consommables"
            onClick={() => setActive("Consommables")}
            className={
              active === "Consommables"
                ? `text-[#0093D0] border-b-2 border-[#0093D0] pb-2`
                : `text-[#6B7280]`
            }
          >
            <li className="">Consommables</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
