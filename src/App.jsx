import { useReducer } from "react"

import Form from "./components/ToDoList/Form"
import ToDoList from "./components/ToDoList/ToDoList"
import './App.css'

const inicialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}
function App() {

  const [ TodoListState, dispatch ] = useReducer(todoReducer, inicialState)
  
  console.log(TodoListState)
  const addTask = () => {
    dispatch({
      type: "add",
      payload: {
        name: "Estudiar React",
        date: (new Date()).toLocaleString(),
      }
    })
  }
  return (
    <div className="App">
      <h1><em>Trabajando con React</em></h1>
      <button onClick={ addTask }>Agregar</button>
      <Form />
      <ToDoList />
    </div>
  )
}

export default App
