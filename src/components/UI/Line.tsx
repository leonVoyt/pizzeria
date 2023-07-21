import React from 'react'
import '../../styles/componets/Line.css'

interface lineProps {
  text: string
}

const Line: React.FC<lineProps> = ({ text }) => {
  return (
    <div className="line">
      <h1>{text}</h1>
      <div className="line__line"></div>
    </div>
  )
}

export default Line
