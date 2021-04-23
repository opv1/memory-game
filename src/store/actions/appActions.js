import { store } from 'store/index'
import {
  setBeginGame,
  setEndGame,
  setMessage,
  setTimer,
  setDisplayedCards,
  setFlipedCards,
  setTempCards,
  setCounter,
} from 'store/reducers/appReducer'
import { shuffleArray } from 'utils/shuffleArray'

export const initCards = () => (dispatch) => {
  const { icons } = store.getState().app

  const iconsArray = [...icons, ...icons]
  const randomArray = shuffleArray(iconsArray)

  dispatch(setDisplayedCards(randomArray))
}

export const startGame = () => (dispatch) => {
  dispatch(setBeginGame())
}

export const finalCountdown = (timer) => (dispatch) => {
  dispatch(setTimer(timer))
}

export const flipCard = (cardIdx) => (dispatch) => {
  const { flipedCards, tempCards } = store.getState().app

  dispatch(setFlipedCards([...flipedCards, cardIdx]))
  dispatch(setTempCards([...tempCards, cardIdx]))
}

export const spliceFlipedCards = () => (dispatch) => {
  const { flipedCards, tempCards } = store.getState().app

  const cards = flipedCards.filter((card) => {
    return tempCards.indexOf(card) === -1
  })

  dispatch(setFlipedCards(cards))
  dispatch(setTempCards([]))
}

export const resetTempCards = () => (dispatch) => {
  dispatch(setTempCards([]))
}

export const overGame = (message) => (dispatch) => {
  const { counter } = store.getState().app

  if (message.includes('won')) {
    const obj = { ...counter, victories: counter.victories + 1 }
    dispatch(setCounter(obj))
  }

  if (message.includes('lose')) {
    const obj = { ...counter, defeats: counter.defeats + 1 }
    dispatch(setCounter(obj))
  }

  dispatch(setEndGame())
  dispatch(setMessage(message))
}

export const resetGame = () => (dispatch) => {
  const { icons } = store.getState().app

  const iconsArray = [...icons, ...icons]
  const randomArray = shuffleArray(iconsArray)

  dispatch(setBeginGame())
  dispatch(setEndGame())
  dispatch(setMessage(''))
  dispatch(setTimer(180))
  dispatch(setDisplayedCards(randomArray))
  dispatch(setFlipedCards([]))
  dispatch(setTempCards([]))
}
