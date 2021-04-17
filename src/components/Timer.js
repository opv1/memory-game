import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useActions'
import { setTime } from '../utils/setTime'
import './Timer.scss'

const Timer = () => {
  const { beginGame, endGame, timer } = useSelector((state) => state.app)
  const { startGame, overGame, finalCountdown } = useActions()

  const time = setTime(timer)

  useEffect(() => {
    if (!beginGame || endGame) return

    const interval = setInterval(() => {
      if (timer > 0) {
        finalCountdown(timer - 1)
      } else {
        overGame('You lose!')
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [beginGame, endGame, timer])

  return (
    <div className='timer'>
      <span className='timer__time'>{`${time.min}:${time.sec}`}</span>
      <button className='timer__button' onClick={startGame}>
        {beginGame ? 'Go!' : 'Start'}
      </button>
    </div>
  )
}

export default Timer
