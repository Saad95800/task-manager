import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <>
        <h1>HomePage</h1>   
        <Link to={"/login"} className="btn btn-danger" >Déconnexion</Link>     
        <Link to={"/tasklist"} className="btn btn-primary">Listes de tâches</Link>     
    </>

  )
}
