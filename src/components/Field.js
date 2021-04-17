import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useActions'
import Timer from './Timer'
import Card from './Card'
import './Field.scss'

const Field = () => {
  const { displayedCards, flipedCards, tempCards } = useSelector(
    (state) => state.app
  )
  const {
    initCards,
    overGame,
    resetTempCards,
    spliceFlipedCards,
  } = useActions()

  useEffect(() => initCards(), [])

  useEffect(() => {
    if (tempCards.length === 1) {
      const timeout = setTimeout(() => spliceFlipedCards(), 5000)

      return () => clearTimeout(timeout)
    }

    if (tempCards.length === 2) {
      const firstChoose = tempCards[0]
      const secondChoose = tempCards[1]

      if (displayedCards[firstChoose].id !== displayedCards[secondChoose].id) {
        const timeout = setTimeout(() => spliceFlipedCards(), 500)

        return () => clearTimeout(timeout)
      } else {
        if (flipedCards.length === displayedCards.length) {
          overGame('You won!')
        }

        resetTempCards()
      }
    }
  }, [flipedCards])

  return (
    <div className='field'>
      <Timer />
      <div className='field__block'>
        {displayedCards.map((card, index) => (
          <Card key={index} card={{ index, ...card }} />
        ))}
      </div>
    </div>
  )
}

export default Field
