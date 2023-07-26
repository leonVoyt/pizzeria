export enum BasketItemActionTypes {
  FETCH_BASKET = 'FETCH_BASKET',
  FETCH_BASKET_SUCCESS = 'FETCH_BASKET_SUCCESS',
  FETCH_BASKET_ERROR = 'FETCH_BASKET_ERROR',
}
interface FetchBasketAction {
  type: BasketItemActionTypes.FETCH_BASKET
}
interface FetchBasketSuccessAction {
  type: BasketItemActionTypes.FETCH_BASKET_SUCCESS
  payload: any[]
}
interface FetchBasketErrorAction {
  type: BasketItemActionTypes.FETCH_BASKET_ERROR
  payload: string
}

export interface BasketItemState {
  basketItem: any[]
  loading: boolean
  error: null | string
}

export type BasketItemAction =
  | FetchBasketAction
  | FetchBasketSuccessAction
  | FetchBasketErrorAction
