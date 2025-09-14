import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>{" "}
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
          <motion.div className="flex items-center justify-center">
            <LazyLoadImage effect="blur" loading="lazy" src={aboutImg} width={300} alt="about" className="rounded-2xl" />
          </motion.div>
        </motion.div>

        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2">
          <p
            className="my-2 text-xl max-w-xl py-6 font-light tracking-tighter prose prose-invert"
            dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
