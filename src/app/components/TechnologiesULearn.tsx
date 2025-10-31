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
    <section
      id="curriculum"
      className="relative bg-gradient-to-b from-white to-[#fef9f5] py-24 overflow-hidden"
    >
      {/* 🌈 Layered Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)] blur-[100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)] blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-sm">
          Comprehensive Curriculum
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          45 Days Each for Frontend and Backend Mastery
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {/* 🔹 Frontend Track */}
          <div className="group relative bg-white/30 border border-white/40 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.02] hover:bg-white/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            {/* Header */}
            <div className="rounded-t-3xl bg-gradient-to-r from-blue-100/60 to-blue-200/40 p-6">
              <div className="flex items-center gap-3 mb-2">
                <CodeBracketIcon className="w-7 h-7 text-blue-600" />
                <h3 className="text-2xl font-semibold text-blue-700 text-start">
                  Frontend Track
                </h3>
              </div>
              <p className="text-gray-600 text-sm text-start">
                45 Days • React & Modern UI Development
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5 text-left">
              {[
                {
                  icon: <CodeBracketIcon className="w-4 h-4 text-blue-600" />,
                  title: "Core Technologies",
                  desc: "HTML5, CSS3, JavaScript ES6+, TypeScript",
                },
                {
                  icon: <BoltIcon className="w-4 h-4 text-blue-600" />,
                  title: "UI Frameworks",
                  desc: "Angular, React 19, Next.js, Tailwind CSS",
                },
                {
                  icon: <CircleStackIcon className="w-4 h-4 text-blue-600" />,
                  title: "State Management",
                  desc: "React Context, Redux, RXJS",
                },
                {
                  icon: (
                    <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600" />
                  ),
                  title: "Tools",
                  desc: "Git, GitHub, AI Tools",
                },
                {
                  icon: <CodeBracketIcon className="w-4 h-4 text-blue-600" />,
                  title: "Projects",
                  desc: "E-commerce Site, Blog App, Movie App",
                },
              ].map((item, i) => (
                <div key={i}>
                  <span className="flex items-center gap-2 font-semibold text-gray-900">
                    {item.icon}
                    {item.title}
                  </span>
                  <p className="ml-6 text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🔸 Backend Track */}
          <div className="group relative bg-white/30 border border-white/40 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.02] hover:bg-white/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <div className="rounded-t-3xl bg-gradient-to-r from-green-100/60 to-green-200/40 p-6">
              <div className="flex items-center gap-3 mb-2">
                <ServerIcon className="w-7 h-7 text-green-600" />
                <h3 className="text-2xl font-semibold text-green-700">
                  Backend Track
                </h3>
              </div>
              <p className="text-gray-600 text-sm text-start">
                45 Days • FastAPI, Node.js & Databases
              </p>
            </div>

            <div className="p-6 space-y-5 text-left">
              {[
                {
                  icon: <ServerIcon className="w-4 h-4 text-green-600" />,
                  title: "Core Technologies",
                  desc: "Node.js, Python, Express.js, RESTful APIs, WebSockets",
                },
                {
                  icon: <CircleStackIcon className="w-4 h-4 text-green-600" />,
                  title: "Databases",
                  desc: "MongoDB, PostgreSQL, ORM, Schema Design",
                },
                {
                  icon: <ShieldCheckIcon className="w-4 h-4 text-green-600" />,
                  title: "Authentication",
                  desc: "JWT, OAuth2, Session Management, Security",
                },
                {
                  icon: (
                    <WrenchScrewdriverIcon className="w-4 h-4 text-green-600" />
                  ),
                  title: "DevOps Basics",
                  desc: "Docker, CI/CD, Cloud Deployment, Monitoring",
                },
                {
                  icon: <ServerIcon className="w-4 h-4 text-green-600" />,
                  title: "Projects",
                  desc: "REST API, Real-Time Chat, Payment Integration",
                },
              ].map((item, i) => (
                <div key={i}>
                  <span className="flex items-center gap-2 font-semibold text-gray-900">
                    {item.icon}
                    {item.title}
                  </span>
                  <p className="ml-6 text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
