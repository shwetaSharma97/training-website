import React from "react";
import {
  Calendar,
  Upload,
  Mail,
  UserCheck,
  ClipboardCheck,
  Trophy,
  Star,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function MockInterviewHero() {
  const stats = [
    {
      icon: <Users size={28} />,
      value: "5000+",
      title: "Mock Interviews",
    },
    {
      icon: <Star size={28} />,
      value: "4.9/5",
      title: "Student Rating",
    },
    {
      icon: <Briefcase size={28} />,
      value: "1200+",
      title: "Final Interviews",
    },
  ];

  const steps = [
    // {
    //   icon: <Upload size={22} />,
    //   title: "Upload Resume",
    //   desc: "Upload your latest resume in PDF or DOC format.",
    // },
    {
      icon: <Mail size={22} />,
      title: "Send Resume",
      desc: "Email your resume to codeclimbngrow@gmail.com",
    },
    {
      icon: <Calendar size={22} />,
      title: "Book Slot",
      desc: "Get details of your preferred interview date & time.",
    },
    {
      icon: <UserCheck size={22} />,
      title: "Attend Interview",
      desc: "Join your mock interview.",
    },
    {
      icon: <ClipboardCheck size={22} />,
      title: "Get Feedback",
      desc: "Receive detailed performance analysis.",
    },
    {
      icon: <Trophy size={22} />,
      title: "Final Interview",
      desc: "Final interview to overcome first mock interview mistakes.",
    },
     {
      icon: <ClipboardCheck size={22} />,
      title: "Get Feedback",
      desc: "Get detailed performance feedback analysis.",
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}

          <div>
            {/* <span className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 India's Affordable Mock Interview Platform
            </span> */}

            <h1 className="text-5xl font-black text-gray-900 mt-6 leading-tight">
              Crack Your
              <span className="text-blue-600"> Dream Interview </span>
              with Experts
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              Practice mock interviews conducted by industry
              experts. Receive personalized feedback, resume improvement
              suggestions, and get a chance for a final interview.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "2 Mock Interviews",
                "Detailed Feedback Report",
                "Resume Review",
                "Final Interview Opportunity",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle className="text-green-500" size={20} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5 mt-10">
              {/* <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
                Book Interview
                <ArrowRight size={18} />
              </button> */}

              {/* <div className="bg-white rounded-xl shadow px-8 py-4 border">
                <p className="text-sm text-gray-500">Starting From</p>

                <h2 className="text-3xl font-bold text-blue-600">
                  ₹99
                </h2>
              </div> */}
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
                  alt=""
                  className="rounded-xl h-72 w-full object-cover"
                />

                <div className="mt-6 flex justify-between">
                  <div>
                    <p className="font-bold text-lg">
                      Live Mock Interview
                    </p>
                    {/* <p className="text-gray-500">
                      Technical + HR Round
                    </p> */}
                  </div>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white shadow-xl rounded-xl px-6 py-4">
              <p className="text-sm text-gray-500">
                Success Rate
              </p>
              <h2 className="text-3xl font-bold text-blue-600">
                95%
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      {/* <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold mt-6">
                {item.value}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              How It Works
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Complete your interview booking in just a few simple steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8 mt-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center"
              >
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">
                  {step.icon}
                </div>

                <div className="absolute -top-2 left-1/2 translate-x-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <h3 className="font-bold text-lg mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 leading-6">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}