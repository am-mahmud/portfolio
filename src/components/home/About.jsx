import personalData from '@/data/personal.json';

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {personalData.about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}