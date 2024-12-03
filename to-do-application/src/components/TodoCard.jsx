import React from "react";

export default function TodoCard(todo) {
  todo = todo.todo;
  return (
    <li>
      {todo}
      <i className="fa-solid fa-pen-to-square edit-icon"></i>
    </li>
  );
}
