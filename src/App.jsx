import { useState } from 'react'
import './App.css'
import Container from './component/Container'
import HomePage from './component/HomePage'
import Login from './component/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Link} from 'react-router-dom'
import Message from './component/Message'
import { useSelector } from 'react-redux'
import SpaceList from './component/SpaceList'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function App() {

  const texte = useSelector((state) => state.message.texte)
  const typeMessage = useSelector((state) => state.message.typeMessage)
  const viewMessage = useSelector((state) => state.message.viewMessage)
  
  const navigate = useNavigate()

  const logout = () => {
    return navigate('/login')
  }
  return (
    <div className="gradient-background container-app">
        <AppBar position="static" sx={{backgroundColor: '#af4ac1c7'}}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Accueil</Link>
            </Typography>
            <Typography variant="h6" style={{ flexGrow: 10}}>
              <Link to="/spaces" style={{ textDecoration: 'none', color: 'inherit' }}>Espaces</Link>
            </Typography>
            <Button color="inherit" onClick={logout}>Se déconnecter</Button>
          </Toolbar>
        </AppBar>
        {viewMessage && <Message texte={texte} typeMessage={typeMessage} />}
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/tasklist/:spaceId'} element={<Container />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/spaces'} element={<SpaceList />} />
        </Routes>
    </div>
  )
}

export default App
