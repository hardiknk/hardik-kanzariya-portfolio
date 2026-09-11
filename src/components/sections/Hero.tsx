import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import { config } from '../../constants/config';

const Hero = () => {
  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden">
      <div
        className={`mx-auto flex min-h-screen max-w-7xl items-center ${styles.paddingX} pb-20 pt-28`}
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex flex-wrap gap-3">
              <span className="availability-chip">{config.availability.status}</span>
              <span className="availability-chip">{config.availability.workPreference}</span>
              <span className="availability-chip">Freelance projects welcome</span>
            </div>
            <p className="text-accent mb-3 text-sm font-semibold uppercase tracking-[0.24em] sm:text-base">
              {config.availability.targetRole}
            </p>
            <h1 className={`${styles.heroHeadText} max-w-4xl text-white`}>
              Hi, I&apos;m <span className="text-[#62e8bd]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-5 max-w-3xl`}>
              {config.hero.p[0]} <br className="hidden sm:block" />
              {config.hero.p[1]}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a className="primary-cta" href="#contact">
                Discuss an opportunity
              </a>
              <a className="secondary-cta" href={config.html.resumePath} download>
                Download résumé
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
              <a
                className="social-link"
                href={config.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="social-link"
                href={config.social.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span className="text-secondary">{config.availability.timezone}</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-secondary sm:text-base">
              <span>5+ years&apos; experience</span>
              <span>12 Laravel migrations delivered</span>
              <span>{config.html.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img
                src="./hardik-kanzariya.png"
                alt="Hardik Kanzariya"
                className="aspect-[3/4] h-full w-full object-cover object-top"
              />
              <div className="portrait-caption">
                <span>Laravel · APIs · AWS</span>
                <span className="text-accent">Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to professional summary"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="block text-2xl text-secondary"
        >
          ↓
        </motion.span>
      </a>
    </section>
  );
};

export default Hero;
