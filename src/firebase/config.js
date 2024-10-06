import  firebase  from "firebase";
import 'firebase/auth'
import'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzNVMP5iTfG16Svn1O6DTaTp_LLkzefK4",
    authDomain: "olx-clone-fee08.firebaseapp.com",
    projectId: "olx-clone-fee08",
    storageBucket: "olx-clone-fee08.appspot.com",
    messagingSenderId: "685802837280",
    appId: "1:685802837280:web:54db474a0bee6dcb19b345",
    measurementId: "G-P1WMZF5JH5"
  };


  export default firebase.initializeApp(firebaseConfig)