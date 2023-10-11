import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateUserAPI, ForgetPassword, SignInAPI } from "src/Apis/Services";
import { AlertEnum, SESSION, TOKEN } from "src/@core/utils/Enums";
import { setLoading, setMessage } from "./LayoutSice";

import { AuthType } from "src/@core/utils/TYPES";

const initialState ={
  forgetPass :{
    data:[]
  }
}



export const SignIn: any = createAsyncThunk(
  "SignIn",
  async (values: AuthType, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const result = await SignInAPI(values);
      if (result) {
        dispatch(setLoading(false));
        return result;
      } else {
        throw result;
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(
        setMessage({
          text: error?.message,
          type: AlertEnum.Error,
        })
      );
      return error;
    }
  }
);

export const forgetPassword: any = createAsyncThunk('forgetPassword', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await ForgetPassword(values)
    dispatch(setLoading(false))
    console.log('result', result)
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})





export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      state.forgetPass = action.payload
    })
  }
  

});

// export const {  } = AuthSlice.actions;

export default AuthSlice.reducer;



