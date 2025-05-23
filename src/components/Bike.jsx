import b1 from "../assets/b1.jpeg";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";
import b4 from "../assets/bik.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Array of Bike images
const bikeImages = [b1, b2, b3, b4];

// BikeWale link for new bikes in India
const bikeWaleLink = "https://www.bikewale.com/new-bikes-in-india/";

export const Bike = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale, y }}
      className="container mx-auto px-4 my-10"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold py-2"
      >
        Top Bikes
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="m-10 md:flex items-center gap-4 md:gap-40 mt-8"
      >
        {bikeImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
          >
            <BackgroundGradient
              className="rounded-[22px] max-w-sm p-4 bg-black dark:bg-zinc-900"
            >
              <a href={bikeWaleLink} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={image}
                  alt={`bike-${index + 1}`}
                  className="object-contain h-36 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </a>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer"
              >
                Bike Name {index + 1}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="capitalize text-sm text-neutral-600 dark:text-neutral-400 cursor-pointer"
              >
                Category
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-2"
              >
                <p className="dark:text-white font-bold">$SellingPrice</p>
                <p className="line-through text-neutral-500 dark:text-neutral-400">$OriginalPrice</p>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
              >
                <span>Add to Cart</span>
                <motion.span 
                  whileHover={{ scale: 1.2 }}
                  className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white"
                >
                  Buy
                </motion.span>
              </motion.button>
            </BackgroundGradient>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
