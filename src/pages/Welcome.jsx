import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutThunk } from "../reducers/auth"

function Welcome() {
 const isUserAuthenticated = useSelector(state => state.auth.isUserAuthenticated)
 const dispatch = useDispatch()

 function logoutUser() {
  dispatch(logoutThunk())
 }
 
 return <div>
  <h1>Welcome</h1>
  {
   isUserAuthenticated ?
    <>
      <Link to={'/home'} >Go to next stage</Link>
      <button onClick={() => logoutUser()}>Logout</button>
    </> :
    <>
     <Link to={'/login'} >Login</Link>
     <br />
     <Link to={'/register'} >Register</Link>
    </>
  }
 </div>
}

export default Welcome