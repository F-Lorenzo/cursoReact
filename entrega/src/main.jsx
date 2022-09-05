import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5_xXTbuaTVZSPraP1ceTmidg9S8Y2EQI",
  authDomain: "carshop-caea2.firebaseapp.com",
  projectId: "carshop-caea2",
  storageBucket: "carshop-caea2.appspot.com",
  messagingSenderId: "693148410500",
  appId: "1:693148410500:web:90d994f07da05bc130d8d1"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
