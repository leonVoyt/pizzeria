import { pizzaItemReducer } from './reducers/pizzaItemReducer'
import { pizzaReducer } from './reducers/pizzaReducer'
import { basketItemReducer } from './reducers/basketItemReducer'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { indicatorReducer } from './reducers/indicatorReducer'

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  pizzaItem: pizzaItemReducer,
  basketItem: basketItemReducer,
  indicator: indicatorReducer,
})
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
