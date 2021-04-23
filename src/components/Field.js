import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from 'hooks/useActions'
import Card from 'components/Card'
import 'components/Field.scss'

const Field = () => {
  const { displayedCards, flipedCards, tempCards } = useSelector(
    (state) => state.app
  )
  const {
    initCards,
    spliceFlipedCards,
    resetTempCards,
    overGame,
  } = useActions()

  useEffect(() => {
    initCards()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (tempCards.length === 1) {
      const timeout = setTimeout(() => spliceFlipedCards(), 5000)
      return () => clearTimeout(timeout)
    }

    if (tempCards.length >= 2) {
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
    // eslint-disable-next-line
  }, [flipedCards])

  return (
    <div className='field'>
      {displayedCards.map((card, index) => (
        <Card key={index} card={{ index, ...card }} />
      ))}
    </div>
  )
}

export default Field
