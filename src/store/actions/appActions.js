import { store } from '../index'
import {
  setBeginGame,
  setEndGame,
  setMessage,
  setTimer,
  setDisplayedCards,
  setFlipedCards,
  setTempCards,
} from '../reducers/appReducer'
import { shuffleArray } from '../../utils/shuffleArray'

export const initCards = () => (dispatch) => {
  const { icons } = store.getState().app

  const iconsArray = [...icons, ...icons]
  const randomArray = shuffleArray(iconsArray)

  dispatch(setDisplayedCards(randomArray))
}

export const startGame = () => (dispatch) => {
  dispatch(setBeginGame())
}

export const overGame = (message) => (dispatch) => {
  dispatch(setEndGame())
  dispatch(setMessage(message))
}

export const resetTempCards = () => (dispatch) => {
  dispatch(setTempCards([]))
}

export const spliceFlipedCards = () => (dispatch) => {
  const { flipedCards, tempCards } = store.getState().app

  const cards = flipedCards.filter((card) => {
    return tempCards.indexOf(card) === -1
  })

  dispatch(setFlipedCards(cards))
  dispatch(setTempCards([]))
}

export const resetGame = () => (dispatch) => {
  const { icons } = store.getState().app

  const iconsArray = [...icons, ...icons]
  const randomArray = shuffleArray(iconsArray)

  dispatch(setBeginGame())
  dispatch(setEndGame())
  dispatch(setMessage(''))
  dispatch(setTimer(10))
  dispatch(setDisplayedCards(randomArray))
}

export const flipCard = (cardIdx) => (dispatch) => {
  const { flipedCards, tempCards } = store.getState().app

  dispatch(setFlipedCards([...flipedCards, cardIdx]))
  dispatch(setTempCards([...tempCards, cardIdx]))
}

export const finalCountdown = (timer) => (dispatch) => {
  dispatch(setTimer(timer))
}
