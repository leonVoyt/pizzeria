import {
  PizzaItemAction,
  PizzaItemActionTypes,
  PizzaItemState,
} from '../../types/pizzaItem'

const initialState: PizzaItemState = {
  pizzaItem: [],
  loading: false,
  error: null,
}

export const pizzaItemReducer = (
  state = initialState,
  action: PizzaItemAction
): PizzaItemState => {
  switch (action.type) {
    case PizzaItemActionTypes.FETCH_PIZZA_ITEM:
      return { loading: true, error: null, pizzaItem: [] }
    case PizzaItemActionTypes.FETCH_PIZZA_SUCCESS_ITEM:
      return {
        loading: false,
        error: null,
        pizzaItem: action.payload,
      }

    case PizzaItemActionTypes.FETCH_PIZZA_ERROR_ITEM:
      return { loading: false, error: action.payload, pizzaItem: [] }
    default:
      return state
  }
}
