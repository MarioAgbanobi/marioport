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
        <div className="m-8 flex items-enter justify-center gap-4">
            <FaLinkedin className="w-12 h-8"/>
            <FaGithub className="w-12 h-8"/>
            <FaInstagram className="w-12 h-8"/>
            <FaSquareTwitter className="w-12 h-8"/>
        </div>
    </nav>
  )
}

export default Navbar