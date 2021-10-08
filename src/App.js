import React from "react";

import "./App.css";
import FilterButton from "./container/FilterButton";
import Input from "./container/Input";
import TodoList from "./container/TodoList";

function App() {
  return (
    <div className="app">
      <h1> TODO LIST</h1>
      <FilterButton />
      {/* done */}
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
