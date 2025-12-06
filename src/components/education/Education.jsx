'use client';
import education from '@/data/education.json';

export default function Education() {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {edu.school}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {edu.degree}
              </p>
              {edu.description && (
                <p className="text-gray-500 text-sm">
                  {edu.description}
                </p>
              )}
            </div>
            <div className="text-gray-600 text-sm font-medium whitespace-nowrap ml-8">
              {edu.startYear} - {edu.endYear}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}