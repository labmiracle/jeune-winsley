import { useState } from "react"


const Counter = ()=>{
    const [counter, setCounter]=useState(0)

    let increase=()=>{    

        setCounter(counter +1,
       )
        }

    let decrease=()=>{   
        if( counter <= 0){
            alert("Los valores negativos no estan permitidos en este universo !!!")
            return            

        } setCounter( counter -1)
    
    }
    return (
        <div>
            <h2>
                {counter}
            </h2>
            <section>
                <button onClick={increase}>Suma 1</button>
                <button onClick={decrease}>Resta 1</button>
            </section>
        </div>
    )
}
export default Counter