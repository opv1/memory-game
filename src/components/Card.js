import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Card.scss'
import { setFlipedCards, setTempCards } from '../store/reducers/appReducer'

const Card = ({ card }) => {
  const dispatch = useDispatch()
  const { flipedCards, tempCards } = useSelector((state) => state.app)
  const [fliped, setFliped] = useState(false)

  const handlerClick = (index) => {
    if (fliped) return
    dispatch(setTempCards([...tempCards, index]))
    dispatch(setFlipedCards([...flipedCards, index]))
  }

  useEffect(() => {
    if (flipedCards.includes(card.index)) {
      setFliped(true)
    } else {
      setFliped(false)
    }
  }, [flipedCards])

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
