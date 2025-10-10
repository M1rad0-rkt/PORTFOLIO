import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: 'Cientelia',
      description: 'Une plateforme e-commerce complète avec gestion des paiements, panier et authentification utilisateur.',
      image: '/Acceuil_visiteur.jpg',
      tags: ['React', 'django python', 'MySql', 'JWT'],
      github: 'https://github.com/M1rad0-rkt/CLIENTELIA.git',
      demo: '#',
    },
    {
      title: 'Jeux 2D mobile',
      description: 'Système de gestion d\'entreprise avec tableau de bord analytique et rapports en temps réel.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Site de réservation de lieux',
      description: 'Application mobile cross-platform pour la gestion de tâches et la collaboration d\'équipe.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Designer',
      description: 'Plateforme permettant aux créatifs de créer et personnaliser leur portfolio en ligne.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Tailwind', 'Supabase'],
      github: '#',
      demo: '#',
    },
    {
      title: 'API REST',
      description: 'API RESTful robuste avec authentification JWT et documentation Swagger complète.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Express', 'PostgreSQL', 'JWT'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif avec visualisations de données et rapports personnalisables.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Python'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p
            className={`mt-4 text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Découvrez quelques-uns de mes projets récents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                darkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode
                          ? 'bg-gray-800 text-blue-400'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
