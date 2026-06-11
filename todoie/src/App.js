
import React from "react"
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

import './style.css'

const App = () => {
  return (
    <div className="todo-container">
      <Header title="Todoio App"/>
      <TodoItem text="Eat" completed={false}/>
      <TodoItem text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Repeat"/>
      <Button/>
    </div>
  )
};

export default App;