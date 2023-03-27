import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '@pages/mainPage'
import { AdminPage} from '@pages/adminPage'
import './App.css'
import { useAppSelector } from '@app/hooks'
import { RootState } from '@app/store'
import { SingIn } from '@pages/SingIn'

function App() {

  const theme = useAppSelector((state: RootState) => state.theme)

  return (
    <div className={`theme--${theme.theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/sing-in' element={<SingIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
