const initialState = {
    cartCount: 0,
  };
  
  export const cartCount = (state = initialState, { type, payload }:any) => {
    switch (type) {
      case "COUNT":
        return { ...state, cartCount: payload };
      default:
        return state;
    }
  };
  