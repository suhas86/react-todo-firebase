import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { todosRef } from "./firebase";
import { TodoContext } from "./contexts/TodoContext";
function TodoForm() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(TodoContext);
  const createTodo = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const item = {
      task: value,
      done: false,
    };
   todosRef.push(item).then((snap) => {
      const key = snap.key 
      dispatch({ type: "ADD", todo: {...item,id:key} });
   });
    setValue("");
  };
  return (
    <form onSubmit={createTodo}>
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Add Todo"
        variant="outlined"
      />
    </form>
  );
}
export default TodoForm;
