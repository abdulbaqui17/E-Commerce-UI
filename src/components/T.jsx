import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/tv.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";

// Array of T images (assuming these are TVs or similar products)
const tImages = [t1, t2, t3, t4];

export const T = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-semibold py-2">Top TVs</h2>
      <div className="m-10 md:flex items-center gap-4 md:gap-40 mt-8">
        {/* T Section */}
        {tImages.map((image, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 bg-black dark:bg-zinc-900"
          >
            <img
              src={image}
              alt={`tv-${index + 1}`}
              className="object-contain hover:scale-110 transition-all h-36 cursor-pointer"
            />
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer">
              TV Model {index + 1}
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
