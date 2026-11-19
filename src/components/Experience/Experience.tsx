import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Calendar } from 'lucide-react';
import { useLocalizedExperiences } from '../../hooks/useLocalizedExperiences';
import TechBadge from '../TechBadge/TechBadge';

const Experience = () => {
  const { t } = useTranslation();
  const experiences = useLocalizedExperiences();

  return (
    <section id="experience" className="bg-[#f4f1ea] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
            {t('experience.eyebrow')}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#14241c] md:text-5xl">
            {t('experience.title')}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-emerald-900/15" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border-[3px] border-[#f4f1ea] bg-emerald-800 shadow-sm" />

                <Link
                  to={`/experience/${exp.slug}`}
                  className="group block rounded-3xl border border-stone-200/80 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(20,36,28,0.45)] transition duration-300 hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-[0_24px_48px_-24px_rgba(20,36,28,0.5)] md:p-8"
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <span className="inline-flex items-center font-medium text-emerald-800">
                        <Calendar size={15} className="mr-1.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center text-stone-500">
                        <Briefcase size={15} className="mr-1.5" />
                        {exp.company}
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 transition group-hover:bg-emerald-800 group-hover:text-white">
                      {t('experience.viewDetail')}
                      <ArrowUpRight size={14} className="ml-1.5" />
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-[#14241c] transition group-hover:text-emerald-900">
                    {exp.position}
                  </h3>
                  <p className="mt-1 font-medium text-emerald-800">{exp.project}</p>
                  <p className="mt-4 line-clamp-3 leading-relaxed text-stone-600">
                    {exp.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>

                  <ul className="mt-5 hidden gap-2 sm:grid sm:grid-cols-2">
                    {exp.achievements.slice(0, 4).map((achievement) => (
                      <li key={achievement} className="flex items-start text-sm text-stone-600">
                        <span className="mr-2 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
