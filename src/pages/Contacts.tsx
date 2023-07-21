import React from 'react'
import Line from '../components/UI/Line'
import '../styles/pages/Contacts.css'
import { relative } from 'path'
import inst from '../assets/1658588801instagram-icon-png.png'
import facebook from '../assets/facebook.png'
import whatsup from '../assets/220802.png'

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__pizza--image">
        <div className="contacts__main-text">
          <div className="contacts__main-text--second">
            <Line text={'LA CAVARNA'} />
          </div>
          <div className="contacts__main-text--link">
            <img id="inst" src={inst} alt="" />
            <img id="face" src={facebook} alt="" />
            <img id="whatsup" src={whatsup} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
