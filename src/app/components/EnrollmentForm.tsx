"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, BookOpen } from "lucide-react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="enroll"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-3 py-16 overflow-hidden"
    >
      {/* ✨ Center Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_70%)] blur-[120px]" />
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.12),_transparent_70%)] blur-[120px]" />
      </div>

      {/* 🌐 Glass Form Card */}
      <motion.div
        className="relative max-w-2xl w-full bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="p-8 bg-gradient-to-r from-blue-500/80 to-indigo-400/80 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-white drop-shadow-sm">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-blue-50 mt-2">
            Fill out the form below — we’ll reach out within 24 hours.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6 text-gray-800 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              label="First Name"
              name="firstName"
              icon={<User className="h-4 w-4" />}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FormField
              label="Last Name"
              name="lastName"
              icon={<User className="h-4 w-4" />}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <FormField
            label="Email Address"
            name="email"
            icon={<Mail className="h-4 w-4" />}
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FormField
            label="Phone Number"
            name="phone"
            icon={<Phone className="h-4 w-4" />}
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Select Program */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              Interested Program <span className="text-red-500">*</span>
            </label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full bg-white/60 border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
            >
              <option disabled value="">Select a program</option>
              <option value="frontend">React JS</option>
              <option value="angular">Angular JS</option>
              <option value="backend">Backend Development</option>
              <option value="backend">Python</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals or experience..."
              className="w-full bg-white/60 border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            Submit Enquiry
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default EnrollmentForm;

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  required?: boolean;
  type?: string;
  icon?: React.ReactNode;
}

const FormField: React.FC<FieldProps> = ({
  label,
  name,
  value,
  onChange,
  required,
  type = "text",
  icon,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
      {icon && <span className="text-blue-600">{icon}</span>}
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="w-full bg-white/60 border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
    />
  </div>
);
