'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, Plus } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Portfolio', href: '/' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2 hover:shadow-xl transition-all duration-300"
      >
        <span className="font-medium text-gray-800">Menu</span>
        {isOpen ? (
          <X className="w-5 h-5 text-gray-800" />
        ) : (
          <Plus className="w-5 h-5 text-gray-800" />
        )}
      </button>

     
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-8 py-4 shadow-lg flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}