import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCeXLdLSHU55T9c-yzB-ySXeopg_Hn-66E",
    authDomain: "quiz-app-tlou.firebaseapp.com",
    databaseURL: "https://quiz-app-tlou.firebaseio.com",
    projectId: "quiz-app-tlou",
    storageBucket: "quiz-app-tlou.appspot.com",
    messagingSenderId: "869503758350",
    appId: "1:869503758350:web:85272f8a40667f0b424c5f"
  };

  firebase.initializeApp(firebaseConfig);
  
class Firebase {
  constructor() {
      
      this.auth = firebase.auth();
      this.db = firebase.firestore();
      this.storage = firebase.storage();
  }
 user = uid => this.db.doc(`users/${uid}`);
}

export default Firebase;