import { LoginFormInputs, RegisterFormInputs, RegisterReponse } from '../../models/common'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'
import { StorageKeys } from '../../constant'

export interface UserState {
  loading: boolean
  current: any
  setting: any
}

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
  initialState: <UserState>{
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
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.current = action.payload
      state.loading = true
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload
      state.loading = false
    })
    builder.addCase(register.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload
      state.loading = false
    })
    // [register.fulfilled.toString()]: (state, action: PayloadAction) => {
    //   state.current = action.payload
    //   state.loading = false
    // },
    // [register.rejected.toString()]: (state, action: PayloadAction) => {
    //   state.loading = false
    // },
    // [login.fulfilled.toString()]: (state, action: PayloadAction) => {
    //   state.current = action.payload
    //   state.loading = false
    // },
  },
})
const { actions, reducer } = userSlice
export default reducer
export const { logout } = actions
