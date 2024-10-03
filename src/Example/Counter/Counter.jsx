import React, { useState } from 'react'
import Styles from "./Counter.module.css"
const Counter = () => {
    const [count, setCount] = useState(0)
 
    const  AddCount = () =>{
       
        setCount((previous) => previous+1 )
        
    }
    const  DisCount = () =>{
        setCount((previous) => previous-1 )
    }
    return (
        <div className={Styles.body}>
            <div className={Styles.circle}>
                <button type='button' className={Styles.btn} onClick={AddCount}>+</button>
                <button type='button' className={Styles.btn2} onClick={DisCount}>-</button>
                <div className={Styles.count}>{count}</div>
            </div>
        </div>
    )
}

export default Counter