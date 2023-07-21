import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import React from 'react'
import NavBar from './components/bar/NavBar'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'
import Contacts from './pages/Contacts'
import {
  ABOUT_ROUTE,
  CONSTRUCTOR_ROUTE,
  CONTACTS_ROUTE,
  MAIN_ROUTE,
  MENU_ROUTE,
} from './utils/consts'
import About from './pages/About'
import Menu from './pages/Menu'
import Constructor from './pages/Constructor'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={MAIN_ROUTE} element={<MainPage />}></Route>
        <Route path={CONTACTS_ROUTE} element={<Contacts />}></Route>
        <Route path={ABOUT_ROUTE} element={<About />}></Route>
        <Route path={MENU_ROUTE} element={<Menu />}></Route>
        <Route path={CONSTRUCTOR_ROUTE} element={<Constructor />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
