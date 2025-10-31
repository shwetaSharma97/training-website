import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0B1220] via-[#16233A] to-[#1C1A22] text-gray-300 pt-16 pb-6">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo + About */}
        <div>
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-bg-remove.png" alt="CodeClimbNGrow" width={60} height={60} />
              <div>
                <h1 className="text-xl font-bold text-white">CodeClimbNGrow</h1>
                {/* <p className="text-xs text-gray-500 sm:block">Climbing career through coding & software</p> */}
              </div>
            </Link>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Transform your career with our comprehensive full-stack development program.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Program", "Curriculum", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white font-semibold mb-4">Programs</h3>
          <ul className="space-y-2">
            {["React JS / Angular JS", "Frontend Track", "Backend Track", "Python" ,"Workshops"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-blue-400" />
              <span>info@codeclimbngrow.com</span>
            </li>
            {/* <li className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-blue-400" />
              <span>+91 87884-05379</span>
            </li> */}
            <li className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-blue-400" />
              <span>Hyderabad, Telangana</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-gray-300 font-medium">CimbNCode Solutions</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
