import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./type";

const initialState = {
  allUsers: [],
};

export const getUsers = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case USER_LOADING:
      return { ...state, loading: true };
    case USER_SUCCESS:
      return { ...state, loading: false, allUsers: payload };
    case USER_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
