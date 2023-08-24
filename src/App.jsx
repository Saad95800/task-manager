import { useState } from 'react'
import './App.css'
import Container from './component/Container'
import HomePage from './component/HomePage'
import Login from './component/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="gradient-background container-app">
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/tasklist'} element={<Container />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
    </div>

  )
}

export default App
