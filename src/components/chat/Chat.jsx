import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux/es/exports'
import { sendChat } from "../../reducers/chat"
import {v4 as uuid} from 'uuid'

function Chat() {
 const [chatText, setChatText] = useState('')
 const username = useSelector(state => state.auth.username)
 const dispatch = useDispatch()
 
 function onChatSent(event) {
  event.preventDefault()
  dispatch(sendChat({text: chatText, from: username, sentAt: (new Date()).toString(), id: uuid(), status: 0}))
  setChatText('')
 }
 
 return <form onSubmit={onChatSent}>
  <input type="text" name="chat" id="chat" value={chatText} onChange={e => setChatText(e.target.value)} />
 </form>
}

export default Chat