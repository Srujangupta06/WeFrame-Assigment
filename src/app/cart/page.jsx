import Link from "next/link";

const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4 px-6 lg:px-8">
      <h1 className="self-start font-medium text-xl lg:text-2xl">
        Total des articles - (0)
      </h1>
      <div className="flex flex-col items-center gap-6">
        <img
          src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733810857/Cart_page_vsvpge.png"
          alt="cart-page-bg"
          className="w-[300px] h-[300px]"
        />
        <Link href="/">
          <span className="text-[14px] text-[#0093D0] underline">
            Retour aux achats
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Cart;
