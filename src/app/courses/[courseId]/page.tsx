import React from "react";
import { COURSES } from "../coursesData";
import { notFound } from "next/navigation";
import { CheckCircle, BookOpen, Layers, Clock, User } from "lucide-react";
import Link from "next/link";

const CourseDetailPage = ({ params }: { params: { courseId: string } }) => {
  const course = COURSES.find((c) => c.id === params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="w-full h-72 relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            {course.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Course Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <p className={`text-sm font-semibold text-${course.color}-600`}>
                {course.category}
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                {course.title}
              </h2>

              <div className="flex items-center gap-5 text-gray-600 mt-4">
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {course.duration}
                </span>

                <span className="flex items-center gap-2">
                  <Layers size={18} />
                  {course.level}
                </span>

                <span className="flex items-center gap-2">
                  <BookOpen size={18} />
                  {course.highlights.length} Modules
                </span>
              </div>

              <p className="text-gray-700 mt-6 leading-relaxed text-lg">
                This course provides a complete hands-on learning experience
                with practical projects, real-world guidance, and
                industry-oriented training.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              Enroll Now
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>

        {/* What You’ll Learn */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What You’ll Learn
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <ul className="space-y-4">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3 text-lg">
                  <CheckCircle className="text-green-600 mt-1" size={22} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modules Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Course Modules
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {course.highlights.map((module, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Module {index + 1}
                </h4>
                <p className="text-gray-600">{module}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Instructor
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={40} className="text-gray-500" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Industry Expert
              </h3>
              <p className="text-gray-600 mt-1">
                7+ years of experience | Worked with Fortune 500 clients |
                Expert Trainer
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              "Is this course beginner friendly?",
              "Do I get a certificate?",
              "Is placement support included?",
              "Are the classes live or recorded?",
            ].map((q, i) => (
              <details
                key={i}
                className="bg-white p-4 rounded-xl border border-gray-200 cursor-pointer"
              >
                <summary className="text-lg font-medium">{q}</summary>
                <p className="mt-2 text-gray-600">
                  Yes! Full support and resources are provided.
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 text-center shadow-sm border border-blue-100">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-6 text-blue-600">
              {/* Simple Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Boost your tech career today
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              Get access to premium courses, mentorship, and a community of
              developers.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <button className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition shadow-md">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
