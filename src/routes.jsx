import { createBrowserRouter } from "react-router-dom";
import UseStateExample from "./Learn/useStateExample/UseStateExample";
import Learn from "./Learn/App";
import Example from "./Example/App";
import Counter from "./Example/Counter/Counter";
import UseEffectExample from "./Learn/useEffectExample/UseEffectExample";
import UseEffect from "./Example/UseEffect/UseEffect";
import UseRefExample from "./Learn/UseRefExample/UseRefExample";
import UseRefWork from "./Example/UseRef/UseRef";
import Parent from "./Learn/UseContext/Parent";
import UseContext from "./Example/UseContext/Parent";
import UseLayoutEffectHook from "./Learn/UseLayoutEffect/UseLayoutEffect";
import ParentComponent from "./Learn/useImperativeHandle/useImperativeHandle";
import UseLayoutEffect from "./Example/UseLayoutEffect/UseLayoutEffect";
import UseImperativeHandle from "./Example/UseImperativeHandle/UseImperativeHandle";
import UseCallBackHook from "./Learn/UseCallback/UseCallBackHook";
import UseCalBack from "./Example/UseCallBack/UseCalBack";
import App from "./TICTACTEO/LessCode/TicTacToe";
import TicTacToe from "./TICTACTEO/funBased/TictacMyversion";
import UseReducer from "./Learn/UseReducer/UseReducer";
import UseReducerHook from "./Example/UseReducer/UseReducer";
import Hello from "./TICTACTEO/LessCode/TicTacToe";

export const router = createBrowserRouter([
  {
    path: "/Learn",
    element: <Learn />,
    children: [
      {
        path: "/Learn/UseStateExample",
        element: <UseStateExample />,
      },
      {
        path: "/Learn/UseEffectExample",
        element: <UseEffectExample />,
      },
      {
        path: "/Learn/UseRefExample",
        element: <UseRefExample />,
      },
      {
        path: "/Learn/UseContext",
        element: <Parent />
      },
      {
        path: "/Learn/UseLayoutEffect",
        element: <UseLayoutEffectHook />
      },
      {
        path: "/Learn/UseImperativeHandle",
        element: <ParentComponent/>
      },
      {
        path: "/Learn/UseCallBack",
        element: <UseCallBackHook/>
      },
      {
        path: "/Learn/UseReducer",
        element: <UseReducer/>
      },
      {
        path: "/Learn/poper",
        element: <Hello/>
      },
    ]
  },
  {
    path: "/Example",
    element: <Example />,
    children: [
      {
        path: "/Example/Count",
        element: <Counter />,
      },
      {
        path: "/Example/UseEffect",
        element: <UseEffect />,
      },
      {
        path: "/Example/UseRef",
        element: <UseRefWork />,
      },
      {
        path: "/Example/UseContext",
        element: <UseContext />
      },
      {
        path: "/Example/UseLayoutEffect",
        element: <UseLayoutEffect/>
      },
      {
        path: "/Example/UseImperativeHandle",
        element: <UseImperativeHandle/>
      },
      {
        path: "/Example/UseCallBack",
        element: <UseCalBack/>
      },
      {
        path: "/Example/UseReducer",
        element: <UseReducerHook/>
      },
    ]
  },
  

]);