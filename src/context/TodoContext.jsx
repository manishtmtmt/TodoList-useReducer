import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos,{id:uuidv4(), text:action.payload, completed:false}]
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((data)=>data.id === action.payload ? {...data, completed: !data.completed} : data)
      };
    case "DELETE_TODO":
        return{
          todos: state.todos.filter((data)=> data.id !== action.payload)
        };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };
  const toggleTodo = (todoId) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todoId,
    });
  };
  const deleteTodo = (todoId) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todoId,
    });
  };
  return (
    <TodoContext.Provider value={{ todos:state.todos, addTodo, toggleTodo, deleteTodo }}>{children}</TodoContext.Provider>
  );
};
