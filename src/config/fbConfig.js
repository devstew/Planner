import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBHhCUtx_vUfvInEGo6eIxW1Dd-xupXWJg",
    authDomain: "planner-66164.firebaseapp.com",
    databaseURL: "https://planner-66164.firebaseio.com",
    projectId: "planner-66164",
    storageBucket: "planner-66164.appspot.com",
    messagingSenderId: "16349679101"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;