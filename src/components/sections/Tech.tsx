import { SectionWrapper } from "../../hoc";
import { skillGroups } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.skills} />
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3 className="text-xl font-bold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
