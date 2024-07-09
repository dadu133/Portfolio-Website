import React from 'react'
import { motion } from 'framer-motion'
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
})

const container2 = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
})

export default function About() {
  return (
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} viewport={{once:true}} className='about-container' id='about'>
      <motion.h4  initial={{ opacity: 0,y:-100 }} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }} transition={{duration:1}}>About</motion.h4>
      <p>Hello I am Harsh Vardhan Sharma
Graduated in B.Tech computer science at Bhilai Institute of Technology in Raipur, and a full-stack web developer with a passion for technology and a drive to learn new things.Throughout my career, I have honed my skills in various aspects of web development, including front-end, back-end, and full-stack development. My expertise spans several key technologies and frameworks 
</p>
    </motion.div>
  )
}
