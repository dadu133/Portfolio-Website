import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';
import img2 from "./assets/photo31.jpg"
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

export default function Hero() {
  return (
    <div className='hero-container' id='home'>
      <div className='hero-content'>
        <motion.h2 variants={container(0)} initial="hidden" animate="visible">Building Digital Experiences That Inspire</motion.h2>
        <motion.p variants={container(0.5)} initial="hidden" animate="visible">Passionate Full Stack Web Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</motion.p>

      </div>
      <motion.div variants={container(1)} initial="hidden" animate="visible" className='hero-img'>
        <div>
          <motion.div  variants={container2(1.5)} initial="hidden" animate="visible" className='tech-icon'>
            <FaReact style={{ color: "#61DBFB", fontSize: "3rem" }}></FaReact>
          </motion.div>
          <img src={img2} alt='not found'></img>
        </div>
        <div>

          <motion.div  variants={container(1.7)} initial="hidden" animate="visible" className='tech-icon'>

            <FaHtml5 style={{ color: "#E44D26", fontSize: "3rem" }}></FaHtml5>
          </motion.div>
          <motion.div variants={container(1.9)} initial="hidden" animate="visible" className='tech-icon'>

            <FaCss3Alt style={{ color: "#264de4", fontSize: "3rem" }}></FaCss3Alt>
          </motion.div>
          <motion.div  variants={container(2.2)} initial="hidden" animate="visible" className='tech-icon'>

            <IoLogoJavascript style={{ color: "#F0DB4F", fontSize: "3rem" }}></IoLogoJavascript>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
