'use client';

import hobbies from '@/data/hobbies.json';

export default function Hobbies() {
  return (
    <section className="mt-10 px-2 md:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">Hobbies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
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