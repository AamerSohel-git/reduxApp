const initial = { token: "" };
export const tokenReducer = (state = initial, action) => {
  switch (action.type) {
    case "ACCESS_TOKEN":
      return { ...state, token: action.payload };
    case "REMOVE_TOKEN":
      return { ...state, token: action.payload };
  }
  return state;
};
