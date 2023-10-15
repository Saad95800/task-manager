import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="container mt-3">
        <h1 className="text-center">Connexion</h1>
        <form onSubmit={(e)=>{
            e.preventDefault()
            if(email === 'contact@cloudcampus.fr' && password === '0000'){
                return navigate('/')
            }
            alert('Identifiants ou mot de passe incorrect')
        }}>
            <div className='mb-3 form-group'>
                <label>Login</label>
                <input type="text" className="form-control" value={email} onChange={(e)=>{ 
                    setEmail(e.target.value) 
                }} />
            </div>
            <div className="form-group">
                <label>Mot de passe</label>
                <input type="password" className="form-control"  value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>
            <input className='btn btn-primary ' type="submit" value="Connexion" />
        </form>

    </div>
  )
}
