'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Rocket,
  BadgeCheck,
  CheckCircle
} from 'lucide-react';

const phases = [
  {
    title: 'Phase 1: Training',
    subtitle: '45 Days Intensive Program',
    icon: <BookOpen className="w-6 h-6 text-white" />,
    iconBg: 'bg-blue-600',
    features: [
      'Master frontend development with React',
      'Learn backend with FastAPI & MongoDB',
      'Build real-world projects',
      'Daily coding challenges & workshops'
    ],
    footer: <span className="text-blue-600 font-bold text-xl mt-2">$1,999</span>
  },
  {
    title: 'Phase 2: Internship',
    subtitle: 'Guaranteed Opportunity',
    icon: <Rocket className="w-6 h-6 text-white" />,
    iconBg: 'bg-emerald-600',
    features: [
      'Work on real client projects',
      'Collaborate with experienced teams',
      'Learn industry best practices',
      'Build your professional portfolio'
    ],
    footer: (
      <span className="bg-emerald-100 text-emerald-700 font-medium text-sm px-3 py-1 rounded-full mt-2 inline-block">
        Included in Program
      </span>
    )
  },
  {
    title: 'Phase 3: Placement',
    subtitle: 'Full-Time Career',
    icon: <BadgeCheck className="w-6 h-6 text-white" />,
    iconBg: 'bg-orange-600',
    features: [
      'Full-time job opportunity',
      'Competitive salary package',
      'Career growth support',
      'Continued mentorship'
    ],
    footer: (
      <span className="bg-green-100 text-green-700 font-medium text-sm px-3 py-1 rounded-full mt-2 inline-block">
        After Internship
      </span>
    )
  }
];

const GuaranteedPath = () => {
  return (
    <section id='features' className="bg-[#f9fbfd] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Learning Journey</h2>
        <p className="text-gray-600 mt-2 text-lg">
          A comprehensive 3-phase program designed for success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
          >
            <div className={`p-5 rounded-lg ${phase.iconBg} mb-4`}>
              {phase.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">{phase.title}</h3>
            <p className="text-gray-500 mb-4">{phase.subtitle}</p>

            <ul className="space-y-5 text-md text-gray-700 mb-4">
              {phase.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-500 w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>

            {phase.footer}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GuaranteedPath;
