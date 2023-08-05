import React from 'react'

const options=[
    {
          "province":"Santa Fe",
          "capital": "Santa fe",
        
    },
    {
        "province":"Entre Rios",
        "capital": "Parana",
        
    },
    {
        "province":"Buenos Aires",
        "capital": "Buenos Aires",
    }

]
const Select = () => {   
    
  return (
    <div>
        <h1
            style={{
                fontSize:"16px"
            }}
        >Select the location where you will work.</h1>
        <select name="" id="" style={{
            width:"300px"
        }}>
            {options.map((option)=>(

                <option value={option.capital}>
                    {option.province}
                </option>
            ))
           
            }
        </select>
    </div>
  )
}

export default Select