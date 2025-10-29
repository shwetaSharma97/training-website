"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const LoadingScreen = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants: Variants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/logo-bg-remove.png"
          alt="CodeClimbNGrow Loading"
          width={120}
          height={120}
          priority
        />
        <motion.div
          className="flex items-center space-x-2 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="h-3 w-3 bg-gradient-to-r from-blue-300 to-orange-500 rounded-full"
            variants={dotVariants}
          />
          <motion.span
            className="h-3 w-3 bg-gradient-to-r from-blue-300 to-orange-500 rounded-full"
            variants={dotVariants}
          />
          <motion.span
            className="h-3 w-3 bg-gradient-to-r from-blue-300 to-orange-500 rounded-full"
            variants={dotVariants}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
