import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrzCs5lBha1z5RM71j2JFkEQZ59yctawU",
  authDomain: "ecommerce-react-14490.firebaseapp.com",
  projectId: "ecommerce-react-14490",
  storageBucket: "ecommerce-react-14490.appspot.com",
  messagingSenderId: "597036270228",
  appId: "1:597036270228:web:cb1c7cba41ed4718a5aa81"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)