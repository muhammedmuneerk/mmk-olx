import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from "../../store/Context";
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const date = new Date()
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log('Image URL:', url)
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()
          })
          navigate('/')
        }).catch((error) => {
          console.error('Error uploading image:', error);
        });
        // You can now save the URL along with other form data to your database
      })
  };

  return (
    <Fragment>
      <Header />
      <div>
        <div className="centerDiv">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="Name"
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
              name="Category"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              name="Price"
            />
            <br />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <br />
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : ''}
            />
            <br />
            <button type="submit" className="uploadBtn">Upload and Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
