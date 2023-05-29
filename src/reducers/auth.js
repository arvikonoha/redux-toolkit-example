import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.withCredentials = true

const initialState= {
 isUserAuthenticated: false,
 username: ''
}

export const loginThunk = createAsyncThunk('auth/login', async ({username, password}) => {
 const response = await axios.post('http://localhost:8000/auth/login', {
  username, password
 })
 return response.data
})

export const registerThunk = createAsyncThunk('auth/register', async ({username, password}) => {
 const response = await axios.post('http://localhost:8000/auth/register', {
  username, password
 })
 return response.data
})

export const authorizeThunk = createAsyncThunk('auth/autorize', async () => {
 const response = await axios.get('http://localhost:8000/auth/getUserInfo')
 return response.data
})

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
 const response = await axios.get('http://localhost:8000/auth/logout')
 return response.data
})

const authSlice = createSlice(
 {
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   builder.addCase(loginThunk.fulfilled, (state, action) => {
    console.log("WE REACHED HERE")
     state.isUserAuthenticated = true
     state.username = action.payload.username
   })
   builder.addCase(loginThunk.rejected, (state) => {
     state.isUserAuthenticated = false
   })
   builder.addCase(registerThunk.fulfilled, (state, action) => {
     state.isUserAuthenticated = true
     state.username = action.payload.username
   })
   builder.addCase(registerThunk.rejected, (state) => {
     state.isUserAuthenticated = false
   })
   builder.addCase(authorizeThunk.fulfilled, (state, action) => {
     state.isUserAuthenticated = true
     state.username = action.payload.username
   })
   builder.addCase(authorizeThunk.rejected, (state) => {
     state.isUserAuthenticated = false
   })
   builder.addCase(logoutThunk.fulfilled, (state) => {
     state.isUserAuthenticated = false
     state.username = ''
   })
   builder.addCase(logoutThunk.rejected, (state) => {
     state.isUserAuthenticated = false
   })
 },
 }
)

export default authSlice.reducer