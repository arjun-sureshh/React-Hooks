import React, { useLayoutEffect } from 'react'
import { useState } from 'react'

const UseLayoutEffect = () => {
  
    const [name, setname] = useState('')
    const hai ="hai"
     useLayoutEffect(() => {
        setname(prompt("Enter your name"))
     
      
         
     
     }, [])
  return (
    <div>
      {hai} {name}
    </div>
  )
}

export default UseLayoutEffect