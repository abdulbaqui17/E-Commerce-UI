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
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center pt-10 bg-black text-white"
    >
      <div className="container mx-auto px-8 md:px-36">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 md:gap-16 justify-between overflow-auto scrollbar-none"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <BackgroundGradient
                className="rounded-full max-w-sm p-2 bg-black dark:bg-zinc-900"
              >
                <motion.div 
                  className="cursor-pointer text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-24 h-16 rounded-full overflow-hidden flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img
                      src={category.src}
                      alt={category.name}
                      className="h-full object-scale-down"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.p 
                    className="text-center text-sm md:text-base capitalize mt-2"
                    whileHover={{ color: "#8B5CF6" }}
                  >
                    {category.name}
                  </motion.p>
                </motion.div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
