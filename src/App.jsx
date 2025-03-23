import React, {useContext, useEffect} from 'react';
import './App.css';
import Login from './Pages/Login.jsx'
import { AuthContext, FirebaseContext } from './store/FirebaseContext.jsx';
import {BrowserRouter as Router, Route }from 'react-router-dom'
/**
 * ?  =====Import Components=====
 */
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx';
import Create from './Pages/Create.jsx'
import ViewPost from './Pages/ViewPost.jsx';
import Post from './store/postContex.jsx';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
  <Post>
    <Router>
      <Route exact path='/'>
      <Home />
      </Route>

      <Route  path='/signup'>
      <Signup />
      </Route>

      <Route  path='/login'>
      <Login />
      </Route>

      <Route  path='/create'>
      <Create />
      </Route>

      <Route  path='/view'>
      <ViewPost />
      </Route>

      </Router>
   </Post>  
     </div>
  );
}

export default App;
