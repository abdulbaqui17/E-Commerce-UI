import f1 from "../assets/f1.jpeg";
import f2 from "../assets/f2.jpeg";
import f3 from "../assets/f3.jpeg";
import f4 from "../assets/ref.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";

// Array of F images (assuming it's for showcasing products like fridges or any other category)
const fImages = [f1, f2, f3, f4];

export const F = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-semibold py-2">Top Products</h2>
      <div className="m-10 md:flex items-center gap-4 md:gap-40 mt-8">
        {/* F Section */}
        {fImages.map((image, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 bg-black dark:bg-zinc-900"
          >
            <img
              src={image}
              alt={`product-${index + 1}`}
              className="object-contain hover:scale-110 transition-all h-36 cursor-pointer"
            />
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer">
              Product Name {index + 1}
            </p>
            <p className="capitalize text-sm text-neutral-600 dark:text-neutral-400 cursor-pointer">
              Category
            </p>
            <div className="mt-2">
              <p className="dark:text-white font-bold">$SellingPrice</p>
              <p className="line-through text-neutral-500 dark:text-neutral-400">$OriginalPrice</p>
            </div>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Add to Cart</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                Buy
              </span>
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};
