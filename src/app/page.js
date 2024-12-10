import Link from "next/link";
import { productCategories } from "@/constants";

export default function Home() {
  return (
    <div className="py-4">
      <div className="min-h-[80vh] px-6 lg:px-8">
        <h1 className="font-medium text-xl lg:text-2xl my-4">
          Available Categories
        </h1>
        <ul>
          {productCategories.map((eachCategory) => (
            <Link
              key={eachCategory.id}
              href={"/products/" + eachCategory.category}
            >
              <li>{eachCategory.category}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
