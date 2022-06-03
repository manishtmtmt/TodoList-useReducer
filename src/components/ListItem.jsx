import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ListItem = ({ data }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);
  return (
    <li key={data.id}>
      <input className="checkbox" type="checkbox" onClick={() => toggleTodo(data.id)} />
      <p className={data.completed ? "completed" : ""}>
        {data.text}
      </p>
      <button id="delete" onClick={() => deleteTodo(data.id)}>Delete</button>
    </li>
  );
};

export default ListItem;
