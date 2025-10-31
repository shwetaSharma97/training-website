"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BookOpen,
  Briefcase,
  Users,
  Rocket,
  Target,
  FileCode2,
  Lightbulb,
} from "lucide-react";

const OurProgram = () => {
  return (
    <section id="our-program" className="relative bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- Section Intro --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Learn, Build & <span className="text-blue-600">Grow</span> with Us
          </h2>
          <p className="text-lg text-gray-600 mt-5 leading-relaxed">
            At <span className="font-semibold text-blue-600">CodeClimbNGrow</span>,
            we believe coding isn’t just about syntax — it’s about turning ideas into
            innovation. Our goal is to help aspiring developers climb their way to
            success through real-world learning and career-focused mentorship.
          </p>
        </motion.div>

        {/* <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-lg shadow-md rounded-3xl p-10 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                45-Day Intensive Training
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our journey starts with an immersive training program where you’ll
              master <span className="font-semibold">Full Stack Development</span> —
              from frontend frameworks like React & Angular to backend technologies
              like Node.js, Express, Python, SQL, and MongoDB.
            </p>
            <ul className="mt-5 space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-blue-600" /> Hands-on coding sessions
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-blue-600" /> Daily challenges & live projects
              </li>
              <li className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" /> Problem-solving mindset development
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Practical, Real, Impactful.
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Every learner writes real code, solves real problems, and builds real
              solutions — not just tutorials. We bridge the gap between theory and
              practical experience.
            </p>
            <p className="text-gray-600">
              By the end of 45 days, you’ll have a strong technical foundation and
              the confidence to work on production-level codebases.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 order-2 md:order-1"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              2-Month Guaranteed Internship
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              After training, step directly into a{" "}
              <span className="font-semibold text-blue-600">2-month guaranteed internship</span>.
              Work with professional teams, handle client projects, and showcase your
              expertise in a real-world environment.
            </p>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" /> Live client project experience
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" /> Team collaboration & communication
              </li>
              <li className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-blue-600" /> Build a portfolio that speaks for itself
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-3xl p-10 shadow-xl"
          >
            <p className="text-lg leading-relaxed font-medium">
              Gain practical exposure, industry experience, and confidence to face real
              tech challenges. This is where you transform from learner to professional.
            </p>
            <p className="mt-4 text-sm opacity-80">
              Complete the internship successfully, and you’ll unlock job referrals and
              mentorship opportunities.
            </p>
          </motion.div>
        </div> */}

        {/* --- Beyond the Classroom --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-15 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Beyond the Classroom
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
