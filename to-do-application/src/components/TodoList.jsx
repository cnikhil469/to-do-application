import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList() {
  let todos = [
    "to work on reactjs",
    "to work on job applications",
    "to work on assignments",
    "to study for finals",
  ];
  return (
    <div>
      <ul className="main">
        {todos.map((todo, todoIndex) => {
          return <TodoCard key={todoIndex} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
