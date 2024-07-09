import React from 'react'

export default function Skillcard({ title, iconUrl, isActive, onClick }) {
    return (
        <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => onClick()}>
            <div className='skill-icon'>
                <img src={iconUrl} alt={title}></img>
            </div>
            <span>{title}</span>
        </div>
    )
}
