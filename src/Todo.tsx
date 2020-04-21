import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Todo.scss";
import { todosRef } from "./firebase";
import { TodoContext } from "./contexts/TodoContext";
function Todo(props: any) {
  const { todo } = props;
  const { dispatch } = useContext(TodoContext);
  const updateTodo = () => {
    todosRef
      .child(todo.id)
      .set({ ...todo, done: !todo.done })
      .then(() => {
        dispatch({ type: "TOGGLE", id: todo.id });
      });
  };
  const removeTodo = () => {
    todosRef
      .child(todo.id)
      .remove()
      .then(() => {
        dispatch({ type: "REMOVE", id: todo.id });
      });
  };
  return (
    <div className="Todo">
      <Switch
        edge="end"
        checked={todo.done}
        onChange={updateTodo}
        inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
      />
      <p>{todo.task}</p>
      <IconButton aria-label="delete" onClick={removeTodo}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Todo;
