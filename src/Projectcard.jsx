import React from 'react'
import { motion } from 'framer-motion'
export default function Projectcard({data}) {
  return (
    <motion.div initial={{ opacity: 0,x:-100 }} whileInView={{ opacity: 1,x:0 }} viewport={{ once: true }} transition={{duration:1}} className='projectcard-container'>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <div className='blur'>

      <h5>Technologies Used</h5>
      </div>
      <div className='skill-projects'>
        {data.Technologies_used.map((item)=>{
            return <ul className='project-skill' style={{margin:"1.3rem"}}>
                <li>{item.skill}</li>
                <div className='border'></div>
            </ul>
        })}
      </div>
        <a href={data.link} target='_blank'>Link</a>
    </motion.div>
  )
}