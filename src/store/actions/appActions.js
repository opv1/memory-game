import { setFlipedCards } from '../reducers/appReducer'

export const flipedCards = (cards) => (dispatch) => {
  dispatch(setFlipedCards(cards))
}
