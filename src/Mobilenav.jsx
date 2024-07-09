import React from 'react';
import img from './assets/photo.png';
export default function Mobilenav({ isopen, togglemenu }) {
  return (
    <>
      <div className={`mobile-menu ${isopen ? "active" : ""}`} onClick={togglemenu}>
        <div className='mobile-menu-container'>
          <img className='logo' src={img} alt='harsh'></img>
          <ul>
            <li><a href='/' className='menu-item'>Home</a></li>
            <li><a href='#about' className='menu-item'>About</a></li>
            <li><a href='#skill' className='menu-item'>Skills</a></li>
            <li><a href='#project' className='menu-item'>Projects</a></li>
            <li><a href='#work' className='menu-item'>Work Experience</a></li>
            <li><a href='#contact' className='menu-item'>Contact Me</a></li>
            <a href='https://drive.google.com/file/d/1N_kkZt5I_OIf49YMJbPHB3WvD-gVFLSC/view?usp=drive_link' target='_blank' className='contact-btn'>Hire Me</a>
          </ul>
        </div>
      </div>
    </>
  )
}
