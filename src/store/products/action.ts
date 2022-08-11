import { getProducts } from "./api";
import { PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./type";

export const actionGetProducts = () => async (dispatch: any) => {
  await dispatch({ type: PRODUCT_LOADING });
  try {
    const { data } = await getProducts();
    await dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_ERROR, payload: error });
  }
};
