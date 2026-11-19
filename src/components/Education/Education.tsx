import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');
  const location = isEn ? 'Dakar, Senegal' : 'Dakar, Sénégal';

  const educationDefs = [
    { id: 1, key: 'l3', institution: 'UCAD-FST' },
    { id: 2, key: 'l2', institution: 'UCAD-FST' },
    { id: 3, key: 'sonatel', institution: 'Sonatel Academy' },
    { id: 4, key: 'sunucode', institution: 'SunuCode' },
    { id: 5, key: 'l1', institution: 'UCAD-FST' },
  ] as const;

  const education = educationDefs.map(({ id, key, institution }) => ({
    id,
    period: t(`education.items.${key}.period`),
    institution,
    degree: t(`education.items.${key}.degree`),
    location,
    description: t(`education.items.${key}.description`),
    highlights: [
      t(`education.items.${key}.h1`),
      t(`education.items.${key}.h2`),
      t(`education.items.${key}.h3`),
    ],
  }));

  const certifications: { id: string; title: string; issuer: string; date: string; icon: string; link?: string }[] = [
    { id: 'sonatel', title: t('education.certs.sonatel'), issuer: 'Sonatel Academy', date: '2024', icon: '📱' },
    { id: 'sql', title: t('education.certs.sql'), issuer: 'Coursera', date: '2024', icon: '🗄️' },
    { id: 'apis', title: t('education.certs.apis'), issuer: 'Coursera', date: '2024', icon: '🔗' },
    { id: 'sunucode', title: t('education.certs.sunucode'), issuer: 'SunuCode', date: '2023', icon: '💻' },
    { id: 'ai', title: t('education.certs.ai'), issuer: 'Programme FORCE-N', date: '2023', icon: '🤖' },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 mb-3">{t('education.eyebrow')}</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#14241c]">{t('education.title')}</h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            {t('education.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <GraduationCap className="mr-3 text-emerald-600" size={24} />
              {t('education.academic')}
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-300"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>

                    {/* Content Card */}
                    <div className="ml-16">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="rounded-3xl border border-stone-200/80 bg-[#f7f5f0] p-6 transition-all duration-300"
                      >
                        <div className="flex items-center text-emerald-600 font-medium mb-2">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin size={16} className="mr-2" />
                          {edu.institution} - {edu.location}
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
                        
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">{t('education.highlights')}</h5>
                          <ul className="space-y-1">
                            {edu.highlights.map((highlight, hlIndex) => (
                              <li key={hlIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <Award className="mr-3 text-emerald-600" size={24} />
              {t('education.certifications')}
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="rounded-3xl border border-stone-200 bg-white p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{cert.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                        <p className="text-emerald-600 font-medium">{cert.issuer}</p>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <Calendar size={14} className="mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                    {cert.link ? (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-emerald-800 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 rounded-3xl bg-emerald-900 p-6 text-white"
            >
              <h4 className="font-bold text-lg mb-3">🎯 {t('education.continuousTitle')}</h4>
              <p className="text-emerald-100/90 leading-relaxed">
                {t('education.continuousText')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;