'use client';
import { useState } from 'react';

import tech from '@/data/technologies.json';

export default function Technologies() {
    const [activeFilter, setActiveFilter] = useState('Language');

    const filters = Object.keys(tech);

    const filteredTech = tech[activeFilter] || [];

    return (
        <section className="mt-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Technologies</h2>

            <div className="flex gap-3 mb-12 flex-wrap">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 rounded-lg font-medium transition-colors ${activeFilter === filter
                                ? 'bg-gray-700 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredTech.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                            <img
                                src={tech.image}
                                alt={tech.name} 
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <p className="text-center font-semibold text-gray-800 text-sm">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}


