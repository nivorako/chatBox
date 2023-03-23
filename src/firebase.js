import { initializeApp } from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebase = initializeApp({
    apiKey: "AIzaSyDmnfiC7931POnG65P_AomXbB_OiMr26Y4",

    authDomain: "chatbox-467ca.firebaseapp.com",
  
    projectId: "chatbox-467ca",
  
    storageBucket: "chatbox-467ca.appspot.com",
  
    messagingSenderId: "366500452275",
  
    appId: "1:366500452275:web:3fab45a10da1d65fea9dc6"
})

const db = getFirestore(firebase)

const auth = getAuth(firebase)

const provider = new GoogleAuthProvider()

export { db, auth, provider }