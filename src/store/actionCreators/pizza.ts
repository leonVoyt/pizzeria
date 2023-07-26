import { Dispatch } from 'redux'
import { PizzaAction, PizzaActionTypes } from '../../types/pizza'
import { pizzaArray } from '../../utils/Array'

export const fetchPizza = () => {
  return async (dispatch: Dispatch<PizzaAction>) => {
    try {
      dispatch({
        type: PizzaActionTypes.FETCH_PIZZA_SUCCESS,
        payload: pizzaArray,
      })
    } catch (e) {
      dispatch({
        type: PizzaActionTypes.FETCH_PIZZA_ERROR,
        payload: 'error with fetching users',
      })
    }
  }
}
export const fetchPizzaFilter = (type: string) => {
  return async (dispatch: Dispatch<PizzaAction>) => {
    try {
      dispatch({
        type: PizzaActionTypes.FETCH_PIZZA_FILTER,
        payload: pizzaArray.filter((item) => item.type === type),
      })
    } catch (e) {
      dispatch({
        type: PizzaActionTypes.FETCH_PIZZA_ERROR,
        payload: 'error with fetching users',
      })
    }
  }
}
