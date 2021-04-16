import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { shuffleArray } from '../utils/shuffleArray'
import './Field.scss'
import Timer from './Timer'
import {
  setDisplayedCards,
  setFlipedCards,
  setTempCards,
} from '../store/reducers/appReducer'

const Field = () => {
  const dispatch = useDispatch()
  const { icons, displayedCards, flipedCards, tempCards } = useSelector(
    (state) => state.app
  )

  useEffect(() => {
    const iconsArray = [...icons, ...icons]
    const randomArray = shuffleArray(iconsArray)

    dispatch(setDisplayedCards(randomArray))
  }, [])

  useEffect(() => {
    if (tempCards.length === 2) {
      const firstChoose = tempCards[0]
      const secondChoose = tempCards[1]

      if (displayedCards[firstChoose].id !== displayedCards[secondChoose].id) {
        setTimeout(() => {
          const cards = flipedCards.filter((card) => {
            return tempCards.indexOf(card) === -1
          })

          dispatch(setTempCards([]))
          dispatch(setFlipedCards(cards))
        }, 500)
      } else {
        dispatch(setTempCards([]))
      }
    }
  }, [flipedCards])

  return (
    <div className='field'>
      <div className='field__block'>
        {displayedCards.map((card, index) => (
          <Card key={index} card={{ index, ...card }} />
        ))}
      </div>
    </div>
  )
}

export default Field
