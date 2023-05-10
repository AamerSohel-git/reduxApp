const initial1 = { todos: [] };
export const todoReducer = (state = initial1, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: action.payload };
    case "DELETE_TODO":
      const filtered = state.todos.filter(
        (ele) =>
          ele.todo_desc.toUpperCase() != action.payload.todo_desc.toUpperCase()
      );
      return { ...state, todos: filtered };
    case "COMPLETE_TODO":
      const mapped = state.todos.map((ele) => 
        ele.todo_desc.toUpperCase() === action.payload.todo_desc.toUpperCase()
          ? {
              ...ele,
              todo_desc: action.payload.todo_desc,
              is_complete: true,
            }
          : ele
      );
      return { ...state, todos: mapped };
  }
  return state;
};
