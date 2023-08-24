import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './component/Container'
import HomePage from './component/HomePage'
import Login from './component/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/tasklist'} element={<Container />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
    </>

  )
}

export default App
