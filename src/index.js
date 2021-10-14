import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRAZyHIGpQxnOrPkZpj0EgpEIdU4IG6wM",
  authDomain: "firestore-formik.firebaseapp.com",
  projectId: "firestore-formik",
  storageBucket: "firestore-formik.appspot.com",
  messagingSenderId: "267043142570",
  appId: "1:267043142570:web:406f4208ca9fb7d737c9d3"
};

const app = initializeApp(firebaseConfig)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
