"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Rocket, BadgeCheck, CheckCircle } from "lucide-react";

const phases = [
  {
    title: "Phase 1: Training",
    subtitle: "45 Days Intensive Program",
    icon: <BookOpen className="w-7 h-7 text-white" />,
    iconBg: "from-blue-500 to-indigo-500",
    features: [
      "Frontend development with React",
      "Learn backend with FastAPI & MongoDB",
      "Build real-world projects",
      "Mock interviews & resume prep",
      "Daily coding challenges & workshops",
    ],
    // footer: <span className="text-blue-600 font-bold text-lg mt-3">$1,999</span>
  },
  {
    title: "Phase 2: Internship",
    subtitle: "Guaranteed Opportunity",
    icon: <Rocket className="w-7 h-7 text-white" />,
    iconBg: "from-emerald-500 to-teal-500",
    features: [
      "Work on real client projects",
      "Collaborate with experienced teams",
      "Learn industry best practices",
      "Build your professional portfolio",
      "Carreer group support",
    ],
    // footer: (
    //   <span className="bg-emerald-100 text-emerald-700 font-medium text-sm px-3 py-1 rounded-full mt-2 inline-block">
    //     Included in Program
    //   </span>
    // )
  },
  {
    title: "Phase 3: Placement",
    subtitle: "Full-Time Career",
    icon: <BadgeCheck className="w-7 h-7 text-white" />,
    iconBg: "from-orange-400 to-pink-500",
    features: [
      "Resume Building",
      "Competitive salary package",
      "Mock interviews & soft skills",
      "Career mentorship",
    ],
    // footer: (
    //   <span className="bg-green-100 text-green-700 font-medium text-sm px-3 py-1 rounded-full mt-2 inline-block">
    //     After Internship
    //   </span>
    // )
  },
];

const GuaranteedPath = () => {
  return (
    <section
      id="journey"
      className="relative bg-gradient-to-b from-[#fdfdfd] to-[#f8fafc] py-20 px-6 overflow-hidden"
    >
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Your Learning Journey
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          A 3-phase learning roadmap from training to placement — designed to
          make you industry-ready.
        </p>
      </div>

      {/* Phases Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className="relative bg-white/30 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_8px_32px_rgba(31,38,135,0.1)] hover:shadow-[0_8px_40px_rgba(31,38,135,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {/* Icon */}
            <div
              className={`p-4 rounded-2xl bg-gradient-to-r ${phase.iconBg} shadow-md w-fit mb-5`}
            >
              {phase.icon}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              {phase.title}
            </h3>
            <p className="text-gray-500 mb-5 text-sm">{phase.subtitle}</p>

            {/* Features */}
            <ul className="space-y-4 text-gray-700 flex-1">
              {phase.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-[15px]">
                  <CheckCircle className="text-blue-500 w-4 h-4 mt-1 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-6"></div>

            {/* Soft glass highlight border */}
            <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GuaranteedPath;
