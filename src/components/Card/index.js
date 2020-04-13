import React from 'react'
import ReactCardFlip from 'react-card-flip'
import './style.css'
import reactLogo from '../../assets/react.png'

export default function Card({ logo, isFlipped, onClick }) {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="front" onClick={(e) => onClick(e)}>
        <img src={reactLogo} alt="react" />
      </div>
      <div className="back" onClick={(e) => onClick(e)}>
        <img src={logo} alt={logo} />
      </div>
    </ReactCardFlip>
  )
}