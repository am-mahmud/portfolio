import Image from 'next/image';
import { FaGithub, FaPlay } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            <span className="text-gray-500 text-sm">{project.year}</span>
          </div>

          <div className="flex gap-2 mb-6 flex-wrap">
            {project.technologies.map((tech, index) => (
              <div key={index} className="w-10 h-10 flex items-center justify-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaPlay className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
        </div>

        <div className="lg:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <div className="relative w-full h-64 lg:h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}