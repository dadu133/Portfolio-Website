import React from 'react'
import Contactinfocard from './Contactinfocard'
import Contactform from './Contactform'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    <div className='contact-container' id='contact'>
      <motion.h5 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.4 }}>Contact Me</motion.h5>
      <div className='contact-content'>
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{flex:1}}>
          <Contactinfocard iconurl="./src/assets/p2.png" text="https://github.com/dadu133"></Contactinfocard>
          <Contactinfocard iconurl="./src/assets/photo56.png" text="https://www.linkedin.com/in/harsh-vardhan-sharma-45435a21b/"></Contactinfocard>
          <Contactinfocard iconurl="./src/assets/photo57.png" text="harshsharma5815@gmail.com"></Contactinfocard>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{flex:1}}>
         <Contactform></Contactform>
        </motion.div>
      </div>
    </div>
  )
}