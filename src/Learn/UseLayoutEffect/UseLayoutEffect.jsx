
import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutEffectHook = () => {
   const [stateName, setStateName] = useState('')
   const [check, setCheck] = useState(false)
   const [count, setCount] = useState(0)

   const buttonHandle = () => {
      setCheck((prevState) => !prevState)
   }

   useLayoutEffect(() => {
      setStateName('David')
      setCount((prevState) => prevState + 1)
   },[check])

   return (
      <div>
         <button onClick={buttonHandle}>Re-Render</button>
         <div>{stateName}</div>
         <div>Count:{count}</div>
      </div>
   )
}

export default UseLayoutEffectHook
