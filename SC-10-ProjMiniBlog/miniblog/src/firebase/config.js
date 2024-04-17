
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCs7Z_GnlZSkJ1Ji8GifS0woTmBlKPj2B0",
  authDomain: "miniblog-3404a.firebaseapp.com",
  projectId: "miniblog-3404a",
  storageBucket: "miniblog-3404a.appspot.com",
  messagingSenderId: "79591998476",
  appId: "1:79591998476:web:d5e9788a101595a1841a29"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }