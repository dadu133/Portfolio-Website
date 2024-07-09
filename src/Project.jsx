import React from 'react'
import { projects } from './data'
import Projectcard from './Projectcard'
import { motion } from 'framer-motion'
export default function Project() {
  return (
    <div className='project-container' id='project'>
      <motion.h5 initial={{ opacity: 0,y:-100 }} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }} transition={{duration:1.4}}>Projects</motion.h5>
      <div className='flex-box'>
        {projects.map((item) => {
          return <Projectcard data={item}></Projectcard>
        })}
      </div>
    </div>
  )
}
