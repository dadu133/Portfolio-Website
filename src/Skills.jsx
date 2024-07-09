import React, { useState } from 'react'
import Skillcard from './Skillcard'
import { skills } from './data'
import Skillinfocard from './Skillinfocard';
import { motion } from 'framer-motion';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  }
  return (
    <div className='skills-container' id='skill'>
      <motion.h5 initial={{ opacity: 0,y:-100 }} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }} transition={{duration:1}}>Technical Proficiency</motion.h5>
      <div className='skills-content'>
        <motion.div className='skills' initial={{ opacity: 0,x:-100 }} whileInView={{ opacity: 1,x:0 }} viewport={{ once: true }} transition={{duration:1}}>
          {skills.map((item) => {
            return <Skillcard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title===item.title} onClick={()=>{handleSelectedSkill(item)}}></Skillcard>
          })}
        </motion.div>
        <motion.div className='skills-info' initial={{ opacity: 0,x:100 }} whileInView={{ opacity: 1,x:0 }} viewport={{ once: true }} transition={{duration:1}}>
          <Skillinfocard heading={selectedSkill.title} skills={selectedSkill.skills}></Skillinfocard>
        </motion.div>

      </div>
    </div>
  )
}
