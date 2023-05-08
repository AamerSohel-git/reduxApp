const initialState = {
  product: [],
  categories: [],
  menProd: [],
  womenProd: [],
  jewelProd: [],
  electronicProd: [],
  cartProd: [],
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
    case "ADD_TO_CART":
      return { ...state, cartProd: action.payload };
    case "REMOVE_CART_ITEM":
      const filtered = state.cartProd.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cartProd: filtered };
  }
  return state;
};
