import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyC7P4ZS6Ijhn91QCcDyrZkuBRM-Y8fZoUo",
  authDomain: "projeto71-84eeb.firebaseapp.com",
  projectId: "projeto71-84eeb",
  storageBucket: "projeto71-84eeb.appspot.com",
  messagingSenderId: "496631027896",
  appId: "1:496631027896:web:f0725e8efdb9c42351fc4d"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
