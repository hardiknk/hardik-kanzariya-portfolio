import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ExpertiseCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
    <div className="expertise-card h-full w-full p-7 sm:p-8">
      <span className="text-accent text-sm font-bold tracking-[0.2em]">
        0{index + 1}
      </span>
      <div className="mt-8">
        <h3 className="text-[24px] font-bold text-white">{name}</h3>
        <p className="mt-4 text-[16px] leading-7 text-secondary">{description}</p>
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] font-medium ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ExpertiseCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "expertise");
