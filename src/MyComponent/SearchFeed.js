import React from "react";
import { TodoItem } from "./TodoItems";
import { useParams } from "react-router-dom";

export const SearchFeed = ({ todos, onDelete }) => {
  const { searchterm } = useParams();

  const filteredTodos = todos.filter((item) => {
    const titleWords = item.title.split(" ");
    return titleWords.some(
      (word) => word.toLowerCase() === searchterm.toLowerCase()
    );
  });

  return (
    <div className="todolist">
      <h3 style={{ color: "green", paddingTop: "4px" }}>
        Your search results..
      </h3>
      {filteredTodos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />;
      })}
    </div>
  );
};
