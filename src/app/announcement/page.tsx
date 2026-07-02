import React from "react";

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-8">
        <h1 className="text-4xl font text-gray-800">Training Announcements</h1>
        {/* <button className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all">
          + New Announcement
        </button> */}
      </div>

      {/* Announcement Cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all">
          <p className="text-sm text-blue-600 font-semibold">React JS Batch</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">New Batch Starting Soon</h2>
          <p className="text-gray-600 mt-4">
            Join our upcoming React JS batch with hands-on projects and guaranteed internship support.
          </p>
          
          <div className="flex items-center justify-between mt-6">
            <span className="text-gray-500 text-sm">Starts: 25 Nov 2025</span>
            {/* <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all">
              View Details
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
