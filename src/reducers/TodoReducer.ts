const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LIST":
      return [...state, ...action.todos];
    case "ADD":
      return [...state, action.todo];
    case "REMOVE":
      return state.filter((todo: any) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo: any) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export default reducer;
