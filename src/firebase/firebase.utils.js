import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyAzY3ySR_SCB752U_rQDfRBRIaZ6fm-2f8",
    authDomain: "crwn-db-9e114.firebaseapp.com",
    databaseURL: "https://crwn-db-9e114.firebaseio.com",
    projectId: "crwn-db-9e114",
    storageBucket: "crwn-db-9e114.appspot.com",
    messagingSenderId: "263941009063",
    appId: "1:263941009063:web:69e9d441dad97b260f3582",
    measurementId: "G-BNMZXWYY3J"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user',error.message);

      }
    }

    return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
