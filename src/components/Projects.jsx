import { LazyLoadImage } from "react-lazy-load-image-component"
import { PROJECTS } from "../constants"
import { motion } from "motion/react"
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='my-20  text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS && PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4">
                    <LazyLoadImage 
                    src={project.image} 
                    alt={project.title} 
                    width={150}
                    height={150}
                    loading="lazy"
                    effect="blur"
                    className="mb-b rounded"
                    />
                    </motion.div>
                    
                    <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
                        <p className="mb-4 text-lg text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-base font-medium text-purple-900">{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects