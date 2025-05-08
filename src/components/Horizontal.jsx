import airpods from "../assets/airpods.jpeg";
import air2 from "../assets/air2.webp";
import air4 from "../assets/air4.jpeg";
import air5 from "../assets/air5.jpeg";
import { BackgroundGradient } from "./BackgroundGradient";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Array of AirPods images
const airpodsImages = [airpods, air2, air4, air5];

// Link for the AirPods on Amazon
const amazonLink = "https://www.amazon.in/s?k=airpods+pro+2&crid=3AFL185IZLJAK&sprefix=airpods+pro+2+%2Caps%2C293&ref=nb_sb_noss_2";

export const Horizontal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-100, 0, 0, 100]);

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
      style={{ opacity, scale, x }}
      className="container mx-auto px-4 my-10"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold py-2"
      >
        Top Airpods
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="m-10 md:flex items-center gap-4 md:gap-40 mt-8"
      >
        {airpodsImages.map((image, index) => (
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
              <a href={amazonLink} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={image}
                  alt={`airpods-${index + 1}`}
                  className="object-contain h-36 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </a>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200 cursor-pointer"
              >
                AirPods Name {index + 1}
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
