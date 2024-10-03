import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import { MyContext } from './Manager'

const Parent = () => {
   const [change, setChange] = useState('')
   
   return (
      <div>
         <MyContext.Provider value={{change,setChange}}>
            <ChildOne />
            <ChildTwo />
         </MyContext.Provider>
      </div>
   )
}

export default Parent