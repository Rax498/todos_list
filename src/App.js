import Headder from "./MyComponent/Headder";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AddTodo } from "./MyComponent/AddTodo";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import { SearchFeed } from "./MyComponent/SearchFeed";

function App() {
  // ________________-------crating localStorage arry/JSON for storing data
  let defTodo;
  if (localStorage.getItem("todos") == null) {
    defTodo = [];
  } else {
    defTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(defTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //----------------------------------- Deleting the todo
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // ----------------clearing the page --------
  const clearTodo = (result) => {
    const CLEAR = () => {
      localStorage.clear();
      window.location.reload();
    };
    result === true && CLEAR();
  };
  //------------------------------- adding to the list
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    // -------------------------// setting newTodo object inside todos arry
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div>
      <Headder clearTodo={clearTodo} />
      <AddTodo addTodo={addTodo} />
      <Routes>
        <Route path="/" element={<Todos todos={todos} onDelete={onDelete} />} />
        <Route
          path="/:searchterm"
          element={<SearchFeed todos={todos} onDelete={onDelete} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
