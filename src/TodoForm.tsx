import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {todosRef} from "./firebase";
function TodoForm() {
  const [value, setValue] = useState("");
  const createTodo = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const item = {
      task: value,
      done: false,
    };
    todosRef.push(item);
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
