import React from 'react';
import { motion } from 'framer-motion';

import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { Header } from '../atoms/Header';
import { TExperience } from '../../types';
import { config } from '../../constants/config';
import { fadeIn } from '../../utils/motion';

const ExperienceCard: React.FC<TExperience & { index: number }> = ({
  companyName,
  date,
  marker,
  points,
  title,
  index,
}) => {
  return (
    <motion.article
      variants={fadeIn('up', 'spring', index * 0.16, 0.75)}
      className="experience-card"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="experience-marker" aria-hidden="true">
          {marker}
        </div>
        <span className="experience-date">{date}</span>
      </div>

      <div className="mt-7">
        <h3 className="text-[24px] font-bold leading-tight text-white">{title}</h3>
        <p className="mt-2 text-[16px] font-semibold text-secondary">{companyName}</p>
      </div>

      <ul className="mt-7 grid gap-3">
        {points.map((point, pointIndex) => (
          <li className="experience-point" key={`experience-point-${pointIndex}`}>
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="experience-stage mt-16">
        <span className="experience-orb experience-orb-one" aria-hidden="true" />
        <span className="experience-orb experience-orb-two" aria-hidden="true" />
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.companyName} index={index} {...experience} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
