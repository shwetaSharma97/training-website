"use client";

import React, { useState } from "react";
import WhoWeAreSection from "../components/WhoWeAre";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of courses do you offer?",
    answer:
      "We provide high-quality training in high-demand fields like Web Development, Data Science, UI/UX Design, and Cloud Computing. Our programs are designed to equip you with practical, industry-relevant skills.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes! Our courses cater to various skill levels, from absolute beginners to those looking to advance their existing skills. We provide a supportive learning environment for everyone.",
  },
  {
    question: "Do you offer job assistance or internships?",
    answer:
      "Absolutely. Our vision is to bridge the gap between learning and industry needs. We offer guaranteed internship opportunities and have placement-driven programs to help you launch your career.",
  },
  {
    question: "Who are the trainers?",
    answer:
      "You'll learn from industry experts who have real-world working experience. They bring practical insights and mentorship to help you succeed.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-5xl font- bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg mb-4">
          We Build Future Tech Leaders
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          ETransforming education with real-world skills, practical training,
          and a mission to empower the next generation of developers, designers,
          and innovators.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-5xl w-full mb-20">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide high-quality, affordable, and practical training programs
            that help learners master industry-demanded skills such as Web
            Development, Data Science, UI/UX, and Cloud.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold text-green-600 mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Creating a powerful community of skilled professionals and bridging
            the gap between learning and industry requirements through
            internships and placement-driven programs.
          </p>
        </div>
      </div>

      <WhoWeAreSection />

      {/* Why Choose Us */}
      <div className="max-w-5xl w-full mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              Expert Trainers
            </h3>
            <p className="text-gray-600">
              Learn from industry experts with real working experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-3">
              Hands-on Projects
            </h3>
            <p className="text-gray-600">
              Work on real-world projects to build practical skills.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
            <h3 className="text-xl font-semibold text-yellow-600 mb-3">
              Internships
            </h3>
            <p className="text-gray-600">
              Guaranteed internship opportunities after course completion.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl w-full mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full max-w-5xl mt-10">
        <div className="relative rounded-2xl bg-slate-100 p-10 text-center shadow-lg border border-slate-200 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Join hundreds of successful graduates. Explore our courses and find the right path for your tech career.
            </p>
            <Link href="/courses">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0 pb-4">
      <button
        className="w-full flex justify-between items-center text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
}
