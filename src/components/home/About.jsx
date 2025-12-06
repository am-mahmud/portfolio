import personalData from '@/data/personal.json';

export default function About() {
  return (
    <section id='about' className="px-4 md:px-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
        About Me
      </h2>

      <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
        {personalData.about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
