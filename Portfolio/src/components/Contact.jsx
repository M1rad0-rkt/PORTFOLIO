import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:miradorakoto111@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'miradorakoto111@gmail.com',
      link: 'mailto:miradorakoto111@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      value: '+261 33 90 821 68',
      link: 'tel:+261339082168',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localisation',
      value: 'Antananarivo, Madagascar',
    },
  ];

  const socials = [
    {
      icon: <Github size={28} />,
      name: 'GitHub',
      link: 'https://github.com/M1rad0-rkt',
    },
    {
      icon: <Linkedin size={28} />,
      name: 'LinkedIn',
      link: 'www.linkedin.com/in/mirado-rakotoniaina-978523346',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Me Contacter
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p
            className={`mt-4 text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Réseaux Sociaux
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 p-4 rounded-lg transition-all hover:scale-105 hover:shadow-md ${
                    darkMode
                      ? 'bg-gray-900 text-white hover:bg-blue-600'
                      : 'bg-white text-gray-900 hover:bg-blue-600 hover:text-white'
                  }`}
                  title={social.name}
                >
                  {social.icon}
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>

            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Informations de Contact
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                  }`}
                >
                  <div className="p-3 bg-blue-600 rounded-lg text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`transition-colors ${
                          darkMode
                            ? 'text-gray-400 hover:text-blue-400'
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={darkMode ? 'text-gray-400' : 'text-gray-600'}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Envoyez-moi un Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 p-6 rounded-xl shadow-lg ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Le sujet de votre message"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-xl"
              >
                <Send size={20} />
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
