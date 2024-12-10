"use client";
import { useContext } from "react";
import { wishlistedProductsContext } from "@/context/wishListContext";
const WishListedProducts = () => {
  const { wishlistedItems } = useContext(wishlistedProductsContext);
  return (
    <div className="min-h-[80vh] px-6 lg:px-8">
      <h1 className="font-medium text-xl lg:text-2xl my-4">
        Vos produits préférés - ({wishlistedItems.length})
      </h1>
    </div>
  );
};

export default WishListedProducts;
