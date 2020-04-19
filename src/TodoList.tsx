import React from "react";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";
function TodoList() {
  const todoList: any = [
    { id: "123", task: "First task", done: true },
    { id: "123", task: "Second task", done: true },
    { id: "123", task: "Third task", done: true },
    { id: "123", task: "Fourth task", done: true },
    { id: "123", task: "Fifth task", done: true },
    { id: "123", task: "Sixth task", done: true },
  ];
  return (
    <>
      {todoList.map((todo: any, i: number) => (
        <>
          <Todo todo={todo} />
          {i<todoList.length -1 && <Divider />}
        </>
      ))}
    </>
  );
}
export default TodoList;
