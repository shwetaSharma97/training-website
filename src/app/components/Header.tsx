'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#journey', label: 'Journey' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#about', label: 'About' },
  { href: '#stories', label: 'Success Stories' },
  { href: '#our-program', label: 'Our Program' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // A threshold of 100px to start the effect.
      // You can adjust this value.
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white/90'}`}>
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-1">
              <Image src="/logo-bg-remove.png" alt="CodeClimbNGrow" width={60} height={60} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">CodeClimbNGrow</h1>
                <p className="text-xs text-gray-500 sm:block">Climbing career through coding & software</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
                <Link href="register" className="px-6 py-2.5 text-md font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md">
                    Enroll Now
                </Link>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 pt-2 pb-6 space-y-4">
            <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                </Link>
                ))}
            </nav>
            <div className="sm:hidden">
                <Link href="register" className="block w-full text-center px-6 py-3 text-md font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md">
                    Enroll Now
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
