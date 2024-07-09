
import React from 'react'
export default function Experiencecard({ details }) {
    return (
        <div className='work-experience-card'>
            <h6>{details.title}</h6>
            <div className='work-duration'>{details.date}</div>
            <ul>
                {details.responsibilities.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}
