import React from "react";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Todo.scss";
import {todosRef} from "./firebase";
function Todo(props: any) {
  const { todo } = props;
  const updateTodo = () => {
    todosRef.child(todo.id).set({...todo,done:!todo.done})
  }
  return (
    <div className="Todo">
      <Switch
        edge="end" checked={todo.done} onChange={updateTodo}
        inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
      />
      <p>{todo.task}</p>
      <IconButton aria-label="delete" onClick={e => todosRef.child(todo.id).remove()}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Todo;
