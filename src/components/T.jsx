import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/tv.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Array of T images (assuming these are TVs or similar products)
const tImages = [t1, t2, t3, t4];

export const T = () => {
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
        Top TVs
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="m-10 md:flex items-center gap-4 md:gap-40 mt-8"
      >
        {tImages.map((image, index) => (
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
              <motion.img
                src={image}
                alt={`tv-${index + 1}`}
                className="object-contain h-36 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer"
              >
                TV Model {index + 1}
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
