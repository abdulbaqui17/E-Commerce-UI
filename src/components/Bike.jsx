import b1 from "../assets/b1.jpeg";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";
import b4 from "../assets/bik.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";

// Array of Bike images
const bikeImages = [b1, b2, b3, b4];

// BikeWale link for new bikes in India
const bikeWaleLink = "https://www.bikewale.com/new-bikes-in-india/";

export const Bike = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-semibold py-2">Top Bikes</h2>
      <div className="m-10 md:flex items-center gap-4 md:gap-40 mt-8">
        {/* Bike Section */}
        {bikeImages.map((image, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 bg-black dark:bg-zinc-900"
          >
            {/* Link wrapping the image to make it clickable */}
            <a href={bikeWaleLink} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`bike-${index + 1}`}
                className="object-contain hover:scale-110 transition-all h-36 cursor-pointer"
              />
            </a>
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer">
              Bike Name {index + 1}
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
