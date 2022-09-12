import { useSelector } from 'react-redux'
import Timer from 'components/Timer/Timer'
import Statistics from 'components/Statistics/Statistics'
import Field from 'components/Field/Field'
import Backdrop from 'components/Backdrop/Backdrop'
import 'App.scss'

const App = () => {
  const { endGame } = useSelector((state) => state.app)

  return (
    <div className='app'>
      <Timer />
      <Statistics />
      <Field />
      {endGame && <Backdrop />}
    </div>
  )
}

export default App
