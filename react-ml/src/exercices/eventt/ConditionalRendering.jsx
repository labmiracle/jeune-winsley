import React from 'react'
import LoggedInUser from './LoggedInUser'
import UserNotLoggedIn from './UserNotLoggedIn'

const ConditionalRendering = () => {
  if (localStorage.getItem("token")==="true"){
    return(
      <>
       < LoggedInUser/>
      </>
    )
  }
  return (
    <>
        
    </>
  )
}

export default ConditionalRendering