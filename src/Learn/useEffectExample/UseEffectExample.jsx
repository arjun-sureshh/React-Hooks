  import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
const [Check, setCheck] = useState("")
  
  useEffect(() => {
   console.log('Hello');
   
  }, [Check])

  const handleChange  = (e) => {
    setCheck( e.target.value)
  }
  


  return (
    <div>
      <input type="text"  onChange={handleChange} />
      {Check}
    </div>
  )
}

export default UseEffectExample