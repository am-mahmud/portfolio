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
    <section className="mt-10 mb-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
       
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3">
            {personalData.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            {personalData.title}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-6">
            <IoLocationSharp className="w-4 h-4" />
            <span className="text-sm">{personalData.location}</span>
          </div>

         
          <div className="flex justify-center md:justify-start gap-3 mb-4 flex-wrap">
            {[{
              icon: <FaGithub className="w-5 h-5 text-gray-700" />, link: personalData.social.github
            }, {
              icon: <FaLinkedin className="w-5 h-5 text-gray-700" />, link: personalData.social.linkedin
            }, {
              icon: <FaPhone className="w-5 h-5 text-gray-700" />, link: `tel:${personalData.phone}`
            }, {
              icon: <FaEnvelope className="w-5 h-5 text-gray-700" />, link: `mailto:${personalData.email}`
            }, {
              icon: <FaFileAlt className="w-5 h-5 text-gray-700" />, link: `/resume.pdf`
            }].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>

         
          <div className="flex justify-center md:justify-start gap-3 flex-wrap">
            <button className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-sm sm:text-base">BD</span>
            </button>
             <button className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-sm sm:text-base">EN</span>
            </button>
            {/* <button className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <IoSunnyOutline className="w-5 h-5 text-gray-700" />
            </button> */}
            {/* <button className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <IoInformationCircleOutline className="w-5 h-5 text-gray-700" />
            </button> */}
          </div>
        </div>

      
        <div className="shrink-0">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/images/profile.png"
              alt={personalData.name}
              width={260}
              height={260}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

