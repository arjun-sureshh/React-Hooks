import React, { useEffect, useState } from 'react'
import Styles from './UseEffect.module.css'

const UseEffect = () => {
    const [Name,setName] = useState("")
   const hai="Hai";
    useEffect(() => {
        setName(prompt("Enter your name"))

    },[])
  return (
    <div className={Styles.body}>
      {hai} {Name}
    </div>
  )
}

export default UseEffect