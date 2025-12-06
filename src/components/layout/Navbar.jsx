'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech', href: '#tech' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={toggleMenu}
        className="bg-gray-800 rounded-full px-4 py-1.5 flex items-center gap-2 transition-all duration-300"
      >
        <span className="font-medium text-white text-sm">Menu</span>
        {isOpen ? (
          <X className="w-4 h-4 text-white" />
        ) : (
          <Menu className="w-4 h-4 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-6 py-1.5 flex gap-4 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm"
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