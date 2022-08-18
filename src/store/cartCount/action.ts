export const actionCartCount = (data:number) => (dispatch:any) => {
    dispatch({
      type: "COUNT",
      payload: data,
    });
  };
  