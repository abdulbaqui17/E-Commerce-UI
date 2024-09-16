import airpods from "../assets/airpods.jpeg";
import bik from "../assets/bik.jpeg";
import cam from "../assets/cam.jpeg";
import head from "../assets/head.jpeg";
import pho from "../assets/phojpeg.jpeg";
import ma from "../assets/ma.jpeg";
import pri from "../assets/pri.webp";
import ref from "../assets/ref.jpeg";
import blackimage from "../assets/blackimage.jpg";
import tv from "../assets/tv.jpeg";
import blackwathc from "../assets/blackwathc.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";

export const CategoryList = () => {
  const categories = [
    { src: ma, name: "Mouse" },
    { src: pho, name: "Mobiles" },
    { src: pri, name: "Printer" },
    { src: head, name: "Earphones" },
    { src: cam, name: "Camera" },
    { src: bik, name: "Bikes" },
    { src: airpods, name: "Airpods" },
    { src: blackwathc, name: "watch" },
    { src: tv, name: "Televisions" },
    { src: ref, name: "Refrigerator" },
    { src: blackimage, name: "Speakers" },
  ];

  return (
    <div className="flex justify-center items-center pt-10  bg-black text-white">
      <div className="container mx-auto px-8 md:px-36">
        <div className="flex items-center gap-3 md:gap-16  justify-between overflow-auto scrollbar-none">
          {categories.map((category, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-full max-w-sm p-2 bg-black dark:bg-zinc-900 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="cursor-pointer text-center">
                <div className="w-24 h-16 rounded-full overflow-hidden  flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <img
                    src={category.src}
                    alt={category.name}
                    className="h-full object-scale-down"
                  />
                </div>
                <p className="text-center text-sm md:text-base capitalize mt-2 transition-colors duration-300 ">
                  {category.name}
                </p>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};
