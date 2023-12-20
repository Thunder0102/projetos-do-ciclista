import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC4wFtXTQ0rUN_FW1i-jH_aDC6JjXwr_4k",
  authDomain: "ciclista-eletronico-288c9.firebaseapp.com",
  projectId: "ciclista-eletronico-288c9",
  storageBucket: "ciclista-eletronico-288c9.appspot.com",
  messagingSenderId: "627006483502",
  appId: "1:627006483502:web:624698f8e39817f6f483bf"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
