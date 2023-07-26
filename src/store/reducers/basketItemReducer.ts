import {
  BasketItemActionTypes,
  BasketItemAction,
  BasketItemState,
} from '../../types/basketItem'

const initialState: BasketItemState = {
  basketItem: [],
  loading: false,
  error: null,
}

export const basketItemReducer = (
  state = initialState,
  action: BasketItemAction
): BasketItemState => {
  switch (action.type) {
    case BasketItemActionTypes.FETCH_BASKET:
      return { loading: true, error: null, basketItem: [] }

    case BasketItemActionTypes.FETCH_BASKET_SUCCESS:
      return {
        loading: false,
        error: null,
        basketItem: action.payload,
      }

    case BasketItemActionTypes.FETCH_BASKET_ERROR:
      return { loading: false, error: action.payload, basketItem: [] }
    default:
      return state
  }
}
