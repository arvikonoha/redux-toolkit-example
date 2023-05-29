
import {useSelector} from 'react-redux/es/exports'
import { Navigate } from 'react-router'
import Chat from '../../components/chat/Chat'

function Home() {
 
 const chats = useSelector(state => state.chat.chats)
 const isUserAuthenticated = useSelector(state => state.auth.isUserAuthenticated)

 if(!isUserAuthenticated)
  return <Navigate to={'/'} />
 return <div>
  <h1>Home</h1>
  {chats.map(chat => <li key={chat.id}>{chat.text}</li>)}
  <Chat />
 </div>
}

export default Home