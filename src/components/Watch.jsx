import w1 from "../assets/w1.jpeg";
import w2 from "../assets/w2.jpeg";
import w3 from "../assets/w3.jpeg";
import w4 from "../assets/blackwathc.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";

// Array of Watch images
const watchImages = [w1, w2, w3, w4];

// Amazon link for buying watches
const amazonWatchLink = "https://www.amazon.in/s?k=watchamazon&i=computers&crid=1O1VSQFMMNZP1&sprefix=watchamazon%2Ccomputers%2C238&ref=nb_sb_noss";

export const Watch = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-semibold py-2">Top Watches</h2>
      <div className="m-10 md:flex items-center gap-4 md:gap-40 mt-8">
        {/* Watch Section */}
        {watchImages.map((image, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 bg-black dark:bg-zinc-900"
          >
            {/* Link wrapping the image to make it clickable */}
            <a href={amazonWatchLink} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`watch-${index + 1}`}
                className="object-contain hover:scale-110 transition-all h-36 cursor-pointer"
              />
            </a>
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer">
              Watch Name {index + 1}
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
