import React from "react";
import image from "../assets/logos.png"
import { motion } from "framer-motion"


export const MarqueeItem = ({images, from, to}) => {
  return (
    <div className="flex myGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 p-2"
      >
        {images.map((image, index) => {
          return (
            <div className="h-20 w-56 pr-20 " key={index}>
              {image}
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 p-2"
      >
        {images.map((image, index) => {
          return (
            <div className="h-20 w-56 pr-20 " key={index}>
              {image}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
