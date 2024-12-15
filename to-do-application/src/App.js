import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.scss";
import { useState } from "react";
function App() {
  const [todosList, setTodosList] = useState([
    "to work on reactjs",
    "to work on job applications",
    "to work on assignments",
    "to study for finals",
  ]);
  const handleTodos = (todoVal) => {
    if (todoVal != "") setTodosList([...todosList, todoVal]);
  };
  const handleDeleteTodo = (index) => {
    const newTodoList = todosList.filter((todos, todoIndex) => {
      return todoIndex !== index;
    });
    setTodosList(newTodoList);
  };
  return (
    <div className="App">
      <TodoInput handleTodos={handleTodos} />
      <TodoList todos={todosList} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
