import firebase from "firebase/app";
import "firebase/storage";

let firebaseConfig = {
    apiKey: "AIzaSyAt114Nel9kY9qIafiSMlLVth1rLt_ztjc",
    authDomain: "social-network-f4951.firebaseapp.com",
    databaseURL: "https://social-network-f4951.firebaseio.com",
    projectId: "social-network-f4951",
    storageBucket: "social-network-f4951.appspot.com",
    messagingSenderId: "1096639030350",
    appId: "1:1096639030350:web:352903a46bce76a5688f1f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
