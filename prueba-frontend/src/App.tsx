import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '@pages/mainPage'
import './App.css'
import { useAppSelector } from '@app/hooks'
import { RootState } from '@app/store'

function App() {

  const theme = useAppSelector((state: RootState) => state.theme)

  return (
    <div className={`theme--${theme.theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
