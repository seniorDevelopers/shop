import { getUsers } from "./api";
import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./type";

export const actionGetUser = () => async (dispatch: any) => {
  await dispatch({ type: USER_LOADING });
  try {
    const { data } = await getUsers();
    await dispatch({ type: USER_SUCCESS, payload: data});
  } catch (error) {
    dispatch({ type: USER_ERROR, payload: error });
  }
};
