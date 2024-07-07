import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sign from './assets/Pages/Sign'
import HomePage from './assets/Pages/HomePage'
import Log from './assets/Pages/Log'
import Navigation from './assets/Components/Navigation/Navigation'
import Profile from './assets/Pages/Profile'


function App() {

  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/sign-up' element={<Sign />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Log />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
