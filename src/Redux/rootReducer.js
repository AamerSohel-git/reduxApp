const initialState = {
  product: [],
  categories: [],
  menProd: [],
  womenProd: [],
  jewelProd: [],
  electronicProd: []
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCT":
      return { ...state, product: action.payload };
    case "ALL_CATEGORIES":
      return { ...state, categories: action.payload };
    case "MEN_PROD":
      return { ...state, menProd: action.payload };
    case "WOMEN_PROD":
      return { ...state, womenProd: action.payload };
    case "JEWEL_PROD":
      return { ...state, jewelProd: action.payload };
    case "ELECTRONIC_PROD":
      return { ...state, electronicProd: action.payload };
  }
  return state;
};
