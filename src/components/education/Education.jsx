'use client';
import education from '@/data/education.json';

export default function Education() {
  return (
    <section className="mt-10 px-2 md:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
        Education
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-4 sm:pb-6"
          >
            {/* Left Side */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {edu.school}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base mb-1">
                {edu.degree}
              </p>

              {edu.description && (
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>

        
            <div className="text-gray-600 text-sm sm:text-base font-medium whitespace-nowrap mt-2 sm:mt-0">
              {edu.startYear} - {edu.endYear}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
