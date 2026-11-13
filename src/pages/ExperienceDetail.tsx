import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import { getExperienceBySlug, experiences } from '../data/experiences';
import TechBadge from '../components/TechBadge/TechBadge';
import Header from '../components/Header/Header';

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const experience = slug ? getExperienceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!experience) {
    return (
      <div className="min-h-screen bg-[#f4f1ea]">
        <Header forceSolid />
        <main className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-24 pt-32 text-center">
          <h1 className="text-3xl font-semibold text-[#14241c]">Expérience introuvable</h1>
          <p className="mt-3 text-stone-600">Cette mission n’existe pas ou a été déplacée.</p>
          <Link
            to="/#experience"
            className="mt-8 inline-flex items-center rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour aux expériences
          </Link>
        </main>
      </div>
    );
  }

  const currentIndex = experiences.findIndex((item) => item.slug === experience.slug);
  const previous = currentIndex > 0 ? experiences[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < experiences.length - 1
      ? experiences[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#14241c]">
      <Header forceSolid />

      <main>
        <section className="relative overflow-hidden bg-[#07140f] text-[#f4f1ea]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => navigate('/#experience')}
              className="mb-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-50 transition hover:bg-white/10"
            >
              <ArrowLeft size={16} className="mr-2" />
              Retour au parcours
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                {experience.contractType}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {experience.position}
              </h1>
              <p className="mt-4 text-xl font-medium text-emerald-200">{experience.company}</p>
              <p className="mt-2 max-w-2xl text-lg text-emerald-50/75">{experience.project}</p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-emerald-50/80">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <Calendar size={14} className="mr-2 text-emerald-300" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <MapPin size={14} className="mr-2 text-emerald-300" />
                  {experience.location}
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <Briefcase size={14} className="mr-2 text-emerald-300" />
                  {experience.contractType}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-[2rem] border border-stone-200/80 bg-white p-7 shadow-[0_18px_40px_-28px_rgba(20,36,28,0.45)] md:p-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
                <Building2 size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  Entreprise
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">{experience.company}</h2>
              </div>
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
              {experience.companyAbout}
            </p>
            <p className="mt-5 leading-relaxed text-stone-600">{experience.description}</p>
          </motion.section>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-[2rem] border border-stone-200/80 bg-white p-7 md:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">Responsabilités</h2>
              <ul className="mt-5 space-y-3">
                {experience.responsibilities.map((item) => (
                  <li key={item} className="flex items-start text-stone-600">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-[2rem] border border-stone-200/80 bg-white p-7 md:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">Résultats clés</h2>
              <ul className="mt-5 space-y-3">
                {experience.achievements.map((item) => (
                  <li key={item} className="flex items-start text-stone-600">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] border border-stone-200/80 bg-white p-7 md:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight">Technologies</h2>
            <p className="mt-2 text-stone-600">Stack utilisée sur cette mission.</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {experience.technologies.map((tech) => (
                <TechBadge key={tech} tech={tech} size="md" />
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                Livrables
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Projets réalisés
              </h2>
              <p className="mt-2 max-w-2xl text-stone-600">
                Les produits et plateformes livrés dans le cadre de cette expérience.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {experience.projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-[0_18px_40px_-28px_rgba(20,36,28,0.45)]"
                >
                  {project.image && (
                    <div
                      className={`flex h-40 items-center justify-center overflow-hidden ${
                        project.imageBg ?? 'bg-[#10261c]'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-contain p-6"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                      {project.role}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">{project.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                    {project.links && project.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-emerald-800 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-900"
                          >
                            <ExternalLink size={12} className="mr-1.5" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {experience.links && experience.links.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-[2rem] border border-emerald-900/10 bg-[#10261c] p-7 text-[#f4f1ea] md:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">Liens utiles</h2>
              <p className="mt-2 text-emerald-50/70">
                Accédez aux sites, démos et documentations liés à cette mission.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-emerald-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
                  >
                    <ArrowUpRight size={14} className="mr-2" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.section>
          )}

          <nav className="grid gap-4 border-t border-stone-200 pt-8 sm:grid-cols-2">
            {previous ? (
              <Link
                to={`/experience/${previous.slug}`}
                className="rounded-3xl border border-stone-200 bg-white p-5 transition hover:border-emerald-800/30"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
                  Précédent
                </p>
                <p className="mt-2 font-semibold text-[#14241c]">{previous.company}</p>
                <p className="mt-1 text-sm text-stone-600">{previous.position}</p>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                to={`/experience/${next.slug}`}
                className="rounded-3xl border border-stone-200 bg-white p-5 text-right transition hover:border-emerald-800/30 sm:justify-self-end sm:text-right"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
                  Suivant
                </p>
                <p className="mt-2 font-semibold text-[#14241c]">{next.company}</p>
                <p className="mt-1 text-sm text-stone-600">{next.position}</p>
              </Link>
            )}
          </nav>
        </div>
      </main>
    </div>
  );
};

export default ExperienceDetail;
