import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useActions'
import './Backdrop.scss'

const Backdrop = () => {
  const { message } = useSelector((state) => state.app)
  const { resetGame } = useActions()

  return (
    <div className='backdrop'>
      <div className='backdrop__block'>
        <h1 className='backdrop__title'>{message}</h1>
        <button className='backdrop__button' onClick={resetGame}>
          Try again!
        </button>
      </div>
    </div>
  )
}

export default Backdrop
