import {
  IndicatorAction,
  IndicatorActionTypes,
  IndicatorState,
} from '../../types/indicator'

const initialState: IndicatorState = {
  isNew: false,
  loading: false,
  error: null,
}

export const indicatorReducer = (
  state = initialState,
  action: IndicatorAction
): IndicatorState => {
  switch (action.type) {
    case IndicatorActionTypes.FETCH_INDICATOR_SUCCESS:
      return {
        loading: false,
        error: null,
        isNew: action.payload,
      }

    case IndicatorActionTypes.FETCH_INDICATOR_ERROR:
      return { loading: false, error: action.payload, isNew: false }
    default:
      return state
  }
}
