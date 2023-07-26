import React, { useState } from 'react'
import '../styles/pages/About.css'
import Line from '../components/UI/Line'
import rest from '../assets/restaurant-5521372_1920 1.png'
import Button from '../components/UI/Button'
import menu1 from '../assets/menu1.png'
import menu2 from '../assets/menu2.png'
import { useNavigate } from 'react-router-dom'
import { MENU_ROUTE } from '../utils/consts'

const About = () => {
  const [active, setActive] = useState(false)
  const history = useNavigate()

  const s = () => {
    var body = document.body,
      html = document.documentElement
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    const main: any = document.querySelector('.about-page')
    !active
      ? (main.style.height = 'min-content')
      : setTimeout(() => {
          main.style.height = 'calc(100vh - 50px)'
        }, 700)
    !active && window.scrollTo(0, height)
  }
  return (
    <div className="about-page">
      <div className="about">
        <div className="about__text">
          <Line text="About us" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            id blanditiis accusamus, ipsum molestiae reprehenderit expedita
            deserunt, accusantium enim debitis est et officia perspiciatis
            laboriosam soluta consequatur. Animi, nobis sit!
          </p>
          <Button
            text={`${!active ? 'READ MORE' : 'COLLAPSE'}`}
            onClick={() => {
              setActive(!active)
              s()
            }}
          />
        </div>
        <div className="about__img">
          <img src={rest} alt="" />
        </div>
      </div>
      <div className={`about-page__menu ${active && 'active'}`}>
        <hr />
        <Line text="OUR MENU" />
        <div className="about-page__menu--text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            earum at sunt accusamus sint quo numquam saepe harum iure tempore
            eius, quae, modi nam expedita hic corporis ea, itaque unde. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Aliquam earum at
            sunt accusamus sint quo numquam saepe harum iure tempore eius, quae,
            modi nam expedita hic corporis ea, itaque unde.
          </p>
        </div>
        <div className="about-page__menu--img">
          <img src={menu1} alt="" />
          <img src={menu2} alt="" />
        </div>
        <Button
          text="TO MENU"
          onClick={() => {
            history(MENU_ROUTE)
            window.scrollTo(0, 0)
          }}
        />
      </div>
    </div>
  )
}

export default About
