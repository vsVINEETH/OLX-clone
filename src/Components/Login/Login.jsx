import React, {useState, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom'
import { FirebaseContext } from '../../store/FirebaseContext';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory()
  const handleLogin = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      history.push('/')
    }).catch((error) => {
      alert(error)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
        <Link to='/signup' style={{textDecoration:'none'}}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
