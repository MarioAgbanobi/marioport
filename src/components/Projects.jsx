import { LazyLoadImage } from "react-lazy-load-image-component";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Personal Projects
      </motion.h2>
      
      <div>
        {PROJECTS && PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <LazyLoadImage
                src={project.image}
                alt={project.title}
                width={300}
                height={150}
                loading="lazy"
                effect="blur"
                className="mb-5 rounded"
              />
              
              {/* Action Buttons */}
              <div className="flex gap-3 mb-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </motion.div>
                                 
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
              <p className="mb-4 text-lg text-neutral-400">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;