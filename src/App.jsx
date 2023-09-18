import { useState } from 'react'
import './App.css'
import Container from './component/Container'
import HomePage from './component/HomePage'
import Login from './component/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import Message from './component/Message'
import { useSelector } from 'react-redux'

function App() {

  const texte = useSelector((state) => state.message.texte)
  const typeMessage = useSelector((state) => state.message.typeMessage)
  const viewMessage = useSelector((state) => state.message.viewMessage)
  
  return (
    <div className="gradient-background container-app">
        {viewMessage && <Message texte={texte} typeMessage={typeMessage} />}
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/tasklist'} element={<Container />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
    </div>

  )
}

export default App
