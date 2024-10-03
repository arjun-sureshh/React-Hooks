import React, { useState } from 'react'
import Navbar from './NavBar'
import Regform from './Regform'
import { MyContext } from './Manger';

const UseContext = () => {
  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <MyContext.Provider value={{darkmode,setdarkmode}}>
        <Navbar/>
        <Regform/>
        </MyContext.Provider>
    </div>
  )
}

export default UseContext