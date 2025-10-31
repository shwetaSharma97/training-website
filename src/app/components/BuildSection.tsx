"use client";
import React from "react";
import { Layers, Server, ShieldCheck, Briefcase, Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface AchievementCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative bg-gray-800/60 hover:bg-gray-800 border border-gray-700 hover:border-blue-500/50 rounded-2xl p-4 sm:p-6 shadow-xl transition-all duration-300 flex flex-col"
  >
    {/* Glow border */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur transition duration-300"></div>

    {/* Icon */}
    <div className="flex items-center mb-3">
      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mr-3">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <h4 className="text-base sm:text-lg font-semibold text-white">{title}</h4>
    </div>

    {/* Description */}
    <p className="text-gray-400 text-sm flex-grow">{description}</p>
  </motion.div>
);

export default function LearningExperience() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4a5568 1px, transparent 1px), linear-gradient(to bottom, #4a5568 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text leading-tight"
          >
            Learn by Building. Achieve by Creating.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Whether you’re from tech or non-tech background, gain real coding
            experience, master skills, and become a confident developer ready
            for the future.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AchievementCard
              icon={Layers}
              title="Master Modern Frontend"
              description="Design and develop sleek, dynamic UIs with React, Next.js, and Tailwind CSS."
            />
            <AchievementCard
              icon={Server}
              title="Engineer Scalable Backends"
              description="Learn Node.js, Python, and MongoDB to build powerful, production-ready APIs."
            />
            <AchievementCard
              icon={ShieldCheck}
              title="Be Interview-Ready"
              description="Prepare for technical interviews with focused questions and system design modules."
            />
            <AchievementCard
              icon={Briefcase}
              title="Gain Real Experience"
              description="Work on live industry projects and earn internship-level practical exposure."
            />
          </div>

          {/* Code / Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-2xl backdrop-blur-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-gray-400 text-sm">
                /src/LearnByDoing.jsx
              </span>
              <Code2 className="text-gray-500" />
            </div>

            {/* Added overflow-x-auto for horizontal scrolling on small screens */}
            {/* Adjusted font size to be smaller on mobile */}
            <pre className="overflow-x-auto text-xs sm:text-sm font-mono text-gray-300 leading-relaxed">
              {`function StudentJourney() {
  const [progress, setProgress] = useState("Learning 🚀");

  return (
    <div>
      <h1>Start Small, Build Big</h1>
      <p>Real projects. Real growth.</p>
      <button onClick={() => setProgress("Achieved ✅")}>
        {progress}
      </button>
    </div>
  );
}`}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
