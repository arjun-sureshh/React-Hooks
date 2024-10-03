import React, { useEffect, useRef } from 'react'

const UseRefExample = () => {
  const exampleRef = useRef()
  useEffect(() => {
    console.log(exampleRef);
    exampleRef.current
    
  },[])
  return (
    <div>
      <input type="text" name="" id="Car" ref={exampleRef} />
    </div>
  )
}

export default UseRefExample