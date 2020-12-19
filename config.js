import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyB4_N8hPZxGSS-743i-cwos3RDPi6kW8n0",
  authDomain: "bed-time-stories-e6016.firebaseapp.com",
  projectId: "bed-time-stories-e6016",
  storageBucket: "bed-time-stories-e6016.appspot.com",
  messagingSenderId: "409235371026",
  appId: "1:409235371026:web:9ff9420ce6a5f43cf494cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
