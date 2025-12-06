import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="mt-10">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          Made by{' '}
          <span className="font-semibold text-gray-900">Asif Mahmud</span>{' '}
          with{' '}
          <span className="font-semibold text-gray-900">Next.js</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <span className="text-sm">BD</span>
          </button>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}