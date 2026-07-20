import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Download, 
  Sparkles, 
  Code2, 
  Users, 
  Calendar 
} from 'lucide-react';

const experiences = [
  {
    title: 'Ideathon — Orange Digital Center & Ingedata',
    company: 'Data Challenge Inter-universitaire',
    period: '2026',
    description: 'Participation à un data challenge axé sur l\'analyse de données et l\'intelligence artificielle appliquée au marketing.',
    icon: Award,
  },
  {
    title: 'Formation DevOps',
    company: 'Orange Digital Center',
    period: '2026',
    description: 'Formation en DevOps et déploiement automatique des applications.',
    icon: Code2,
  },
  {
    title: 'Stage de fin d\'études',
    company: 'PixelVault',
    period: '2024-2025',
    description: 'Mise en place d\'un système de traitement des demandes clients avec analyse de satisfaction (React + Django + Tailwind + MySQL).',
    icon: Briefcase,
  },
  {
    title: 'Stage au sein du Ministère de la Jeunesse et du Sport',
    company: 'Ministère de la Jeunesse et du Sport',
    period: '2022-2023',
    description: 'Stage d\'immersion dans le monde professionnel.',
    icon: Users,
  },
  {
    title: 'Stage d\'observation',
    company: 'Hôtel de Ville Analakely',
    period: '2021-2022',
    description: 'Département Informatique DDNSI.',
    icon: Calendar,
  },
];

const education = [
  {
    degree: 'Master en Informatique',
    school: 'Ecole de Management et d\'Innovation Technologique (EMIT) Fianarantsoa',
    period: '2025 - en cours',
    description: 'Parcours Data & Intelligence Artificielle (M1 en cours).',
  },
  {
    degree: 'Licence en Informatique',
    school: 'Université FJKM Ravelojaona Ampandrana',
    period: '2022 - 2025',
    description: 'Obtention de la Licence en Informatique.',
  },
  {
    degree: 'Baccalauréat Série D',
    school: 'Lycée Saint François Xavier Antanimena',
    period: '2021 - 2022',
    description: '',
  },
];

export default function CV({ darkMode }) {
  return (
    <section
      id="cv"
      className={`relative overflow-hidden py-24 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      {/* Fond décoratif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          color: darkMode ? '#ffffff' : '#000000',
        }}
      ></div>
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className={`inline-flex items-center gap-2 text-sm font-semibold mb-5 px-4 py-1.5 rounded-full ${
              darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-600/10 text-blue-600'
            }`}
          >
            <Sparkles size={16} /> Mon Parcours
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-bold leading-tight mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Expériences &amp;{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Formations
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Du stage d'observation à des projets concrets en Data & IA
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Expériences */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-600 rounded-2xl">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Expériences Professionnelles
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`group relative pl-8 border-l-4 border-blue-600/30 hover:border-blue-600 transition-all ${
                    darkMode ? 'bg-gray-900/60' : 'bg-white'
                  } p-8 rounded-3xl shadow-xl`}
                >
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <exp.icon className="text-white" size={14} />
                  </div>

                  <div className="flex flex-wrap justify-between gap-3 mb-3">
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h4>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full self-start ${
                      darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  <p className={`font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {exp.company}
                  </p>

                  <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Formation + Compétences */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-600 rounded-2xl">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Formation
                </h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`p-7 rounded-3xl shadow-xl ${
                      darkMode ? 'bg-gray-900/60 border border-gray-800' : 'bg-white border border-gray-100'
                    }`}
                  >
                    <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h4>
                    <p className={`font-medium mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {edu.school}
                    </p>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {edu.period}
                    </p>
                    {edu.description && (
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Compétences Clés */}
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Compétences Clés
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Django', 'React', 'Tailwind', 'Pandas', 'Scikit-learn', 'MySQL', 'PostgreSQL', 'Power BI', 'Git', 'ETL'].map((skill, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2 text-sm rounded-2xl border transition-all ${
                      darkMode
                        ? 'bg-gray-900 border-gray-700 hover:border-blue-500 text-gray-300'
                        : 'bg-white border-gray-200 hover:border-blue-400'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Téléchargement */}
      {/* Bouton Téléchargement CV */}
      <a
        href="/Curriculum_Vitae_Mirado.pdf"
        download="Curriculum_Vitae_Mirado.pdf"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-3.5 
                   bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                   hover:border-blue-500 text-gray-900 dark:text-white 
                   rounded-2xl font-medium shadow-lg hover:shadow-xl 
                   transition-all duration-300 hover:scale-105 active:scale-95`}
        title="Télécharger mon CV"
      >
        <Download size={20} className="text-blue-600" />
        <span>Télécharger mon CV</span>
      </a>
    </section>
  );
}