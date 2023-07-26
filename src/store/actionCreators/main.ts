import * as PizzaActionCreators from './pizza'
import * as PizzaItemActionCreators from './pizzaItem'
import * as BasketItemActionCreators from './basketItem'
import * as IndicatorActionCreators from './indicator'

export default {
  ...PizzaActionCreators,
  ...PizzaItemActionCreators,
  ...BasketItemActionCreators,
  ...IndicatorActionCreators,
}
