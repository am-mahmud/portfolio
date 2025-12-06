'use client';

import Image from 'next/image';
import { FaGithub, FaPlay, FaArrowRight } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
       
        <div className="flex justify-between items-start p-4 sm:p-6 border-b border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex-1">
            {project.title}
          </h3>
          <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap ml-4">
            {project.year}
          </span>
        </div>

  
        <div className="flex flex-col lg:flex-row lg:min-h-64">
          
     
          <div className="w-full lg:w-7/12 p-4 sm:p-6 flex flex-col gap-4">
            
       
            <div className="flex gap-2 flex-wrap items-center">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="shrink-0"
                  title={tech.name}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

       
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-4">
              {project.description}
            </p>

          
            <div className="flex flex-wrap gap-2 items-center pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-600 text-white text-xs sm:text-sm font-semibold rounded hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-600 text-white text-xs sm:text-sm font-semibold rounded hover:bg-gray-700 transition-colors"
                >
                  <FaPlay className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Live
                </a>
              )}
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-white text-xs sm:text-sm font-semibold rounded hover:bg-gray-900 transition-colors ml-auto"
              >
                Details
                <FaArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        
          <div className="w-full lg:w-5/12 flex items-center justify-center p-3 sm:p-4 lg:p-0 lg:items-end lg:justify-end overflow-hidden min-h-48 lg:min-h-64">
            <div className="relative w-full h-full min-h-40 lg:min-h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover md:object-contain object-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            
          
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-start">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {project.title}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <RxCross1 className="w-6 h-6" />
              </button>
            </div>

         
            <div className="p-4 sm:p-6 space-y-6">
              
         
              <div>
                <p className="text-gray-600 text-sm mb-3">
                  <span className="font-semibold">Year:</span> {project.year}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span className="text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

           
              <div className="rounded-lg overflow-hidden">
                <div className="relative w-full h-64 sm:h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

       
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

         
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Challenges Faced
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

          
              {project.improvements && project.improvements.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Future Improvements
                  </h3>
                  <ul className="space-y-2">
                    {project.improvements.map((improvement, index) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="text-green-600 font-bold mt-0.5">→</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 transition-colors"
                  >
                    <FaPlay className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}