import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqwKKv_ds9TZkRwIRpgDYKqPv9rJh3Xcg",
    authDomain: "tinder-clone-842aa.firebaseapp.com",
    databaseURL: "https://tinder-clone-842aa.firebaseio.com",
    projectId: "tinder-clone-842aa",
    storageBucket: "tinder-clone-842aa.appspot.com",
    messagingSenderId: "353774823159",
    appId: "1:353774823159:web:f7c762659c589366e255f2",
    measurementId: "G-D1MJYNZTWJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;