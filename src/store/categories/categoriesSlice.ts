import {createSlice} from "@reduxjs/toolkit"

interface ICategoriesStore {
  records: {id: string , title: string , prefix: string , img: string }[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string | null
}

const initialState : ICategoriesStore = {
  records: [],
  loading: 'idle',
  error: null
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {}
})


export default categoriesSlice.reducer;