import { memo } from "react";

const Tudos = ({addtodo, tudo}) => {

    console.log("Child render")
  
    return (
      <div>
          {tudo}
          <button onClick={addtodo}>ADD Tudos</button>
      </div>
    )
  }
    export default memo(Tudos);
  