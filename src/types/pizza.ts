export enum PizzaActionTypes {
  FETCH_PIZZA = 'FETCH_PIZZA',
  FETCH_PIZZA_SUCCESS = 'FETCH_PIZZA_SUCCESS',
  FETCH_PIZZA_ERROR = 'FETCH_PIZZA_ERROR',
  FETCH_PIZZA_FILTER = 'FETCH_PIZZA_FILTER',
}

interface FetchPizzaAction {
  type: PizzaActionTypes.FETCH_PIZZA
}
interface FetchPizzaSuccessAction {
  type: PizzaActionTypes.FETCH_PIZZA_SUCCESS
  payload: any[]
}
interface FetchPizzaErrorAction {
  type: PizzaActionTypes.FETCH_PIZZA_ERROR
  payload: string
}
interface FetchPizzaFilterAction {
  type: PizzaActionTypes.FETCH_PIZZA_FILTER
  payload: any[]
}

export interface PizzaState {
  pizza: any[]
  loading: boolean
  error: null | string
}

export type PizzaAction =
  | FetchPizzaAction
  | FetchPizzaSuccessAction
  | FetchPizzaErrorAction
  | FetchPizzaFilterAction
