import React, { useState } from 'react'

const FetchingData = () => {

  const [data, setaData]=useState([]);

  let randomNUmber=Math.floor( Math.random()* 201)
  let URL="https://jsonplaceholder.typicode.com/todos/"

const fakeData = () => {
  fetch(URL + randomNUmber)
      .then(res => res.json())
      .then(userdata => setaData(userdata))
      .catch(err => console.log("Error fetching data:", err));
}

console.log(data)

  return (
   <div style={{
    width:"300px",
    maxHeight:"300px",
    border: "10px solid red",}
   }>
    <h1>{data.id}</h1>
    <p>{data.userId}</p>
    <p>{data.title}</p>
    <p>{data.completed}</p>

    <button onClick={fakeData}>Click me to see a random user</button>
   </div>
  )
}

export default FetchingData