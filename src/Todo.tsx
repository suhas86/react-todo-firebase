import React from "react";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Todo.scss";
function Todo(props: any) {
  const { todo } = props;
  return (
    <div className="Todo">
      <Switch
        edge="end"
        inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
      />
      <p>{todo.task}</p>
      <IconButton aria-label="delete">
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Todo;
