import React from 'react'
import '../styles/pages/Constructor.css'
import plus from '../assets/pngwing.com.png'
const Constructor = () => {
  return (
    <div className="constructor">
      <div className="constructor__form">
        <div
          className="constructor__form--item"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Cheese
          <img src={plus} alt="" style={{ width: 50 }} />
        </div>
        <div
          className="constructor__form--item"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Bekon
          <img src={plus} alt="" style={{ width: 50 }} />
        </div>
      </div>
    </div>
  )
}

export default Constructor
