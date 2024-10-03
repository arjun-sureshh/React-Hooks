import React, { forwardRef, useImperativeHandle, useRef } from 'react'


// chiled components


const Childcomponent = forwardRef((props,parref) => {
    
    const Mynameref = useRef();

    useImperativeHandle(parref, () => ({
        focus:() => {
            Mynameref.current.focus();
        },
        value: () =>{
           return Mynameref.current.value;
        }
      }))

  return (
    <div> 
        <div style={{ border:"2px solid black", width:"100px", height:"200px" }}>
            <h2>Enter your name</h2>
            <input type="text" ref={Mynameref}/>
        </div>
    </div>
  )
});

// Parrent component

const UseImperativeHandle = () => {
 
    const parref = useRef();
    const changecolour = () => {
    parref.current.focus();
    const value = parref.current.value();
    console.log(value)
 }

  return (
    <div>
       <div>
        <Childcomponent ref={parref}/>
       <button onClick={changecolour}>Change colour</button> 
        </div> 
    </div>
  )
}

export default UseImperativeHandle



