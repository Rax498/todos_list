import React from "react";
import { TodoItem } from "./TodoItems";

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container todolist">
      <h3 className="text-center ">Todos List</h3>
      {todos.length === 0
        ? "No Todo's to Display"
        : todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />;
          })}
    </div>
  );
};
