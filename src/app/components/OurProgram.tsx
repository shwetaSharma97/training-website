"use client";
import React from "react";
import { motion } from "framer-motion";

const OurProgram = () => {
  return (
    <section id="our-program" className="relative bg-gradient-to-b from-white to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- Section Intro --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
            Learn, Build & <span className="text-blue-600">Grow</span> with Us
          </h2>
          <p className="text-lg text-gray-600 mt-5 leading-relaxed">
            At <span className="font-semibold text-blue-600">CodeClimbNGrow</span>,
            we believe coding isn’t just about syntax — it’s about turning ideas into
            innovation. Our goal is to help aspiring developers climb their way to
            success through real-world learning and career-focused mentorship.
          </p>
        </motion.div>

        {/* --- Beyond the Classroom --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          {/* <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Beyond the Classroom
          </h3> */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Workshops & Seminars by Industry Experts",
              "Coding Competitions to Challenge Your Skills",
              "Mock Interviews & Resume Building",
              "Career Counseling & Job Referrals",
              "Continuous Learning with Assignments & PDFs",
              "Personal Mentorship for Career Growth",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-lg border border-gray-100 rounded-xl p-5 text-gray-700 shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurProgram;
