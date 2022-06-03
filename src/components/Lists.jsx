import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import ListItem from "./ListItem";

const Lists = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos)
  return (
    <ul>
      {todos.map((data) => (
        <ListItem data={data} />
      ))}
    </ul>
  );
};

export default Lists;
