import React from "react";
import Image from "next/image";
import { UserPlus, ArrowRight, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* --- Background Decorative Elements --- */}

      {/* Top Left Gradient/Shape (Pink/Orange Blob) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Right Side Large Circle (Yellow/Orange) */}
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 translate-x-1/2 z-0"></div>

      {/* Dotted Patterns (Top Left and Bottom Center) */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 opacity-80 z-0"
        style={{
          backgroundImage: "radial-gradient(currentColor 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          color: "#60a5fa",
        }} // Blue dots
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-48 h-48 opacity-80 z-0"
        style={{
          backgroundImage: "radial-gradient(currentColor 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          color: "#3b82f6",
        }} // Blue dots
      ></div>

      {/* --- Content Area --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN: Image, Stat Card, and Info Card */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about.webp" // Placeholder path (replace with your actual image)
                alt="Enrolled Learner"
                width={700}
                height={470}
                className="object-cover w-full h-full"
              />
              {/* Optional: Add a subtle green border on the image edge to match the design */}
              <div className="absolute inset-0 border-4 border-blue-500/20 rounded-xl pointer-events-none"></div>
            </div>

            {/* Stat Card (20K+ Enrolled Learners) */}
            <div className="absolute -bottom-8 left-0 lg:left-[10%] bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 w-56 border border-gray-100">
              <div className="p-2 bg-blue-50 rounded-full">
                <UserPlus className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">Shweta Sharma</p>
                {/* <p className="text-sm text-gray-500">Enrolled Learners</p> */}
              </div>
            </div>

            {/* Tech Booster Info Card (Dreams can come true here) */}
            <div className="absolute top-0 right-0 lg:right-[4%] lg:top-[-13%] w-46 h-36 bg-white p-6 rounded-xl shadow-xl text-center border border-gray-100 transform translate-x-0 lg:translate-x-1/4 translate-y-1/4 lg:translate-y-[-10%]">
              {/* Circular Gauge/Icon (Placeholder) */}
              <div className="w-11 h-11 mx-auto mb-2 flex items-center justify-center border-4 border-blue-300 rounded-full">
                <span className="text-xl font-bold text-blue-500">
                  <TrendingUp />
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">ClimbNGrow</p>
              <p className="text-xs text-gray-500">
                Climbing career through coding & software
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: About Text and CTA */}
          <div className="pt-20 lg:pt-0">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
              Founder Message
            </p>
            {/* Green Underline */}
            <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              At
              <span className="font-bold text-gray-900">
                {" "}
                ClimbNCode Solutions ,
              </span>
              we believe coding is more than just a skill — it’s the language of
              innovation. Our goal is to guide students from curiosity to
              creation by providing hands-on learning, real-world projects, and
              mentorship that inspires confidence. Let’s build the future, one
              line of code at a time.
            </p>

            {/* <button className="flex items-center space-x-2 px-6 py-3 mt-8 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-300/50">
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
