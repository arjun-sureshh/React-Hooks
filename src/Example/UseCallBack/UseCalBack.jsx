import React, { memo, useCallback, useState } from 'react'
import Tudos from './Tudos'
const UseCalBack = () => {

const [count, setcount] = useState(0);
const [todos, settodos] = useState([]);

const increment = () => {
    setcount((c) => c+1);
}

const AddTudo = useCallback(() => {
    settodos((t) => [...t, "Tudos"])
},[todos]);
  return (
    <div>
        <Tudos addtodo={AddTudo}  tudo={todos}/>
        count:{count}
        <button onClick={increment}>+</button>
    </div>
  )
}

export default UseCalBack



 

