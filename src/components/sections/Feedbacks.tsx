import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Feedbacks = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.feedbacks} />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <motion.article
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="profile-panel"
        >
          <p className="section-kicker">Education</p>
          <h3 className="mt-4 text-2xl font-bold text-white">
            Bachelor of Technology in Computer Engineering
          </h3>
          <p className="mt-2 text-lg text-secondary">RK University, Rajkot</p>
          <p className="text-accent mt-4 font-semibold">2016 - 2020</p>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white">12th Standard · Science</p>
              <p className="mt-1 text-sm text-secondary">Shree MD Shah Vidyalay, Botad · 2014 - 2016</p>
            </div>
            <div>
              <p className="font-semibold text-white">10th Standard</p>
              <p className="mt-1 text-sm text-secondary">Shree Khas Madhyamik Shala · July 2014</p>
            </div>
          </div>
        </motion.article>

        <motion.div variants={fadeIn("left", "spring", 0.2, 0.75)} className="grid gap-6">
          <article className="profile-panel">
            <p className="section-kicker">Languages</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {['English', 'Hindi', 'Gujarati'].map((language) => (
                <span className="skill-pill" key={language}>{language}</span>
              ))}
            </div>
          </article>
          <article className="profile-panel">
            <p className="section-kicker">Professional Focus</p>
            <p className="mt-4 leading-7 text-secondary">
              Designing reliable Laravel APIs, improving backend performance, integrating AI and cloud services,
              mentoring developers, and turning business requirements into maintainable products.
            </p>
          </article>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "education");
