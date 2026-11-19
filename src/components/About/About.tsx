import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Globe, Users, Lightbulb, CheckCircle, Shield, Clock, UserRound } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '3', label: t('about.stats.years') },
    { number: '15+', label: t('about.stats.projects') },
    { number: '4', label: t('about.stats.languages') },
    { number: '100%', label: t('about.stats.satisfaction') },
  ];

  const values = [
    { icon: Code, key: 'code' },
    { icon: Globe, key: 'vision' },
    { icon: Users, key: 'collab' },
    { icon: Lightbulb, key: 'innovation' },
    { icon: CheckCircle, key: 'quality' },
    { icon: Shield, key: 'security' },
    { icon: Clock, key: 'flexibility' },
    { icon: UserRound, key: 'ux' },
  ] as const;

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
            {t('about.eyebrow')}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#14241c] md:text-5xl">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-2xl font-semibold tracking-tight text-[#14241c]">
              {t('about.subtitle')}
            </h3>
            <div className="space-y-4 leading-relaxed text-stone-600">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>
                <strong className="text-[#14241c]">{t('about.languagesLabel')}</strong>{' '}
                {t('about.languagesValue')}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <h4 className="mb-4 text-lg font-semibold text-gray-900">
                {t('about.philosophyTitle')}
              </h4>
              <p className="italic text-gray-600">{t('about.philosophy')}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl border border-stone-200/80 bg-[#f7f5f0] p-6 text-center"
              >
                <div className="mb-2 text-3xl font-bold text-emerald-600">{stat.number}</div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-12 text-center text-2xl font-semibold tracking-tight text-[#14241c]">
            {t('about.valuesTitle')}
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-stone-200/80 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200">
                  <value.icon className="text-emerald-600" size={24} />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-gray-900">
                  {t(`about.values.${value.key}.title`)}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t(`about.values.${value.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
