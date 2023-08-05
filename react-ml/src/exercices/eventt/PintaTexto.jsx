import React, { useState } from 'react'

const PintaTexto = () => {
  const [data, setData] =useState()

  const getData=(event)=>{

    setData(event.target.value)

  }


  return (
    <div>
      <label htmlFor="inputText"> Escribe el texto que quieres ver</label>
        <input type="text" id='inputText' onChange={getData}/>
        <p>{data}</p>
    </div>
  )
}

export default PintaTexto