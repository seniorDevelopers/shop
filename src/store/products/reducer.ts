import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./type";

const initialState = {
  allPoducts: [],
};

export const getProducts = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };
    case PRODUCT_SUCCESS:
      return { ...state, loading: false, allPoducts: payload };
    case PRODUCT_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
