import { Users, BookOpen, Award, Rocket } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section className="max-w-6xl w-full px-6 py-20 grid md:grid-cols-2 gap-16">
      
      {/* Left Text Content */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          We are a professional training institute dedicated to providing
          industry-focused courses that prepare students for real-world careers.
          With a modern curriculum, hands-on projects, expert mentors, and
          internship support, we ensure every learner becomes job-ready.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Our commitment is simple: <strong>quality learning, real skills, real outcomes</strong>.
        </p>
      </div>

      {/* Right Side Stats Grid */}
      <div className="grid grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold">10+ Students</h3>
          <p className="text-gray-500 text-sm mt-1">trained globally</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <BookOpen className="w-10 h-10 text-purple-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold">5+ Courses</h3>
          <p className="text-gray-500 text-sm mt-1">industry aligned</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <Award className="w-10 h-10 text-red-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold">Guaranteed Internships</h3>
          <p className="text-gray-500 text-sm mt-1">with interview training</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
          <Rocket className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
          <h3 className="text-xl font-semibold">Career Support</h3>
          <p className="text-gray-500 text-sm mt-1">till you get placed</p>
        </div>

      </div>
    </section>
  );
}
