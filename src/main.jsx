import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWxUzpwbApQCthHHyKD_xj718JOxbp7sQ",
  authDomain: "prueba-react-bd268.firebaseapp.com",
  projectId: "prueba-react-bd268",
  storageBucket: "prueba-react-bd268.appspot.com",
  messagingSenderId: "20200516802",
  appId: "1:20200516802:web:e6ccbb1ddf5f2eb5825f5b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
