'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image'; // Included for standard Next.js component structure
import { Code, Users, Briefcase, LucideIcon, Zap, LucideProps } from 'lucide-react'; // Updated icons for new badge design
import { motion } from 'framer-motion';

// =========================================================================
// 1. HELPER COMPONENTS (FeatureBadge, PrimaryButton, OutlineButton)
// =========================================================================

// Custom FeatureBadge component matching the large circular style
interface FeatureBadgeProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center max-w-[300px] text-center p-4">
      {/* Icon Wrapper: Large circle with light blue/white background */}
      {/* Increased size and used bg-blue-50/50 for a lighter effect */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100/50 mb-4 border border-blue-200/50 shadow-md">
        <Icon className="w-5 h-5 text-blue-500" strokeWidth={2.5} /> {/* Increased stroke for better visibility */}
      </div>

      {/* Text Content */}
      <h3 className="font-bold text-lg text-gray-800 mb-1 leading-snug">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-normal">
        {description}
      </p>
    </div>
  );
};

// Primary Button (Blue Gradient style)
const PrimaryButton = ({ children }: { children: ReactNode }) => (
  <button className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-[1.02] duration-300 shadow-xl shadow-blue-400/50">
    {children}
  </button>
);

// Outline Button (Blue Border style)
const OutlineButton = ({ children }: { children: ReactNode }) => (
  <button className="px-8 py-4 text-lg font-bold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-transform transform hover:scale-[1.02] duration-300">
    {children}
  </button>
);

// =========================================================================
// 2. MAIN COMPONENT
// =========================================================================

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    // FULL WIDTH CONTAINER: Background takes up 100% width
    <div className="relative text-center pt-20 pb-12 md:pt-32 md:pb-5 bg-white overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-0"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        <div className="w-[700px] h-[700px] bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </motion.div>
      <div
        className="
          absolute bottom-1/3 left-[85%] w-48 h-48 opacity-80 z-0 
          text-[#3b82f6] // Tailwind way to set the color property (which feeds currentColor)
          bg-[radial-gradient(currentColor_2px,_transparent_2px)]
          bg-[size:16px_16px] 
        "
      ></div>
      <motion.div
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-0"
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        <div className="w-[800px] h-[800px] bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      </motion.div>

      {/* Main Content Container (Centered and Z-indexed on top) */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center mt-5 space-x-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold shadow-sm border border-orange-200">
          <Zap className="w-4 h-4 fill-orange-500 stroke-orange-500" />
          <span>Transform Your Career in 90 Days</span>
        </motion.div>

        {/* Main Heading with Gradient Text */}
        <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-700 tracking-tighter leading-tight mt-4">
          <span className="block font-mono text-3xl sm:text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 mt-2">
            Full Stack Development
          </span>
          <span className="block text-3xl font-stretch-50% sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 mt-2">
            Land Your Dream Job
          </span>
        </motion.h1>

        {/* Sub-text / Description */}
        <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          45 days of intensive training • Guaranteed internship • Full-time job placement
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
          <PrimaryButton>Start Journey</PrimaryButton>
          <OutlineButton>Download Syllabus</OutlineButton>
        </motion.div>

        {/* Feature Badges (Using the new circular style) */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-12 gap-y-8 mt-15">
          <FeatureBadge
            icon={Code}
            title="90 Days Training"
            description="Intensive full-stack curriculum"
          />
          <FeatureBadge
            icon={Users}
            title="Guaranteed Internship"
            description="Work with experienced teams"
          />
          <FeatureBadge
            icon={Briefcase}
            title="Job Placement"
            description="Full-time role after completion"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}