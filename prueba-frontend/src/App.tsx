import { useState } from 'react' 
import { RootState } from '@app/store'
import { useAppSelector } from '@app/hooks'
//import { selectCount } from 'features/counter/slice'
import { useAppDispatch } from '@app/hooks'
import { incrementState } from '@features/counter/slice'
import { MainPage } from '@assets/styles/scss/pages/mainPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const counter = useAppSelector((state:RootState)=> state.counter.value)
  const dispatch = useAppDispatch()




  return (
    <div className="theme--default">
      <h1>Hola Monda</h1>
      <section>
        <MainPage/>
      </section>
    </div>
  )
}

export default App
