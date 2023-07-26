import React, { useEffect, useRef, useState } from 'react'
import '../styles/pages/Constructor.css'
import plus from '../assets/pngwing.com.png'
import { useTypeSelector } from '../hooks/pizzaTypeSelector'
import { useAction } from '../hooks/useAction'
import { IPizzaItem } from '../models/IPizzaItem'
import { Ingredients } from '../utils/Array'
import Line from '../components/UI/Line'
import Button from '../components/UI/Button'
import { IPizza } from '../models/IPizza'
const Constructor = () => {
  const { pizzaItem, loading, error } = useTypeSelector(
    (state) => state.pizzaItem
  )

  const { basketItem } = useTypeSelector((state) => state.basketItem)
  const { addBasketItem, fetchIndicator } = useAction()

  const [diametr, setDiametr] = useState(false)
  const { fetchPizzaItem, deletePizzaItem } = useAction()

  const handleOnClick = (name: string, price: number) => {
    fetchPizzaItem(pizzaItem, { id: Date.now(), name: name, price: price })
  }
  const totalPrice = Math.ceil(
    pizzaItem.reduce((prev, curr: IPizzaItem) => {
      return prev + curr.price
    }, 20 * (!diametr ? 2.25 : 1)) * (!diametr ? 1.4 : 1)
  )
  const item: IPizza = {
    id: Date.now(),
    img: 'pizza-2000614_1920 1.png',
    name: 'individual',
    price: totalPrice,
    type: 'pizza',
  }

  return (
    <div className="constructor">
      <div className="constructor__form">
        <div className="constructor__text">
          <Line text="Constructor" />
          <p>
            You can build your individual pizza ,dough price for 30 sm diametr
            is <span style={{ color: 'yellow' }}>20 $ </span>
            If you chose large size all ingredients{' '}
            <span style={{ color: 'yellow' }}>multiply in 1.4 times</span>
          </p>
        </div>
        <div className="constructor__form--container">
          {Ingredients.map((ingredient) => (
            <div className="constructor__form--item" key={ingredient.id}>
              {ingredient.name}
              <img
                src={plus}
                alt=""
                style={{ width: 50, cursor: 'pointer' }}
                onClick={() => handleOnClick(ingredient.name, ingredient.price)}
              />
              {ingredient.price} $
            </div>
          ))}
          <div className="constructor__form--item">
            {diametr ? `Large size(45 sm)` : `standart size(30 sm)`}
            <img
              src={plus}
              alt=""
              style={{ width: 50, cursor: 'pointer' }}
              onClick={() => setDiametr(!diametr)}
            />
            {diametr ? `dough price : 45 $` : `dough price : 20 $`}
          </div>
        </div>
      </div>
      <div className="constructor__price">
        <div className="constructor__price--contatiner">
          <div className="constructor__price--total">
            total price : {totalPrice}
            {'   '}$
          </div>
          {Ingredients.map((pizza, index) => (
            <div className="constructor__price--1" key={pizza.id}>
              <div className="constructor__ingredients">
                {pizza.name} :{' '}
                {
                  pizzaItem.filter(
                    (curr: IPizzaItem) => curr.name === pizza.name
                  ).length
                }
                {` x `}
              </div>
              <div
                className="constructor__ingredients--minus"
                onClick={() => deletePizzaItem(pizzaItem, pizza.name)}
              ></div>
            </div>
          ))}
          <p className="constructor__form--diametr">
            diametr : {diametr ? 30 : 45} sm
          </p>
          <div className="constructor__price--button">
            <Button
              onClick={() => {
                addBasketItem(basketItem, item)
                fetchIndicator(true)
              }}
              text="ADD TO BASKET"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Constructor
