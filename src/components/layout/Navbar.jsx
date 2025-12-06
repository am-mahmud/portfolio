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
      <button
        onClick={toggleMenu}
        className="bg-gray-800 rounded-full px-6 py-2 flex items-center gap-2 transition-all duration-300"
      >
        <span className="font-medium text-white">Menu</span>
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Plus className="w-5 h-5 text-white" />
        )}
      </button>

     
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-8 py-2 flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-900 transition-colors duration-200 font-medium"
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