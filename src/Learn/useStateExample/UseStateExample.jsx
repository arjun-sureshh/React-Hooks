import React, { useState } from 'react'

const UseStateExample = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [check, setCheck] = useState(false)


    const AddCount = () => {
        setCount((previous) => previous + 1  )
    }

    const handleChange = () => {
      
        setCheck((previous) => !previous  )
    }

    

  return (
    <div>
        <button type='button' onClick={AddCount} >Click to Add</button>
        {count}
        <input type='text' onChange={(e) => setName(e.target.value)} />
        {name}
        <button type='button' onClick={handleChange}> click to Change</button>
        {
        check && "hello"
        
        }
    </div>
  )
}

export default UseStateExample