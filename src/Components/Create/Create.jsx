import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext} from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'
const Create = () => {
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext)
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const history = useHistory()
const date = new Date()
  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image)
    .then(({ref}) => {
      ref.getDownloadURL().then((url) => {
         firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt: date.toDateString()
         })
      })
      history.push('/')
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="input" 
            type="number"
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
            id="fname"
            name="Price" />
            <br />
       
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : 0}></img>
        
            <br />
            <input onChange={(e) =>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
