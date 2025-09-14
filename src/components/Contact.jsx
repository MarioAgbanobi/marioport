import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>

        <div className="text-center tracking-tighter">
            <motion.p 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="my-4">{CONTACT.address1} | {CONTACT.address2}</motion.p>
            
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="my-4 flex items-center justify-center gap-2">
                <span>{CONTACT.phoneNo}</span>
                <a 
                  href="https://wa.me/2348140292761"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors duration-200"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                </a>
            </motion.div>
            
            <motion.a 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            href={`mailto:${CONTACT.email}`} 
            className="my-4 inline-block hover:text-purple-500 transition-colors duration-200">
                {CONTACT.email}
            </motion.a>
        </div>
    </div>
  )
}

export default Contact