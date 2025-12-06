'use client';

import hobbies from '@/data/hobbies.json';

export default function Hobbies() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Hobbies</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
              <img
                src={hobby.image}
                alt={hobby.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center font-semibold text-gray-800 text-sm">
              {hobby.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}