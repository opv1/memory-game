import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from 'hooks/useActions'
import { getTime } from 'utils/getTime'
import 'components/Timer/Timer.scss'

const Timer = () => {
  const { beginGame, endGame, timer } = useSelector((state) => state.app)
  const { startGame, overGame, finalCountdown } = useActions()

  const time = getTime(timer)

  useEffect(() => {
    if (!beginGame || endGame) return

    const interval = setInterval(() => {
      if (timer > 0) {
        finalCountdown(timer - 1)
      } else {
        overGame('You lose!')
      }

      return clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [beginGame, endGame, timer])

  return (
    <div className='timer'>
      <span className='timer__time'>{`${time.min}:${time.sec}`}</span>
      <button
        className='timer__button'
        onClick={startGame}
        disabled={beginGame}
      >
        {beginGame ? 'Hurry up!' : 'Start'}
      </button>
    </div>
  )
}

export default Timer
