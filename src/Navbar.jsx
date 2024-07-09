import React, { useState } from 'react'
import Mobilenav from './Mobilenav';
import { FaAlignJustify } from "react-icons/fa";

export default function Navbar() {
  const [openmenu, setOpenMenu] = useState(false);
  function togglemenu() {
    setOpenMenu(!openmenu);
  }
  return (
    <>
      <Mobilenav isopen={openmenu} togglemenu={togglemenu}></Mobilenav>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <h1 className='menu-h1'>Harsh Vardhan Sharma</h1>
          <ul>
            <li><a href='/' className='menu-item'>Home</a></li>
            <li><a href='#about' className='menu-item'>About</a></li>
            <li><a href='#skill' className='menu-item'>Skills</a></li>
            <li><a href='#project' className='menu-item'>Projects</a></li>
            <li><a href='#work' className='menu-item'>Work Experience</a></li>
            <li><a href='#contact' className='menu-item'>Contact Me</a></li>
            <a href='https://drive.google.com/file/d/1N_kkZt5I_OIf49YMJbPHB3WvD-gVFLSC/view?usp=drive_link' target='_blank' className='contact-btn'>Hire Me</a>
          </ul>
          <button className='menu-btn' onClick={togglemenu}><span style={{ fontSize: "1.8rem",padding:"1rem" }}><FaAlignJustify/></span></button>
        </div>
      </nav>
    </>
  )
}
