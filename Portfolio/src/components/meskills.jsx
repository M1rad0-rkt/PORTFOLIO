import { Code, Database, Smartphone, Globe } from 'lucide-react';

export default function About({ darkMode }) {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Frontend',
      description: 'React, tailwind, HTML, CSS, JavaScript, TypeScript, Vite.js',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend',
      description: 'Django, Python, PHP, SQL, Javascript',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile',
      description: 'Android, Blackberry, React Native',
    },
    {
      icon: <Globe size={32} />,
      title: 'Autres',
      description: 'Git, Docker',
    },
  ];

  return(
    <section
      id="meskills"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2
        className={`text-4xl sm:text-5xl font-bold mb-4 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        My Skills
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {skills.map((skill, index) => (
      <div
        key={index}
        className={`p-6 rounded-xl shadow-lg transition-transform hover:scale-105 ${
          darkMode
            ? 'bg-gray-800 text-white'
            : 'bg-white text-gray-900'
        }`}
      >
        <div className="text-blue-600 mb-4">{skill.icon}</div>
        <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
        <p
          className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {skill.description}
        </p>
      </div>
    ))}
  </div>
  </div>
  </section>
);
}