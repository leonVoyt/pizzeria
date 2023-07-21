import React from 'react'
import '../../styles/componets/Button.css'
interface ButtonUser {
  text: string
  onClick(): void
}
const Button: React.FC<ButtonUser> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
