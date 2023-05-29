import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid'
const initialState = {
 chats: [{
  from: 'Aravinda B R',
  sentAt: new Date().toString(),
  status: 0,
  text: "Hey you're doing great, keep it up!",
  id: uuid()
 }],
 groups: []
}

const chatSlice = createSlice({
 name: 'chat',
 initialState,
 reducers: {
  sendChat(state, action){
   state.chats.push({
    ...action.payload
   })
  },
 }
})

export const {sendChat} = chatSlice.actions

export default chatSlice.reducer