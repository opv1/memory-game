import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useActions'
import './Card.scss'

const Card = ({ card }) => {
  const { beginGame, flipedCards } = useSelector((state) => state.app)
  const { flipCard } = useActions()
  const [fliped, setFliped] = useState(!beginGame)

  const handlerClick = (cardIdx) => {
    if (fliped) return

    flipCard(cardIdx)
  }

  useEffect(() => {
    if (!beginGame) return

    if (flipedCards.includes(card.index)) {
      setFliped(true)
    } else {
      setFliped(false)
    }
  }, [beginGame, flipedCards])

  return (
    <div
      className={fliped ? 'card card_flip' : 'card'}
      onClick={() => handlerClick(card.index)}
    >
      <div className='card__front'>{card.id}</div>
      <div className='card__back'>
        <i className={card.className}></i>
      </div>
    </div>
  )
}

export default Card
