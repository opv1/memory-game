import React, { useState } from 'react'
import './Timer.scss'

const Timer = () => {
  const [timer, setTimer] = useState({ m: '5', s: '00' })

  const handlerClick = () => {
    setInterval(() => {
      console.log('da')
    }, 1000)
  }

  return (
    <div className='timer'>
      <span className='timer__time'>{`${timer.m}:${timer.s}`}</span>
      <button className='timer__button' onClick={handlerClick}>
        Start
      </button>
    </div>
  )
}

export default Timer
