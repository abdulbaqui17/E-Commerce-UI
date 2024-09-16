import airpods from "../assets/airpods.jpeg";
import air2 from "../assets/air2.webp";
import air4 from "../assets/air4.jpeg";
import air5 from "../assets/air5.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";
import { Link } from "react-router-dom";

// Array of AirPods images
const airpodsImages = [airpods, air2, air4, air5];

// Link for the AirPods on Amazon
const amazonLink = "https://www.amazon.in/s?k=airpods+pro+2&crid=3AFL185IZLJAK&sprefix=airpods+pro+2+%2Caps%2C293&ref=nb_sb_noss_2";

export const Horizontal = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-semibold py-2">Top Airpods</h2>
      <div className="m-10 md:flex items-center gap-4 md:gap-40 mt-8">
        {/* AirPods Section */}
        {airpodsImages.map((image, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 bg-black dark:bg-zinc-900"
          >
            {/* Link wrapping the image to make it clickable */}
            <a href={amazonLink} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`airpods-${index + 1}`}
                className="object-contain hover:scale-110 transition-all h-36 cursor-pointer"
              />
            </a>
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer">
              AirPods Name {index + 1}
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
