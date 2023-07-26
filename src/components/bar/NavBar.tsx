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
import basket from '../../assets/shopping-basket.png'
import MyModal from '../modal/MyModal'
import { useTypeSelector } from '../../hooks/pizzaTypeSelector'
import { useAction } from '../../hooks/useAction'

export interface LayoutProps {
  children: React.ReactNode
}

const NavBar: React.FC<LayoutProps> = ({ children }) => {
  const history = useNavigate()
  const [vision, setVision] = useState(false)
  const [modal, setModal] = useState(false)

  const { isNew, loading, error } = useTypeSelector((state) => state.indicator)

  const { fetchIndicator } = useAction()

  useEffect(() => {
    function handleClick(e: any) {
      setVision(false)
    }
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  console.log(isNew)

  return (
    <div className="navBar" onClick={() => setVision(false)}>
      <div className="navBar__logo" onClick={() => history(MAIN_ROUTE)}>
        LA CARAVANA
      </div>

      <div className="navBar__navigation">
        <div className="navBar__navigation--basket">
          <div
            className={`navBar__navigation--basket-indicator ${
              isNew ? 'active' : ''
            }`}
          ></div>

          <img
            src={basket}
            alt=""
            onClick={() => {
              setModal(!modal)
              fetchIndicator(false)
            }}
          />
        </div>

        <p
          onClick={() => {
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
      <MyModal
        active={modal}
        setActive={() => {
          setModal(false)
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, iusto
          error! Quaerat error libero, et soluta autem ullam inventore non
          repellendus est. Tempore expedita possimus et, nam laboriosam illum
          distinctio.
        </p>
      </MyModal>
      <div className="navBar__navigation-small">
        <div className={`navBar__navigation--drop ${vision && 'active'}`}>
          {/* <div className={`navBar__navigation--drop active`}> */}
          <p onClick={() => history(MAIN_ROUTE)}>Home</p>
          <p onClick={() => history(MENU_ROUTE)}>MENU</p>
          <p onClick={() => history(CONSTRUCTOR_ROUTE)}>CONSTRUCTOR</p>
          <p onClick={() => history(ABOUT_ROUTE)}>ABOUT US</p>
          <p onClick={() => history(CONTACTS_ROUTE)}>CONTACT</p>
        </div>
        <div className="navBar__navigation--basket">
          <div
            className={`navBar__navigation--basket-indicator ${
              isNew ? 'active' : ''
            }`}
          ></div>

          <img
            src={basket}
            alt=""
            onClick={() => {
              setModal(!modal)
              fetchIndicator(false)
            }}
          />
        </div>
        <Burger
          onClick={() => {
            setVision(!vision)
          }}
        />
      </div>
    </div>
  )
}

export default NavBar
