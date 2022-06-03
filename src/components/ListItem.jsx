import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ListItem = ({ data }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext)
  return (
    <div>
      <div style={{display: "flex", gap: "10px"}}>
        <input type="checkbox" onClick={()=>toggleTodo(data.id)} />
        <p style={{ textDecoration: data.completed ? "line-through" : "" }}>{data.text}</p>
        <button onClick={()=> deleteTodo(data.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
