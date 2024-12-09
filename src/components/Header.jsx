"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { wishlistedProductsContext } from "@/context/wishListContext";
const Header = () => {
  const [lang, setLang] = useState("FR");
  const { wishlistedItems } = useContext(wishlistedProductsContext);
  const onChangeLanguage = (event) => {
    setLang(event.target.value);
  };
  return (
    <header className=" border py-3">
      <div className="flex items-center justify-between  mb-6 px-8">
        {/*Nav Logo */}
        <div>
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649148/nav-logo_mzbjy5.png"
            className="w-[130px] h-[65px]"
            alt="nav-logo"
          />
        </div>
        {/*Nav Search Bar */}
        <div className="bg-[#F9FAFB] rounded-[4px] flex items-center w-4/12 px-3">
          <input
            type="search"
            className="border-none bg-transparent outline-none text-sm text-[#667482] px-2 py-2 flex-grow"
            placeholder="Rechercher un produit"
          />
          <img
            src={
              "https://res.cloudinary.com/djv3sgbxn/image/upload/v1733648880/search-icon_v4wpdq.png"
            }
            alt="search-icon"
            className="w-[18px] h-[18px]"
          />
        </div>
        <ul className="list-none flex items-center gap-4 ">
          <Link href="">
            <li className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649492/nav-lightbulb_ue5bkl.png"
                alt="inspirations-logo"
                className="w-[18px] h-[18px]"
              />
              <span className="text-sm">Inspirations</span>
            </li>
          </Link>
          <Link href="">
            <li className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649491/nav-heart_tgm9c6.png"
                alt="favorites-logo"
                className="w-[18px] h-[18px]"
              />
              <span className="text-sm">Mes favoris</span>
              <div className="bg-[#CAD2D566] rounded-full text-[#242D30] text-[14px] w-[18px] h-[18px] flex items-center justify-center px-4 py-1 ml-1">
                <span>{wishlistedItems.length}</span>
              </div>
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-4">
          <button className="outline-none border-none bg-[#0093D0] hover:bg-[#40768e] hover:transition-all duration-300 px-4 py-2 rounded-[6px] flex gap-2 text-sm text-white items-center">
            <img
              src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733649491/nav-cart_gao3da.png"
              alt="cart-button"
              className="w-[18px] h-[18px]"
            />
            Panier (0)
          </button>
          <div className="h-10 w-10 bg-[#EAEDEE] rounded-full"></div>
          <select
            className="outline-none border-none"
            onChange={(event) => onChangeLanguage}
            value={lang}
          >
            <option className="textsm text-[#1F2A37]" value='FR'>
              FR
            </option>
            <option className="textsm text-[#1F2A37]" value='EN'>EN</option>
          </select>
        </div>
      </div>
      <nav className="px-8 mt-2">
        <ul className="flex items-center gap-8 text-[16px] font-normal text-[#6B7280] leading-3">
          <Link href="">
            <li className="pb-2">Art de la table</li>
          </Link>
          <Link href="">
            <li className="pb-2">Mobilier</li>
          </Link>
          <Link href="">
            <li className="pb-2">Nappage</li>
          </Link>
          <Link href="">
            <li className="pb-2">Matériel de salle</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Cuisine</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Barbecue</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Tente</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Chauffage</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Podium - Piste de danse</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Son et lumière</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Packs</li>
          </Link>
          <Link href="">
            <li className=" pb-2">Consommables</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
