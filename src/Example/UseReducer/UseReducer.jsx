import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const initialState = {
        count:0,
    }
  const reducer = (state, action) =>{
     switch(action.type){
        case 'INCREMENT':
            return{count: state.count+1}
        case 'DECREMENT':
            const dec = {count: state.count-1}
            return dec
        case 'RESET':
            return{count: 0}
        default:
            return state;
     }
  }

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
     <div>
        <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
    </div>
  )
}

export default UseReducerHook