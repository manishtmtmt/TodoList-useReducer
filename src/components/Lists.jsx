import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import ListItem from "./ListItem";

const Lists = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos)
  return (
    <div>
      {todos.map((data) => (
        <div key={data.id}>
          <ListItem data={data} />
        </div>
      ))}
    </div>
  );
};

export default Lists;
