import { useState, useCallback } from "react";
import Todos from "./Tudo"

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default UseCallBackHook

