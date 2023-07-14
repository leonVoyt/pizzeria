import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import React from 'react'
import NavBar from './components/bar/NavBar'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <MainPage />
      <Footer />
    </BrowserRouter>
  )
}

export default App
