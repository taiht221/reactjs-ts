import { RegisterFormInputs, RegisterReponse } from '../../models/common'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'
// props:payload and thunkApi for dispatch annother action
export const register = createAsyncThunk('user/register', async (payload: RegisterFormInputs) => {
  const data = await userApi.register(payload)
  localStorage.setItem('access_token', data.jwt)
  localStorage.setItem('user', JSON.stringify(data.user))
  return data.user
})
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    [register.pending.toString()]: (state: any, action: any) => {
      state.current = action.payload
      state.loading = true
    },
    [register.fulfilled.toString()]: (state: any, action: any) => {
      state.current = action.payload
      state.loading = false
    },
    [register.rejected.toString()]: (state: any, action: any) => {
      state.loading = false
    },
  },
})
const { reducer } = userSlice
export default reducer
