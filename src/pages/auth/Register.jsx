import { useState } from "react"
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux/es/exports"
import { Navigate } from "react-router"
import { registerThunk } from "../../reducers/auth"

function Register() {
 const isUserAuthenticated = useSelector(state => state.auth.isUserAuthenticated)
 const dispatch = useDispatch()

 const [username, setUsername] = useState('')
 const [password, setPassword] = useState('')
 const [confirmPassword, setConfirmPassword] = useState('')

 function registerSubmit(event) {
  event.preventDefault()
  if(password === confirmPassword) {
   dispatch(registerThunk({
    username,
    password
   }))
  } else {
   alert("Password must be equal to confirm password.")
  }
 }

 if(isUserAuthenticated) {
  return <Navigate to={"/"} />
 }

 return <form onSubmit={registerSubmit}>
  <h1>Register</h1>
  <label htmlFor="username">User name</label>
  <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
  <br />
  <label htmlFor="password">Password</label>
  <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  <br />
  <label htmlFor="confirm-passwpord">Confirm Password</label>
  <input type="password" name="confirm-passwpord" id="confirm-passwpord" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
  <br />
  <button type="submit">Submit</button>
 </form>
}

export default Register