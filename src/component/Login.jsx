import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="container mt-3">
        <h1 className="text-center">Connexion</h1>
        <form className="m-auto w-50 mt-4" onSubmit={(e)=>{
            e.preventDefault()
            if(email === 'contact@cloudcampus.fr' && password === '0000'){
                sessionStorage.setItem('connected', 1)
                return navigate('/')
            }
            alert('Identifiants ou mot de passe incorrect')
        }}>
            <div className='mb-3 form-group w-75'>
                <label className="fs-4 my-2">Login</label>
                <input type="text" className="form-control w-75" value={email} onChange={(e)=>{ 
                    setEmail(e.target.value) 
                }} />
            </div>
            <div className="form-group w-75">
                <label className="fs-4 my-2">Mot de passe</label>
                <input type="password" className="form-control w-75"  value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>
            <div className=" mt-4"><input className="btn fs-3 text-white fw-bold" style={{backgroundColor: '#7dff6342'}} type="submit" value="Se connecter" /></div>
            
        </form>

    </div>
  )
}
