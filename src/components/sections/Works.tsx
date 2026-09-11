import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

const ProjectCaseStudy: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  category,
  description,
  responsibilities,
  challenge,
  outcome,
  tags,
}) => (
  <motion.article variants={fadeIn('up', 'spring', index * 0.2, 0.75)} className="case-study-card">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="text-accent text-sm font-bold tracking-[0.2em]">
        CASE STUDY 0{index + 1}
      </span>
      <span className="confidential-badge">Professional work · Details confidential</span>
    </div>

    <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="section-kicker">{category}</p>
        <h3 className="mt-4 text-[30px] font-bold leading-tight text-white sm:text-[36px]">
          {name}
        </h3>
        <p className="mt-5 text-[16px] leading-8 text-secondary">{description}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span className="project-tag" key={tag.name}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="section-kicker">What I delivered</p>
        <ul className="mt-5 grid gap-3">
          {responsibilities.map(responsibility => (
            <li className="case-study-point" key={responsibility}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-9 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2">
      <div className="case-study-note">
        <p className="section-kicker">Technical challenge</p>
        <p className="mt-3 leading-7 text-secondary">{challenge}</p>
      </div>
      <div className="case-study-note case-study-outcome">
        <p className="section-kicker">Result</p>
        <p className="mt-3 leading-7 text-secondary">{outcome}</p>
      </div>
    </div>
  </motion.article>
);

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-14 grid gap-7">
        {projects.map((project, index) => (
          <ProjectCaseStudy key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');
