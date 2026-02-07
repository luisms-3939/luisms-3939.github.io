import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const content = {
    en: {
      title: 'Get in Touch',
      subtitle: 'Have a project in mind? Let\'s work together',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
      location: 'Barcelona, Spain',
      emailAddress: 'luiscsmodesto@outlook.com',
      social: 'Connect with me',
    },
    es: {
      title: 'Contáctame',
      subtitle: '¿Tienes un proyecto en mente? Trabajemos juntos',
      name: 'Tu Nombre',
      email: 'Tu Email',
      subject: 'Asunto',
      message: 'Tu Mensaje',
      send: 'Enviar Mensaje',
      success: '¡Mensaje enviado exitosamente!',
      error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      location: 'Barcelona, España',
      emailAddress: 'luiscsmodesto@outlook.com',
      social: 'Conéctate conmigo',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {language === 'en' ? 'Location' : 'Ubicación'}
                  </h3>
                  <p className="text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <a
                    href={`mailto:${t.emailAddress}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {t.emailAddress}
                  </a>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">{t.social}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/luis-modesto3986/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/luis-c2255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${t.emailAddress}`}
                  className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {language === 'en' ? 'Download Resume' : 'Descargar CV'}
              </h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="/resume-en.pdf"
                  download
                  className="group flex items-center justify-between px-4 py-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                >
                  <span className="font-medium">English Version</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
                <a
                  href="/resume-es.pdf"
                  download
                  className="group flex items-center justify-between px-4 py-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-cyan-400 hover:text-cyan-300"
                >
                  <span className="font-medium">Versión Español</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                    placeholder={t.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                    placeholder={t.email}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                  placeholder={t.subject}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/20 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors resize-none"
                  placeholder={t.message}
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                  {t.success}
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                  {t.error}
                </div>
              )}

              <button
                type="submit"
                className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all font-medium text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center space-x-2"
              >
                <span>{t.send}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
