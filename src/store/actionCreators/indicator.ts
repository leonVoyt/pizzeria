import { Dispatch } from 'redux'
import { IndicatorAction, IndicatorActionTypes } from '../../types/indicator'

export const fetchIndicator = (isFatch: boolean) => {
  return async (dispatch: Dispatch<IndicatorAction>) => {
    try {
      dispatch({
        type: IndicatorActionTypes.FETCH_INDICATOR_SUCCESS,
        payload: isFatch,
      })
    } catch (e) {
      dispatch({
        type: IndicatorActionTypes.FETCH_INDICATOR_ERROR,
        payload: 'error with fetching users',
      })
    }
  }
}
