import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const UserNotLoggedIn = () => {
    let navigate =useNavigate()
    const handlerLogin =()=>{
        
        localStorage.setItem("token","true")
        navigate("/usuario-identificado")        
    }
  return (
    <div>
        <p>
        Inicia sesión para ver contenido privado
        </p>
        <button onClick={handlerLogin}>Inicia sesión</button>
    </div>
  )
}

export default UserNotLoggedIn