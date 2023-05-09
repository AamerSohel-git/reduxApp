const initial1 = { todos: [] };
export const todoReducer = (state = initial1, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: action.payload };
  }
  return state;
};
