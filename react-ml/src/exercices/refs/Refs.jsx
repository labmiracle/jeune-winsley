import { useRef } from "react";

 
 const Refs = ()=>{
    const nameRef=useRef("")
    const lastNameRef= useRef("")
    
    const handleSubit =(e)=>{
        e.preventDefault();
        let nameValue=nameRef.current.value;
        let lastName= lastNameRef.current.value;

        console.log("Name:", nameValue);
        console.log("Last Name:", lastName);
        nameRef.current.value ="";
        lastNameRef.current.value=""



    }
    return (
        <div>
            <form onSubmit={handleSubit}>
                <label htmlFor="" >
                    Nombre
                    <input type="text" name="name" ref={nameRef} required/>
                </label>
                
                <label htmlFor="">
                    Apellido
                    <input type="text" name="lastName" ref={lastNameRef} required/>
                </label>
                <button >Enviar</button>
            </form>
        </div>
    )
 }

  export default Refs;