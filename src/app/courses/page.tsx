"use client";
import React, { useState } from "react";
import { Search, Filter, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { COURSES } from "./coursesData";

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "General"];

  const filtered = COURSES.filter((c) => {
    const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" ? true : c.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font">
                Our Courses
              </h1>

              <p className="text-gray-600 mt-2">
                Choose from beginner to advanced courses, hands-on projects, and
                placement support.
              </p>

              {/* Quote */}
              <p className="mt-4 font-mono italic bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg text-lg border-l-4 border-blue-500 pl-4">
                “The future belongs to those who learn new skills today.”
              </p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {filtered.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} passHref>
              <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 hover:shadow-lg transition-all cursor-pointer h-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`text-sm font-semibold text-${course.color}-600`}
                    >
                      {course.category}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      {course.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">{course.duration}</p>
                    <p className="text-gray-400 text-sm mt-1">{course.level}</p>
                  </div>
                </div>

                <div className="mt-4 text-gray-600">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {course.highlights.slice(0, 3).map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <BookOpen className="w-4 h-4" />
                    <span>Projects</span>
                  </div>
                  <button className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              No courses found
            </h3>
            <p className="text-gray-500 mt-2">
              Try changing the search term or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
