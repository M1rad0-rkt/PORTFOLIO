import { Heart } from 'lucide-react';

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-8 ${
        darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className={`flex items-center justify-center gap-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Créé par RAKOTONIAINA Mirado
          </p>
          <p
            className={`mt-2 text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
