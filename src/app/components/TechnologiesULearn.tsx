import React from "react";
import {
   CodeBracketIcon,
   ServerIcon,
   BoltIcon,
   CircleStackIcon,
   ShieldCheckIcon,
   WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { IndianRupee } from "lucide-react";
import Link from "next/link";

const CurriculumSection: React.FC = () => {
   const courses = [
      {
         title: "React & Modern UI Development",
         category: "Frontend",
         categoryColor: "bg-blue-100 text-blue-800",
         duration: "45 Days",
         image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
         description:
            "Master modern React development with hooks, Next.js and Tailwind CSS.",
         rating: "4.8",
         students: "12,847",
         level: "Intermediate",
         levelColor: "bg-yellow-100 text-yellow-800",
         tags: ["React 19", "TypeScript", "Next.js", "Tailwind CSS"],
         price: "4999",
      },
      {
         title: "Angular Enterprise Development",
         category: "Frontend",
         categoryColor: "bg-blue-100 text-blue-800",
         duration: "45 Days",
         image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
         description:
            "Build enterprise Angular applications with RxJS and NgRx.",
         rating: "4.7",
         students: "9,234",
         level: "Advanced",
         levelColor: "bg-red-100 text-red-800",
         tags: ["Angular", "TypeScript", "RxJS", "NgRx"],
         price: "4999",
      },
      {
         title: "Python Backend Development",
         category: "Backend",
         categoryColor: "bg-green-100 text-green-800",
         duration: "45 Days",
         image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
         description:
            "Learn FastAPI, PostgreSQL, MongoDB and scalable API development.",
         rating: "4.9",
         students: "15,632",
         level: "Intermediate",
         levelColor: "bg-yellow-100 text-yellow-800",
         tags: ["Python", "FastAPI", "PostgreSQL", "MongoDB"],
         price: "4999",
      },
   ];

   return (
      <section
         id="curriculum"
         className="relative bg-gradient-to-b from-white to-[#fef9f5] py-8 overflow-hidden"
      >
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)] blur-[100px]"></div>
            <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)] blur-[120px]"></div>
         </div>

         <div className="mx-auto px-4 relative z-10">
            <h2 className="text-4xl mb-6 md:text-4xl text-center font-bold text-gray-900 drop-shadow-sm">
               Courses
            </h2>


            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {courses.map((course, index) => (
                     <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                     >
                        <div className="relative">
                           <img
                              src={course.image}
                              alt={course.title}
                              className="h-60 w-full object-cover"
                           />

                           <span
                              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${course.categoryColor}`}
                           >
                              {course.category}
                           </span>

                           <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                              {course.duration}
                           </span>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                           <div className="flex justify-between items-start mb-3">
                              <h3 className="text-xl font-bold text-gray-900">
                                 {course.title}
                              </h3>

                              <span
                                 className={`text-xs px-2 py-1 rounded-full ${course.levelColor}`}
                              >
                                 {course.level}
                              </span>
                           </div>

                           <p className="text-sm text-gray-600 mb-4">
                              ⭐ {course.rating} • {course.students} Students
                           </p>

                           <p className="text-gray-600 text-sm mb-5 flex-1">
                              {course.description}
                           </p>

                           <div className="flex flex-wrap gap-2 mb-6">
                              {course.tags.map((tag) => (
                                 <span
                                    key={tag}
                                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                 >
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           {/* <div className="mt-auto flex items-center justify-between">
                              <div className="text-2xl font-bold text-blue-600">
                                 ₹{course.price}
                              </div>

                              <Link
                                 href="/register"
                                 className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
                              >
                                 Enroll Now
                              </Link>
                           </div> */}
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </section>
   );
};

export default CurriculumSection;
