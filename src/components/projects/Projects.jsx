'use client';
import { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import projectsData from '@/data/projects.json';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Favorite');

  const filters = ['Favorite', 'Game', 'Web'];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'Favorite') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id='projects' className='mt-10 px-2 md:px-0'>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">Projects</h2>
      
      <div className="flex gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-gray-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}