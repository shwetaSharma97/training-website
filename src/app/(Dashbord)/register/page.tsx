"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MapPin, Home, GraduationCap, BookOpen, FileText, Building } from "lucide-react";

const GOOGLE_FORM_API = "https://script.google.com/macros/s/AKfycby74X9nJRqkDmlO4pEic7wQHsBikcYivYIJDMB0k3koAxfvV_GWduBFQYWTuYUWZtjdFA/exec";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    qualification: "",
    passOutYear: "",
    college: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    pincode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = { email: "", phone: "", pincode: "" };
    let isValid = true;

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch('/api', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMsg("✅ Thank you! Your details have been submitted successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          qualification: "",
          passOutYear: "",
          college: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          course: "",
          message: "",
        });
      } else {
        setResponseMsg("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("⚠️ Unable to submit form. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enroll"
      className="relative min-h-screen mt-10 bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-3 py-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_70%)] blur-[120px]" />
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.12),_transparent_70%)] blur-[120px]" />
      </div>

      {/* Form Card */}
      <motion.div
        className="relative max-w-4xl w-full bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-blue-500/80 to-indigo-400/80 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-white drop-shadow-sm">
            Begin Your Enrollment Journey 
          </h2>
          <p className="text-blue-50 mt-2">
            Fill out your details
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 text-gray-800 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="First Name" name="firstName" icon={<User className="h-4 w-4" />} value={formData.firstName} onChange={handleChange} required />
            <FormField label="Last Name" name="lastName" icon={<User className="h-4 w-4" />} value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Email Address" name="email" icon={<Mail className="h-4 w-4" />} type="email" value={formData.email} onChange={handleChange} required error={errors.email} />
            <FormField label="Phone Number" name="phone" icon={<Phone className="h-4 w-4" />} type="tel" value={formData.phone} onChange={handleChange} required error={errors.phone} />
          </div>  
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <FormField label="College Name" name="college" icon={<Building className="h-4 w-4" />} value={formData.college} onChange={handleChange} required />
            <FormField label="Qualification" name="qualification" icon={<GraduationCap className="h-4 w-4" />} value={formData.qualification} onChange={handleChange} required />
            <FormField label="Pass Out Year" name="passOutYear" value={formData.passOutYear} onChange={handleChange} required />
             <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              Course <span className="text-red-500">*</span>
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full bg-white/60 border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
            >
              <option disabled value="">Select a course</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
               <option value="Python">Python</option>
               <option value="Node and Expressjs">Node and Expressjs</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Other">Other</option>
            </select>
          </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <FormField label="Address" name="address" icon={<Home className="h-4 w-4" />} value={formData.address} onChange={handleChange} required />
            <FormField label="City" name="city" icon={<MapPin className="h-4 w-4" />} value={formData.city} onChange={handleChange} required />
            <FormField label="State" name="state" value={formData.state} onChange={handleChange} required />
            <FormField label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} required error={errors.pincode} />
          </div>

         

          <FormField
            label="Message (Optional)"
            name="message"
            icon={<FileText className="h-4 w-4" />}
            value={formData.message}
            onChange={handleChange}
            type="textarea"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Enrollment"}
          </motion.button>

          {responseMsg && (
            <p className="text-center text-sm mt-4 font-medium text-gray-700">{responseMsg}</p>
          )}
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
  error?: string;
}

const FormField: React.FC<FieldProps> = ({
  label,
  name,
  value,
  onChange,
  required,
  type = "text",
  icon,
  error,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
      {icon && <span className="text-blue-600">{icon}</span>}
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="w-full bg-white/60 border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
      />
    ) : (
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={`w-full bg-white/60 border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 transition-all duration-200 ${
          error
            ? "border-red-500 focus:ring-red-400 focus:border-red-400"
            : "border-gray-300 focus:ring-blue-400 focus:border-blue-400"
        }`}
      />
    )}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
