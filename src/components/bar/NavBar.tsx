import React, { useEffect, useState } from 'react'
import '../../styles/NavBar.css'
import { useNavigate } from 'react-router-dom'
import {
  ABOUT_ROUTE,
  CONSTRUCTOR_ROUTE,
  CONTACTS_ROUTE,
  MAIN_ROUTE,
  MENU_ROUTE,
} from '../../utils/consts'
import Burger from '../UI/Burger'
const NavBar = () => {
  const history = useNavigate()
  const [vision, setVision] = useState(false)

  useEffect(() => {
    // const handleScroll = () => {
    //   if (window.scrollY) {
    //     setVision(false)
    //   }
    // }
    function handleClick(e: any) {
      setVision(false)
    }
    window.addEventListener('click', handleClick)
    // window.addEventListener('scroll', handleScroll)

    return () => {
      // window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="navBar" onClick={() => setVision(false)}>
      <div className="navBar__logo" onClick={() => history(MAIN_ROUTE)}>
        LA CARAVANA
      </div>

      <div className="navBar__navigation">
        <p
          onClick={() => {
            setVision(false)
            history(MAIN_ROUTE)
          }}
        >
          Home
        </p>
        <p onClick={() => history(MENU_ROUTE)}>MENU</p>
        <p onClick={() => history(CONSTRUCTOR_ROUTE)}>CONSTRUCTOR</p>
        <p onClick={() => history(ABOUT_ROUTE)}>ABOUT US</p>
        <p onClick={() => history(CONTACTS_ROUTE)}>CONTACT</p>
      </div>

      <div className={`navBar__navigation--drop ${vision && 'active'}`}>
        <p onClick={() => history(MAIN_ROUTE)}>Home</p>
        <p onClick={() => history(MENU_ROUTE)}>MENU</p>
        <p onClick={() => history(CONSTRUCTOR_ROUTE)}>CONSTRUCTOR</p>
        <p onClick={() => history(ABOUT_ROUTE)}>ABOUT US</p>
        <p onClick={() => history(CONTACTS_ROUTE)}>CONTACT</p>
      </div>
      <Burger
        onClick={() => {
          setVision(!vision)
        }}
      />
    </div>
  )
}

export default NavBar
