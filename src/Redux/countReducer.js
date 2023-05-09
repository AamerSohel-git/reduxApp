const initial = { count: 0 };
export const countReducer = (state = initial, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return { ...state, count: action.payload + 1 };
    case "DEC_COUNT":
      return { ...state, count: action.payload - 1 };
  }
  return state;
};
