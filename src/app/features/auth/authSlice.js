import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});



export default authSlice.reducer;