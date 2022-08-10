export const actionChangeLanguge = (data:boolean) => (dispatch:any) => {
  dispatch({
    type: "LANGUAGE",
    payload: data,
  });
};
