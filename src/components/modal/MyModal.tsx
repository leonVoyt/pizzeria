import React, { useEffect } from 'react'
import '../../styles/MyModal.css'
import Line from '../UI/Line'
import { useTypeSelector } from '../../hooks/pizzaTypeSelector'
import { useAction } from '../../hooks/useAction'
import PizzaItem from '../PizzaItem'
import BasketItem from '../BasketItem'
import Button from '../UI/Button'
interface MyModalProps {
  active: boolean
  setActive(): void
  children: React.ReactNode
}

const MyModal: React.FC<MyModalProps> = ({ active, setActive, children }) => {
  let { basketItem, loading, error } = useTypeSelector(
    (state) => state.basketItem
  )
  useAction()

  return (
    <div className={`modal ${active && 'activee'}`} onClick={() => setActive()}>
      <div
        className={`modal__content ${active && 'activee'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close_btn">
          <Button onClick={() => setActive()} text="checkout" />
        </div>

        <Line text="BASKET" />
        <div className="modal__content--total-price">
          total price :{basketItem.reduce((acc, curr) => acc + curr.price, 0)} $
        </div>
        <div className="modal__content--item">
          {basketItem.length !== 0 ? (
            basketItem.map((basketItem) => (
              <BasketItem pizza={basketItem} key={basketItem.id} />
            ))
          ) : (
            <h1>No such product</h1>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export default MyModal
