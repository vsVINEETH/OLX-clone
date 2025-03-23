import React,{useState, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';

export default function Signup() {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({displayName:username})
      .then(() => {
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(() => {
          history.push('/login')
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            id="username"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login' style={{textDecoration:'none'}}>Login</Link>
      </div>
    </div>
  );
}
