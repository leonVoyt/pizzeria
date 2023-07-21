import { combineReducers } from 'redux'
import { pizzaReducer } from './pizzaReducer'

export const rootReducer = combineReducers({
  pizza: pizzaReducer,
})

export type RootState = ReturnType<typeof rootReducer>
