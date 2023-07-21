import { PizzaAction, PizzaActionTypes, PizzaState } from '../../types/pizza'

const initialState: PizzaState = {
  pizza: [],
  loading: false,
  error: null,
}

export const pizzaReducer = (
  state = initialState,
  action: PizzaAction
): PizzaState => {
  switch (action.type) {
    case PizzaActionTypes.FETCH_PIZZA:
      return { loading: true, error: null, pizza: [] }
    case PizzaActionTypes.FETCH_PIZZA_SUCCESS:
      return {
        loading: false,
        error: null,
        pizza: action.payload,
      }

    case PizzaActionTypes.FETCH_PIZZA_FILTER:
      return {
        loading: false,
        error: null,
        pizza: action.payload,
      }
    case PizzaActionTypes.FETCH_PIZZA_ERROR:
      return { loading: false, error: action.payload, pizza: [] }
    default:
      return state
  }
}
