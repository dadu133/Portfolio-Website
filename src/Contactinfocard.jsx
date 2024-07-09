import React from 'react'

export default function Contactinfocard({iconurl,text}) {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconurl} alt={text}></img>
      </div>
      <p>{text}</p>
    </div>
  )
}
