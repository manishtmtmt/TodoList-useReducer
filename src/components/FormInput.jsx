import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const FormInput = () => {
  const [text, setText] = useState();
  const { addTodo } = useContext(TodoContext);
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <input
        type="text"
        name="todos"
        id="todos"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        placeholder="What needs to be done?"
      />
      <button>Create</button>
    </form>
  );
};

export default FormInput;
