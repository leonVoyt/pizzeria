import React from 'react'
import '../../styles/componets/Button.css'
interface ButtonUser {
  text: string
  onClick(): void
}
const Button: React.FC<ButtonUser> = ({ text, onClick }) => {
  return (
    <button className="button modal__close" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
