import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <h2 className="mx-2 text-4xl">Chief.</h2>
        </div>
        <div className="flex items-center justify-center gap-10 w-full lg:w-1/2">
            <a 
              href="https://www.linkedin.com/in/mario-agbanobi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8"/>
            </a>
            
            <a 
              href="https://github.com/MarioAgbanobi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaGithub className="w-6 h-6 lg:w-8 lg:h-8"/>
            </a>
            
            <a 
              href="https://www.instagram.com/mario.agbanobi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaInstagram className="w-6 h-6 lg:w-8 lg:h-8"/>
            </a>
            
            <a 
              href="https://x.com/Mario_Agbanobi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaSquareTwitter className="w-6 h-6 lg:w-8 lg:h-8"/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar