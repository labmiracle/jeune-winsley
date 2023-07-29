import React from 'react'
import style from "./nav.module.css"

const Nav = () => {
  return (
    <nav className={style.nav}>
        <h1>React Miracle Lab</h1>
        <ul className={style.ul}>
            <li className={style.li}>Props</li>
            <li className={style.li}>State</li>
            <li className={style.li}>Events</li>
            <li className={style.li}>Rederizado Condicional</li>
            <li className={style.li}>Refs</li>
            <li className={style.li}>Context</li>
            <li className={style.li}>HOC</li>
            <li className={style.li}>Hooks</li>
            <li className={style.li}>Painting List</li>            
        </ul>
    </nav>
  )
}

export default Nav