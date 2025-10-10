
import { Code, Database, Smartphone, Globe } from 'lucide-react';

export default function About({ darkMode }) {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Frontend',
      description: 'React, Vue.js, HTML, CSS, JavaScript, TypeScript',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend',
      description: 'Node.js, Python, PHP, SQL, MongoDB',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile',
      description: 'React Native, Flutter',
    },
    {
      icon: <Globe size={32} />,
      title: 'Autres',
      description: 'Git, Docker, AWS, CI/CD',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div
              className={`w-full h-96 rounded-2xl shadow-2xl flex items-center justify-center bg-cover bg-center relative`}
              style={{ backgroundImage: "url('/mirado1.jpg')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
              <div className="text-center text-white relative z-10">
                <div className="text-8xl font-bold mb-4">RM</div>
                <p className="text-xl">Développeur Passionné</p>
              </div>
            </div>
          </div>

          <div>
            <p
              className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Passionné par le développement web et mobile, je crée des applications
              modernes et performantes. Avec plusieurs années d'expérience, je maîtrise
              un large éventail de technologies pour transformer vos idées en réalité.
            </p>
            <p
              className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Mon approche combine créativité, rigueur technique et souci du détail
              pour livrer des solutions élégantes et efficaces qui dépassent les
              attentes.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                Python
              </span>
            </div>
          </div>
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
