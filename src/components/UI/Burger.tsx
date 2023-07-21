import React from 'react'
import '../../styles/componets/Burger.css'
interface BurgerProps {
  onClick(): void
}

const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <div
      className="burger"
      onClick={(e) => {
        onClick()
        e.stopPropagation()
      }}
    >
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  )
}

export default Burger
