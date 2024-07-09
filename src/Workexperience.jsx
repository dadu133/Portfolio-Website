import React, { useRef } from 'react'
import { work_experience } from './data'
import Experiencecard from './Experiencecard'
import Slider from 'react-slick';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function Workexperience() {
  const sliderRef = useRef();
  const settings = {
    dors: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };
  function slideright() {
    sliderRef.current.slickNext();
  }
  function slideleft() {
    sliderRef.current.slickPrev();
  }
  return (
    <div className='experience-container' id='work'>
      <motion.h5 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.4 }}>Work Experience</motion.h5>
      <motion.div  initial={{ opacity: 0,y:-100 }} whileInView={{ opacity: 1,y:0 }} viewport={{ once: true }} transition={{duration:1}} className='experience-content'>
        <div className='arrow-right' onClick={slideright}>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>
        </div>
        <div className='arrow-left' onClick={slideleft}>
          <FaLongArrowAltRight></FaLongArrowAltRight>
        </div>
        <Slider ref={sliderRef} {...settings}>

          {work_experience.map((item) => {
            return <Experiencecard key={item.title} details={item}></Experiencecard>
          })}
        </Slider>
      </motion.div>
    </div>
  )
}
