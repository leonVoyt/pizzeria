import React from 'react'
import '../styles/pages/MainPage.css'
import Line from '../components/UI/Line'

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__shadow"></div>
      <div className="main-page__pizza--image">
        <div className="main-page__main-text">
          <div className="main-page__main-text--second">
            <Line text={'LA CAVARNA'} />

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              laudantium sint provident esse expedita? Maiores iste repellat
              vitae consectetur laboriosam exercitationem explicabo minus
              similique sint, laborum expedita accusamus a nostrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
