import { PRODUCT_FAV_ERROR, PRODUCT_FAV_LOADING, PRODUCT_FAV_SUCCESS } from "./type";

const initialState = {
  favPoducts: [],
};

export const getFavPoducts = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case PRODUCT_FAV_LOADING:
      return { ...state, loading: true };
    case PRODUCT_FAV_SUCCESS:
      return { ...state, loading: false, favPoducts: payload };
    case PRODUCT_FAV_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
