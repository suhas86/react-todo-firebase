import React, { useContext, useEffect } from "react";
import Todo from "./Todo";
import Divider from "@material-ui/core/Divider";
import { TodoContext } from "./contexts/TodoContext";
import { todosRef } from "./firebase";
function TodoList() {
  const { todo, dispatch } = useContext(TodoContext);
  useEffect(() => {
    todosRef.once("value", (snapshot: any) => {
      let items = snapshot.val();
      let todos = [];
      for (let item in items) {
        todos.push({
          id: item,
          task: items[item].task,
          done: items[item].done,
        });
      }
      dispatch({ type: "LIST", todos: todos });
    });
  }, []);
  return (
    <>
      {todo.map((todo: any, i: number) => (
        <React.Fragment key={todo.id}>
          <Todo todo={todo} />
          {i < todo.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
}
export default TodoList;
