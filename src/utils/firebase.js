import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyBHSlEFtZHbeZZ3J9MXDJz7JrLU4IG2ELM",
  authDomain: "twitter-clone-db-5259a.firebaseapp.com",
  projectId: "twitter-clone-db-5259a",
  storageBucket: "twitter-clone-db-5259a.appspot.com",
  messagingSenderId: "346330397392",
  appId: "1:346330397392:web:7a55846e158982d74ffcd5",
  measurementId: "G-QRMB9V39T8",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;