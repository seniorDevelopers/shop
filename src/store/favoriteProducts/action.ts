import { getFavPoducts } from "./api";
import { PRODUCT_FAV_ERROR, PRODUCT_FAV_LOADING, PRODUCT_FAV_SUCCESS } from "./type";

export const actionFavPoducts = () => async (dispatch: any) => {
  await dispatch({ type: PRODUCT_FAV_LOADING });
  try {
    const local: any = localStorage.getItem("user");
    const userId = JSON.parse(local);
    const { data } = await getFavPoducts();
    await dispatch({ type: PRODUCT_FAV_SUCCESS, payload: local === null ? [] : data.filter((item: any) => item.user_id === userId.id) });
  } catch (error) {
    dispatch({ type: PRODUCT_FAV_ERROR, payload: error });
  }
};
