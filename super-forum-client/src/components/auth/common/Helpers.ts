import { Dispatch } from "react";

export const allowSubmit = (
  dispatch: Dispatch<any>,
  msg: string, 
  setDisabled: boolean
) => {
  dispatch({ payload: setDisabled, type: "isSubmitDisabled" });
  dispatch({ payload: msg, type: "resultMsg" });
};