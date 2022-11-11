import React, { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  const [todolist, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const tempTodoList = [...todolist];
    tempTodoList.push(todo);
    setTodoList(tempTodoList);
  };

  const deleteTodo = (index) => {
    const tempTodoList = [...todolist];
    tempTodoList.splice(index, 1);
    setTodoList(tempTodoList);
  };

  return (
    <div>
      <h1>부모</h1>

      <hr />
      <Child1 setData={addTodo} data={todolist} />
      <Child2 data={todolist} deleteData={deleteTodo} />
    </div>
  );
}
export default App;
