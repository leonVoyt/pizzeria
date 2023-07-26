import { Dispatch } from 'redux'
import { PizzaItemAction, PizzaItemActionTypes } from '../../types/pizzaItem'
import { IPizzaItem } from '../../models/IPizzaItem'

export const fetchPizzaItem = (arr: any, pizzaItem: IPizzaItem) => {
  return async (dispatch: Dispatch<PizzaItemAction>) => {
    try {
      dispatch({
        type: PizzaItemActionTypes.FETCH_PIZZA_SUCCESS_ITEM,
        payload: [...arr, pizzaItem],
      })
    } catch (e) {
      dispatch({
        type: PizzaItemActionTypes.FETCH_PIZZA_ERROR_ITEM,
        payload: 'error with fetching users',
      })
    }
  }
}
export const deletePizzaItem = (arr: any[], name: string) => {
  return async (dispatch: Dispatch<PizzaItemAction>) => {
    try {
      let copy = [...arr]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
          copy.splice(i, 1)
          break
        }
      }

      dispatch({
        type: PizzaItemActionTypes.FETCH_PIZZA_SUCCESS_ITEM,
        payload: copy,
      })
    } catch (e) {
      dispatch({
        type: PizzaItemActionTypes.FETCH_PIZZA_ERROR_ITEM,
        payload: 'error with fetching users',
      })
    }
  }
}
