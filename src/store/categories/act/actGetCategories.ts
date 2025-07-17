import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "src/utils";

type TCategory = { id: number, title: string, prefix: string, img: string }[];

const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<TCategory>("/categories");
    return response.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetCategories;