import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/exports"
import { Navigate } from "react-router"
import { loginThunk } from "../../reducers/auth"

function Login() {
 const isUserAuthenticated = useSelector(state => state.auth.isUserAuthenticated)

 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')

 const dispatch = useDispatch()

 function loginSubmit(event) {
  event.preventDefault()
  dispatch(loginThunk({
   username,
   password
  }))
 }

 if(isUserAuthenticated) {
  return <Navigate to={"/"} />
 }

 return <form onSubmit={loginSubmit}>
  <h1>Login</h1>
  <label htmlFor="username">User name</label>
  <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
  <br />
  <label htmlFor="password">Password</label>
  <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  <br />
  <button type="submit">Submit</button>
 </form>
}

export default Login