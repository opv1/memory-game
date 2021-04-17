import { useSelector } from 'react-redux'
import Timer from './components/Timer'
import Field from './components/Field'
import Backdrop from './components/Backdrop'
import './App.scss'

const App = () => {
  const { endGame, counter } = useSelector((state) => state.app)

  return (
    <div className='app'>
      <Timer />
      <div className='app__block'>{`Victories:${counter.victories} Defeats:${counter.defeats}`}</div>
      <Field />
      {endGame && <Backdrop />}
    </div>
  )
}

export default App
