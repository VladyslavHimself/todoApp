import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c",
    authDomain: "todoapp-b6c76.firebaseapp.com",
    databaseURL: "https://todoapp-b6c76-default-rtdb.firebaseio.com",
    projectId: "todoapp-b6c76",
    storageBucket: "todoapp-b6c76.appspot.com",
    messagingSenderId: "1093447404387",
    appId: "1:1093447404387:web:2f66ee6421868de995e156",
    measurementId: "G-X0W4P2EFRZ"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
