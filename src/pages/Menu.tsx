import React, { useEffect } from 'react'
import { useTypeSelector } from '../hooks/pizzaTypeSelector'
import { useAction } from '../hooks/useAction'
import '../styles/pages/Menu.css'
import '../assets/plate-2802332_1920 1.png'
import PizzaItem from '../components/PizzaItem'
import Line from '../components/UI/Line'

const Menu = () => {
  let { pizza, loading, error } = useTypeSelector((state) => state.pizza)
  const { fetchPizza, fetchPizzaFilter } = useAction()
  useEffect(() => {
    fetchPizza()
  }, [])

  const filtMenu = (type: string) => {
    fetchPizzaFilter(type)
  }
  return (
    <div className="contatiner">
      <div className="menu">
        <div className="menu__top-bar">
          <span onClick={() => fetchPizza()}>
            <Line text="OUR MENU" />
          </span>
          <div className="menu_filtr">
            <p onClick={() => filtMenu('pizza')}>PIZZA</p>
            <p onClick={() => filtMenu('starters')}>STARTERS</p>
            <p onClick={() => filtMenu('main')}>MAIN</p>
            <p onClick={() => filtMenu('drinks')}>DRINKS</p>
            <p onClick={() => filtMenu('desert')}>DESERT</p>
          </div>
        </div>
        {pizza.length !== 0 ? (
          pizza.map((pizza) => <PizzaItem pizza={pizza} key={pizza.id} />)
        ) : (
          <h1>No such product</h1>
        )}
      </div>
    </div>
  )
}

export default Menu
