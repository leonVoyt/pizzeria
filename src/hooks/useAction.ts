import PizzaAction from '../store/actionCreators/main'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export const useAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(PizzaAction, dispatch)
}
