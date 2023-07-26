import { Dispatch } from 'redux'
import { IPizzaItem } from '../../models/IPizzaItem'
import { BasketItemAction, BasketItemActionTypes } from '../../types/basketItem'

export const deleteBasketItem = (arr: any[], name: string) => {
  return async (dispatch: Dispatch<BasketItemAction>) => {
    try {
      let copy = [...arr]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
          copy.splice(i, 1)
          break
        }
      }

      dispatch({
        type: BasketItemActionTypes.FETCH_BASKET_SUCCESS,
        payload: copy,
      })
    } catch (e) {
      dispatch({
        type: BasketItemActionTypes.FETCH_BASKET_ERROR,
        payload: 'error with fetching users',
      })
    }
  }
}
export const addBasketItem = (arr: any[], add: object) => {
  return async (dispatch: Dispatch<BasketItemAction>) => {
    try {
      dispatch({
        type: BasketItemActionTypes.FETCH_BASKET_SUCCESS,
        payload: [...arr, add],
      })
    } catch (e) {
      dispatch({
        type: BasketItemActionTypes.FETCH_BASKET_ERROR,
        payload: 'error with fetching users',
      })
    }
  }
}
