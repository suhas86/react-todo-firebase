import React, { createContext, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";
export const TodoContext = createContext<{ todo: any; dispatch: any }>({
  todo: [],
  dispatch: null,
});

export function TodoProvider(props: any) {
  const initialState: any = [];
  const [todo, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
