import { userState } from './../../models/common'
import { LoginFormInputs, RegisterFormInputs, RegisterReponse } from '../../models/common'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'
import { StorageKeys } from '../../constant'
// props:payload and thunkApi for dispatch annother action

export const register = createAsyncThunk('user/register', async (payload: RegisterFormInputs) => {
  const data = await userApi.register(payload)
  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})

export const login = createAsyncThunk('user/login', async (payload: LoginFormInputs) => {
  const data = await userApi.login(payload)
  localStorage.setItem(StorageKeys.TOKEN, data.jwt)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})
const userJson = localStorage.getItem(StorageKeys.USER)
const userSlice = createSlice({
  name: 'user',
  initialState: <userState>{
    loading: false,
    current: userJson !== null ? JSON.parse(userJson) : {},
    setting: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER)
      localStorage.removeItem(StorageKeys.TOKEN)
      state.current = {}
    },
  },
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
    [login.fulfilled.toString()]: (state: any, action: any) => {
      state.current = action.payload
      state.loading = false
    },
  },
})
const { actions, reducer } = userSlice
export default reducer
export const { logout } = actions
