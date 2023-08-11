import React from 'react'
import { IPizza } from '../models/IPizza'
import Button from './UI/Button'
import '../styles/componets/BasketItem.css'
import { useTypeSelector } from '../hooks/pizzaTypeSelector'
import { useAction } from '../hooks/useAction'

interface PostItemProps {
  pizza: IPizza
}

const BasketItem: React.FC<PostItemProps> = ({ pizza }) => {
  let { basketItem, loading, error } = useTypeSelector(
    (state) => state.basketItem
  )
  const { deleteBasketItem } = useAction()

  return (
    <div className="basket-item">
      <div className="basket-item--image">
        <img src={require(`../assets/${pizza.img}`)} alt="" />
      </div>
      <div className="basket-item__text">
        <div className="basket-item__text--top">
          <h1>{pizza.name}</h1>
          <h2>{pizza.price}$</h2>
        </div>
        <div className="basket-item__text--center">
          <p>type:{pizza.type}</p>
        </div>
        <div className="basket-item--button">
          <Button
            onClick={() => deleteBasketItem(basketItem, pizza.name)}
            text="delete"
          />
        </div>
      </div>
    </div>
  )
}

export default BasketItem
