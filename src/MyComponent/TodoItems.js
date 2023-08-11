import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="todoItem">
        <div>
          <h4>
            {todo.sno}. {todo.title.toLocaleUpperCase()}
          </h4>
          <p>{todo.desc}</p>
        </div>
        <button
          className="btn btn-sm btn-outline-danger m-4 "
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
