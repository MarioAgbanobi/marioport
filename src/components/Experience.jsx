import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES &&
          EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-xl text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-xl">
                  {experience.role} -{" "}
                  <span className="text-xl text-purple-100">
                    {experience.company}
                  </span>
                </h6>

                <div
                  className="mb-4 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                />

                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-base font-medium text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
