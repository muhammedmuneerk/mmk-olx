import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import   Signup  from "./Pages/Signup";
import Login from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';
import  Post  from "./store/PostContext";
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';
function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, )
  
  return (
    <div>
    <Post>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Router>
    </Post>
    </div>
  );
}

export default App;

////////////////          options that can add                /////////////////////
// categorys
// Search
//----------------------------------------
//////////////    state managment libraries      ////////////////
//Redux      -   for state managing
//Mobx       -   easy to use
//Redux_Saga

//NEXT.js    -   for server side rendering
//Gatsby

//Jest       -   for testing    untit testing

//Bootstrap
//react_Bootstrap
//Material-UI
//Materialize