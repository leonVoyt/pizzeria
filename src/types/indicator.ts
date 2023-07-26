export enum IndicatorActionTypes {
  FETCH_INDICATOR_SUCCESS = 'FETCH_INDICATOR_SUCCESS',
  FETCH_INDICATOR_ERROR = 'FETCH_INDICATOR_ERROR',
}

interface FetchIndicatorSuccessAction {
  type: IndicatorActionTypes.FETCH_INDICATOR_SUCCESS
  payload: boolean
}
interface FetchIndicatorErrorAction {
  type: IndicatorActionTypes.FETCH_INDICATOR_ERROR
  payload: string
}

export interface IndicatorState {
  isNew: boolean
  loading: boolean
  error: null | string
}

export type IndicatorAction =
  | FetchIndicatorSuccessAction
  | FetchIndicatorErrorAction
