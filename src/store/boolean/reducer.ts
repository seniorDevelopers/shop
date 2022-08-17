const initialState = {
    dataBoolean: true,
  };
  
  export const dataBoolean = (state = initialState, { type, payload }:any) => {
    switch (type) {
      case "BOOLEAN":
        return { ...state, dataBoolean: payload };
      default:
        return state;
    }
  };
  