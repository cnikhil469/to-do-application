import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleTodos } = props;
  const [todoItem, setTodoItem] = useState("");
  return (
    <header>
      <input
        value={todoItem}
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
        type="text"
        placeholder="enter your todos.."
      ></input>
      <button
        type="submit"
        onClick={() => {
          handleTodos(todoItem);
          setTodoItem("");
        }}
      >
        Enter
      </button>
    </header>
  );
}
