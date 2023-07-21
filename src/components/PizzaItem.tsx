import React from 'react'
import { IPizza } from '../models/IPizza'
interface PostItemProps {
  pizza: IPizza
}

const PizzaItem: React.FC<PostItemProps> = ({ pizza }) => {
  // console.log(pizza)

  return (
    <div className="menu__pizza-item">
      <img src={require(`../assets/${pizza.img}`)} alt="" />
      <div className="menu__pizza-item__text">
        <div className="menu__pizza-item__text--top">
          <h1>{pizza.name}</h1>
          <h1>{pizza.price}$</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias
          quia illum iusto. Nisi velit nobis odit laudantium ea asperiores
          repudiandae non, incidunt, dolores at iure quia dolorum, fugit ex.
        </p>
      </div>
    </div>
  )
}

export default PizzaItem
