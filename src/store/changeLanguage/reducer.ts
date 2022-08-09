const initialState = {
  changeLanguage: true,
};

export const changeLanguge = (state = initialState, { type, payload }:any) => {
  switch (type) {
    case "LANGUAGE":
      return { ...state, changeLanguage: payload };
    default:
      return state;
  }
};
