import { useSelector } from 'react-redux'
import Field from './components/Field'
import Backdrop from './components/Backdrop'
import './App.scss'

const App = () => {
  const { endGame } = useSelector((state) => state.app)

  return (
    <div className='app'>
      <Field />
      {endGame && <Backdrop />}
    </div>
  )
}

export default App
