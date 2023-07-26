export enum PizzaItemActionTypes {
  FETCH_PIZZA_ITEM = 'FETCH_PIZZA_ITEM',
  FETCH_PIZZA_SUCCESS_ITEM = 'FETCH_PIZZA_SUCCESS_ITEM',
  FETCH_PIZZA_ERROR_ITEM = 'FETCH_PIZZA_ERROR_ITEM',
}

interface FetchPizzaItemAction {
  type: PizzaItemActionTypes.FETCH_PIZZA_ITEM
}
interface FetchPizzaItemSuccessAction {
  type: PizzaItemActionTypes.FETCH_PIZZA_SUCCESS_ITEM
  payload: any[]
}
interface FetchPizzaItemErrorAction {
  type: PizzaItemActionTypes.FETCH_PIZZA_ERROR_ITEM
  payload: string
}

export interface PizzaItemState {
  pizzaItem: any[]
  loading: boolean
  error: null | string
}

export type PizzaItemAction =
  | FetchPizzaItemAction
  | FetchPizzaItemSuccessAction
  | FetchPizzaItemErrorAction
