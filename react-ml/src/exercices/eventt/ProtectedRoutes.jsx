import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import LoggedInUser from './LoggedInUser'

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem('token') === 'true';

  if (!isAuthenticated){
    return  <Navigate to="/usuario-anonimo"/>   
  }   
  return (
    <>
       <Outlet/>
    </>
  )
}

export default ProtectedRoutes