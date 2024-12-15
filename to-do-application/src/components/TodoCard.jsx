import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo } = props;
  return (
    <li>
      {children}
      <i className="todo-edit fa-solid fa-pen-to-square edit-icon"></i>
      <i class="todo-trash fa-solid fa-trash-can"></i>
    </li>
  );
}
