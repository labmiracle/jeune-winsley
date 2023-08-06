import React from 'react'
import { useNavigate } from 'react-router-dom'
const LoggedInUser = () => {
    let navigate =useNavigate()
    const handlerLogout = ()=>{
        localStorage.removeItem("token")
        navigate("/usuario-anonimo")
    }

  return (
    
    <div>
        <p>
            Esta página solo puedo verla por que estoy logueado
        </p>
        <button onClick={handlerLogout}>cerrar sesión</button>
    </div>
  )
}

export default LoggedInUser