// src/components/home/Hero.jsx
import Image from 'next/image';
import { 
  FaGithub, 
  FaLinkedin, 
  FaPhone, 
  FaEnvelope, 
  FaFileAlt 
} from 'react-icons/fa';
import { IoLocationSharp, IoSunnyOutline, IoInformationCircleOutline } from 'react-icons/io5';
import personalData from '@/data/personal.json';

export default function Hero() {
  return (
    <section className="mb-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
            {personalData.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {personalData.title}
          </p>
          
          <div className="flex items-center gap-2 text-gray-600 mb-8">
            <IoLocationSharp className="w-4 h-4" />
            <span className="text-sm">{personalData.location}</span>
          </div>

          <div className="flex gap-3 mb-3">
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Phone"
            >
              <FaPhone className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Resume"
            >
              <FaFileAlt className="w-5 h-5 text-gray-700" />
            </a>
          </div>

          <div className="flex gap-3">
            <button
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Language"
            >
              <span className="text-2xl">BD</span>
            </button>
            <button
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Theme"
            >
              <IoSunnyOutline className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Info"
            >
              <IoInformationCircleOutline className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-52 h-52 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt={personalData.name}
              width={208}
              height={208}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}