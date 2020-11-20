import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCeXLdLSHU55T9c-yzB-ySXeopg_Hn-66E",
    authDomain: "quiz-app-tlou.firebaseapp.com",
    databaseURL: "https://quiz-app-tlou.firebaseio.com",
    projectId: "quiz-app-tlou",
    storageBucket: "quiz-app-tlou.appspot.com",
    messagingSenderId: "869503758350",
    appId: "1:869503758350:web:85272f8a40667f0b424c5f"
  };

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth();
        this.db = app.firestore();
    }

    //inscription
    signupUser = (email,  password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

    //connexion
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

    //deconnexion
    signoutUser = () => this.auth.signOut();

    user = uid => this.db.doc(`users/${uid}`);



}

export default Firebase;