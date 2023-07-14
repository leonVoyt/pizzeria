import React from 'react'
import '../../styles/NavBar.css'

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__logo">LA PIZZA</div>

      <div className="navBar__navigation">
        <p>Home</p>
        <p>ABOUT US</p>
        <p>MENU</p>
        <p>CONTACT</p>
      </div>
    </div>
  )
}

export default NavBar
