import React from "react";
import {
  CodeBracketIcon,
  ServerIcon,
  BoltIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const CurriculumSection: React.FC = () => {
  return (
    <section id="curriculum" className="bg-gradient-to-b from-white to-[#fff9f5] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Comprehensive Curriculum
        </h2>
        <p className="text-gray-600 mt-2">
          45 days each for Frontend and Backend mastery
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Frontend Track */}
          <div className="bg-blue-50 border border-blue-100 shadow-md rounded-2xl p-8 text-left">
            <div className="flex items-center gap-2 mb-3">
              <CodeBracketIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-blue-700">Frontend Track</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">45 Days • React & Modern UI</p>

            <ul className="space-y-5 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4 text-blue-600" />
                  Core Technologies
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  HTML5, CSS3, JavaScript ES6+, React 19, TypeScript
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <BoltIcon className="w-4 h-4 text-blue-600" />
                  UI Frameworks
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  Tailwind CSS, Shadcn/UI, Responsive Design
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <CircleStackIcon className="w-4 h-4 text-blue-600" />
                  State Management
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  React Context, Redux, API Integration
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600" />
                  Tools & Testing
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  Git, Webpack, Jest, React Testing Library
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <CodeBracketIcon className="w-4 h-4 text-blue-600" />
                  Projects
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  E-commerce site, Dashboard, Social media app
                </p>
              </li>
            </ul>
          </div>

          {/* Backend Track */}
          <div className="bg-green-50 border border-green-100 shadow-md rounded-2xl p-8 text-left">
            <div className="flex items-center gap-2 mb-3">
              <ServerIcon className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-semibold text-green-700">Backend Track</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">45 Days • FastAPI & Databases</p>

            <ul className="space-y-5 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <ServerIcon className="w-4 h-4 text-green-600" />
                  Core Technologies
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  Python 3.11+, FastAPI, RESTful APIs, WebSockets
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <CircleStackIcon className="w-4 h-4 text-green-600" />
                  Databases
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  MongoDB, PostgreSQL, Redis, Database Design
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-green-600" />
                  Authentication
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  JWT, OAuth2, Session Management, Security
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <WrenchScrewdriverIcon className="w-4 h-4 text-green-600" />
                  DevOps Basics
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  Docker, CI/CD, Cloud Deployment, Monitoring
                </p>
              </li>

              <li>
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <ServerIcon className="w-4 h-4 text-green-600" />
                  Projects
                </span>
                <p className="ml-6 text-gray-600 text-sm">
                  REST API, Real-time chat, Payment integration
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
