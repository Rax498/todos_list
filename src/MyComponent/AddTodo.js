import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("field cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc(" ");
    }
  };

  return (
    <div className="container my-3">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name your task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Task Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </form>
      <button
        type="submit"
        onClick={submit}
        className="btn btn-medium btn-success"
      >
        Add
      </button>
    </div>
  );
};
