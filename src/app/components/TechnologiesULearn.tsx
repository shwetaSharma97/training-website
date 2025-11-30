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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  alt="React &amp; Modern UI Development"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://readdy.ai/api/search-image?query=Modern%20React%20development%20workspace%20with%20multiple%20monitors%20showing%20React%20code%2C%20component%20architecture%20diagrams%2C%20and%20beautiful%20user%20interfaces%2C%20professional%20developer%20environment%20with%20clean%20desk%20setup%2C%20natural%20lighting%2C%20high-tech%20atmosphere&amp;width=400&amp;height=250&amp;seq=react-course&amp;orientation=landscape"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Frontend
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    45 Days
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    React &amp; Modern UI Development
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-gray-300"></i>
                      </div>
                      <span className="text-sm text-gray-600">(4.8)</span>
                      <span className="text-sm text-gray-500">
                        • 12,847 students
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Intermediate
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Master modern React development with the latest features,
                  hooks, and best practices. Build production-ready applications
                  with TypeScript and modern UI frameworks.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      React 19
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      Next.js
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      Tailwind CSS
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      +1 more
                    </span>
                  </div>
                </div>
                <div className="flex-grow"></div> {/* Spacer */}
                {/* <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-100">
               <img alt="Sarah Johnson" className="w-10 h-10 rounded-full object-cover" src="https://readdy.ai/api/search-image?query=Professional%20female%20software%20developer%20portrait%2C%20friendly%20smile%2C%20modern%20office%20background%2C%20confident%20and%20approachable%2C%20high%20quality%20headshot&amp;width=80&amp;height=80&amp;seq=sarah-instructor&amp;orientation=squarish" />
               <div>
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">8+ years React Expert</p>
               </div>
            </div> */}
                {/* <div className="mb-4">
               <p className="text-sm font-medium text-gray-900 mb-2">Projects You'll Build:</p>
               <div className="flex flex-wrap gap-1"><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">E-commerce Site</span><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Blog App</span><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Movie App</span></div>
            </div> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      <div className="flex justify-center items-center">
                        <IndianRupee width={20} />
                        4999
                      </div>
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      <div className="flex justify-center items-center">
                        <IndianRupee width={20} />
                        4999
                      </div>
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap group-hover:shadow-lg">
                    {" "}
                    <Link href="register">Enroll Now</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  alt="Angular Enterprise Development"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://readdy.ai/api/search-image?query=Angular%20development%20environment%20with%20TypeScript%20code%2C%20component%20structure%2C%20enterprise%20application%20architecture%2C%20modern%20IDE%20interface%2C%20professional%20workspace%20with%20multiple%20screens&amp;width=400&amp;height=250&amp;seq=angular-course&amp;orientation=landscape"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Frontend
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    45 Days
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Angular Enterprise Development
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-gray-300"></i>
                      </div>
                      <span className="text-sm text-gray-600">(4.7)</span>
                      <span className="text-sm text-gray-500">
                        • 9,234 students
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Advanced
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Build scalable enterprise applications with Angular. Learn
                  advanced patterns, state management, and modern development
                  practices for large-scale projects.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      Angular
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      RxJS
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      NgRx
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      +1 more
                    </span>
                  </div>
                </div>
                <div className="flex-grow"></div> {/* Spacer */}
                {/* <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-100">
               <img alt="Michael Chen" className="w-10 h-10 rounded-full object-cover" src="https://readdy.ai/api/search-image?query=Professional%20male%20software%20architect%20portrait%2C%20glasses%2C%20confident%20expression%2C%20modern%20tech%20office%20background%2C%20experienced%20developer%20look&amp;width=80&amp;height=80&amp;seq=michael-instructor&amp;orientation=squarish" />
               <div>
                  <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                  <p className="text-xs text-gray-500">10+ years Angular Architect</p>
               </div>
            </div> */}
                {/* <div className="mb-4">
               <p className="text-sm font-medium text-gray-900 mb-2">Projects You'll Build:</p>
               <div className="flex flex-wrap gap-1"><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Enterprise Dashboard</span><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">CRM System</span><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Admin Panel</span></div>
            </div> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      <div className="flex justify-center items-center">
                        <IndianRupee width={20} />
                        4999
                      </div>
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      <div className="flex justify-center items-center">
                        <IndianRupee width={20} />
                        4999
                      </div>
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap group-hover:shadow-lg">
                    {" "}
                    <Link href="register">Enroll Now</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  alt="Python Backend &amp; API Development"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://readdy.ai/api/search-image?query=Python%20backend%20development%20setup%20with%20FastAPI%20code%2C%20database%20schemas%2C%20API%20documentation%2C%20terminal%20windows%2C%20modern%20development%20environment%20with%20dark%20theme&amp;width=400&amp;height=250&amp;seq=python-course&amp;orientation=landscape"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Backend
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    45 Days
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Python Backend &amp; API Development
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-yellow-400"></i>
                        <i className="ri-star-fill text-sm text-gray-300"></i>
                      </div>
                      <span className="text-sm text-gray-600">(4.9)</span>
                      <span className="text-sm text-gray-500">
                        • 15,632 students
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Intermediate
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Master Python backend development with FastAPI, databases, and
                  modern deployment practices. Build scalable APIs and
                  microservices.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      Python 3.11
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      FastAPI
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      PostgreSQL
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      MongoDB
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      +1 more
                    </span>
                  </div>
                </div>
                <div className="flex-grow"></div> {/* Spacer */}
                {/* <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-100">
               <img alt="David Rodriguez" className="w-10 h-10 rounded-full object-cover" src="https://readdy.ai/api/search-image?query=Professional%20Hispanic%20male%20backend%20developer%20portrait%2C%20casual%20shirt%2C%20friendly%20demeanor%2C%20modern%20office%20with%20servers%20in%20background&amp;width=80&amp;height=80&amp;seq=david-instructor&amp;orientation=squarish" />
               <div>
                  <p className="text-sm font-medium text-gray-900">David Rodriguez</p>
                  <p className="text-xs text-gray-500">12+ years Python Expert</p>
               </div>
            </div> */}
                {/* <div className="mb-4">
               <p className="text-sm font-medium text-gray-900 mb-2">Projects You'll Build:</p>
               <div className="flex flex-wrap gap-1"><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">REST API</span><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Microservices</span><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Data Pipeline</span></div>
            </div> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      <div className="flex justify-center items-center">
                        <IndianRupee width={20} />
                        4999
                      </div>
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      <div className="flex justify-center items-center">
                        <IndianRupee width={20} />
                        4999
                      </div>
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap group-hover:shadow-lg">
                    {" "}
                    <Link href="register">Enroll Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-8">
          <Link href="/courses" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              View More
          </Link>
        </div>


      </div>
    </section>
  );
};

export default CurriculumSection;
