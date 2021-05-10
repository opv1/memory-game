import React from 'react'
import { useSelector } from 'react-redux'
import 'components/Statistics/Statistics.scss'

const Statistics = () => {
  const { counter } = useSelector((state) => state.app)

  return (
    <div className='statistics'>{`Victories:${counter.victories} Defeats:${counter.defeats}`}</div>
  )
}

export default Statistics
