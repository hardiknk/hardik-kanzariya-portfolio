import { motion } from 'framer-motion';

import EarthCanvas from '../canvas/Earth';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const Contact = () => {
  const phoneHref = `tel:${config.html.phone.replace(/\s/g, '')}`;
  const [emailUser, emailDomain] = config.html.email.split('@');

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="contact-panel flex-[0.9]">
        <Header useMotion={false} {...config.contact} />

        <p className="mt-8 max-w-xl text-[17px] leading-8 text-secondary">
          I&apos;m available to join within seven days and open to remote roles across time zones,
          onsite opportunities in Ahmedabad, relocation, and freelance backend projects. Tell me
          what you&apos;re building and where you need help.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a className="contact-link" href={`mailto:${config.html.email}`}>
            <span className="contact-link-label">Email</span>
            <span>
              {emailUser}
              <wbr />@{emailDomain}
            </span>
          </a>
          <a className="contact-link" href={phoneHref}>
            <span className="contact-link-label">Phone</span>
            <span>{config.html.phone}</span>
          </a>
          <a
            className="contact-link"
            href={config.social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-label">LinkedIn</span>
            <span>kanzariyahardik ↗</span>
          </a>
          <a className="contact-link" href={config.social.github} target="_blank" rel="noreferrer">
            <span className="contact-link-label">GitHub</span>
            <span>hardiknk ↗</span>
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            className="primary-cta"
            href={`mailto:${config.html.email}?subject=Opportunity for Hardik Kanzariya`}
          >
            Email me
          </a>
          <a className="secondary-cta" href={config.html.resumePath} download>
            Download résumé
          </a>
        </div>

        <p className="mt-8 text-sm text-secondary">Based in {config.html.location}</p>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[340px] md:h-[520px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
