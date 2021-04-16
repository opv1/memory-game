import { SET_DISPLAYED_CARDS, SET_FLIPED_CARDS, SET_TEMP_CARDS } from '../types'

const initialState = {
  icons: [
    { id: 1, className: 'fas fa-cat' },
    { id: 2, className: 'fas fa-compact-disc' },
    { id: 3, className: 'fas fa-crow' },
    { id: 4, className: 'fas fa-dog' },
    { id: 5, className: 'fas fa-dove' },
    { id: 6, className: 'fas fa-dragon' },
    { id: 7, className: 'fas fa-drum' },
    { id: 8, className: 'fas fa-feather' },
    { id: 9, className: 'fas fa-fish' },
    { id: 10, className: 'fas fa-frog' },
    { id: 11, className: 'fas fa-guitar' },
    { id: 12, className: 'fas fa-headphones' },
    { id: 13, className: 'fas fa-hippo' },
    { id: 14, className: 'fas fa-horse' },
    { id: 15, className: 'fas fa-microphone' },
    { id: 16, className: 'fas fa-kiwi-bird' },
    { id: 17, className: 'fas fa-record-vinyl' },
    { id: 18, className: 'fas fa-play' },
  ],
  displayedCards: [],
  flipedCards: [],
  tempCards: [],
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISPLAYED_CARDS:
      return {
        ...state,
        displayedCards: action.payload,
      }
    case SET_FLIPED_CARDS:
      return {
        ...state,
        flipedCards: action.payload,
      }
    case SET_TEMP_CARDS:
      return {
        ...state,
        tempCards: action.payload,
      }
    default:
      return state
  }
}

export const setDisplayedCards = (cards) => ({
  type: SET_DISPLAYED_CARDS,
  payload: cards,
})

export const setFlipedCards = (cards) => ({
  type: SET_FLIPED_CARDS,
  payload: cards,
})

export const setTempCards = (cards) => ({
  type: SET_TEMP_CARDS,
  payload: cards,
})
