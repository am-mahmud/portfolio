import Image from 'next/image';
import { FaGithub, FaPlay } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col lg:flex-row lg:h-auto">
        
  
        <div className="w-full lg:w-7/12 p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h3>
              <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">
                {project.year}
              </span>
            </div>

       
            <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap items-center">
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
          </div>

        
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            {project.description}
          </p>

      
          <div className="flex flex-wrap gap-2 items-center">
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
  );
}