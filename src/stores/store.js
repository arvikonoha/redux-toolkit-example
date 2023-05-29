import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducers/auth';
import chatReducer from '../reducers/chat';

export const store = configureStore({
 reducer: {
  auth: authReducer,
  chat: chatReducer
 }
});