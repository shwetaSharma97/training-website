'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image'; // Included for standard Next.js component structure
import { Code, Users, Briefcase, LucideIcon, Zap, LucideProps } from 'lucide-react'; // Updated icons for new badge design
import { easeInOut, motion } from 'framer-motion';

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
        <Icon className="w-5 h-5 text-white" strokeWidth={2.5} /> {/* Increased stroke for better visibility */}
      </div>

      {/* Text Content */}
      <h3 className="font-bold text-lg text-white mb-1 leading-snug">
        {title}
      </h3>
      <p className="text-white text-sm leading-normal">
        {description}
      </p>
    </div>
  );
};

// Primary Button (Blue Gradient style)
const PrimaryButton = ({ children }: { children: ReactNode }) => (
  <button className="px-8 py-4 text-md font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-[1.02] duration-300 shadow-xl shadow-blue-400/50">
    {children}
  </button>
);

// Outline Button (Blue Border style)
const OutlineButton = ({ children }: { children: ReactNode }) => (
  <button className="px-8 py-4 text-md font-bold text-white border-2 border-white rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-transform transform hover:scale-[1.02] duration-300">
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: easeInOut } // ✅ correct usage
  }
};

export default function HeroSection() {
  return (
    // FULL WIDTH CONTAINER: Background takes up 100% width
    <div 
      className="relative text-center pt-24 pb-12 md:pt-32 md:pb-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/tech.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"
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
        className="absolute bottom-1/5 left-[90%] w-32 h-32 md:w-48 md:h-48 opacity-60 md:opacity-80 z-0 bg-gradient-to-r from-blue-300 to-orange-500"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, black 2px, transparent 2px)',
          WebkitMaskRepeat: 'repeat',
          WebkitMaskSize: '16px 16px',
          maskImage: 'radial-gradient(circle, black 2px, transparent 2px)',
          maskRepeat: 'repeat',
          maskSize: '16px 16px',
        }}
      ></div>
      <div
        className="absolute top-1/4 left-[-5%] w-32 h-32 md:w-48 md:h-48 opacity-60 md:opacity-80 z-0 bg-gradient-to-r from-blue-300 to-orange-500"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, black 2px, transparent 2px)',
          WebkitMaskRepeat: 'repeat',
          WebkitMaskSize: '16px 16px',
          maskImage: 'radial-gradient(circle, black 2px, transparent 2px)',
          maskRepeat: 'repeat',
          maskSize: '16px 16px',
        }}
      ></div>
      <motion.div
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-0 hidden md:block"
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
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center mt-5 space-x-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold shadow-sm border border-orange-200">
          <Zap className="w-4 h-4 fill-orange-500 stroke-orange-500" />
          <span>Transform Your Career in 90 Days</span>
        </motion.div>

        {/* Main Heading with Gradient Text */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight mt-4">
          <span className="block font-mono text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 mt-2">
            Master Full Stack Development
          </span>
          <span className="block text-4xl font-normal sm:text-5xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 mt-2 animate-text-glow">
            Land Your Dream Job
          </span>
        </motion.h1>

        {/* Sub-text / Description */}
        <motion.p variants={itemVariants} className="mt-6 text-base md:text-xl text-white max-w-3xl mx-auto">
          45 days of intensive training • Guaranteed internship • Full-time job placement
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-row justify-center items-center space-x-4 sm:space-x-6 mt-10">
          <PrimaryButton>Start Journey</PrimaryButton>
          <OutlineButton>Download Syllabus</OutlineButton>
        </motion.div>

        {/* Feature Badges (Using the new circular style) */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-8 mt-16 md:mt-20">
          <FeatureBadge
            icon={Code}
            title="90 Days Training"
            description="Intensive full-stack curriculum"
          />
          <FeatureBadge
            icon={Code}
            title="Seminars & Workshops"
            description="Seminar by Industry Experts"
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