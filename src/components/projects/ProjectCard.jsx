// import Image from 'next/image';
// import { FaGithub, FaPlay } from 'react-icons/fa';

// export default function ProjectCard({ project }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//       <div className="flex flex-col lg:flex-row">
//         <div className="lg:w-1/2 p-8">
//           <div className="flex justify-between items-start mb-4">
//             <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
//             <span className="text-gray-500 text-sm">{project.year}</span>
//           </div>

//           <div className="flex gap-2 mb-6 flex-wrap">
//             {project.technologies.map((tech, index) => (
//               <div key={index} className="w-10 h-10 flex items-center justify-center">
//                 <Image
//                   src={tech.icon}
//                   alt={tech.name}
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>

//           <p className="text-gray-700 leading-relaxed mb-6">
//             {project.description}
//           </p>

//           <div className="flex gap-3">
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
//               >
//                 <FaGithub className="w-4 h-4" />
//                 Code
//               </a>
//             )}
//             {project.live && (
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
//               >
//                 <FaPlay className="w-4 h-4" />
//                 Live
//               </a>
//             )}
//           </div>
//         </div>

//         <div className="lg:w-1/2  p-8 flex items-center justify-center">
//           <div className="relative w-full h-64 lg:h-full">
//             <Image
//               src={project.image}
//               alt={project.title}
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import { FaGithub, FaPlay } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <div className="flex h-64">
        {/* Content Section - Left (70%) */}
        <div className="w-7/10 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-3 gap-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {project.title}
              </h3>
              <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
                {project.year}
              </span>
            </div>

            {/* Technology Icons */}
            <div className="flex gap-2 mb-4 flex-wrap items-center">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
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

          {/* Description */}
          <p className="text-gray-700 text-xs leading-relaxed mb-4 line-clamp-4">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-2 items-center">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white text-xs font-semibold rounded hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="w-3 h-3" />
                Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white text-xs font-semibold rounded hover:bg-gray-700 transition-colors"
              >
                <FaPlay className="w-3 h-3" />
                Live
              </a>
            )}
          </div>
        </div>

        {/* Image Section - Right (30%) */}
        <div className="w-3/10 flex items-end justify-end overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain object-bottom-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}