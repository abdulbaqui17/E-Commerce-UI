import mouse1 from "../assets/m1.jpeg";
import mouse2 from "../assets/mou1.jpeg";
import mouse3 from "../assets/ma1.jpg";
import mouse4 from "../assets/mous.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";

// Array of Mouse images
const mouseImages = [mouse1, mouse2, mouse3, mouse4];

// Amazon link for buying mouse products
const amazonMouseLink = "https://www.amazon.in/s?k=mouse+amazon&i=computers&adgrpid=59997431998&ext_vrnc=hi&hvadid=294141265856&hvdev=c&hvlocphy=9302561&hvnetw=g&hvqmt=b&hvrand=12179474369104495458&hvtargid=kwd-305281428867&hydadcr=22109_1811959&tag=googinhydr1-21&ref=pd_sl_7yzo88ioic_bq";

export const Mouse = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-semibold py-2">Top Mouse</h2>
      <div className="m-10 md:flex items-center gap-4 md:gap-40 mt-8">
        {/* Mouse Section */}
        {mouseImages.map((image, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4  bg-black dark:bg-zinc-900"
          >
            {/* Link to Amazon search for the mouse */}
            <a href={amazonMouseLink} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`mouse-${index + 1}`}
                className="object-contain hover:scale-110 transition-all h-36 cursor-pointer"
              />
            </a>
            <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer">
              Mouse Name {index + 1}
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
