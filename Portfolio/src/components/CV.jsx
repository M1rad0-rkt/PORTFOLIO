import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

export default function CV({ darkMode }) {
  const experiences = [
    {
      title: 'Stage au sein de l’Hôtel de Ville Analakely',
      company: 'Département Informatique DDNSI',
      period: '2021-2022',
      description: 'Participation à mon premier stage en informatique au sein du Département du Développement Numérique et des Systèmes d’Information (DDNSI) à Analakely.',
    },
    {
      title: 'Stage au sein du Ministère de la Jeunesse et du Sport',
      company: 'Ministère de la Jeunesse et du Sport',
      period: '2022-2023',
      description: 'Création d’une application web pour la gestion d’inventaire et du matériel informatique, renforçant mes compétences en développement web et en gestion de projets.',
    },
    {
      title: 'Stage de développement chez PixelVault',
      company: 'PixelVault',
      period: '2023-2024',
      description: 'Développement de la plateforme Clientelia pour la gestion des demandes clients et l’analyse de la satisfaction, utilisant React, Django, et Tailwind CSS, tout en améliorant les processus d’efficacité et de relation client.',
    },
  ];

  const education = [
    {
      degree: 'Baccalauréat série D',
      school: 'Lycée Saint François Xavier Antanimena',
      period: '2021-2022',
      description: 'Obtention du baccalauréat avec succès, développant des bases solides en sciences et raisonnement analytique pour mes études supérieures.',
    },
    {
      degree: 'Licence en Informatique',
      school: 'University FJKM Ravelojaona Ampandrana',
      period: '2022-2025',
      description: '1ère année (2022-2023), 2ème année (2023-2024), 3ème année (2024-2025). Obtention du licence en Informatique en 2025 et Master en cours.',
    },
    {
      degree: 'Master en Informatique (en-cours)',
      school: 'EMIT Fianarantsoa Madagascar',
      period: '2025...',
      description: 'Master I (2025-2026) parcours SDIA (Science de Donnée et Intelligence Artificielle) ',
    },
  ];


  return (
    <section
      id="cv"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Mon Parcours
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Expériences
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-md ${
                    darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                  } backdrop-blur-sm`}
                >
                  <h4
                    className={`text-xl font-bold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {exp.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600 font-semibold">
                      {exp.company}
                    </span>
                    <span
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      • {exp.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-600 rounded-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Formation
              </h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-md ${
                    darkMode ? 'bg-gray-800/80' : 'bg-white/80'
                  } backdrop-blur-sm`}
                >
                  <h4
                    className={`text-xl font-bold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {edu.degree}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600 font-semibold">
                      {edu.school}
                    </span>
                    <span
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      • {edu.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a
        href="/Curriculum_Vitae_Mirado.jpg"
        download="Curriculum_Vitae_Mirado.jpg"
        className={`fixed bottom-6 right-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg ${
          darkMode ? 'hover:bg-blue-500' : ''
        }`}
        title="Télécharger mon CV (JPG)"
      >
        <Download size={16} />
        Télécharger mon CV
      </a>
    </section>
  );
}