"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Rocket, BadgeCheck, CheckCircle } from "lucide-react";

const phases = [
  {
    title: "Phase 1: Training",
    subtitle: "45 Days Intensive Program",
    icon: BookOpen,
    gradient: "from-blue-500/90 via-indigo-500/90 to-purple-500/90",
    features: [
      "Frontend development with React",
      "Learn backend with FastAPI & MongoDB",
      "Build real-world projects",
      "Mock interviews & resume prep",
      "Daily coding challenges & workshops",
    ],
  },
  {
    title: "Phase 2: Internship",
    subtitle: "Guaranteed Opportunity",
    icon: Rocket,
    gradient: "from-teal-400/90 via-emerald-500/90 to-cyan-500/90",
    features: [
      "Work on real client projects",
      "Collaborate with experienced teams",
      "Learn industry best practices",
      "Build your professional portfolio",
      "Career group support",
    ],
  },
  {
    title: "Phase 3: Placement",
    subtitle: "Full-Time Career",
    icon: BadgeCheck,
    gradient: "from-orange-400/90 via-pink-500/90 to-red-500/90",
    features: [
      "Resume Building",
      "Competitive salary package",
      "Mock interviews & soft skills",
      "Career mentorship",
    ],
  },
];

const GuaranteedPath = () => {
  return (
    <section
      id="journey"
      className="relative bg-gradient-to-b from-[#e2e3e6] via-[#f7f8f9] to-[#e9f0ff] py-24 px-6 overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <div className="absolute -top-20 -left-32 w-72 h-72 bg-gradient-to-r from-blue-200/60 to-indigo-300/60 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-pink-200/60 to-orange-300/60 blur-3xl rounded-full animate-pulse" />

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Your Learning Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
        >
          A 3-phase roadmap designed to make you industry-ready — from hands-on
          training to real-world internship and your first placement.
        </motion.p>
      </div>

      {/* Phase Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="group relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-[0_8px_32px_rgba(31,38,135,0.1)] hover:shadow-[0_8px_40px_rgba(31,38,135,0.2)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon Section (New Style) */}
              <div className="relative mb-8 flex justify-center">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${phase.gradient} blur-2xl opacity-30 rounded-full`}
                ></div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`relative z-10 bg-white/30 backdrop-blur-lg border border-white/50 rounded-full p-6 shadow-lg`}
                >
                  <Icon className="w-10 h-10 text-gray-900" />
                  {/* Gradient ring border */}
                  <div
                    className={`absolute -inset-[2px] rounded-full bg-gradient-to-r ${phase.gradient} opacity-60 blur-[3px]`}
                  ></div>
                </motion.div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
                {phase.title}
              </h3>
              <p className="text-gray-500 mb-6 text-sm tracking-wide text-center">
                {phase.subtitle}
              </p>

              {/* Features */}
              <ul className="space-y-4 text-gray-700 flex-1">
                {phase.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] leading-relaxed"
                  >
                    <CheckCircle className="text-blue-500 w-4 h-4 mt-1 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Shine & Glass Layer */}
              <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GuaranteedPath;
