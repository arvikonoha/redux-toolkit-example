import Welcome from './pages/Welcome';
import { useEffect } from 'react'
import {useDispatch} from 'react-redux/es/exports'
import { authorizeThunk } from './reducers/auth'

import './App.css';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(authorizeThunk())
 }, [])
 
  
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
