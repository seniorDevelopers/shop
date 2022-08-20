export const actionBoolean = (data:boolean) => (dispatch:any) => {
    dispatch({
      type: "BOOLEAN",
      payload: data,
    });
  };
  